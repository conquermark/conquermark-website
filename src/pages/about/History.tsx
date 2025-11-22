import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function History() {
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
              <span className="text-primary-foreground">History</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">History</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Our journey from a small team to a trusted product development partner.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                { year: "2020", title: "Founded", description: "Conquermark was founded by a group of product builders who saw a gap in the market for end-to-end product development services tailored to startups." },
                { year: "2021", title: "First 10 Launches", description: "We helped our first 10 clients launch their MVPs, learning valuable lessons about what it takes to build products that users love." },
                { year: "2022", title: "Team Expansion", description: "Grew to a team of 20+ experts across product strategy, design, development, and marketing." },
                { year: "2023", title: "50+ Products Launched", description: "Reached a major milestone of 50+ successful product launches, with clients raising over $10M in funding." },
                { year: "2024", title: "Industry Recognition", description: "Recognized as a top product development agency by Clutch and featured in TechCrunch for our innovative approach to MVP development." }
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-8">
                  <div className="flex-shrink-0 w-24">
                    <div className="text-3xl font-bold text-accent">{milestone.year}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                    <p className="text-lg text-foreground/70">{milestone.description}</p>
                  </div>
                </div>
              ))}
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
