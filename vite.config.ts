import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import {
  adminConfigured,
  adminCookie,
  adminLogin,
  adminLogout,
  clearAdminCookie,
  getAdminSubmissions,
  isAdminAuthenticated,
} from "./server/admin";
import { handleFormSubmission } from "./server/formSubmissions";

dotenv.config();

// =============================================================================
// Manus Debug Collector - Vite Plugin
// Writes browser logs directly to files, trimmed when exceeding size limit
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB per log file
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6); // Trim to 60% to avoid constant re-trimming

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
      return;
    }

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const keptLines: string[] = [];
    let keptBytes = 0;

    // Keep newest lines (from end) that fit within 60% of maxSize
    const targetSize = TRIM_TARGET_BYTES;
    for (let i = lines.length - 1; i >= 0; i--) {
      const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
      if (keptBytes + lineBytes > targetSize) break;
      keptLines.unshift(lines[i]);
      keptBytes += lineBytes;
    }

    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch {
    /* ignore trim errors */
  }
}

function writeToLogFile(source: LogSource, entries: unknown[]) {
  if (entries.length === 0) return;

  ensureLogDir();
  const logPath = path.join(LOG_DIR, `${source}.log`);

  // Format entries with timestamps
  const lines = entries.map((entry) => {
    const ts = new Date().toISOString();
    return `[${ts}] ${JSON.stringify(entry)}`;
  });

  // Append to log file
  fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");

  // Trim if exceeds max size
  trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

/**
 * Vite plugin to collect browser debug logs
 * - POST /__manus__/logs: Browser sends logs, written directly to files
 * - Files: browserConsole.log, networkRequests.log, sessionReplay.log
 * - Auto-trimmed when exceeding 1MB (keeps newest entries)
 */
function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") {
        return html;
      }
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              src: "/__manus__/debug-collector.js",
              defer: true,
            },
            injectTo: "head",
          },
        ],
      };
    },

    configureServer(server: ViteDevServer) {
      // POST /__manus__/logs: Browser sends logs (written directly to files)
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") {
          return next();
        }

        const handlePayload = (payload: any) => {
          // Write logs directly to files
          if (payload.consoleLogs?.length > 0) {
            writeToLogFile("browserConsole", payload.consoleLogs);
          }
          if (payload.networkRequests?.length > 0) {
            writeToLogFile("networkRequests", payload.networkRequests);
          }
          if (payload.sessionEvents?.length > 0) {
            writeToLogFile("sessionReplay", payload.sessionEvents);
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true }));
        };

        const reqBody = (req as { body?: unknown }).body;
        if (reqBody && typeof reqBody === "object") {
          try {
            handlePayload(reqBody);
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
          return;
        }

        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const payload = JSON.parse(body);
            handlePayload(payload);
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });
    },
  };
}

function vitePluginFormSubmissions(): Plugin {
  const parseJsonBody = async (req: any) => {
    const existingBody = (req as { body?: unknown }).body;
    if (existingBody && typeof existingBody === "object") {
      return existingBody;
    }

    const rawBody = await new Promise<string>((resolve) => {
      let body = "";
      req.on("data", (chunk: Buffer) => {
        body += chunk.toString();
      });
      req.on("end", () => resolve(body));
    });

    return JSON.parse(rawBody || "{}");
  };

  const sendJson = (res: any, status: number, payload: unknown, headers?: Record<string, string>) => {
    res.writeHead(status, { "Content-Type": "application/json", ...(headers || {}) });
    res.end(JSON.stringify(payload));
  };

  return {
    name: "conquermark-form-submissions",
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/admin", (_req, res, next) => {
        res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
        next();
      });

      server.middlewares.use("/api/send-email", (req, res, next) => {
        if (req.method !== "POST") return next();
        (async () => {
          try {
            const result = await handleFormSubmission(await parseJsonBody(req));
            res.writeHead(result.status, { "Content-Type": "application/json" });
            res.end(JSON.stringify(result.body));
          } catch (error) {
            console.error("Form submission error:", error);
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, message: "Failed to process request" }));
          }
        })();
      });

      server.middlewares.use("/api/admin/login", async (req, res, next) => {
        if (req.method !== "POST") return next();
        try {
          const body = (await parseJsonBody(req)) as Record<string, unknown>;
          const username = String(body.username || "").trim();
          const password = String(body.password || "");
          const result = adminLogin(username, password);
          if (!result.ok) {
            return sendJson(res, 401, { success: false, message: result.reason });
          }
          return sendJson(
            res,
            200,
            { success: true, configured: adminConfigured() },
            { "Set-Cookie": adminCookie(result.token) },
          );
        } catch (error) {
          console.error("Admin login error:", error);
          return sendJson(res, 500, { success: false, message: "Failed to process request" });
        }
      });

      server.middlewares.use("/api/admin/logout", (req, res, next) => {
        if (req.method !== "POST") return next();
        adminLogout(req.headers.cookie);
        return sendJson(res, 200, { success: true }, { "Set-Cookie": clearAdminCookie() });
      });

      server.middlewares.use("/api/admin/me", (req, res, next) => {
        if (req.method !== "GET") return next();
        return sendJson(res, 200, {
          authenticated: isAdminAuthenticated(req.headers.cookie),
          configured: adminConfigured(),
        });
      });

      server.middlewares.use("/api/admin/submissions", (req, res, next) => {
        if (req.method !== "GET") return next();
        if (!isAdminAuthenticated(req.headers.cookie)) {
          return sendJson(res, 401, { success: false, message: "Unauthorized" });
        }

        const url = new URL(req.url || "", "http://localhost");
        const requestedLimit = Number(url.searchParams.get("limit") || 500);
        const limit = Number.isFinite(requestedLimit) ? Math.max(1, Math.min(2000, requestedLimit)) : 500;
        return sendJson(res, 200, { success: true, submissions: getAdminSubmissions(limit) });
      });
    },
  };
}

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime(), vitePluginFormSubmissions(), vitePluginManusDebugCollector()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
