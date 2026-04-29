import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { persistSubmissionDetails } from "./admin";

type SubmissionData = Record<string, string | number | boolean | null | undefined>;

export type FormSubmissionPayload = {
  formType?: string;
  data?: SubmissionData;
  recaptchaToken?: string;
  page?: string;
};

const OWNER_EMAIL = process.env.OWNER_EMAIL || "hello@conquermark.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@conquermark.com";
const SUBMISSIONS_DIR = path.resolve(process.cwd(), "form-submissions");
const SUBMISSIONS_CSV = path.join(SUBMISSIONS_DIR, "submissions.csv");
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;
const serverRecentSubmissions = new Map<string, number>();

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function csvCell(value: unknown) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function labelize(key: string) {
  return key.replace(/([A-Z])/g, " $1").replace(/[_-]+/g, " ").trim();
}

function pickFirst(data: SubmissionData, keys: string[]) {
  for (const key of keys) {
    const value = data[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

function appendSubmissionList(formType: string, data: SubmissionData, page?: string) {
  fs.mkdirSync(SUBMISSIONS_DIR, { recursive: true });

  if (!fs.existsSync(SUBMISSIONS_CSV)) {
    fs.writeFileSync(SUBMISSIONS_CSV, "timestamp,form,name,email,page\n", "utf-8");
  }

  const name = pickFirst(data, ["name", "fullName", "firstName", "contactName"]);
  const email = pickFirst(data, ["email", "workEmail", "businessEmail"]);
  const row = [new Date().toISOString(), formType, name, email, page || ""].map(csvCell).join(",");
  fs.appendFileSync(SUBMISSIONS_CSV, `${row}\n`, "utf-8");
}

async function verifyRecaptcha(token?: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { success: true, score: 1 };
  if (!token) return { success: false, score: 0 };

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  return response.json() as Promise<{ success: boolean; score?: number }>;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: Number(process.env.MAILTRAP_PORT || 587),
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });
}

async function sendOwnerEmail(formType: string, data: SubmissionData, page?: string) {
  const rows = (Object.entries({ form: formType, page, ...data }) as Array<[string, unknown]>)
    .filter(([, value]) => value !== "" && value !== null && value !== undefined && value !== false)
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;font-weight:600;color:#555;width:160px;text-transform:capitalize;">${escapeHtml(labelize(key))}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;color:#222;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  await createTransporter().sendMail({
    from: FROM_EMAIL,
    to: OWNER_EMAIL,
    replyTo: pickFirst(data, ["email", "workEmail", "businessEmail"]) || undefined,
    subject: `New ${formType} - Conquermark`,
    html: `
      <!doctype html>
      <html>
        <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:24px auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.08);">
            <tr>
              <td style="background:#111827;padding:24px 30px;">
                <h1 style="margin:0;color:#fff;font-size:22px;">Conquermark Form Submission</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:26px 30px;">
                <h2 style="margin:0 0 18px;color:#111827;font-size:20px;border-bottom:2px solid #e36a2e;padding-bottom:10px;">${escapeHtml(formType)}</h2>
                <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:6px;border-collapse:collapse;">${rows}</table>
              </td>
            </tr>
            <tr>
              <td style="background:#f8fafc;padding:14px 30px;color:#64748b;font-size:12px;text-align:center;">
                Sent from Conquermark Website | ${escapeHtml(new Date().toLocaleString())}
              </td>
            </tr>
          </table>
        </body>
      </html>`,
  });
}

export async function handleFormSubmission(payload: FormSubmissionPayload) {
  const formType = String(payload.formType || "Website Form");
  const data = payload.data && typeof payload.data === "object" ? payload.data : {};
  const page = payload.page;
  const email = pickFirst(data, ["email", "workEmail", "businessEmail"]).toLowerCase();

  if (email) {
    const key = `${formType}:${email}`;
    const now = Date.now();
    const lastSubmittedAt = serverRecentSubmissions.get(key) || 0;
    if (now - lastSubmittedAt < DUPLICATE_WINDOW_MS) {
      return { status: 429, body: { success: false, message: "This form was just submitted. Please wait before trying again." } };
    }
    serverRecentSubmissions.set(key, now);
  }

  const recaptchaResult = await verifyRecaptcha(payload.recaptchaToken);
  if (!recaptchaResult.success || (typeof recaptchaResult.score === "number" && recaptchaResult.score < 0.5)) {
    return { status: 400, body: { success: false, message: "reCAPTCHA verification failed" } };
  }

  appendSubmissionList(formType, data, page);
  persistSubmissionDetails(formType, page, data);
  void sendOwnerEmail(formType, data, page).catch((error) => {
    console.error("Background email send failed:", error);
  });

  return { status: 200, body: { success: true, message: "Request received successfully" } };
}
