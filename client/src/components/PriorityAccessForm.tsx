import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lock, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function PriorityAccessForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
    toast.success("Priority application received! We'll contact you shortly.");
  };

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto border-2 border-accent/30 bg-accent/5 shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Application Received</h3>
          <p className="text-foreground/70 mb-6">
            Your spot has been reserved pending review. Our team will contact you within 24 hours to confirm your intake slot.
          </p>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto border-2 border-accent shadow-2xl relative overflow-hidden">
      {/* Urgency Badge */}
      <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
        HIGH PRIORITY
      </div>

      <CardContent className="p-6 md:p-8">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">Secure Your Spot</h3>
          <p className="text-sm text-foreground/70">
            Complete this form to lock in one of the remaining Q1 2026 slots.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 text-left">
            <label className="text-sm font-medium ml-1">Full Name</label>
            <Input 
              placeholder="John Doe" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="bg-background"
            />
          </div>
          
          <div className="space-y-2 text-left">
            <label className="text-sm font-medium ml-1">Work Email</label>
            <Input 
              type="email" 
              placeholder="john@company.com" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="bg-background"
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-sm font-medium ml-1">Company Name</label>
            <Input 
              placeholder="Acme Inc." 
              required 
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="bg-background"
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-sm font-medium ml-1">Phone Number</label>
            <Input 
              type="tel" 
              placeholder="+1 (555) 000-0000" 
              required 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="bg-background"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-lg mt-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Apply for Access <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-foreground/50 mt-4">
            <Lock className="h-3 w-3" />
            <span>Your information is secure and encrypted.</span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
