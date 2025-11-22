import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function CommunityImpact() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link href="/"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Home</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <Link href="/about"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">About</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground">Community Impact</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Community Impact</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Making a positive difference through technology and mentorship.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Initiatives</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Startup Mentorship Program</h3>
                  <p className="text-lg text-foreground/70">
                    We provide free mentorship to early-stage founders, helping them validate ideas, 
                    refine their pitch, and navigate the challenges of building a product.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Tech for Good</h3>
                  <p className="text-lg text-foreground/70">
                    We partner with nonprofits to build technology solutions that address social and 
                    environmental challenges at reduced or pro-bono rates.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Education & Workshops</h3>
                  <p className="text-lg text-foreground/70">
                    We host free workshops and webinars on product development, UX design, and growth 
                    marketing to empower the next generation of builders.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Impact by the Numbers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <p className="text-foreground/70">Startups Mentored</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">10+</div>
                  <p className="text-foreground/70">Nonprofits Supported</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <p className="text-foreground/70">Workshop Attendees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Ready to turn your idea into a successful product?
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
