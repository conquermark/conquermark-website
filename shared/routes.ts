// Canonical list of valid client-side routes.
//
// IMPORTANT: Keep this in sync with the <Route> definitions in client/src/App.tsx.
// The server uses this list to return a proper HTTP 404 status for unknown URLs
// (instead of a "soft 404" — HTTP 200 with an empty SPA shell), which is required
// for correct crawling/indexing by search engines.
//
// All current routes are static (no :params). If a dynamic route is ever added,
// extend `isValidAppRoute` below to pattern-match it.

export const validRoutes: readonly string[] = [
  "/",
  "/404",
  "/about",
  "/about/awards",
  "/about/careers",
  "/about/community-impact",
  "/about/conquermark-cares",
  "/about/contact-info",
  "/about/equality",
  "/about/history",
  "/about/our-approach",
  "/about/reviews",
  "/about/values",
  "/about/who-we-are",
  "/admin",
  "/advertising-audit",
  "/ai-audit",
  "/automation-audit",
  "/automation-services",
  "/automation/chatbot-whatsapp",
  "/automation/custom-api",
  "/automation/ecommerce",
  "/automation/education",
  "/automation/finance",
  "/automation/form-to-crm",
  "/automation/healthcare",
  "/automation/internal-workflows",
  "/automation/lead-capture",
  "/automation/make",
  "/automation/marketing",
  "/automation/n8n",
  "/automation/notifications",
  "/automation/order-sync",
  "/automation/pabbly",
  "/automation/reporting",
  "/automation/saas",
  "/automation/sales",
  "/automation/support",
  "/automation/zapier",
  "/blog",
  "/careers",
  "/case-studies",
  "/case-studies/app-launch",
  "/case-studies/ecommerce-growth",
  "/contact",
  "/content-audit",
  "/cookie-policy",
  "/digital-marketing",
  "/digital-marketing/advertising/enterprise-ppc",
  "/digital-marketing/advertising/enterprise-social",
  "/digital-marketing/advertising/local-services",
  "/digital-marketing/advertising/overview",
  "/digital-marketing/advertising/ppc",
  "/digital-marketing/advertising/programmatic",
  "/digital-marketing/advertising/social-media",
  "/digital-marketing/ai/agent-development",
  "/digital-marketing/ai/chatgpt",
  "/digital-marketing/ai/consulting",
  "/digital-marketing/ai/digital-marketing",
  "/digital-marketing/ai/enterprise-geo",
  "/digital-marketing/ai/gpt-integration",
  "/digital-marketing/ai/overview",
  "/digital-marketing/content/content-services",
  "/digital-marketing/content/copywriting",
  "/digital-marketing/content/ctv-ott",
  "/digital-marketing/content/digital-marketing",
  "/digital-marketing/content/infographics",
  "/digital-marketing/content/overview",
  "/digital-marketing/content/social-management",
  "/digital-marketing/seo/brand-audit",
  "/digital-marketing/seo/enterprise",
  "/digital-marketing/seo/generative-engine",
  "/digital-marketing/seo/local",
  "/digital-marketing/seo/overview",
  "/digital-marketing/seo/services",
  "/digital-marketing/seo/visibility-tracking",
  "/events",
  "/faq",
  "/free-audit",
  "/legal",
  "/partners",
  "/pricing",
  "/privacy-policy",
  "/resources",
  "/seo-audit",
  "/services",
  "/services/accounting-handling",
  "/services/digital-marketing",
  "/services/funding-pitch",
  "/services/mobile-app",
  "/services/mvp-development",
  "/services/no-code",
  "/services/product-validation",
  "/services/web-development",
  "/services/wireframing-ux",
  "/terms-of-service",
  "/testimonials",
  "/thank-you",
];

const routeSet = new Set(validRoutes);

/** Normalize a pathname: strip query/hash and any trailing slash (except root). */
function normalizePathname(pathname: string): string {
  const clean = pathname.split("?")[0].split("#")[0];
  if (clean.length > 1 && clean.endsWith("/")) {
    return clean.replace(/\/+$/, "");
  }
  return clean;
}

/** Returns true if the given pathname corresponds to a real route in the app. */
export function isValidAppRoute(pathname: string): boolean {
  return routeSet.has(normalizePathname(pathname));
}
