import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Gift } from "lucide-react";
import { toast } from "sonner";

interface ServiceAuditPopupProps {
  serviceType: "seo" | "ppc" | "socialAds" | "content" | "ai" | "local";
  trigger?: "exit" | "scroll" | "time";
}

const serviceConfig = {
  seo: {
    title: "Get Your Free SEO Audit",
    subtitle: "Discover What's Holding Your Rankings Back",
    value: "$497 Value",
    cta: "Get My Free SEO Audit",
    benefits: [
      "Complete technical SEO analysis",
      "Keyword opportunity report",
      "Competitor ranking comparison"
    ],
    formFields: ["name", "email", "website"]
  },
  ppc: {
    title: "Get Your Free Google Ads Audit",
    subtitle: "See How Much You're Wasting on Ads",
    value: "$397 Value",
    cta: "Get My Free Ads Audit",
    benefits: [
      "Ad account performance review",
      "Wasted spend analysis",
      "ROI improvement recommendations"
    ],
    formFields: ["name", "email", "website", "monthlyAdSpend"]
  },
  socialAds: {
    title: "Get Your Free Social Ads Audit",
    subtitle: "Maximize Your Facebook & Instagram ROI",
    value: "$397 Value",
    cta: "Get My Free Social Audit",
    benefits: [
      "Campaign performance analysis",
      "Audience targeting review",
      "Creative optimization tips"
    ],
    formFields: ["name", "email", "website", "platforms"]
  },
  content: {
    title: "Get Your Free Content Strategy",
    subtitle: "Content That Actually Converts",
    value: "$297 Value",
    cta: "Get My Free Strategy",
    benefits: [
      "Custom content calendar",
      "Topic and keyword research",
      "Content gap analysis"
    ],
    formFields: ["name", "email", "website", "industry"]
  },
  ai: {
    title: "Get Your Free AI Opportunity Report",
    subtitle: "See How AI Can Transform Your Marketing",
    value: "$497 Value",
    cta: "Get My Free AI Report",
    benefits: [
      "AI implementation roadmap",
      "Use case identification",
      "ROI projections"
    ],
    formFields: ["name", "email", "company", "goals"]
  },
  local: {
    title: "Get Your Free Local SEO Audit",
    subtitle: "Dominate Local Search in Your Area",
    value: "$297 Value",
    cta: "Get My Free Local Audit",
    benefits: [
      "Google Business Profile review",
      "Local ranking analysis",
      "Citation audit report"
    ],
    formFields: ["name", "email", "business", "location"]
  }
};

export default function ServiceAuditPopup({ serviceType, trigger = "scroll" }: ServiceAuditPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    business: "",
    location: "",
    monthlyAdSpend: "",
    platforms: "",
    industry: "",
    goals: ""
  });

  const config = serviceConfig[serviceType];

  useEffect(() => {
    const popupShown = sessionStorage.getItem(`${serviceType}AuditPopupShown`);
    if (popupShown) {
      setHasShown(true);
      return;
    }

    if (trigger === "exit") {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem(`${serviceType}AuditPopupShown`, "true");
        }
      };
      document.addEventListener("mouseleave", handleMouseLeave);
      return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }

    if (trigger === "scroll") {
      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent >= 40 && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem(`${serviceType}AuditPopupShown`, "true");
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    if (trigger === "time") {
      const timer = setTimeout(() => {
        if (!hasShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem(`${serviceType}AuditPopupShown`, "true");
        }
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [trigger, hasShown, serviceType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Perfect! We'll send your free ${config.title.toLowerCase()} within 24 hours.`);
    setIsOpen(false);
    console.log(`${serviceType} Audit Request:`, formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg">
              <Gift className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-white mb-1">
                {config.title}
              </DialogTitle>
              <p className="text-white/90 text-sm font-medium">
                {config.value} • 100% Free
              </p>
            </div>
          </div>
          <p className="text-white/95 text-sm mt-2">
            {config.subtitle}
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          <div className="mb-5">
            <h3 className="text-sm font-semibold mb-2.5 text-gray-900">What You'll Get:</h3>
            <div className="space-y-2">
              {config.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <Label htmlFor="name" className="text-sm">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="mt-1 h-10"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="mt-1 h-10"
              />
            </div>

            {config.formFields.includes("website") && (
              <div>
                <Label htmlFor="website" className="text-sm">Website URL *</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  placeholder="https://yoursite.com"
                  className="mt-1 h-10"
                />
              </div>
            )}

            {config.formFields.includes("company") && (
              <div>
                <Label htmlFor="company" className="text-sm">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your Company"
                  className="mt-1 h-10"
                />
              </div>
            )}

            {config.formFields.includes("business") && (
              <div>
                <Label htmlFor="business" className="text-sm">Business Name *</Label>
                <Input
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  placeholder="Your Business"
                  className="mt-1 h-10"
                />
              </div>
            )}

            {config.formFields.includes("location") && (
              <div>
                <Label htmlFor="location" className="text-sm">City & State *</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Los Angeles, CA"
                  className="mt-1 h-10"
                />
              </div>
            )}

            {config.formFields.includes("monthlyAdSpend") && (
              <div>
                <Label htmlFor="monthlyAdSpend" className="text-sm">Monthly Ad Spend</Label>
                <Input
                  id="monthlyAdSpend"
                  name="monthlyAdSpend"
                  value={formData.monthlyAdSpend}
                  onChange={handleChange}
                  placeholder="$5,000/month"
                  className="mt-1 h-10"
                />
              </div>
            )}

            {config.formFields.includes("platforms") && (
              <div>
                <Label htmlFor="platforms" className="text-sm">Platforms You Use</Label>
                <Input
                  id="platforms"
                  name="platforms"
                  value={formData.platforms}
                  onChange={handleChange}
                  placeholder="Facebook, Instagram, LinkedIn"
                  className="mt-1 h-10"
                />
              </div>
            )}

            {config.formFields.includes("industry") && (
              <div>
                <Label htmlFor="industry" className="text-sm">Industry</Label>
                <Input
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="E-commerce, SaaS, etc."
                  className="mt-1 h-10"
                />
              </div>
            )}

            {config.formFields.includes("goals") && (
              <div>
                <Label htmlFor="goals" className="text-sm">Main Goal</Label>
                <Input
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  placeholder="Increase leads, automate tasks, etc."
                  className="mt-1 h-10"
                />
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-11 font-semibold text-base shadow-lg"
            >
              {config.cta}
            </Button>

            <p className="text-xs text-gray-500 text-center pt-1">
              No credit card • Delivered in 24 hours • 100% Free
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
