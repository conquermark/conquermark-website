import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { APP_LOGO } from "@/const";
import ContactModal from "@/components/ContactModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState(false);
  const [automationServicesOpen, setAutomationServicesOpen] = useState(false);

  const services = [
    { name: "Product Validation", href: "/services/product-validation" },
    { name: "Wireframing & UX", href: "/services/wireframing-ux" },
    { name: "MVP Development", href: "/services/mvp-development" },
    { name: "No-Code Development", href: "/services/no-code" },
    { name: "Web App Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "Funding & Pitch", href: "/services/funding-pitch" },
    { name: "Accounting Handling", href: "/services/accounting-handling" },
  ];

  const automationServices = [
    // Core Automation Services (Column 1)
    { name: "Marketing Automation", href: "/automation/marketing", category: "Core Automation Services" },
    { name: "Sales & CRM Automation", href: "/automation/sales", category: "Core Automation Services" },
    { name: "Customer Support Automation", href: "/automation/support", category: "Core Automation Services" },
    { name: "Workflow & Operations", href: "/automation/internal-workflows", category: "Core Automation Services" },
    { name: "Reporting & Dashboards", href: "/automation/reporting", category: "Core Automation Services" },
    
    // Platform-Based Services (Column 2)
    { name: "n8n Automation Services", href: "/automation/n8n", category: "Platform-Based Services" },
    { name: "Zapier Workflow Experts", href: "/automation/zapier", category: "Platform-Based Services" },
    { name: "Make (Integromat)", href: "/automation/make", category: "Platform-Based Services" },
    { name: "Pabbly Connect", href: "/automation/pabbly", category: "Platform-Based Services" },
    { name: "Custom API / Webhook", href: "/automation/custom-api", category: "Platform-Based Services" },
    
    // Industry Solutions (Column 3)
    { name: "E-commerce Automation", href: "/automation/ecommerce", category: "Industry Solutions" },
    { name: "SaaS & Tech Startups", href: "/automation/saas", category: "Industry Solutions" },
    { name: "Healthcare Automation", href: "/automation/healthcare", category: "Industry Solutions" },
    { name: "Education / LMS", href: "/automation/education", category: "Industry Solutions" },
    { name: "Finance & Fintech", href: "/automation/finance", category: "Industry Solutions" },
    
    // Use Cases (Column 4)
    { name: "Lead Capture Automation", href: "/automation/lead-capture", category: "Quick Solutions" },
    { name: "WhatsApp/Chatbot", href: "/automation/chatbot-whatsapp", category: "Quick Solutions" },
    { name: "Form-to-CRM Integration", href: "/automation/form-to-crm", category: "Quick Solutions" },
    { name: "Order + Inventory Sync", href: "/automation/order-sync", category: "Quick Solutions" },
    { name: "Slack/Email Notifications", href: "/automation/notifications", category: "Quick Solutions" },
  ];

  const digitalMarketingServices = [
    // SEO Services (Column 1)
    { name: "SEO Services Overview", href: "/digital-marketing/seo/overview", category: "SEO Services" },
    { name: "Enterprise SEO", href: "/digital-marketing/seo/enterprise", category: "SEO Services" },
    { name: "Local SEO", href: "/digital-marketing/seo/local", category: "SEO Services" },
    { name: "Generative Engine SEO", href: "/digital-marketing/seo/generative-engine", category: "SEO Services" },
    { name: "Brand Visibility Audit", href: "/digital-marketing/seo/brand-audit", category: "SEO Services" },
    { name: "Visibility Tracking", href: "/digital-marketing/seo/visibility-tracking", category: "SEO Services" },
    
    // AI Services (Column 2)
    { name: "AI Services Overview", href: "/digital-marketing/ai/overview", category: "AI Services" },
    { name: "AI Digital Marketing", href: "/digital-marketing/ai/digital-marketing", category: "AI Services" },
    { name: "AI Consulting", href: "/digital-marketing/ai/consulting", category: "AI Services" },
    { name: "ChatGPT Optimization", href: "/digital-marketing/ai/chatgpt", category: "AI Services" },
    { name: "AI Agent Development", href: "/digital-marketing/ai/agent-development", category: "AI Services" },
    { name: "GPT Integration", href: "/digital-marketing/ai/integration", category: "AI Services" },
    { name: "Enterprise GEO", href: "/digital-marketing/ai/enterprise-geo", category: "AI Services" },
    
    // Content Marketing (Column 3)
    { name: "Content Services Overview", href: "/digital-marketing/content/overview", category: "Content Marketing" },
    { name: "Content Marketing", href: "/digital-marketing/content/digital-marketing", category: "Content Marketing" },
    { name: "Copywriting Services", href: "/digital-marketing/content/copywriting", category: "Content Marketing" },
    { name: "Infographics", href: "/digital-marketing/content/infographics", category: "Content Marketing" },
    { name: "Social Media Management", href: "/digital-marketing/content/social-management", category: "Content Marketing" },
    { name: "CTV/OTT Advertising", href: "/digital-marketing/content/ctv", category: "Content Marketing" },
    
    // Digital Advertising (Column 4)
    { name: "Advertising Overview", href: "/digital-marketing/advertising/overview", category: "Digital Advertising" },
    { name: "PPC Management", href: "/digital-marketing/advertising/ppc", category: "Digital Advertising" },
    { name: "Social Media Advertising", href: "/digital-marketing/advertising/social-media", category: "Digital Advertising" },
    { name: "Programmatic Advertising", href: "/digital-marketing/advertising/programmatic", category: "Digital Advertising" },
    { name: "Enterprise PPC", href: "/digital-marketing/advertising/enterprise-ppc", category: "Digital Advertising" },
    { name: "Enterprise Social Ads", href: "/digital-marketing/advertising/enterprise-social", category: "Digital Advertising" },
    { name: "Local Services Ads", href: "/digital-marketing/advertising/local-services", category: "Digital Advertising" },
  ];

  // Group services by category for desktop dropdown
  const groupedServices = digitalMarketingServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof digitalMarketingServices>);

  const groupedAutomationServices = automationServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof automationServices>);

  const aboutPages = [
    { name: "Who We Are", href: "/about/who-we-are", description: "Our mission, team, and values" },
    { name: "Our Approach", href: "/about/our-approach", description: "How we work with startups" },
    { name: "About Us", href: "/about", description: "Company overview" },
    { name: "Careers", href: "/about/careers", description: "Join our team" },
    { name: "Contact Info", href: "/about/contact-info", description: "Get in touch" },
    { name: "Conquermark Reviews", href: "/about/reviews", description: "Client testimonials" },
    { name: "Awards", href: "/about/awards", description: "Recognition & achievements" },
    { name: "Community Impact", href: "/about/community-impact", description: "Our social initiatives" },
    { name: "Company Values", href: "/about/values", description: "What guides us" },
    { name: "Equality & Diversity", href: "/about/equality", description: "Our commitment" },
    { name: "History", href: "/about/history", description: "Our journey" },
    { name: "Conquermark Cares", href: "/about/conquermark-cares", description: "Giving back" },
  ];

  const navigation = [
    { name: "Case Studies", href: "/case-studies" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="/logo-color.svg" alt="Conquermark" className="h-10 md:h-12 w-auto" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative group">
            <Link href="/services">
              <span className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer flex items-center gap-1">
                Services
                <ChevronDown className="h-4 w-4" />
              </span>
            </Link>
            <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                {services.map((service) => (
                  <Link key={service.name} href={service.href}>
                    <div className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded cursor-pointer">
                      {service.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Automation Services Dropdown */}
          <div className="relative group">
            <Link href="/automation-services">
              <span className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer flex items-center gap-1">
                Automation Services
                <ChevronDown className="h-4 w-4" />
              </span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-6">
                <div className="grid grid-cols-4 gap-6">
                  {Object.entries(groupedAutomationServices).map(([category, services]) => (
                    <div key={category}>
                      <h3 className="font-bold text-sm text-primary mb-3 px-2">
                        {category}
                      </h3>
                      <div className="space-y-1">
                        {services.map((service) => (
                          <Link key={service.name} href={service.href}>
                            <div className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded cursor-pointer transition-colors">
                              {service.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Digital Marketing Dropdown */}
          <div className="relative group">
            <Link href="/digital-marketing">
              <span className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer flex items-center gap-1">
                Digital Marketing
                <ChevronDown className="h-4 w-4" />
              </span>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-6">
                <div className="grid grid-cols-4 gap-6">
                  {Object.entries(groupedServices).map(([category, services]) => (
                    <div key={category}>
                      <h3 className="font-bold text-sm text-primary mb-3 px-2">
                        {category}
                      </h3>
                      <div className="space-y-1">
                        {services.map((service) => (
                          <Link key={service.name} href={service.href}>
                            <div className="px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted rounded cursor-pointer transition-colors">
                              {service.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group">
            <span className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer flex items-center gap-1">
              About
              <ChevronDown className="h-4 w-4" />
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-6">
                <div className="grid grid-cols-3 gap-6">
                  {aboutPages.map((page) => (
                    <Link key={page.name} href={page.href}>
                      <div className="px-4 py-3 text-sm hover:bg-muted rounded cursor-pointer group/item">
                        <div className="font-semibold text-foreground group-hover/item:text-accent transition-colors">
                          {page.name}
                        </div>
                        <div className="text-xs text-foreground/60 mt-1">
                          {page.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => setContactModalOpen(true)}
          >
            Talk to an Expert
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container py-4 space-y-4">
            {/* Services in Mobile */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <Link key={service.name} href={service.href}>
                      <div
                        className="block py-1 text-sm text-foreground/70 hover:text-foreground cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Digital Marketing in Mobile */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setDigitalMarketingOpen(!digitalMarketingOpen)}
              >
                Digital Marketing
                <ChevronDown className={`h-4 w-4 transition-transform ${digitalMarketingOpen ? 'rotate-180' : ''}`} />
              </button>
              {digitalMarketingOpen && (
                <div className="pl-4 mt-2 space-y-3">
                  {Object.entries(groupedServices).map(([category, services]) => (
                    <div key={category}>
                      <div className="text-xs font-bold text-primary mb-2">
                        {category}
                      </div>
                      <div className="space-y-1 pl-2">
                        {services.map((service) => (
                          <Link key={service.name} href={service.href}>
                            <div
                              className="block py-1 text-sm text-foreground/70 hover:text-foreground cursor-pointer"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* About in Mobile */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {aboutPages.map((page) => (
                    <Link key={page.name} href={page.href}>
                      <div
                        className="block py-1 text-sm text-foreground/70 hover:text-foreground cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {page.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className="block py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => {
                setMobileMenuOpen(false);
                setContactModalOpen(true);
              }}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      )}

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </header>
  );
}
