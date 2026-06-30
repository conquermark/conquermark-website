#!/usr/bin/env bash
#
# Production deploy for conquermark-website (VPS via SSH).
#
# Run this ON THE SERVER, inside the repo dir, after code is pushed:
#   ./deploy.sh
#
# It pulls the latest code, installs deps, runs the full build (which INCLUDES
# the SSG prerender step — that needs a real Chrome/Chromium), then restarts the
# Node server under PM2 so it survives crashes/reboots.
set -euo pipefail
cd "$(dirname "$0")"

# --- Chrome/Chromium for the prerender step (scripts/prerender.ts) ---
# Point this at the browser installed on the server. Without it, `vite build`
# fails at prerender with "No Chrome/Edge executable found".
: "${PUPPETEER_EXECUTABLE_PATH:=$(command -v google-chrome || command -v chromium-browser || command -v chromium || true)}"
export PUPPETEER_EXECUTABLE_PATH
if [ -z "${PUPPETEER_EXECUTABLE_PATH}" ]; then
  echo "ERROR: No Chrome/Chromium found. Install it or set PUPPETEER_EXECUTABLE_PATH." >&2
  exit 1
fi
echo "[deploy] using browser: ${PUPPETEER_EXECUTABLE_PATH}"

# Canonical origin used by the prerendered sitemap.xml.
export SITE_ORIGIN="${SITE_ORIGIN:-https://conquermark.com}"

echo "[deploy] pulling latest code..."
git pull --ff-only

echo "[deploy] installing dependencies..."
pnpm install --frozen-lockfile

echo "[deploy] building (vite + prerender + server bundle)..."
pnpm run build

echo "[deploy] (re)starting server under PM2..."
export NODE_ENV=production
export PORT="${PORT:-3000}"
pm2 restart conquermark --update-env \
  || pm2 start dist/index.js --name conquermark --update-env
pm2 save

echo "[deploy] done. Server is live on port ${PORT}."
