import express from "express";
import fs from "fs";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import {
  adminConfigured,
  adminCookie,
  adminLogin,
  adminLogout,
  clearAdminCookie,
  deleteAdminSubmissions,
  getAdminSubmissions,
  isAdminAuthenticated,
} from "./admin";
import { handleFormSubmission } from "./formSubmissions";
import { isValidAppRoute } from "../shared/routes";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "100kb" }));

  app.post("/api/send-email", async (req, res) => {
    try {
      const result = await handleFormSubmission(req.body);
      res.status(result.status).json(result.body);
    } catch (error) {
      console.error("Form submission error:", error);
      res.status(500).json({ success: false, message: "Failed to process request" });
    }
  });

  app.post("/api/admin/login", (req, res) => {
    const username = String(req.body?.username || "").trim();
    const password = String(req.body?.password || "");

    const result = adminLogin(username, password);
    if (!result.ok) {
      return res.status(401).json({ success: false, message: result.reason });
    }

    res.setHeader("Set-Cookie", adminCookie(result.token));
    return res.json({
      success: true,
      configured: adminConfigured(),
    });
  });

  app.post("/api/admin/logout", (req, res) => {
    adminLogout(req.headers.cookie);
    res.setHeader("Set-Cookie", clearAdminCookie());
    return res.json({ success: true });
  });

  app.get("/api/admin/me", (req, res) => {
    return res.json({
      authenticated: isAdminAuthenticated(req.headers.cookie),
      configured: adminConfigured(),
    });
  });

  app.get("/api/admin/submissions", (req, res) => {
    if (!isAdminAuthenticated(req.headers.cookie)) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const requestedLimit = Number(req.query.limit || 500);
    const limit = Number.isFinite(requestedLimit) ? Math.max(1, Math.min(2000, requestedLimit)) : 500;
    return res.json({
      success: true,
      submissions: getAdminSubmissions(limit),
    });
  });

  app.post("/api/admin/submissions/delete", (req, res) => {
    if (!isAdminAuthenticated(req.headers.cookie)) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const rawIds = Array.isArray(req.body?.ids) ? req.body.ids : [];
    const ids = rawIds
      .map((value: unknown) => (typeof value === "string" ? value.trim() : ""))
      .filter((value: string) => value.length > 0);

    if (ids.length === 0) {
      return res.status(400).json({ success: false, message: "No submission ids provided." });
    }

    const deleted = deleteAdminSubmissions(ids);
    return res.json({ success: true, deleted });
  });

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Serve real asset files (js/css/images/pdf/etc.).
  // - index:false    -> don't auto-serve index.html for directory requests
  // - redirect:false -> don't 301 /path -> /path/ (prerendered route dirs would
  //                     otherwise trigger trailing-slash redirects)
  // HTML/route serving is handled explicitly below.
  app.use(express.static(staticPath, { index: false, redirect: false }));

  // Permanent redirects for removed pages (real 301s instead of client-side
  // redirects, so link equity transfers and crawlers follow cleanly).
  const permanentRedirects: Record<string, string> = {
    "/pricing": "/contact",
    "/blog": "/case-studies",
    "/resources": "/contact",
  };
  app.get(Object.keys(permanentRedirects), (req, res) => {
    res.redirect(301, permanentRedirects[req.path]);
  });

  // Serve /admin with explicit noindex header (SEO-safe). Not prerendered.
  app.get("/admin*", (_req, res) => {
    res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const shellPath = path.join(staticPath, "index.html");

  // Route handling:
  // - Unknown URL  -> HTTP 404 (avoids "soft 404s" that waste crawl budget)
  // - Known route  -> serve the prerendered, content-rich HTML if it exists
  //                   (built by scripts/prerender.ts), otherwise the SPA shell.
  // Either way the SPA hydrates client-side; the prerendered HTML just gives
  // crawlers real content + meta tags in the initial response.
  const notFoundPath = path.join(staticPath, "404", "index.html");
  app.get("*", (req, res) => {
    if (!isValidAppRoute(req.path)) {
      // Serve the prerendered NotFound page (real content) with a 404 status.
      return res.status(404).sendFile(fs.existsSync(notFoundPath) ? notFoundPath : shellPath);
    }
    const prerendered =
      req.path === "/" ? shellPath : path.join(staticPath, req.path, "index.html");
    if (fs.existsSync(prerendered)) {
      return res.status(200).sendFile(prerendered);
    }
    return res.status(200).sendFile(shellPath);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
