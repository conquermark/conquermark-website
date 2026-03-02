# WebCycle.ai — Complete Website Structure & Page Flow Plan

**Prepared for:** WebCycle / webcycle.ai  
**Plugin:** Maintenance Reports by webcycle (v1.0.0)  
**Theme:** BrightHub (casethemes.net)  
**Document Version:** 1.0  

---

## Part 1 — Theme Demo Selection & Rationale

After carefully reviewing all six BrightHub demo variants alongside the current webcycle.ai website and the plugin's feature set, the recommended primary demo is:

> **Recommended Demo: App Builder SaaS**
> https://brighthub.casethemes.net/app-builder-saas/

The table below compares each demo against the key criteria for a WordPress plugin marketing website.

| Demo | Visual Style | CTA Strength | Feature Showcase | Pricing Layout | Plugin Fit | Score |
|---|---|---|---|---|---|---|
| **App Builder SaaS** | Dark, modern, bold | Excellent — "Get Started" + "Watch Demo" | Step-by-step walkthrough + testimonials | Clear 3-tier table | **Best** | ⭐⭐⭐⭐⭐ |
| Main (Default) | Light, clean, minimal | Good | Feature cards | Not prominent | Good | ⭐⭐⭐⭐ |
| SEO Audit & Optimization | Warm gradient, bold headline | Strong | Service-based, not product | One-time pricing | Moderate | ⭐⭐⭐ |
| AI-Powered Copywriting | Light, playful | Moderate | Tool-card grid | Not shown | Moderate | ⭐⭐⭐ |
| Fintech SaaS | Dark, minimal, finance-focused | Weak (single CTA) | Dashboard-focused | Not shown | Low | ⭐⭐ |
| B2B SaaS Studio | Dark, catalog-style | Moderate | Catalog/marketplace | Complex | Low | ⭐⭐ |

**Why App Builder SaaS wins for WebCycle:**

The App Builder SaaS demo is purpose-built for a single software product that solves a specific professional problem — exactly the positioning of the Maintenance Reports plugin. Its dark, authoritative design signals professionalism and technical credibility to the target audience of WordPress developers and agency owners. The three-step visual walkthrough ("Choose → Customize → Publish") maps directly onto the plugin's own workflow ("Log → Build Report → Export"). The social proof carousel, comparison pricing table, and prominent dual-CTA pattern (primary download + secondary demo view) are all conversion-optimised patterns that align with the plugin's download-first strategy.

**Blog Layout:** The selected **Blog Grid** layout (`/blog-grid/`) is confirmed as the correct choice. It features a clean, category-filtered grid with a featured "Editor's Pick" hero post, which is ideal for a content strategy targeting WordPress professionals.

---

## Part 2 — Complete Sitemap

The following sitemap represents the full website structure, organised by navigation tier.

```
webcycle.ai/
│
├── / ................................................... Home
│
├── /features .......................................... Features (Overview)
│   ├── /features/automated-reporting ................. Automated Reporting
│   ├── /features/event-log-management ................ Event Log Management
│   ├── /features/report-templates .................... Report Templates
│   ├── /features/whitelabel-branding ................. Whitelabel & Branding
│   ├── /features/pdf-html-export ..................... PDF & HTML Export
│   └── /features/quick-add-categories ................ Quick Add Categories
│
├── /how-it-works ...................................... How It Works
│
├── /pricing ........................................... Pricing
│
├── /who-its-for ....................................... Who It's For
│   ├── /who-its-for/agencies ......................... For Agencies
│   ├── /who-its-for/freelancers ...................... For Freelancers
│   └── /who-its-for/it-departments ................... For IT Departments
│
├── /demo .............................................. Live Demo / Sample Report
│
├── /blog .............................................. Blog (Grid Layout)
│   └── /blog/{post-slug} ............................. Individual Blog Post
│
├── /docs .............................................. Documentation
│   ├── /docs/installation ............................ Installation Guide
│   ├── /docs/getting-started ......................... Getting Started
│   ├── /docs/event-logs .............................. Managing Event Logs
│   ├── /docs/reports ................................. Generating Reports
│   ├── /docs/whitelabel .............................. Whitelabel Setup
│   ├── /docs/export .................................. Exporting Reports
│   └── /docs/faq ..................................... FAQ
│
├── /changelog ......................................... Changelog
│
├── /about ............................................. About WebCycle
│
├── /contact ........................................... Contact Us
│
└── /download .......................................... Download Plugin (Primary CTA)
```

---

## Part 3 — Navigation Structure

### Primary Navigation (Header)

The header navigation should be clean, minimal, and conversion-focused. The primary CTA button ("Download Plugin") must be visible at all times.

| Menu Item | Link | Notes |
|---|---|---|
| **Features** | `/features` | Dropdown with 6 feature sub-pages |
| **How It Works** | `/how-it-works` | Single page, no dropdown |
| **Pricing** | `/pricing` | Single page, no dropdown |
| **Who It's For** | `/who-its-for` | Dropdown: Agencies, Freelancers, IT Depts |
| **Blog** | `/blog` | Single page, no dropdown |
| **Docs** | `/docs` | Dropdown with key doc sections |
| **Download Plugin** | `/download` | **Primary CTA button** (purple/brand color) |

### Footer Navigation

The footer should be organised into four columns to ensure visual balance and completeness.

| Column 1: Product | Column 2: Resources | Column 3: Company | Column 4: Legal |
|---|---|---|---|
| Features | Documentation | About Us | Privacy Policy |
| How It Works | Blog | Contact | Terms of Service |
| Pricing | Changelog | Support | License (GPLv2) |
| Download Plugin | FAQ | — | — |
| Demo / Sample Report | — | — | — |

---

## Part 4 — Page-by-Page Content & Flow

This section provides a detailed breakdown of every main page, including its objective, section-by-section content plan, and the conversion flow.

---

### Page 1: Home (`/`)

**Objective:** Communicate the plugin's core value proposition within 5 seconds, build trust, and drive visitors to download the plugin or view a sample report.

**Conversion Flow:** `Hero CTA → Problem/Solution → Feature Highlights → Social Proof → Audience Targeting → Final CTA`

| # | Section Name | Content Description | CTA |
|---|---|---|---|
| 1 | **Hero** | **Headline:** "Stop Wasting Hours on WordPress Maintenance Reports." **Sub-headline:** "WebCycle logs every task, builds professional reports, and exports to PDF in minutes — all from inside your WordPress dashboard." **Trust badge:** "✓ Free to install ✓ Data stays on your server ✓ No config needed" | **Primary:** "Download Plugin (Free)" → `/download` **Secondary:** "View Sample Report" → `/demo` |
| 2 | **Social Proof Bar** | Logos of WordPress.org, WP Engine, or similar trusted partners. Stat badges: "3–5 hrs saved/week", "10+ report templates", "30+ plugin integrations". | — |
| 3 | **Problem Section** | Three pain-point cards with short, punchy copy: "Hours lost to manual reporting", "Clients see bugs before you do", "Invoices with no proof of work". Each card transitions to the solution. | "See How WebCycle Solves This" → `/how-it-works` |
| 4 | **Feature Highlights** | Three to four feature spotlight blocks, each with a plugin screenshot and a short description. Features: Automated Event Logging, Professional Report Builder, Whitelabel PDF Export, Quick Add Templates. | "Explore All Features" → `/features` |
| 5 | **How It Works (Teaser)** | A simplified 3-step visual: "1. Log your work → 2. Build your report → 3. Export & send". | "See Full Walkthrough" → `/how-it-works` |
| 6 | **Testimonials** | A carousel of 3–5 testimonials from freelancers and agency owners. Each card includes a name, role, company, star rating, and a specific quote about time saved or client satisfaction. | — |
| 7 | **Who It's For** | Three audience cards (Agencies, Freelancers, IT Departments) with a brief description of how the plugin serves each. | "Find Your Use Case" → `/who-its-for` |
| 8 | **Roadmap Teaser** | A brief, visual timeline showing the current MVP and upcoming Phase 1–3 features. This builds excitement and trust in the product's future. | "View Full Roadmap" → `/changelog` |
| 9 | **Final CTA Banner** | A full-width, high-contrast banner: "Your clients deserve better than a Word doc. Download WebCycle and send your first report in under 5 minutes." | "Download Plugin Now" → `/download` |

---

### Page 2: Features Overview (`/features`)

**Objective:** Provide a comprehensive, visually rich overview of all plugin capabilities.

**Conversion Flow:** `Feature Grid → Individual Feature Detail → Download CTA`

The Features page opens with a brief introductory paragraph and then presents each feature in a dedicated, alternating left-right layout (image on one side, text on the other). Each feature block includes a heading, a two-to-three sentence description, and a list of specific sub-features.

| Feature Block | Key Sub-Features to Highlight |
|---|---|
| **Comprehensive Dashboard** | Total reports & event logs at a glance, category distribution chart, recent activity feed, quick action buttons |
| **Event Log Management** | Create/edit/delete logs, 12 task categories, hours tracking, outcome notes, multiple screenshot uploads |
| **Professional Report Builder** | 4 report templates, customisable brand colors, client logo upload, report overview/notes section |
| **Whitelabel Branding** | Global brand name, description, website URL, brand color, contact details |
| **PDF & HTML Export** | One-click PDF download (via dompdf), standalone HTML file, print-friendly CSS |
| **Quick Add Templates** | 12 pre-built categories: Updates, Backups, Security, Firewall, Uptime, Google Analytics, Functional Testing, Design, Development, Analytics, SEO, Stats |
| **Site Health Integration** | Pull WordPress Site Health data directly into event logs with one click |
| **Privacy First** | No data leaves your server, no third-party connections, fully self-hosted |

Each feature block should link to its dedicated sub-page (e.g., `/features/event-log-management`) for users who want deeper detail.

---

### Page 3: How It Works (`/how-it-works`)

**Objective:** Walk a potential user through the exact workflow of using the plugin, from installation to sending a report.

**Conversion Flow:** `Step-by-step walkthrough → Video Demo → Download CTA`

This page uses a numbered, visual step-by-step layout (similar to the App Builder SaaS demo's "01 → 02 → 03" pattern).

| Step | Title | Description |
|---|---|---|
| **Step 1** | Install & Activate | Upload the plugin zip to WordPress, activate it, and the "Maintenance Reports" menu appears instantly in your admin sidebar. No configuration required to get started. |
| **Step 2** | Configure Your Brand | Set your agency name, logo, brand color, and contact details once in the Whitelabel Settings. These will appear on every report you generate. |
| **Step 3** | Log Your Work | After completing maintenance tasks, create Event Logs. Use Quick Add templates to pre-fill common tasks (Updates, Backups, Security, etc.), add screenshots, and track hours. |
| **Step 4** | Build Your Report | Create a new report, select a template, add your client's details, choose the event logs to include, and preview the beautifully formatted result. |
| **Step 5** | Export & Send | Download the report as a professional PDF or a standalone HTML file. Send it directly to your client and impress them with the level of detail and professionalism. |

---

### Page 4: Pricing (`/pricing`)

**Objective:** Present clear, transparent pricing that drives conversions and reduces friction.

**Conversion Flow:** `Pricing Table → Feature Comparison → FAQ → Download CTA`

The pricing page should feature a clean, three-column pricing table. Since the plugin is currently free (v1.0.0), the table should reflect the current state and the planned future tiers.

| Plan | Price | Target User | Key Inclusions |
|---|---|---|---|
| **Free** | $0 / forever | Solo freelancers, first-time users | 1 site, unlimited reports, 4 templates, PDF/HTML export, basic whitelabel |
| **Pro** | $X / year *(planned)* | Active freelancers, small agencies | Unlimited sites, all templates, priority support, advanced branding |
| **Agency** | $X / year *(planned)* | Agencies managing 10+ client sites | Team collaboration, multi-site dashboard, client portal, custom integrations |

Below the pricing table, a **Feature Comparison Matrix** should list every feature and indicate which plan includes it. A **Pricing FAQ** section should address questions such as "Is the free plan really free?", "Can I upgrade later?", and "Is there a refund policy?".

---

### Page 5: Who It's For (`/who-its-for`)

**Objective:** Speak directly to each target audience segment and demonstrate the plugin's specific value for their use case.

**Conversion Flow:** `Audience selector → Pain points → Solution → Testimonial → Download CTA`

This page features three dedicated audience sections, each following the same structure: a headline that speaks directly to the reader, a "What Actually Happens" pain-point block, a "How WebCycle Solves It" solution block, and a relevant testimonial.

| Audience | Headline | Key Pain Points | Key Solutions |
|---|---|---|---|
| **Agencies** | "Built for agencies managing 10+ client sites." | Team coordination chaos, inconsistent reporting, manual monitoring, scaling bottlenecks | Standardised reporting, automated monitoring, team collaboration tools, effortless scaling |
| **Freelancers** | "For the solo developer who wears every hat." | Hours on manual reporting, losing track of changes, difficulty justifying rates, no professional branding | Automated professional reports, AI & manual logging, time tracking for billing, whitelabel PDF reports |
| **IT Departments** | "For internal teams that need to prove their value." | Compliance requirements, multi-team coordination, no formal documentation process | Compliance-ready reports, multi-team dashboards, full audit trail, enterprise security |

---

### Page 6: Demo / Sample Report (`/demo`)

**Objective:** Allow potential users to see the output quality of the plugin before downloading.

This page should embed or link to a sample maintenance report generated by the plugin. It should include a short introductory paragraph explaining what they are viewing, followed by the embedded HTML report or a PDF viewer. A prominent "Download the Plugin to Create Your Own" CTA should be placed below the report.

---

### Page 7: Blog (`/blog`)

**Objective:** Drive organic search traffic and establish WebCycle.ai as an authority in WordPress maintenance.

**Layout:** Blog Grid (as selected by the user).

The blog should be organised into the following categories, which align with the plugin's Quick Add task categories and the target audience's interests:

| Category | Description |
|---|---|
| **WordPress Maintenance** | Best practices, checklists, tutorials for maintaining WordPress sites |
| **Client Reporting** | How to create better client reports, communication tips, report templates |
| **Agency Growth** | Scaling a WordPress agency, pricing strategies, client retention |
| **Plugin Tutorials** | Step-by-step guides for using the WebCycle plugin |
| **WordPress Security** | Security hardening, firewall setup, malware prevention |
| **Tools & Integrations** | Reviews and guides for popular WordPress plugins (Yoast, Sucuri, etc.) |

---

### Page 8: Documentation (`/docs`)

**Objective:** Provide comprehensive, searchable technical documentation for the plugin.

The documentation should be structured as a knowledge base with a left-hand sidebar navigation and a main content area. Key documentation articles include:

| Article | Content |
|---|---|
| **Installation Guide** | Step-by-step instructions for installing via WordPress Admin and FTP |
| **Getting Started** | First-time setup: configuring whitelabel settings, creating your first event log |
| **Managing Event Logs** | Creating, editing, deleting logs; using Quick Add templates; uploading screenshots |
| **Generating Reports** | Creating a report, selecting a template, adding client details, previewing |
| **Whitelabel Setup** | Configuring global brand settings |
| **Exporting Reports** | Downloading as PDF or HTML |
| **FAQ** | Answers to the 8 most common questions from the plugin readme |
| **Requirements** | WordPress, PHP, MySQL version requirements |
| **Changelog** | Full version history |

---

### Page 9: About WebCycle (`/about`)

**Objective:** Build trust and humanise the brand by sharing the story behind WebCycle.

This page should tell the story of how WebCycle was born from the real frustrations of running a WordPress agency. It should include the founding story, the team's mission ("Every feature exists because we needed it ourselves"), the product roadmap, and a commitment to privacy-first development.

---

### Page 10: Download (`/download`)

**Objective:** This is the primary conversion page. Its sole purpose is to get the visitor to download the plugin.

This page should be minimal and friction-free. It should include:

- A short, confident headline: "Download WebCycle. Free. Forever."
- Three trust badges: "✓ No account required", "✓ Data stays on your server", "✓ GPLv2 Licensed"
- A prominent download button linking directly to the plugin zip file or WordPress.org plugin page.
- A brief "What happens next?" section with three steps: Download → Install → Create your first report.
- A secondary option: "Download a Sample Report First" for users who are not yet ready to install.

---

## Part 5 — User Flow Diagram

The following diagram illustrates the primary conversion paths a visitor can take through the website.

```
[New Visitor]
      │
      ▼
[Home Page]
      │
      ├──► [Problem resonates] ──► [How It Works] ──► [Features] ──► [Download]
      │
      ├──► [Wants proof] ──────────► [Demo / Sample Report] ──────► [Download]
      │
      ├──► [Checks price] ─────────► [Pricing] ────────────────────► [Download]
      │
      ├──► [Identifies with audience] ► [Who It's For] ────────────► [Download]
      │
      └──► [Needs help] ────────────► [Docs / FAQ] ──────────────── [Support]

[Returning User / Existing Customer]
      │
      ├──► [Docs] ──► [Specific Article]
      │
      ├──► [Blog] ──► [Blog Post] ──► [Related Post] ──► [Newsletter Signup]
      │
      └──► [Changelog] ──► [New Features] ──► [Upgrade / Pro CTA]
```

---

## Part 6 — Key Design Principles for Implementation

The following principles must guide the implementation of every page, based on the BrightHub App Builder SaaS demo and the WebCycle brand.

**1. Dark Theme with Brand Accent Color.** The App Builder SaaS demo's dark background creates a professional, technical aesthetic that resonates with developers and agency owners. The WebCycle brand's purple accent color should be used consistently for all CTAs, highlights, and interactive elements.

**2. Screenshot-First Feature Presentation.** Every feature section must include a real screenshot of the plugin's admin interface. Generic icons are insufficient — users need to see exactly what they are getting before they download.

**3. Dual CTA Pattern.** Every major section should offer a primary CTA (Download Plugin) and a secondary CTA (View Sample Report or See How It Works). This accommodates both ready-to-act visitors and those who need more convincing.

**4. Privacy-First Messaging.** The plugin's privacy-first architecture (no data leaves the server) is a major differentiator. This message must be prominently displayed on the homepage hero, the pricing page, and the download page.

**5. Social Proof Throughout.** Testimonials, star ratings, and usage statistics should appear on the homepage, the pricing page, and the "Who It's For" page. Real quotes from real users are essential for building trust.

**6. Roadmap Transparency.** Displaying the product roadmap (MVP → Phase 1 → Phase 2 → Phase 3) builds trust and excitement. It signals that the plugin is actively developed and has a clear future direction.

**7. Balanced Footer.** The footer must be fully populated across four columns (Product, Resources, Company, Legal) to avoid empty space and present a complete, professional appearance.
