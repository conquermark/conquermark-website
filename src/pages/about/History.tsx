import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, Users, TrendingUp, Rocket, ArrowRight, Building, Award, Globe } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function History() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded by two developers with a vision to help startups succeed. Started with our first client project from a small co-working space.",
      icon: Rocket,
      color: "blue"
    },
    {
      year: "2020",
      title: "First 10 Clients",
      description: "Delivered 10 successful MVP projects. Built our core team of 5 talented developers and designers. Established our proven methodology.",
      icon: Users,
      color: "green"
    },
    {
      year: "2021",
      title: "Scaling Up",
      description: "Reached 50+ clients and expanded team to 15 members. Launched our AI automation services. Won our first industry award from Clutch.",
      icon: TrendingUp,
      color: "purple"
    },
    {
      year: "2022",
      title: "Major Growth",
      description: "Crossed 100 projects delivered. Team grew to 30+ members across 5 countries. Achieved $1M in annual revenue. Featured in TechCrunch.",
      icon: Building,
      color: "orange"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Delivered 200+ projects. Expanded to 50+ team members. Achieved ISO 9001 and SOC 2 certifications. Won 15+ industry awards.",
      icon: Award,
      color: "yellow"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Serving 500+ clients worldwide. Team of 75+ professionals. Launched funding assistance and accounting services. $5M+ revenue generated for clients.",
      icon: Globe,
      color: "red"
    }
  ];

  const stats = [
    { number: "2019", label: "Founded" },
    { number: "500+", label: "Clients Served" },
    { number: "75+", label: "Team Members" },
    { number: "$50M+", label: "Client Revenue" }
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-yellow-100 text-yellow-600",
    red: "bg-red-100 text-red-600"
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="container relative z-10">
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
              <span className="text-primary-foreground">Our History</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Journey from Startup to Scale
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              From a small team with a big vision to a global partner for hundreds of successful businesses. This is our story.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-accent mb-1">{stat.number}</div>
                  <div className="text-lg font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Founding Story</h2>
              <p className="text-xl text-foreground/70">
                How two developers turned frustration into opportunity
              </p>
            </div>

            <Card className="mb-12">
              <CardContent className="pt-8 pb-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                    In 2019, two software developers were frustrated watching talented founders struggle to bring their ideas to life. They saw brilliant concepts fail because of poor execution, wrong technology choices, or lack of proper validation.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                    They knew there had to be a better way. A partner who could not only build software but also validate ideas, design user experiences, and help founders actually reach customers. Someone who understood both the technical and business sides of product development.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                    That is how Conquermark was born. Not as just another development agency, but as a true partner for founders. A team that would be invested in client success from day one.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    Five years later, we have helped over 500 businesses turn their ideas into successful products. Our clients have raised millions in funding, generated over $50M in revenue, and built products that serve millions of users worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-foreground/70">
                Key milestones that shaped who we are today
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover:shadow-xl transition-all">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${colorClasses[milestone.color]}`}>
                          <milestone.icon className="w-10 h-10" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-accent mb-2">{milestone.year}</div>
                        <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              We are just getting started. Our vision is to become the most trusted partner for entrepreneurs worldwide. To help 10,000 businesses turn their ideas into successful products by 2030. To create technology that makes a real difference in people's lives.
            </p>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Every day, we work toward that vision. One client, one project, one success story at a time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of successful founders who chose Conquermark as their partner.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setContactModalOpen(true)}
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
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
