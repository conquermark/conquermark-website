import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-[#0f1729]/95 backdrop-blur-md border-t border-white/10 shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Cookie className="h-5 w-5 text-blue-400" />
            <h3 className="text-white font-semibold text-lg">We value your privacy</h3>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
            <Link href="/cookie-policy">
              <span className="text-blue-400 hover:text-blue-300 underline cursor-pointer transition-colors font-medium">Cookie Policy</span>
            </Link>{" "}
            to learn more.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="flex-1 md:flex-none border-white/10 text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white min-w-[140px] shadow-lg shadow-blue-500/20 transition-all duration-300"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
