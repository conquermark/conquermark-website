import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, X, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface SEOChecklistPopupProps {
  trigger?: "exit" | "scroll" | "time";
}

export default function SEOChecklistPopup({ trigger = "scroll" }: SEOChecklistPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: ""
  });

  useEffect(() => {
    const popupShown = sessionStorage.getItem("seoChecklistPopupShown");
    if (popupShown) {
      setHasShown(true);
      return;
    }

    if (trigger === "exit") {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem("seoChecklistPopupShown", "true");
        }
      };
      document.addEventListener("mouseleave", handleMouseLeave);
      return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }

    if (trigger === "scroll") {
      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent >= 50 && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem("seoChecklistPopupShown", "true");
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
          sessionStorage.setItem("seoChecklistPopupShown", "true");
        }
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [trigger, hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll send your Free SEO Checklist & Site Audit within 24 hours.");
    setIsOpen(false);
    console.log("SEO Checklist Request:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    "Complete 50-point SEO checklist for 2024",
    "Technical SEO audit of your website",
    "Keyword opportunity analysis",
    "Competitor ranking comparison",
    "Actionable recommendations to improve rankings"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-8 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
              <Search className="h-10 w-10" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-extrabold mb-2 text-white">
                Get Your Free SEO Checklist & Site Audit
              </DialogTitle>
              <p className="text-white/90 text-lg">
                Worth $1,500 • Limited Time Offer
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">What You'll Get:</h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Work Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Your Company Inc."
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="website">Website URL *</Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                required
                placeholder="https://yourcompany.com"
                className="mt-1"
              />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg h-14 font-semibold">
              Get My Free SEO Audit ($1,500 Value)
            </Button>

            <p className="text-xs text-gray-500 text-center">
              No credit card required • Delivered within 24 hours • 100% Free
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
