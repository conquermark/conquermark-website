import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { toast } from "sonner";

type PopupType = "exit-intent" | "scroll-trigger" | "timed" | null;

export default function PopupManager() {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const [email, setEmail] = useState("");
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);
  const [hasShownScrollTrigger, setHasShownScrollTrigger] = useState(false);
  const [hasShownTimed, setHasShownTimed] = useState(false);

  // Exit-intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !hasShownExitIntent &&
        !activePopup
      ) {
        setActivePopup("exit-intent");
        setHasShownExitIntent(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownExitIntent, activePopup]);

  // Scroll-trigger detection (50%)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (
        scrollPercentage >= 50 &&
        !hasShownScrollTrigger &&
        !activePopup
      ) {
        setActivePopup("scroll-trigger");
        setHasShownScrollTrigger(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownScrollTrigger, activePopup]);

  // Timed popup (10 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownTimed && !activePopup) {
        setActivePopup("timed");
        setHasShownTimed(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [hasShownTimed, activePopup]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, this would send to your backend
    console.log("Popup form submission:", { email, type: activePopup });
    
    let message = "";
    switch (activePopup) {
      case "exit-intent":
        message = "Great! Check your inbox for the Product Development Checklist.";
        break;
      case "scroll-trigger":
        message = "Thanks! We'll send you a custom plan proposal within 24 hours.";
        break;
      case "timed":
        message = "Perfect! We'll reach out to schedule your free 15-minute product review.";
        break;
    }
    
    toast.success(message);
    setEmail("");
    setActivePopup(null);
  };

  const handleClose = () => {
    setActivePopup(null);
  };

  const getPopupContent = () => {
    switch (activePopup) {
      case "exit-intent":
        return {
          title: "Wait! Before You Go...",
          description: "Get our free Product Development Checklist",
          subtitle: "Everything you need to launch your MVP successfully - from validation to launch.",
          buttonText: "Get Free Checklist",
          placeholder: "Enter your email"
        };
      case "scroll-trigger":
        return {
          title: "Want a Custom Plan?",
          description: "Get a tailored proposal for your project",
          subtitle: "Tell us about your product idea and we'll send you a custom plan with timeline and pricing.",
          buttonText: "Get Custom Proposal",
          placeholder: "Enter your email"
        };
      case "timed":
        return {
          title: "Free 15-Minute Product Review",
          description: "Get expert feedback on your idea",
          subtitle: "Schedule a quick call with our product experts. We'll review your concept and provide actionable insights - no strings attached.",
          buttonText: "Schedule Free Review",
          placeholder: "Enter your email"
        };
      default:
        return null;
    }
  };

  const content = getPopupContent();

  if (!activePopup || !content) return null;

  return (
    <Dialog open={!!activePopup} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold pr-8">{content.title}</DialogTitle>
          <DialogDescription className="text-base">
            {content.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <p className="text-sm text-foreground/70">
            {content.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="popup-email">Email Address</Label>
              <Input
                id="popup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.placeholder}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              {content.buttonText}
            </Button>
          </form>

          <p className="text-xs text-center text-foreground/60">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
