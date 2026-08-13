# ClickMoat redesign research notes

## Public source audit

- ClickMoat homepage: https://clickmoat.com/
  - Existing page emphasizes Google Ads, free trial, 24/7 support, quick installation, dashboard, protection rules, reports, and Google refunds.
  - Existing copy includes a Meta Ads beta claim and several unsupported or awkward labels. The redesign replaces this with an explicit platform-status section.
- ClickMoat dashboard entry point: https://dashboard.clickmoat.com/
  - Public page is a sign-in screen for the ClickMoat panel.

## Competitor positioning

- ClickGuard: https://www.clickguard.com/
  - Leads with “control, clarity, and confidence,” a free click-fraud calculator, savings claims, platform coverage, use cases, customer proof, and FAQ detail.
  - Public claims include Google, Meta, and Microsoft Ads coverage and up-to-30% budget savings; these claims were not reused as ClickMoat claims.
- ClickCease: https://www.clickcease.com/
  - Leads with Google, Meta, and Microsoft Ads, real-time blocking, protection benefits, case studies, reviews, PMax, multi-domain management, customisation, and visitor analytics.
  - The redesign intentionally avoids implying ClickMoat has feature parity where the supplied product-status notes say it does not.

## Supplied product-status constraints reflected in copy

- Google Ads is the production focus.
- Meta Ads is presented as coming soon for September 2026 rather than as live.
- Current rule types supplied by the user: IP frequency, device frequency, geolocation, VPN/proxy, user-agent, referrer, time pattern, and custom rules, with block, flag, or monitor actions.
- Current data collection and scoring limitations supplied by the user mean the public page avoids claiming full server-side coverage, advanced behavioural scoring, or PMax blocking.
- Pricing is intentionally not shown because recurring paid tiers are not wired up yet.
- Dashboard views are presented as supplied/anonymized product evidence rather than as a claim that the public site is exposing a customer’s live account.

## Testimonial evidence from supplied YouTube Shorts

- https://youtube.com/shorts/zS2ZtVmvoK0?si=lsb2_hKNJu1U_FMe
  - Lauren, Marketing Head at Bella Grace in Morristown, New Jersey. Reported quick setup, competitor clicks and VPN traffic being blocked, and an immediate reduction in wasted clicks. No numerical metric stated.
- https://youtube.com/shorts/jmTL3u4ITJI?si=R5nGXk0Y7IEm_uo6
  - James, marketing agency owner in Miami. Reported approximately $2,200 saved across three websites, Google Ads bot blocking, real-time monitoring, automatic fraud blocking, visitor IP tracking, 24/7 Slack support, and help claiming Google Ads invalid-traffic refunds.
- https://youtube.com/shorts/b1Lku1an3rs?si=FKuoUwerOHkCXqzI
  - John Mayne, CEO of a marketing and advertising agency in Australia. Reported using domains, custom rules, VPN protection, known IP-range blocking, and saving approximately 10–20% of advertising budget. The number is attributed only to his testimonial.
- https://youtube.com/shorts/0DuAgDeu_Fk?si=Q8ljmChBpbZNle_H
  - Nancy Bart, PPC Manager at a marketing company in St. Louis. Reported seven domains connected, traffic/session data, AI-assisted blocking, “Kill Now” workflow, excellent Slack support, and a 30-day refund process.

## Design direction

Use a light, editorial SaaS layout with ClickMoat navy (#0b3157), cyan (#47bfe8), green for live/protected states, coral for action, DM Sans for body text, and Space Grotesk for headings. Lead with the dashboard screenshot, then explain the evidence trail, rule engine, reporting, platform status, customer proof, and honest FAQ. No fabricated logos, no monthly pricing, and no unqualified “AI” or “50x” performance promise.
