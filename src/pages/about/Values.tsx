import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Values() {
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
              <span className="text-primary-foreground">Company Values</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Company Values</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              The principles that guide everything we do.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { title: "Customer Success First", description: "We measure our success by the success of the products we help launch. Your win is our win." },
              { title: "Quality Over Speed", description: "While we move fast, we never compromise on quality. Every product we build is crafted with care and attention to detail." },
              { title: "Transparency & Honesty", description: "We communicate openly about timelines, challenges, and costs. No surprises, no hidden fees." },
              { title: "Continuous Learning", description: "The tech landscape evolves rapidly. We stay ahead by constantly learning and adopting the best tools and practices." },
              { title: "Collaboration", description: "Great products are built through partnership. We work closely with you at every step, treating your project as our own." },
              { title: "Innovation", description: "We embrace new technologies and creative solutions to solve problems in ways that give you a competitive edge." }
            ].map((value, idx) => (
              <div key={idx} className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-lg text-foreground/70">{value.description}</p>
              </div>
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
