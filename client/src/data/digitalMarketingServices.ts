// All Digital Marketing Services with descriptions for related services links

export interface DigitalMarketingService {
  name: string;
  href: string;
  description: string;
  category: 'SEO' | 'AI' | 'Content' | 'Advertising';
}

export const digitalMarketingServices: DigitalMarketingService[] = [
  // SEO Services
  {
    name: "SEO Services Overview",
    href: "/digital-marketing/seo",
    description: "Comprehensive SEO strategies to dominate search results and increase organic traffic",
    category: "SEO"
  },
  {
    name: "Enterprise SEO",
    href: "/digital-marketing/seo/enterprise",
    description: "Large-scale SEO solutions for enterprise organizations with complex needs",
    category: "SEO"
  },
  {
    name: "Local SEO",
    href: "/digital-marketing/seo/local",
    description: "Optimize your local presence and attract nearby customers through local search",
    category: "SEO"
  },
  {
    name: "Generative Engine SEO",
    href: "/digital-marketing/seo/generative-engine",
    description: "Optimize for AI-powered search engines and generative AI platforms",
    category: "SEO"
  },
  {
    name: "Brand Visibility Audit",
    href: "/digital-marketing/seo/brand-audit",
    description: "Comprehensive analysis of your brand's online visibility and reputation",
    category: "SEO"
  },
  {
    name: "Visibility Tracking",
    href: "/digital-marketing/seo/visibility-tracking",
    description: "Monitor and track your brand's visibility across search engines and platforms",
    category: "SEO"
  },
  
  // AI Services
  {
    name: "AI Services Overview",
    href: "/digital-marketing/ai",
    description: "Leverage AI technology to transform your digital marketing strategy",
    category: "AI"
  },
  {
    name: "AI Digital Marketing",
    href: "/digital-marketing/ai/digital-marketing",
    description: "AI-powered marketing automation and optimization for better results",
    category: "AI"
  },
  {
    name: "AI Consulting",
    href: "/digital-marketing/ai/consulting",
    description: "Expert guidance on implementing AI solutions in your marketing strategy",
    category: "AI"
  },
  {
    name: "ChatGPT Optimization",
    href: "/digital-marketing/ai/chatgpt",
    description: "Optimize your content and brand presence for ChatGPT and AI assistants",
    category: "AI"
  },
  {
    name: "AI Agent Development",
    href: "/digital-marketing/ai/agent-development",
    description: "Build custom AI agents to automate marketing tasks and customer interactions",
    category: "AI"
  },
  {
    name: "GPT Integration",
    href: "/digital-marketing/ai/integration",
    description: "Integrate GPT and AI models into your marketing workflows and systems",
    category: "AI"
  },
  {
    name: "Enterprise GEO",
    href: "/digital-marketing/ai/enterprise-geo",
    description: "Enterprise-level generative engine optimization for AI search visibility",
    category: "AI"
  },
  
  // Content Marketing
  {
    name: "Content Services Overview",
    href: "/digital-marketing/content",
    description: "Strategic content creation and distribution to engage your audience",
    category: "Content"
  },
  {
    name: "Content Marketing",
    href: "/digital-marketing/content/digital-marketing",
    description: "Data-driven content strategies that drive traffic and conversions",
    category: "Content"
  },
  {
    name: "Copywriting Services",
    href: "/digital-marketing/content/copywriting",
    description: "Persuasive copy that converts visitors into customers",
    category: "Content"
  },
  {
    name: "Infographics",
    href: "/digital-marketing/content/infographics",
    description: "Visual content that simplifies complex information and drives engagement",
    category: "Content"
  },
  {
    name: "Social Media Management",
    href: "/digital-marketing/content/social-management",
    description: "Comprehensive social media strategy and community management",
    category: "Content"
  },
  {
    name: "CTV/OTT Advertising",
    href: "/digital-marketing/content/ctv",
    description: "Reach audiences through connected TV and over-the-top streaming platforms",
    category: "Content"
  },
  
  // Digital Advertising
  {
    name: "Advertising Overview",
    href: "/digital-marketing/advertising",
    description: "Comprehensive digital advertising solutions across all major platforms",
    category: "Advertising"
  },
  {
    name: "PPC Management",
    href: "/digital-marketing/advertising/ppc",
    description: "Expert pay-per-click campaign management for maximum ROI",
    category: "Advertising"
  },
  {
    name: "Social Media Advertising",
    href: "/digital-marketing/advertising/social-media",
    description: "Targeted social ads on Facebook, Instagram, LinkedIn, and more",
    category: "Advertising"
  },
  {
    name: "Programmatic Advertising",
    href: "/digital-marketing/advertising/programmatic",
    description: "Automated ad buying with advanced targeting and optimization",
    category: "Advertising"
  },
  {
    name: "Enterprise PPC",
    href: "/digital-marketing/advertising/enterprise-ppc",
    description: "Large-scale PPC management for enterprise organizations",
    category: "Advertising"
  },
  {
    name: "Enterprise Social Ads",
    href: "/digital-marketing/advertising/enterprise-social",
    description: "Enterprise social media advertising with advanced analytics",
    category: "Advertising"
  },
  {
    name: "Local Services Ads",
    href: "/digital-marketing/advertising/local-services",
    description: "Google Local Services Ads to connect with nearby customers",
    category: "Advertising"
  },
];

// Helper function to get related services (excludes current service)
export function getRelatedServices(
  currentHref: string,
  category?: 'SEO' | 'AI' | 'Content' | 'Advertising',
  limit: number = 6
): DigitalMarketingService[] {
  let services = digitalMarketingServices.filter(s => s.href !== currentHref);
  
  // If category specified, prioritize same category services
  if (category) {
    const sameCategory = services.filter(s => s.category === category);
    const otherCategory = services.filter(s => s.category !== category);
    services = [...sameCategory, ...otherCategory];
  }
  
  return services.slice(0, limit);
}
