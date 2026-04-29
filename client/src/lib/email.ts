const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

type SubmissionData = Record<string, string | number | boolean | null | undefined>;

const submitLocks = new Set<string>();
const recentSubmissions = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;
const RECENT_SUBMISSIONS_KEY = "conquermark_recent_form_submissions";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getFirstValue(data: SubmissionData, keys: string[]) {
  for (const key of keys) {
    const value = stringValue(data[key]);
    if (value) return value;
  }
  return "";
}

function validateSubmission(data: SubmissionData) {
  const email = getFirstValue(data, ["email", "workEmail", "businessEmail"]);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  for (const key of ["name", "fullName", "firstName", "lastName"]) {
    if (Object.prototype.hasOwnProperty.call(data, key) && !stringValue(data[key])) {
      throw new Error("Please fill in all required fields.");
    }
  }
}

function readRecentSubmissionsFromStorage() {
  if (typeof window === "undefined") return;
  const raw = window.localStorage.getItem(RECENT_SUBMISSIONS_KEY);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw) as Record<string, number>;
    for (const [key, timestamp] of Object.entries(parsed)) {
      if (Date.now() - Number(timestamp) < DUPLICATE_WINDOW_MS) {
        recentSubmissions.set(key, Number(timestamp));
      }
    }
  } catch {
    window.localStorage.removeItem(RECENT_SUBMISSIONS_KEY);
  }
}

function writeRecentSubmissionsToStorage() {
  if (typeof window === "undefined") return;

  const current: Record<string, number> = {};
  for (const [key, timestamp] of Array.from(recentSubmissions.entries())) {
    if (Date.now() - timestamp < DUPLICATE_WINDOW_MS) {
      current[key] = timestamp;
    }
  }
  window.localStorage.setItem(RECENT_SUBMISSIONS_KEY, JSON.stringify(current));
}

async function getRecaptchaToken(action: string): Promise<string> {
  if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return "";

  return new Promise((resolve) => {
    window.grecaptcha?.ready(async () => {
      try {
        resolve(await window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action }));
      } catch {
        resolve("");
      }
    });
  });
}

export async function sendEmail(formType: string, data: SubmissionData) {
  validateSubmission(data);
  readRecentSubmissionsFromStorage();

  const email = getFirstValue(data, ["email", "workEmail", "businessEmail"]);
  const duplicateKey = `${formType}:${email}`;
  const now = Date.now();
  const lastSubmittedAt = recentSubmissions.get(duplicateKey) || 0;

  if (submitLocks.has(duplicateKey) || now - lastSubmittedAt < DUPLICATE_WINDOW_MS) {
    throw new Error("This form was just submitted. Please wait a moment before trying again.");
  }

  submitLocks.add(duplicateKey);

  const recaptchaToken = await getRecaptchaToken("submit_form");

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType,
        data,
        page: window.location.pathname,
        recaptchaToken,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Failed to submit form");
    }

    recentSubmissions.set(duplicateKey, Date.now());
    writeRecentSubmissionsToStorage();
    return response.json();
  } finally {
    submitLocks.delete(duplicateKey);
  }
}
