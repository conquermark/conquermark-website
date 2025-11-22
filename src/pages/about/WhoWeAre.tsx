import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Target, Lightbulb, Rocket, ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function WhoWeAre() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We exist to help entrepreneurs turn ideas into successful products that solve real problems."
    },
    {
      icon: Users,
      title: "Founder-First",
      description: "Every decision we make prioritizes the success and growth of the founders we partner with."
    },
    {
      icon: Lightbulb,
      title: "Innovation-Focused",
      description: "We embrace cutting-edge technology and creative solutions to build products that stand out."
    },
    {
      icon: Rocket,
      title: "Launch-Obsessed",
      description: "Speed matters. We're committed to getting your product to market quickly without sacrificing quality."
    }
  ];

  const team = [
    {
      name: "Product Strategists",
      count: "8+",
      description: "Experts in validation, market research, and go-to-market strategy"
    },
    {
      name: "Developers",
      count: "15+",
      description: "Full-stack engineers specializing in web, mobile, and no-code platforms"
    },
    {
      name: "Designers",
      count: "6+",
      description: "UX/UI designers who craft intuitive, conversion-optimized experiences"
    },
    {
      name: "Growth Marketers",
      count: "5+",
      description: "Digital marketing specialists focused on user acquisition and retention"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link href="/">
                <span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Home</span>
              </Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <Link href="/about">
                <span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">About</span>
              </Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground">Who We Are</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              We're a team of builders, strategists, and growth experts dedicated to helping entrepreneurs launch successful products.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              At Conquermark, we believe every great product starts with a bold idea and the right execution partner. 
              Our mission is to bridge the gap between vision and reality by providing end-to-end product development 
              and growth marketing services that turn concepts into thriving businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-foreground/80">
              A diverse group of experts with one shared goal: your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((role, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">{role.count}</div>
                <h3 className="text-xl font-bold mb-2">{role.name}</h3>
                <p className="text-sm text-foreground/70">{role.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about/careers">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss your product idea and create a roadmap to launch.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </div>
  );
}
