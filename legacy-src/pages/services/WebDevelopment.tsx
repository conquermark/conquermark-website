import ServicePage from "@/components/ServicePage";
import { Globe } from "lucide-react";

export default function WebDevelopment() {
  return (
    <ServicePage
      icon={Globe}
      title="Web Development"
      subtitle="Modern, high-performance websites and web applications"
      description="We build responsive, SEO-optimized websites and powerful web applications that convert visitors into customers. From landing pages to complex SaaS platforms, we deliver solutions that drive business growth."
      challenges={[
        {
          title: "Poor Performance",
          description: "Slow websites lead to high bounce rates and lost conversions."
        },
        {
          title: "Low Conversion Rates",
          description: "Beautiful designs that don't convert are wasted investment."
        },
        {
          title: "SEO Invisibility",
          description: "Without proper SEO, your target audience can't find you."
        },
        {
          title: "Mobile Responsiveness",
          description: "Over 60% of traffic is mobile - your site must work flawlessly on all devices."
        },
        {
          title: "Security Vulnerabilities",
          description: "Security breaches damage reputation and customer trust."
        },
        {
          title: "Scalability Issues",
          description: "Your website should grow with your business without performance degradation."
        }
      ]}
      capabilities={[
        {
          name: "React & Next.js",
          description: "Modern JavaScript frameworks for fast, SEO-friendly web applications."
        },
        {
          name: "Responsive Design",
          description: "Mobile-first design that works beautifully on all screen sizes."
        },
        {
          name: "E-commerce Solutions",
          description: "Custom online stores with Shopify, WooCommerce, or headless commerce."
        },
        {
          name: "CMS Integration",
          description: "Easy content management with WordPress, Contentful, Sanity, or Strapi."
        },
        {
          name: "SEO Optimization",
          description: "Technical SEO, on-page optimization, and structured data implementation."
        },
        {
          name: "Performance Optimization",
          description: "Lightning-fast load times with image optimization, caching, and CDN integration."
        }
      ]}
      process={[
        {
          title: "Discovery",
          description: "Business goals, target audience, competitive analysis, and technical requirements."
        },
        {
          title: "Design",
          description: "Wireframes, mockups, design system, and interactive prototypes."
        },
        {
          title: "Build",
          description: "Agile development with regular demos, testing, and client feedback."
        },
        {
          title: "Launch",
          description: "Deployment, SEO setup, analytics integration, and post-launch optimization."
        }
      ]}
      pricingModels={[
        {
          name: "Fixed Price",
          description: "Clear scope with defined deliverables and timeline."
        },
        {
          name: "Time & Materials",
          description: "Flexible for evolving requirements and ongoing development."
        },
        {
          name: "Retainer",
          description: "Monthly capacity for continuous improvements and new features."
        },
        {
          name: "Revenue Share",
          description: "Performance-based pricing for e-commerce and lead generation sites."
        }
      ]}
      faqs={[
        {
          question: "What's the difference between a website and a web application?",
          answer: "A website is primarily informational (marketing sites, blogs, portfolios), while a web application has interactive functionality (SaaS platforms, dashboards, tools). We build both, and often they overlap - for example, an e-commerce site is technically a web application."
        },
        {
          question: "How long does it take to build a website?",
          answer: "A simple marketing website takes 4-6 weeks. More complex sites with custom functionality, integrations, and extensive content take 8-12 weeks. Large web applications can take 3-6 months or more."
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: "Absolutely. All our websites are built mobile-first and tested across devices and browsers. We ensure your site looks and works great on phones, tablets, and desktops."
        },
        {
          question: "Do you provide hosting and maintenance?",
          answer: "Yes! We offer managed hosting and maintenance packages that include security updates, backups, uptime monitoring, and technical support."
        }
      ]}
      caseStudyTitle="E-commerce website that generated 3x revenue growth"
      caseStudyHref="/case-studies/ecommerce-growth"
    />
  );
}
