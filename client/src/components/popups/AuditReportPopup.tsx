import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface AuditReportPopupProps {
  serviceType: "seo" | "ppc" | "socialAds" | "content" | "ai" | "local" | "advertising";
  serviceName: string;
  auditValue?: string;
}

const serviceConfig = {
  seo: {
    title: "Get Your Free SEO Audit",
    description: "Discover what's holding your website back from ranking #1",
    value: "$497",
    benefits: [
      "Complete technical SEO analysis",
      "Keyword opportunity report",
      "Competitor gap analysis",
      "Custom action plan"
    ],
    placeholder: "yourdomain.com"
  },
  ppc: {
    title: "Get Your Free Google Ads Audit",
    description: "Find out how to cut wasted ad spend and boost ROI",
    value: "$397",
    benefits: [
      "Ad account performance review",
      "Wasted spend identification",
      "Conversion tracking audit",
      "Campaign optimization plan"
    ],
    placeholder: "yourdomain.com"
  },
  socialAds: {
    title: "Get Your Free Social Ads Audit",
    description: "Maximize your Facebook & Instagram ad performance",
    value: "$397",
    benefits: [
      "Ad creative analysis",
      "Audience targeting review",
      "Budget optimization tips",
      "Conversion improvement plan"
    ],
    placeholder: "yourdomain.com"
  },
  content: {
    title: "Get Your Free Content Strategy",
    description: "Create content that ranks and converts",
    value: "$297",
    benefits: [
      "Content gap analysis",
      "Topic recommendations",
      "SEO content roadmap",
      "Engagement improvement tips"
    ],
    placeholder: "yourdomain.com"
  },
  ai: {
    title: "Get Your Free AI Opportunity Report",
    description: "Discover how AI can transform your marketing",
    value: "$497",
    benefits: [
      "AI readiness assessment",
      "Automation opportunities",
      "ROI projections",
      "Implementation roadmap"
    ],
    placeholder: "yourcompany.com"
  },
  local: {
    title: "Get Your Free Local SEO Audit",
    description: "Dominate local search results in your area",
    value: "$297",
    benefits: [
      "Google Business Profile audit",
      "Local citation analysis",
      "Review strategy plan",
      "Local ranking opportunities"
    ],
    placeholder: "yourbusiness.com"
  },
  advertising: {
    title: "Get Your Free Advertising Audit",
    description: "Maximize ROI across all your ad campaigns",
    value: "$397",
    benefits: [
      "Multi-channel analysis",
      "Budget allocation review",
      "Performance benchmarking",
      "Growth recommendations"
    ],
    placeholder: "yourdomain.com"
  }
};

export default function AuditReportPopup({ serviceType, serviceName, auditValue }: AuditReportPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: ""
  });

  const config = serviceConfig[serviceType];
  const displayValue = auditValue || config.value;

  useEffect(() => {
    // Check if this specific popup has been shown in this session
    const popupKey = `audit_${serviceType}_shown`;
    const popupShown = sessionStorage.getItem(popupKey);
    
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Show popup after 40% scroll OR 20 seconds
    let scrollTriggered = false;
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (scrollTriggered || hasShown) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 40) {
        scrollTriggered = true;
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem(popupKey, "true");
      }
    };

    // Time-based trigger (20 seconds)
    timeoutId = setTimeout(() => {
      if (!hasShown && !scrollTriggered) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem(popupKey, "true");
      }
    }, 20000);

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [hasShown, serviceType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Perfect! We'll send your ${serviceName} audit report within 24 hours.`);
    setIsOpen(false);
    console.log(`${serviceName} Audit Request:`, formData);
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
          
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg">
              <FileText className="h-7 w-7" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-white">
                {config.title}
              </DialogTitle>
              <p className="text-white/90 text-sm mt-0.5">
                {displayValue} Value • Delivered in 24 Hours
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <p className="text-sm text-gray-700 mb-4 font-medium">
            {config.description}
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-5">
            <p className="text-xs font-semibold text-gray-600 mb-2">What You'll Get:</p>
            <ul className="space-y-1.5">
              {config.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <Label htmlFor="name" className="text-sm">Your Name *</Label>
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

            <div>
              <Label htmlFor="website" className="text-sm">Website URL *</Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                required
                placeholder={config.placeholder}
                className="mt-1 h-10"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-11 font-semibold shadow-lg"
            >
              Get My Free Audit Report
            </Button>

            <p className="text-xs text-gray-500 text-center">
              No credit card required • Delivered in 24 hours • 100% Free
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
