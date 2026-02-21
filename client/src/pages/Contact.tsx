import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something Great
            </h1>
            <p className="text-xl text-foreground/70">
              Book a free consultation to discuss your project. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required className="mt-2" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <select 
                      id="projectType" 
                      required 
                      className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select a service</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="web-development">Web Development</option>
                      <option value="no-code">No-Code Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="product-validation">Product Validation</option>
                      <option value="mvp">MVP Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <select 
                      id="budget" 
                      className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                      <option value="equity">Equity Partnership</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell us about your project *</Label>
                    <Textarea 
                      id="message" 
                      required 
                      rows={5}
                      className="mt-2"
                      placeholder="Describe your project, goals, and timeline..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-foreground/70 mb-8">
                  We're here to help you build and launch successful digital products. Reach out and let's start the conversation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:hello@conquermark.com" className="text-foreground/70 hover:text-accent">
                      hello@conquermark.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+919876543210" className="text-foreground/70 hover:text-accent">
                      +1 (209) 813-4001
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Office</div>
                    <p className="text-foreground/70">
                      San Francisco, CA<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Prefer to schedule a call?</h3>
                  <p className="text-primary-foreground/80 mb-4 text-sm">
                    Book a 30-minute consultation to discuss your project in detail.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={() => toast.info("Calendly integration coming soon!")}
                  >
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
