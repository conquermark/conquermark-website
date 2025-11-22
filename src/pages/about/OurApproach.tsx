import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Pencil, Code, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function OurApproach() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery & Validation",
      description: "We start by understanding your vision, target market, and competitive landscape. Through research and validation exercises, we ensure your idea solves a real problem."
    },
    {
      icon: Pencil,
      number: "02",
      title: "Strategy & Design",
      description: "Our team creates wireframes, user flows, and a comprehensive product roadmap. We define the MVP scope and prioritize features that deliver maximum value."
    },
    {
      icon: Code,
      number: "03",
      title: "Development & Testing",
      description: "We build your product using modern technologies and agile methodologies. Continuous testing ensures quality and allows for iterative improvements."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch & Deployment",
      description: "We handle all technical aspects of launching your product, from app store submissions to web hosting, ensuring a smooth go-live experience."
    },
    {
      icon: TrendingUp,
      number: "05",
      title: "Growth & Optimization",
      description: "Post-launch, we implement growth marketing strategies, analyze user behavior, and continuously optimize to drive acquisition and retention."
    }
  ];

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
              <span className="text-primary-foreground">Our Approach</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Approach</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              A proven, step-by-step process that takes your idea from concept to successful product launch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="mb-16 last:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-4 lg:mb-0">
                      <step.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <div className="lg:col-span-10">
                    <div className="text-6xl font-bold text-accent/20 mb-2">{step.number}</div>
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg text-foreground/70">{step.description}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="h-16 w-px bg-border mx-auto lg:ml-10 mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's map out your product journey together.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
