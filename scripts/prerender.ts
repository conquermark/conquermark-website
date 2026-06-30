/**
 * Build-time prerendering (SSG).
 *
 * The site is a client-rendered SPA (wouter + react-helmet-style SEO), so the
 * server otherwise ships an empty <div id="root"></div> to crawlers. This script
 * runs AFTER `vite build`: it serves the built output, drives a real headless
 * browser over every route, lets React + the SEO component populate the DOM/head,
 * and writes the fully-rendered HTML to dist/public/<route>/index.html.
 *
 * The production server (server/index.ts) then serves these static, content-rich
 * files directly — so Googlebot and AI crawlers get real content + meta tags in
 * the initial HTTP response.
 *
 * Run via: tsx scripts/prerender.ts   (tsx lets us import the shared route list.)
 */
import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { validRoutes } from "../shared/routes";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");

// Routes we deliberately do NOT prerender:
// - /admin: noindex, requires auth, fetches private data
// - /pricing, /blog, /resources: client-side redirects -> handled as server 301s instead
// (/404 IS prerendered: the server serves it as the NotFound body for unknown URLs.)
const EXCLUDE = new Set(["/admin", "/pricing", "/blog", "/resources"]);

const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://conquermark.com";

// Pages that should NOT appear in the sitemap (noindex / redirects / utility).
const SITEMAP_EXCLUDE = new Set(["/admin", "/404", "/pricing", "/blog", "/resources", "/thank-you"]);

function buildSitemap(routes: readonly string[], lastmod: string): string {
  const urls = routes
    .filter((r) => !SITEMAP_EXCLUDE.has(r))
    .sort()
    .map((r) => {
      const depth = r === "/" ? 0 : r.split("/").filter(Boolean).length;
      const priority = r === "/" ? "1.0" : depth <= 1 ? "0.8" : "0.6";
      const changefreq = r === "/" ? "weekly" : "monthly";
      return `  <url>\n    <loc>${SITE_ORIGIN}${r === "/" ? "/" : r}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function findBrowser(): string {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  const candidates = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  throw new Error("No Chrome/Edge executable found. Set PUPPETEER_EXECUTABLE_PATH.");
}

async function main() {
  if (!fs.existsSync(path.join(DIST, "index.html"))) {
    throw new Error(`Build output not found at ${DIST}. Run \`vite build\` first.`);
  }

  const routes = validRoutes.filter((r) => !EXCLUDE.has(r));

  // Serve the built SPA with a history fallback so every route boots the app.
  const app = express();
  app.use(express.static(DIST, { index: false }));
  app.get("*", (_req, res) => res.sendFile(path.join(DIST, "index.html")));
  const server = await new Promise<import("http").Server>((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });
  const port = (server.address() as import("net").AddressInfo).port;
  const base = `http://127.0.0.1:${port}`;

  const executablePath = findBrowser();
  console.log(`[prerender] browser: ${executablePath}`);
  console.log(`[prerender] rendering ${routes.length} routes...`);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let ok = 0;
  const failures: string[] = [];

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      try {
        await page.goto(`${base}${route}`, { waitUntil: "networkidle0", timeout: 45_000 });
        // Wait until React has mounted into #root, then a short settle for SEO effects.
        await page.waitForFunction(
          "document.querySelector('#root') && document.querySelector('#root').children.length > 0",
          { timeout: 15_000 },
        );
        await new Promise((r) => setTimeout(r, 350));

        const html = await page.content();
        const outDir = route === "/" ? DIST : path.join(DIST, route);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
        ok++;
        console.log(`[prerender] ✓ ${route}`);
      } catch (err) {
        failures.push(route);
        console.error(`[prerender] ✗ ${route} — ${(err as Error).message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  // Regenerate sitemap.xml from the routes we just prerendered so it can't drift.
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemap = buildSitemap(validRoutes, lastmod);
  const sitemapTargets = [
    path.join(DIST, "sitemap.xml"), // deployed/served output
    path.resolve(__dirname, "..", "client", "public", "sitemap.xml"), // source of truth
  ];
  for (const target of sitemapTargets) {
    try {
      fs.writeFileSync(target, sitemap, "utf-8");
    } catch (err) {
      console.error(`[prerender] could not write sitemap to ${target}: ${(err as Error).message}`);
    }
  }
  const sitemapCount = validRoutes.filter((r) => !SITEMAP_EXCLUDE.has(r)).length;
  console.log(`[prerender] sitemap.xml regenerated with ${sitemapCount} URLs.`);

  console.log(`[prerender] done: ${ok}/${routes.length} rendered.`);
  if (failures.length) {
    console.error(`[prerender] FAILED routes (${failures.length}): ${failures.join(", ")}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("[prerender] fatal:", err);
  process.exit(1);
});
