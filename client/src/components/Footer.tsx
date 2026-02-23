import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Globe } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! We'll be in touch soon.");
  };

  const automationServices = [
    { name: "Marketing Automation", href: "/automation/marketing" },
    { name: "Sales & CRM Automation", href: "/automation/sales-crm" },
    { name: "Customer Support", href: "/automation/customer-support" },
    { name: "n8n Workflows", href: "/automation/n8n" },
    { name: "Zapier Integration", href: "/automation/zapier" },
    { name: "Make.com Scenarios", href: "/automation/make" },
    { name: "E-commerce Ops", href: "/automation/ecommerce" },
  ];

  const digitalMarketing = [
    { name: "SEO Optimization", href: "/services/seo" },
    { name: "PPC Advertising", href: "/services/ppc" },
    { name: "Social Media Ads", href: "/services/social-ads" },
    { name: "Content Strategy", href: "/services/content" },
    { name: "Email Marketing", href: "/services/email" },
    { name: "Conversion Rate Opt", href: "/services/cro" },
    { name: "Product Validation", href: "/services/product-validation" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  const offices = [
    {
      country: "India HQ",
      flag: "🇮🇳",
      address: "Ahmedabad, GJ 380026"
    },
    {
      country: "USA Office",
      flag: "🇺🇸",
      address: "Fort Lauderdale, FL"
    },
    {
      country: "Hong Kong",
      flag: "🇭🇰",
      address: "Ngau Tau Kok"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      address: "Sydney NSW 2000"
    }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <footer className="w-full bg-[#0f1729] text-white border-t border-white/10">
      {/* Main Footer Content - Full Width Container */}
      <div className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
          
          {/* Brand Column (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">Conquermark</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm pr-4">
              We build autonomous enterprises. From intelligent agents to self-driving workflows, we help you scale without the headcount.
            </p>
            
            <div className="flex gap-3 pt-2">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="pt-6">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  Subscribe to Insights
                </h4>
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 h-9 text-sm focus-visible:ring-blue-500"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9 text-sm font-medium"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Automation Services (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-5">
            <h4 className="font-bold text-white mb-6 flex items-center gap-2 text-lg">
              Automation
            </h4>
            <ul className="space-y-3">
              {automationServices.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors"></span>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 text-lg">
              Growth Marketing
            </h4>
            <ul className="space-y-3">
              {digitalMarketing.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></span>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 text-lg">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Offices (3 cols) */}
          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="font-bold text-white mb-6 text-lg">
              Global Presence
            </h4>
            
            <div className="space-y-4 mb-8">
              <a href="tel:+12098134001" className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors border border-white/5 group-hover:border-blue-500/30">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">+1 (209) 813-4001</div>
                  <div className="text-xs text-gray-500">Mon-Fri, 9am-6pm EST</div>
                </div>
              </a>
              
              <a href="mailto:hello@conquermark.com" className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors border border-white/5 group-hover:border-blue-500/30">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">hello@conquermark.com</div>
                  <div className="text-xs text-gray-500">24/7 Support Team</div>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {offices.map((office, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group cursor-default">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{office.flag}</span>
                    <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wide">{office.country}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-tight pl-7 group-hover:text-gray-300 transition-colors">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Full Width */}
      <div className="border-t border-white/10 bg-black/20 w-full">
        <div className="w-full px-6 md:px-12 lg:px-16 py-6 max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Conquermark. All rights reserved.
          </p>
          <div className="flex gap-8">
            {legal.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-xs text-gray-500 hover:text-white transition-colors cursor-pointer font-medium">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
