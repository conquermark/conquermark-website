/**
 * SEO Configuration for All Pages
 * 
 * Centralized SEO data for all 94 pages on the website
 * Each page has unique title, description, and schema markup
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  schema?: object;
}

export const seoData: Record<string, PageSEO> = {
  // Homepage
  '/': {
    title: 'AI Automation Agency for Startups | Conquermark',
    description: 'ConquerMark helps startups validate ideas, build MVPs, and launch products fast. From product strategy to customer acquisition - one partner, end-to-end. Get started today.',
    keywords: 'AI automation, startup agency, MVP development, product validation, automation services',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Conquermark',
      description: 'AI Automation Agency helping startups validate ideas, build MVPs, and launch products',
      url: 'https://conquermark.com',
      logo: 'https://conquermark.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-209-813-4001',
        contactType: 'Customer Service',
        areaServed: ['US', 'IN', 'AU', 'HK'],
        availableLanguage: ['English']
      },
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'C9, Ami Akhand Anand Part 2, Near Ambika Hotel, CTM Cross Road',
          addressLocality: 'Ahmedabad',
          addressRegion: 'GJ',
          postalCode: '380026',
          addressCountry: 'IN'
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '307 SW 15th Street',
          addressLocality: 'Fort Lauderdale',
          addressRegion: 'FL',
          postalCode: '33315',
          addressCountry: 'US'
        }
      ],
      sameAs: [
        'https://www.linkedin.com/company/conquermark',
        'https://twitter.com/conquermark',
        'https://facebook.com/conquermark'
      ]
    }
  },

  // Main Service Pages
  '/services': {
    title: 'Startup Development Services - MVP to Launch | Conquermark',
    description: 'End-to-end product development services for startups. Product validation, MVP development, web & mobile apps, and growth marketing. Launch faster with Conquermark.',
    keywords: 'startup services, MVP development, product validation, web development, mobile apps'
  },

  '/services/product-validation': {
    title: 'Product Validation Services - Test Before You Build | Conquermark',
    description: 'Validate your startup idea with customer interviews, landing page tests, and market research. Reduce risk and build what customers actually want. Free consultation available.',
    keywords: 'product validation, customer interviews, market research, startup validation, idea testing'
  },

  '/services/wireframing-ux': {
    title: 'Wireframing & UX Design Services for Startups | Conquermark',
    description: 'Professional wireframing and UX design services. Create intuitive user experiences that convert. From sketches to high-fidelity prototypes. Request a free UX audit.',
    keywords: 'wireframing, UX design, user experience, prototyping, UI design'
  },

  '/services/mvp-development': {
    title: 'MVP Development Services - Launch in 4-8 Weeks | Conquermark',
    description: 'Build and launch your MVP in 4-8 weeks with our rapid development process. Validate assumptions, get user feedback, and iterate faster. Request a free consultation.',
    keywords: 'MVP development, minimum viable product, rapid development, startup MVP, product launch'
  },

  '/services/no-code': {
    title: 'No-Code Development Services - Fast & Affordable | Conquermark',
    description: 'Build powerful applications without code using Bubble, Webflow, and other no-code platforms. Launch 3x faster at 50% cost. Perfect for MVPs and prototypes.',
    keywords: 'no-code development, Bubble, Webflow, no-code apps, rapid prototyping'
  },

  '/services/web-development': {
    title: 'Web App Development Services for Startups | Conquermark',
    description: 'Custom web application development with React, Node.js, and modern tech stack. Scalable, secure, and user-friendly web apps. Get a free technical consultation.',
    keywords: 'web development, web app, React development, Node.js, custom web apps'
  },

  '/services/mobile-app': {
    title: 'Mobile App Development - iOS & Android Apps | Conquermark',
    description: 'Native and cross-platform mobile app development for iOS and Android. React Native, Flutter, and native development. Launch your mobile app in 8-12 weeks.',
    keywords: 'mobile app development, iOS app, Android app, React Native, Flutter'
  },

  '/services/digital-marketing': {
    title: 'Digital Marketing Services for Startups | Conquermark',
    description: 'Growth marketing services including SEO, PPC, content marketing, and social media. Acquire customers and scale your startup. Free marketing audit available.',
    keywords: 'digital marketing, growth marketing, SEO, PPC, content marketing'
  },

  '/services/funding-pitch': {
    title: 'Funding & Pitch Deck Services for Startups | Conquermark',
    description: 'Professional pitch deck creation and investor presentation services. Raise funding with compelling stories and data. Used by startups that raised $50M+.',
    keywords: 'pitch deck, funding, investor presentation, startup funding, venture capital'
  },

  '/services/accounting-handling': {
    title: 'Accounting & Bookkeeping Services for Startups | Conquermark',
    description: 'Startup-focused accounting and bookkeeping services. Tax compliance, financial reporting, and CFO advisory. Focus on building while we handle the numbers.',
    keywords: 'startup accounting, bookkeeping, tax compliance, financial reporting, CFO services'
  },

  // Automation Services
  '/automation-services': {
    title: 'Business Automation Services - Save 20+ Hours/Week | Conquermark',
    description: 'Professional automation services using n8n, Zapier, Make, and custom APIs. Automate marketing, sales, support, and operations. Free automation audit available.',
    keywords: 'business automation, workflow automation, n8n, Zapier, Make, automation services'
  },

  '/automation/marketing': {
    title: 'Marketing Automation Services - Scale Your Growth | Conquermark',
    description: 'Automate email campaigns, lead nurturing, social media, and analytics. Increase conversion rates by 40% while saving 15+ hours/week. Free marketing automation audit.',
    keywords: 'marketing automation, email automation, lead nurturing, automated campaigns'
  },

  '/automation/sales': {
    title: 'Sales & CRM Automation Services - Close More Deals | Conquermark',
    description: 'Automate lead capture, follow-ups, pipeline management, and reporting. Respond to leads in under 60 seconds. Increase sales productivity by 50%.',
    keywords: 'sales automation, CRM automation, lead management, sales pipeline, automated follow-ups'
  },

  '/automation/support': {
    title: 'Customer Support Automation - 24/7 Instant Responses | Conquermark',
    description: 'Automate ticket routing, chatbots, FAQ responses, and customer onboarding. Reduce response time by 80% and support costs by 60%. Free support audit.',
    keywords: 'support automation, customer service automation, chatbot, ticket automation'
  },

  '/automation/internal-workflows': {
    title: 'Workflow & Operations Automation Services | Conquermark',
    description: 'Automate internal processes, approvals, data entry, and reporting. Save 20+ hours per week on repetitive tasks. Streamline operations with custom workflows.',
    keywords: 'workflow automation, operations automation, process automation, internal workflows'
  },

  '/automation/reporting': {
    title: 'Reporting & Dashboard Automation Services | Conquermark',
    description: 'Automated dashboards and reports with real-time data. Connect all your tools and get instant insights. No more manual spreadsheets. Free dashboard audit.',
    keywords: 'reporting automation, automated dashboards, business intelligence, data automation'
  },

  '/automation/n8n': {
    title: 'n8n Automation Services - Self-Hosted & Unlimited | Conquermark',
    description: 'Deploy n8n on your infrastructure for unlimited workflows without per-task costs. Complete data control, complex logic, custom integrations. Schedule a free audit.',
    keywords: 'n8n automation, n8n services, self-hosted automation, workflow automation'
  },

  '/automation/zapier': {
    title: 'Zapier Automation Services - Expert Workflow Setup | Conquermark',
    description: 'Professional Zapier automation services. Connect 5000+ apps with multi-step Zaps. Certified Zapier experts. Save 15+ hours/week. Free Zapier audit available.',
    keywords: 'Zapier automation, Zapier expert, Zap creation, app integration'
  },

  '/automation/make': {
    title: 'Make.com (Integromat) Automation Services | Conquermark',
    description: 'Advanced Make.com automation with complex scenarios, error handling, and data transformations. Visual workflow builder for powerful integrations. Free Make audit.',
    keywords: 'Make automation, Integromat, Make.com services, workflow scenarios'
  },

  '/automation/pabbly': {
    title: 'Pabbly Connect Automation Services - Affordable Workflows | Conquermark',
    description: 'Pabbly Connect automation services with unlimited workflows at fixed cost. Perfect for high-volume operations. Connect 1000+ apps. Free Pabbly consultation.',
    keywords: 'Pabbly automation, Pabbly Connect, affordable automation, workflow services'
  },

  '/automation/custom-api': {
    title: 'Custom API & Webhook Integration Services | Conquermark',
    description: 'Custom API development and webhook integrations. Connect any system with REST APIs, GraphQL, and webhooks. Enterprise-grade integrations. Free technical consultation.',
    keywords: 'API integration, webhook integration, custom API, REST API, GraphQL'
  },

  '/automation/ecommerce': {
    title: 'E-commerce Automation Services - Shopify, WooCommerce | Conquermark',
    description: 'Automate order processing, inventory sync, customer notifications, and fulfillment. Works with Shopify, WooCommerce, and all major platforms. Free e-commerce audit.',
    keywords: 'ecommerce automation, Shopify automation, WooCommerce automation, order automation'
  },

  '/automation/saas': {
    title: 'SaaS Automation Services - Scale Your Tech Startup | Conquermark',
    description: 'Automation for SaaS companies: onboarding, billing, support, and analytics. Reduce churn, increase LTV, and scale efficiently. Free SaaS automation audit.',
    keywords: 'SaaS automation, startup automation, user onboarding automation, SaaS workflows'
  },

  '/automation/healthcare': {
    title: 'Healthcare Automation Services - HIPAA Compliant | Conquermark',
    description: 'HIPAA-compliant automation for healthcare: appointment scheduling, patient reminders, billing, and records management. Secure and compliant workflows.',
    keywords: 'healthcare automation, HIPAA compliant automation, medical automation, patient management'
  },

  '/automation/education': {
    title: 'Education & LMS Automation Services | Conquermark',
    description: 'Automate student enrollment, course delivery, grading, and communications. Works with all major LMS platforms. Enhance learning experiences with automation.',
    keywords: 'education automation, LMS automation, student management, course automation'
  },

  '/automation/finance': {
    title: 'Finance & Fintech Automation Services - Secure & Compliant | Conquermark',
    description: 'Automation for finance and fintech: transaction processing, compliance reporting, fraud detection, and customer onboarding. Bank-grade security.',
    keywords: 'finance automation, fintech automation, transaction automation, compliance automation'
  },

  '/automation/lead-capture': {
    title: 'Lead Capture Automation - Never Miss a Lead | Conquermark',
    description: 'Automate lead capture from all sources: website forms, social media, ads, and more. Instant notifications and CRM sync. Respond in under 60 seconds.',
    keywords: 'lead capture automation, lead generation, automated lead capture, CRM integration'
  },

  '/automation/chatbot-whatsapp': {
    title: 'WhatsApp & Chatbot Automation Services | Conquermark',
    description: 'WhatsApp Business API integration and chatbot automation. 24/7 customer support, order updates, and notifications. Reach customers where they are.',
    keywords: 'WhatsApp automation, chatbot automation, WhatsApp Business API, automated messaging'
  },

  '/automation/form-to-crm': {
    title: 'Form to CRM Integration & Automation Services | Conquermark',
    description: 'Connect web forms to your CRM automatically. Instant lead capture, data validation, and duplicate prevention. Works with all major CRMs and form builders.',
    keywords: 'form to CRM, form integration, CRM automation, lead capture forms'
  },

  '/automation/order-sync': {
    title: 'Order & Inventory Sync Automation Services | Conquermark',
    description: 'Real-time order and inventory synchronization across all sales channels. Prevent overselling, automate fulfillment, and update stock levels automatically.',
    keywords: 'order sync, inventory automation, stock sync, multi-channel sync'
  },

  '/automation/notifications': {
    title: 'Slack & Email Notification Automation Services | Conquermark',
    description: 'Automated notifications for Slack, email, SMS, and more. Get instant alerts for important events. Custom notification rules and escalations.',
    keywords: 'notification automation, Slack automation, email automation, alert automation'
  },

  // Digital Marketing Pages
  '/digital-marketing': {
    title: 'AI-Powered Digital Marketing Services | Conquermark',
    description: 'Comprehensive digital marketing services: SEO, PPC, content marketing, social media, and AI-powered campaigns. Grow your startup with data-driven marketing.',
    keywords: 'digital marketing, AI marketing, SEO services, PPC management, content marketing'
  },

  // About Pages
  '/about': {
    title: 'About Conquermark - AI Automation Agency for Startups',
    description: 'Learn about Conquermark, the AI automation agency helping startups build, validate, and launch products. Our mission, team, and values.',
    keywords: 'about conquermark, startup agency, AI automation, company information'
  },

  '/contact': {
    title: 'Contact Conquermark - Get Free Consultation | +1 (209) 813-4001',
    description: 'Contact Conquermark for a free consultation. Call +1 (209) 813-4001 or email hello@conquermark.com. Offices in USA, India, Hong Kong, and Australia.',
    keywords: 'contact conquermark, free consultation, startup consultation, get in touch'
  },

  '/case-studies': {
    title: 'Case Studies - Startup Success Stories | Conquermark',
    description: 'Read how we helped startups validate ideas, build MVPs, and scale to thousands of users. Real results from real clients.',
    keywords: 'case studies, success stories, startup case studies, client results'
  },

  // Legal Pages
  '/privacy-policy': {
    title: 'Privacy Policy | Conquermark',
    description: 'Conquermark privacy policy. Learn how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, data protection, privacy'
  },

  '/terms-of-service': {
    title: 'Terms of Service | Conquermark',
    description: 'Conquermark terms of service. Read our terms and conditions for using our services.',
    keywords: 'terms of service, terms and conditions, legal terms'
  },

  '/cookie-policy': {
    title: 'Cookie Policy | Conquermark',
    description: 'Conquermark cookie policy. Learn how we use cookies and similar technologies.',
    keywords: 'cookie policy, cookies, tracking'
  }
};

// Helper function to get SEO data for a page
export function getSEOData(path: string): PageSEO {
  return seoData[path] || {
    title: 'Conquermark - AI Automation Agency for Startups',
    description: 'Build, validate, and launch your startup with Conquermark. AI automation, MVP development, and growth marketing services.'
  };
}
