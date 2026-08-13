from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
source = (root / 'index.html').read_text()
body = re.search(r'<body>(.*)</body>', source, re.S).group(1).strip()
body = body.replace('class=', 'className=')
body = body.replace('aria-label=', 'aria-label=')
body = body.replace('<script src="/app.js"></script>', '')
page = '''"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = document.querySelector<HTMLElement>(".desktop-nav");
    if (!toggle || !nav) return;

    const handleToggle = () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("mobile-open", !open);
    };
    toggle.addEventListener("click", handleToggle);
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("mobile-open");
    }));
    return () => toggle.removeEventListener("click", handleToggle);
  }, []);

  return (
    <>
      BODY_MARKUP
    </>
  );
}
'''
page = page.replace('BODY_MARKUP', body)
(root / 'app').mkdir(exist_ok=True)
(root / 'app' / 'page.tsx').write_text(page)
(root / 'app' / 'globals.css').write_text((root / 'styles.css').read_text())
