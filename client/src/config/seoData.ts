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
    title: 'AI Automation Agency | Scale Operations with Autonomous Agents',
    description: 'Conquermark builds autonomous enterprises. Deploy custom AI agents and self-driving workflows to scale sales, marketing, and ops without adding headcount.',
    keywords: 'AI automation agency, autonomous enterprise, AI agents, workflow automation, business automation, AI marketing, AI sales',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Conquermark',
      alternateName: 'Conquermark AI Automation Agency',
      description: 'AI Automation Agency building autonomous enterprises through intelligent agents and self-driving workflows.',
      url: 'https://conquermark.com',
      logo: 'https://conquermark.com/logo.png',
      image: 'https://conquermark.com/og-image.jpg',
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
          streetAddress: '307 SW 15th Street',
          addressLocality: 'Fort Lauderdale',
          addressRegion: 'FL',
          postalCode: '33315',
          addressCountry: 'US'
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'C9, Ami Akhand Anand Part 2, Near Ambika Hotel, CTM Cross Road',
          addressLocality: 'Ahmedabad',
          addressRegion: 'GJ',
          postalCode: '380026',
          addressCountry: 'IN'
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
    title: 'AI & Development Services | Build, Automate, and Scale',
    description: 'Comprehensive AI automation and development services. From MVP development to enterprise-grade AI agents, we build systems that scale your business.',
    keywords: 'AI services, development services, MVP development, automation services, scaling business'
  },

  '/services/product-validation': {
    title: 'Product Validation Services | Test Ideas Before Building',
    description: 'Validate your product idea with data-driven market research and customer interviews. Minimize risk and ensure market fit before writing a single line of code.',
    keywords: 'product validation, market research, idea validation, startup testing, customer discovery'
  },

  '/services/wireframing-ux': {
    title: 'Wireframing & UX Design Services for Startups | Conquermark',
    description: 'Professional wireframing and UX design services. Create intuitive user experiences that convert. From sketches to high-fidelity prototypes. Request a free UX audit.',
    keywords: 'wireframing, UX design, user experience, prototyping, UI design'
  },

  '/services/mvp-development': {
    title: 'MVP Development Services | Launch Your Product in 4-8 Weeks',
    description: 'Rapid MVP development services to get your product to market fast. We build scalable, user-centric MVPs that validate your core value proposition.',
    keywords: 'MVP development, rapid prototyping, minimum viable product, startup launch, agile development'
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
    title: 'Business Automation Services | Save 20+ Hours Per Week',
    description: 'End-to-end business automation services. We design and deploy custom workflows using n8n, Zapier, and AI agents to streamline your operations.',
    keywords: 'business automation, workflow automation, process optimization, AI automation, operational efficiency'
  },

  '/automation/marketing': {
    title: 'Marketing Automation Services | Scale Growth on Autopilot',
    description: 'Automate your entire marketing funnel. From lead nurturing to campaign analytics, we build self-driving marketing systems that increase conversion rates.',
    keywords: 'marketing automation, email automation, lead nurturing, automated campaigns, growth automation'
  },

  '/automation/sales': {
    title: 'Sales & CRM Automation Services | Close More Deals Faster',
    description: 'Automate your sales pipeline. Instant lead response, automated follow-ups, and CRM syncing to help your team close more deals with less manual work.',
    keywords: 'sales automation, CRM automation, lead management, sales pipeline, automated follow-ups'
  },

  '/automation/support': {
    title: 'Customer Support Automation | 24/7 Instant AI Responses',
    description: 'Deliver 24/7 support with AI agents. Automate ticket routing, FAQs, and onboarding to reduce response times by 80% and cut support costs.',
    keywords: 'support automation, customer service automation, chatbot, ticket automation, AI support'
  },

  '/automation/internal-workflows': {
    title: 'Workflow & Operations Automation | Streamline Internal Processes',
    description: 'Eliminate manual data entry and repetitive tasks. We build custom internal workflows to automate approvals, reporting, and operations.',
    keywords: 'workflow automation, operations automation, process automation, internal workflows, business efficiency'
  },

  '/automation/reporting': {
    title: 'Reporting & Dashboard Automation | Real-Time Business Insights',
    description: 'Stop manually updating spreadsheets. Get automated, real-time dashboards that connect all your data sources for instant business intelligence.',
    keywords: 'reporting automation, automated dashboards, business intelligence, data automation, KPI tracking'
  },

  '/automation/n8n': {
    title: 'n8n Automation Services | Unlimited Self-Hosted Workflows',
    description: 'Expert n8n implementation services. We deploy and manage self-hosted n8n instances for unlimited, secure, and cost-effective workflow automation.',
    keywords: 'n8n automation, n8n services, self-hosted automation, workflow automation, n8n expert'
  },

  '/automation/zapier': {
    title: 'Zapier Automation Services | Expert Workflow Integration',
    description: 'Certified Zapier experts. We build complex, multi-step Zaps to connect your favorite apps and automate your business processes seamlessly.',
    keywords: 'Zapier automation, Zapier expert, Zap creation, app integration, workflow automation'
  },

  '/automation/make': {
    title: 'Make.com Automation Services | Advanced Workflow Scenarios',
    description: 'Unlock the power of Make.com (formerly Integromat). We build complex, visual automation scenarios with advanced logic and data transformation.',
    keywords: 'Make automation, Integromat, Make.com services, workflow scenarios, complex automation'
  },

  '/automation/pabbly': {
    title: 'Pabbly Connect Automation | Affordable Unlimited Workflows',
    description: 'Maximize ROI with Pabbly Connect. We set up unlimited automation workflows at a fixed cost, perfect for high-volume business operations.',
    keywords: 'Pabbly automation, Pabbly Connect, affordable automation, workflow services, high-volume automation'
  },

  '/automation/custom-api': {
    title: 'Custom API & Webhook Integration | Connect Any System',
    description: 'Enterprise-grade API integration services. We connect disparate systems using custom REST APIs, GraphQL, and webhooks for seamless data flow.',
    keywords: 'API integration, webhook integration, custom API, REST API, GraphQL, system integration'
  },

  '/automation/ecommerce': {
    title: 'E-commerce Automation | Shopify & WooCommerce Workflows',
    description: 'Automate your online store. From order processing to inventory sync, we streamline operations for Shopify, WooCommerce, and other platforms.',
    keywords: 'ecommerce automation, Shopify automation, WooCommerce automation, order automation, inventory sync'
  },

  '/automation/saas': {
    title: 'SaaS Automation Services | Scale Your Tech Startup',
    description: 'Automate your SaaS operations. We build workflows for user onboarding, billing, support, and churn reduction to help you scale efficiently.',
    keywords: 'SaaS automation, startup automation, user onboarding automation, SaaS workflows, churn reduction'
  },

  '/automation/healthcare': {
    title: 'Healthcare Automation | HIPAA-Compliant Workflows',
    description: 'Secure, HIPAA-compliant automation for healthcare providers. Automate patient scheduling, reminders, and records management with confidence.',
    keywords: 'healthcare automation, HIPAA compliant automation, medical automation, patient management, secure workflows'
  },

  '/automation/education': {
    title: 'Education & LMS Automation | Streamline Learning',
    description: 'Automate student enrollment, grading, and course delivery. We integrate with major LMS platforms to enhance the educational experience.',
    keywords: 'education automation, LMS automation, student management, course automation, edtech'
  },

  '/automation/finance': {
    title: 'Finance & Fintech Automation | Secure Financial Workflows',
    description: 'Bank-grade automation for finance. Streamline transaction processing, compliance reporting, and fraud detection with secure, automated workflows.',
    keywords: 'finance automation, fintech automation, transaction automation, compliance automation, secure finance'
  },

  '/automation/lead-capture': {
    title: 'Lead Capture Automation | Never Miss a Potential Client',
    description: 'Capture every lead instantly. We automate lead collection from forms, chat, and social media, syncing them directly to your CRM for immediate action.',
    keywords: 'lead capture automation, lead generation, CRM sync, automated follow-up, sales automation'
  },

  '/automation/chatbot-whatsapp': {
    title: 'WhatsApp & Chatbot Automation | 24/7 Customer Engagement',
    description: 'Engage customers on WhatsApp. We build AI chatbots and automated messaging flows using the WhatsApp Business API for 24/7 support.',
    keywords: 'WhatsApp automation, chatbot automation, WhatsApp Business API, automated messaging, customer engagement'
  },

  '/automation/form-to-crm': {
    title: 'Form to CRM Integration | Instant Data Sync',
    description: 'Stop manual data entry. We connect your web forms directly to your CRM, ensuring instant lead capture, validation, and zero data loss.',
    keywords: 'form to CRM, form integration, CRM automation, lead capture forms, data sync'
  },

  '/automation/order-sync': {
    title: 'Order & Inventory Sync | Real-Time Multi-Channel Updates',
    description: 'Keep your inventory in check. We automate real-time order and stock synchronization across all your sales channels to prevent overselling.',
    keywords: 'order sync, inventory automation, stock sync, multi-channel sync, ecommerce automation'
  },

  '/automation/notifications': {
    title: 'Notification Automation | Instant Alerts via Slack & Email',
    description: 'Stay in the loop. We set up automated notifications via Slack, email, and SMS for critical business events, ensuring you never miss a beat.',
    keywords: 'notification automation, Slack automation, email automation, alert automation, business alerts'
  },

  // Digital Marketing Pages
  '/digital-marketing': {
    title: 'AI-Powered Digital Marketing | Data-Driven Growth',
    description: 'Scale your growth with AI. Our digital marketing services leverage artificial intelligence for precision SEO, PPC, and content strategies.',
    keywords: 'digital marketing, AI marketing, SEO services, PPC management, content marketing, growth hacking'
  },

  // About Pages
  '/about': {
    title: 'About Conquermark - AI Automation Agency for Startups',
    description: 'Learn about Conquermark, the AI automation agency helping startups build, validate, and launch products. Our mission, team, and values.',
    keywords: 'about conquermark, startup agency, AI automation, company information'
  },

  '/contact': {
    title: 'Contact Us | Schedule Your Free AI Strategy Consultation',
    description: 'Ready to automate your business? Contact Conquermark today for a free consultation. Offices in USA, India, Hong Kong, and Australia.',
    keywords: 'contact us, AI consultation, business automation strategy, get in touch, schedule call'
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
