import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Awards() {
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
              <span className="text-primary-foreground">Awards & Recognition</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Awards & Recognition</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Recognized for excellence in product development and client success.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { year: "2024", award: "Top Product Development Agency", org: "Clutch" },
              { year: "2024", award: "Best Startup Partner", org: "TechCrunch" },
              { year: "2023", award: "Excellence in UX Design", org: "Awwwards" },
              { year: "2023", award: "Top 10 MVP Development Firms", org: "GoodFirms" },
              { year: "2022", award: "Rising Star Agency", org: "The Manifest" },
              { year: "2022", award: "Client Satisfaction Award", org: "UpCity" }
            ].map((item, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl font-bold text-accent mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.award}</h3>
                  <p className="text-foreground/60">{item.org}</p>
                </CardContent>
              </Card>
            ))}
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
