import express from "express";
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
  getAdminSubmissions,
  isAdminAuthenticated,
} from "./admin";
import { handleFormSubmission } from "./formSubmissions";

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

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Serve /admin with explicit noindex header (SEO-safe)
  app.get("/admin*", (_req, res) => {
    res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
    res.sendFile(path.join(staticPath, "index.html"));
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
