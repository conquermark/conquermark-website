import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Rocket } from "lucide-react";
import { toast } from "sonner";

export default function GetStartedPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: ""
  });

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem("getStartedPopupShown");
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Show popup after 30% scroll OR 25 seconds
    let scrollTriggered = false;
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (scrollTriggered || hasShown) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 30) {
        scrollTriggered = true;
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("getStartedPopupShown", "true");
      }
    };

    // Time-based trigger (25 seconds)
    timeoutId = setTimeout(() => {
      if (!hasShown && !scrollTriggered) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("getStartedPopupShown", "true");
      }
    }, 25000);

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Perfect! We'll reach out within 24 hours to discuss your project.");
    setIsOpen(false);
    console.log("Get Started Lead:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-6 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg">
              <Rocket className="h-7 w-7" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-white">
                Ready to Get Started?
              </DialogTitle>
              <p className="text-white/90 text-sm mt-0.5">
                Let's discuss your project
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <p className="text-sm text-gray-700 mb-4">
            Tell us about your needs and we'll send you a custom proposal with timeline and pricing.
          </p>

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
              <Label htmlFor="service" className="text-sm">What do you need? *</Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a service</option>
                <option value="mvp">MVP Development</option>
                <option value="web">Web App Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="marketing">Digital Marketing</option>
                <option value="validation">Product Validation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white h-11 font-semibold shadow-lg"
            >
              Get Started Today
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Free consultation • No commitment • Response in 24 hours
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
