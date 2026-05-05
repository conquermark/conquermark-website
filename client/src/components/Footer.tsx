import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Globe, BookOpen, FileText, Wrench } from "lucide-react";

import { toast } from "sonner";
import { sendEmail } from "@/lib/email";

export default function Footer() {
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.querySelector('input[type="email"]') as HTMLInputElement | null)?.value || "";

    if (isSubscribing) return;
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubscribing(true);
      await sendEmail("Subscribe to Insights", {
        email: email.trim(),
        submitButton: "Subscribe",
      });
      toast.success("Thanks for subscribing! We'll be in touch soon.");
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to subscribe. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const automationServices = [
    { name: "Marketing Automation", href: "/automation/marketing" },
    { name: "Sales & CRM Automation", href: "/automation/sales" },
    { name: "Customer Support", href: "/automation/support" },
    { name: "n8n Workflows", href: "/automation/n8n" },
    { name: "Zapier Integration", href: "/automation/zapier" },
    { name: "Make.com Scenarios", href: "/automation/make" },
    { name: "E-commerce Ops", href: "/automation/ecommerce" },
  ];

  const digitalMarketing = [
    { name: "SEO Optimization", href: "/digital-marketing/seo/overview" },
    { name: "PPC Advertising", href: "/digital-marketing/advertising/ppc" },
    { name: "Social Media Ads", href: "/digital-marketing/advertising/social-media" },
    { name: "Content Strategy", href: "/digital-marketing/content/overview" },
    { name: "Email Marketing", href: "/digital-marketing/content/digital-marketing" },
    { name: "Conversion Rate Opt", href: "/digital-marketing/seo/visibility-tracking" },
    { name: "Product Validation", href: "/services/product-validation" },
  ];

  const resources = [
    { name: "Blog & Insights", href: "/blog", icon: BookOpen },
    { name: "Case Studies", href: "/case-studies", icon: FileText },
    { name: "ROI Calculator", href: "/resources", icon: Wrench },
    { name: "Whitepapers", href: "/resources", icon: FileText },
    { name: "Webinars", href: "/resources", icon: Globe },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
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

  return (
    <footer className="w-full bg-[#0f1729] text-white border-t border-white/10">
      {/* Main Footer Content - Full Width Container */}
      <div className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 xl:gap-12">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="space-y-6">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="/favicon.svg" alt="Conquermark" className="h-8 w-8" />
                <span className="text-2xl font-bold tracking-tight text-white">Conquermark</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
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

            <div className="pt-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="font-semibold text-xs mb-3 flex items-center gap-2 uppercase tracking-wider text-gray-400">
                  Subscribe to Insights
                </h4>
                <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 h-9 text-sm focus-visible:ring-blue-500"
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-9 text-sm font-medium"
                  >
                    {isSubscribing ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Column 2: Automation Services */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">
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

          {/* Column 3: Growth Marketing */}
          <div>
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

          {/* Column 4: Resources (New) */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                      <item.icon className="h-4 w-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
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

          {/* Column 6: Global Presence & Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">
              Global Presence
            </h4>
            
            <div className="space-y-4 mb-6">
              <a href="tel:+12098134001" className="flex items-center gap-3 group">
                <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors border border-white/5 group-hover:border-blue-500/30">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">+1 (209) 813-4001</div>
                  <div className="text-xs text-gray-500">Mon-Fri, 9am-6pm EST</div>
                </div>
              </a>
              
              <a href="mailto:hello@conquermark.com" className="flex items-center gap-3 group">
                <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors border border-white/5 group-hover:border-blue-500/30">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">hello@conquermark.com</div>
                  <div className="text-xs text-gray-500">24/7 Support Team</div>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {offices.map((office, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-2.5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group cursor-default flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base group-hover:scale-110 transition-transform duration-300">{office.flag}</span>
                    <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wide">{office.country}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Full Width */}
      <div className="border-t border-white/10 bg-black/20 w-full">
        <div className="w-full px-6 md:px-12 lg:px-16 py-6 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-3 text-xs text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Conquermark. All rights reserved.
          </p>
          <p className="text-center">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
          <p className="text-center md:text-right">
            Built with ❤️ for the future of work.
          </p>
        </div>
      </div>
    </footer>
  );
}
