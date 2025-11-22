import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
  title?: string;
  description?: string;
}

export default function ContactModal({
  open,
  onOpenChange,
  defaultService = "",
  title = "Get Started Today",
  description = "Tell us about your project and we'll get back to you within 24 hours."
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: defaultService,
    budget: "",
    timeline: "",
    message: "",
    agreeToContact: false
  });

  const services = [
    "Product Validation",
    "Wireframing & UX",
    "MVP Development",
    "No-Code Development",
    "Web App Development",
    "Mobile App Development",
    "Digital Marketing",
    "Funding & Pitch",
    "Accounting Handling"
  ];

  const budgetRanges = [
    "Under $10k",
    "$10k - $25k",
    "$25k - $50k",
    "$50k - $100k",
    "$100k+"
  ];

  const timelines = [
    "ASAP",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Just exploring"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToContact) {
      toast.error("Please agree to be contacted");
      return;
    }

    // In production, this would send to your backend/CRM
    console.log("Form submission:", formData);
    
    toast.success("Thanks! We'll review your submission and email you within 24 hours.");
    
    // Reset form and close modal
    setFormData({
      name: "",
      email: "",
      company: "",
      service: defaultService,
      budget: "",
      timeline: "",
      message: "",
      agreeToContact: false
    });
    onOpenChange(false);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@company.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              placeholder="Your Company Name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interested In *</Label>
            <Select
              value={formData.service}
              onValueChange={(value) => handleChange("service", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range (Optional)</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleChange("budget", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline (Optional)</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => handleChange("timeline", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelines.map((timeline) => (
                    <SelectItem key={timeline} value={timeline}>
                      {timeline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Brief Project Summary *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              rows={4}
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="agree"
              checked={formData.agreeToContact}
              onCheckedChange={(checked) => handleChange("agreeToContact", checked as boolean)}
              required
            />
            <label
              htmlFor="agree"
              className="text-sm text-foreground/70 leading-tight cursor-pointer"
            >
              I agree to be contacted by Conquermark regarding my project inquiry. 
              We respect your privacy and will never share your information.
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            size="lg"
          >
            Submit Request
          </Button>

          <p className="text-xs text-center text-foreground/60">
            We typically respond within 24 hours during business days.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
