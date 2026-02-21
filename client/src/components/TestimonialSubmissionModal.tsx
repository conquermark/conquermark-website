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
import { toast } from "sonner";

interface TestimonialSubmissionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TestimonialSubmissionModal({
  open,
  onOpenChange
}: TestimonialSubmissionModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    testimonial: "",
    videoFile: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, this would upload to your backend/storage
    console.log("Testimonial submission:", formData);
    
    toast.success("Thanks for sharing your story! We'll review it and be in touch soon.");
    
    // Reset form and close modal
    setFormData({
      name: "",
      role: "",
      company: "",
      email: "",
      testimonial: "",
      videoFile: null
    });
    onOpenChange(false);
  };

  const handleChange = (field: string, value: string | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 100 * 1024 * 1024) { // 100MB limit
      toast.error("Video file must be under 100MB");
      return;
    }
    handleChange("videoFile", file);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Share Your Story</DialogTitle>
          <DialogDescription>
            Tell us about your experience working with Conquermark. You can submit a written testimonial or upload a 60-second video.
          </DialogDescription>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role">Role *</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
                placeholder="CEO, Founder, etc."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Your Company Name"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="testimonial">Your Testimonial *</Label>
            <Textarea
              id="testimonial"
              value={formData.testimonial}
              onChange={(e) => handleChange("testimonial", e.target.value)}
              placeholder="Share your experience working with Conquermark..."
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="video">Video Testimonial (Optional)</Label>
            <Input
              id="video"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            <p className="text-xs text-foreground/60">
              Upload a 60-second video (max 100MB). MP4, MOV, or WebM format.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            size="lg"
          >
            Submit Testimonial
          </Button>

          <p className="text-xs text-center text-foreground/60">
            By submitting, you agree to let Conquermark use your testimonial in marketing materials.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
