import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function ContactInfo() {
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
              <span className="text-primary-foreground">Contact Info</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Info</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Get in touch with us - we're here to help bring your product to life.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Reach Out</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:hello@conquermark.com" className="text-accent hover:underline">
                    hello@conquermark.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a href="tel:+919876543210" className="text-accent hover:underline">
                    +1 (209) 813-4001
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                  <p className="text-foreground/70">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-foreground/70">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => setContactModalOpen(true)}
                >
                  Send Us a Message
                </Button>
              </CardContent>
            </Card>
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
