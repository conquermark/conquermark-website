import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

type RawSubmissionData = Record<string, unknown>;

type StoredSubmission = {
  timestamp: string;
  formType: string;
  page: string;
  name: string;
  email: string;
  data: RawSubmissionData;
};

const SUBMISSIONS_DIR = path.resolve(process.cwd(), "form-submissions");
const SUBMISSIONS_NDJSON = path.join(SUBMISSIONS_DIR, "submissions.ndjson");
const ADMIN_COOKIE_NAME = "cm_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12; // 12 hours
const SESSION_TTL_MS = SESSION_MAX_AGE_SECONDS * 1000;

const sessions = new Map<string, number>();

function readEnvCredential(name: "ADMIN_USERNAME" | "ADMIN_PASSWORD") {
  return (process.env[name] || "").trim();
}

function parseCookies(headerValue: string | undefined) {
  const cookies: Record<string, string> = {};
  if (!headerValue) return cookies;

  for (const part of headerValue.split(";")) {
    const [rawKey, ...rest] = part.trim().split("=");
    if (!rawKey || rest.length === 0) continue;
    cookies[rawKey] = decodeURIComponent(rest.join("="));
  }
  return cookies;
}

function constantTimeEqual(a: string, b: string) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

function cleanupExpiredSessions() {
  const now = Date.now();
  for (const [token, expiry] of Array.from(sessions.entries())) {
    if (expiry <= now) sessions.delete(token);
  }
}

export function adminConfigured() {
  return Boolean(readEnvCredential("ADMIN_USERNAME") && readEnvCredential("ADMIN_PASSWORD"));
}

export function adminLogin(username: string, password: string) {
  const expectedUsername = readEnvCredential("ADMIN_USERNAME");
  const expectedPassword = readEnvCredential("ADMIN_PASSWORD");

  if (!expectedUsername || !expectedPassword) {
    return { ok: false as const, reason: "Admin credentials are not configured on server." };
  }

  const usernameOk = constantTimeEqual(username, expectedUsername);
  const passwordOk = constantTimeEqual(password, expectedPassword);
  if (!usernameOk || !passwordOk) {
    return { ok: false as const, reason: "Invalid username or password." };
  }

  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, Date.now() + SESSION_TTL_MS);
  return { ok: true as const, token };
}

export function adminCookie(token: string) {
  return `${ADMIN_COOKIE_NAME}=${encodeURIComponent(token)}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${SESSION_MAX_AGE_SECONDS}`;
}

export function clearAdminCookie() {
  return `${ADMIN_COOKIE_NAME}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0`;
}

export function isAdminAuthenticated(cookieHeader: string | undefined) {
  cleanupExpiredSessions();
  const token = parseCookies(cookieHeader)[ADMIN_COOKIE_NAME];
  if (!token) return false;
  const expiry = sessions.get(token);
  if (!expiry) return false;
  if (expiry <= Date.now()) {
    sessions.delete(token);
    return false;
  }
  return true;
}

export function adminLogout(cookieHeader: string | undefined) {
  const token = parseCookies(cookieHeader)[ADMIN_COOKIE_NAME];
  if (token) {
    sessions.delete(token);
  }
}

export function getAdminSubmissions(limit = 500) {
  if (!fs.existsSync(SUBMISSIONS_NDJSON)) return [] as StoredSubmission[];

  const lines = fs.readFileSync(SUBMISSIONS_NDJSON, "utf-8").split("\n").filter(Boolean);
  const parsed: StoredSubmission[] = [];

  for (const line of lines) {
    try {
      const row = JSON.parse(line) as StoredSubmission;
      parsed.push(row);
    } catch {
      // Ignore malformed lines
    }
  }

  return parsed.reverse().slice(0, limit);
}

function firstNonEmpty(data: RawSubmissionData, keys: string[]) {
  for (const key of keys) {
    const value = data[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

export function persistSubmissionDetails(formType: string, page: string | undefined, data: RawSubmissionData) {
  fs.mkdirSync(SUBMISSIONS_DIR, { recursive: true });

  const name = firstNonEmpty(data, ["name", "fullName", "firstName", "contactName"]);
  const email = firstNonEmpty(data, ["email", "workEmail", "businessEmail"]);

  const entry: StoredSubmission = {
    timestamp: new Date().toISOString(),
    formType,
    page: page || "",
    name,
    email,
    data,
  };

  fs.appendFileSync(SUBMISSIONS_NDJSON, `${JSON.stringify(entry)}\n`, "utf-8");
}
