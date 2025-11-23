import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Trophy, Award, Star, ArrowRight, CheckCircle, Shield } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Awards() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const awards = [
    { year: "2024", award: "Top Product Development Agency", org: "Clutch", category: "Development" },
    { year: "2024", award: "Best Startup Partner of the Year", org: "TechCrunch", category: "Innovation" },
    { year: "2024", award: "Excellence in Client Satisfaction", org: "UpCity", category: "Service" },
    { year: "2023", award: "Top 10 MVP Development Firms", org: "GoodFirms", category: "Development" },
    { year: "2023", award: "Excellence in UX Design", org: "Awwwards", category: "Design" },
    { year: "2023", award: "Best Agency for Startups", org: "The Manifest", category: "Innovation" },
    { year: "2022", award: "Rising Star Agency", org: "Clutch", category: "Growth" },
    { year: "2022", award: "Top Rated Development Partner", org: "Trustpilot", category: "Service" },
    { year: "2022", award: "Innovation in AI Integration", org: "Tech Awards", category: "Technology" },
    { year: "2021", award: "Best New Agency", org: "GoodFirms", category: "Growth" },
    { year: "2021", award: "Client Choice Award", org: "Clutch", category: "Service" },
    { year: "2021", award: "Top Performer in Web Development", org: "The Manifest", category: "Development" }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems", icon: Shield },
    { name: "ISO 27001", description: "Information Security Management", icon: Shield },
    { name: "SOC 2 Type II", description: "Security, Availability, Confidentiality", icon: CheckCircle },
    { name: "AWS Partner", description: "Advanced Consulting Partner", icon: Award },
    { name: "Google Cloud Partner", description: "Certified Partner", icon: Award },
    { name: "Microsoft Partner", description: "Gold Competency", icon: Award }
  ];

  const mediaMentions = [
    { outlet: "TechCrunch", title: "How Conquermark is Revolutionizing Startup Development", year: "2024" },
    { outlet: "Forbes", title: "Top Agencies Helping Startups Scale in 2024", year: "2024" },
    { outlet: "VentureBeat", title: "The Rise of AI-Powered Product Development", year: "2023" },
    { outlet: "Inc. Magazine", title: "50 Companies Transforming Tech", year: "2023" },
    { outlet: "Fast Company", title: "Innovation in Software Development", year: "2022" },
    { outlet: "Entrepreneur", title: "Best Partners for Early-Stage Startups", year: "2022" }
  ];

  const stats = [
    { number: "50+", label: "Industry Awards", icon: Trophy },
    { number: "6", label: "Certifications", icon: Shield },
    { number: "20+", label: "Media Features", icon: Star },
    { number: "5.0", label: "Average Rating", icon: Award }
  ];

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
              <span className="text-primary-foreground">Awards & Recognition</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Recognition for Excellence
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Our commitment to quality and client success has earned us recognition from industry leaders and media outlets worldwide.
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
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold mb-1">{stat.number}</div>
                  <div className="text-lg font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Awards</h2>
              <p className="text-xl text-foreground/70">
                Recognized by leading platforms for excellence in development, design, and client service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((item, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <CardContent className="pt-6 pb-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-accent mb-2">{item.year}</div>
                    <h3 className="text-lg font-bold mb-2">{item.award}</h3>
                    <p className="text-foreground/70 mb-2">{item.org}</p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Partnerships</h2>
              <p className="text-xl text-foreground/70">
                Certified and trusted by the world's leading technology providers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <cert.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                        <p className="text-foreground/70 text-sm">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured In</h2>
              <p className="text-xl text-foreground/70">
                Our work and insights have been featured in leading tech publications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mediaMentions.map((mention, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-accent mb-1">{mention.outlet}</div>
                        <h3 className="font-semibold mb-1">{mention.title}</h3>
                        <p className="text-sm text-foreground/60">{mention.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Work with an Award-Winning Team
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of successful clients who trust us to bring their ideas to life.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setContactModalOpen(true)}
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
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
