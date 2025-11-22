import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, Trophy } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Careers() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openings = [
    {
      title: "Senior Full-Stack Developer",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable web and mobile applications for startups using React, Node.js, and modern frameworks."
    },
    {
      title: "Product Designer (UX/UI)",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Create beautiful, user-centered designs for web and mobile products from wireframe to final UI."
    },
    {
      title: "Growth Marketing Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Drive user acquisition and retention through data-driven marketing campaigns and optimization."
    },
    {
      title: "Product Strategist",
      location: "Remote",
      type: "Contract",
      description: "Help startups validate ideas, define MVP scope, and create go-to-market strategies."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours, remote-first culture, and unlimited PTO"
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Learn from diverse projects and advance your career rapidly"
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Work with talented, supportive colleagues who care about your success"
    },
    {
      icon: Trophy,
      title: "Competitive Compensation",
      description: "Market-rate salaries, performance bonuses, and equity options"
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
              <span className="text-primary-foreground">Careers</span>
            </nav>
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WE'RE HIRING!
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Build the future of product development with a team that values innovation, collaboration, and your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Work at Conquermark?</h2>
            <p className="text-xl text-foreground/80">
              We invest in our team because great products are built by great people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-foreground/80">
              Explore opportunities to make an impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <p className="text-foreground/70 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => setContactModalOpen(true)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              Don't see the right role? We're always looking for talented people.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setContactModalOpen(true)}
            >
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Apply today and start building products that matter.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
