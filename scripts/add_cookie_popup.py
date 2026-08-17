from pathlib import Path

path = Path('/home/ubuntu/conquermark-website/app/page.tsx')
text = path.read_text()
text = text.replace('import { useEffect } from "react";', 'import { useEffect, useState } from "react";')
old_effect = '''  useEffect(() => {
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
  }, []);'''
new_effect = '''  const [showCookieNotice, setShowCookieNotice] = useState(false);

  useEffect(() => {
    const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = document.querySelector<HTMLElement>(".desktop-nav");
    const savedConsent = window.localStorage.getItem("clickmoat-cookie-consent");
    if (!savedConsent) setShowCookieNotice(true);
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

  const saveCookieChoice = (choice: "accepted" | "rejected") => {
    window.localStorage.setItem("clickmoat-cookie-consent", choice);
    setShowCookieNotice(false);
  };'''
if old_effect not in text:
    raise SystemExit('effect block not found')
text = text.replace(old_effect, new_effect)
start = text.index('    <section className="privacy-section" id="privacy">')
end = text.index('\n\n    <section className="cta-section"', start)
text = text[:start] + text[end:]
text = text.replace('<a href="#privacy">Cookies & privacy</a>', '<button className="footer-cookie-link" onClick={() => setShowCookieNotice(true)}>Cookie settings</button>')
footer_start = text.index('  <footer className="site-footer">')
footer_end = text.index('\n  \n    </>', footer_start)
footer = text[footer_start:footer_end]
popup = '''\n\n    {showCookieNotice && <aside className="cookie-notice" role="dialog" aria-label="Cookie consent" aria-describedby="cookie-notice-copy"><div className="cookie-notice-copy"><strong>We use cookies</strong><p id="cookie-notice-copy">We use cookies and other technologies to enhance your browsing experience, analyze usage, research, and deliver personalized advertising. To manage your consent and tracking preferences, please click here. For more information on how we collect, use, and protect your personal data, please review our <a href="/privacy-policy">privacy policy</a>.</p></div><div className="cookie-notice-actions"><button className="cookie-reject" onClick={() => saveCookieChoice("rejected")}>Reject non-essential</button><button className="cookie-accept" onClick={() => saveCookieChoice("accepted")}>Accept all</button></div></aside>}'''
text = text[:footer_start] + footer + popup + text[footer_end:]
path.write_text(text)
