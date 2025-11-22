import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Twitter, Facebook, Instagram, Mail } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! We'll be in touch soon.");
  };

  const services = [
    { name: "Product Validation", href: "/services/product-validation" },
    { name: "Wireframing & UX", href: "/services/wireframing-ux" },
    { name: "MVP Development", href: "/services/mvp-development" },
    { name: "No-Code Development", href: "/services/no-code" },
    { name: "Web App Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "Digital Marketing (29 Services)", href: "/digital-marketing" },
    { name: "Funding & Pitch", href: "/services/funding-pitch" },
    { name: "Accounting Handling", href: "/services/accounting-handling" },
  ];

  const company = [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];



  const legal = [
    { name: "Privacy Policy", href: "/legal#privacy" },
    { name: "Terms of Service", href: "/legal#terms" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CONQUERMARK</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Build. Validate. Launch. We take your idea to market with
              end-to-end product development and growth marketing.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column 1 */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div>
            <h4 className="font-semibold mb-4 opacity-0">More</h4>
            <ul className="space-y-2">
              {services.slice(5).map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Subscribe to our newsletter
            </h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Get the latest insights on product development and growth marketing.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Conquermark. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer">
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
