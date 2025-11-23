import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Users, Code, BookOpen, Heart, Leaf, Globe, Rocket, GraduationCap } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function CommunityImpact() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const initiatives = [
    {
      icon: Rocket,
      title: "Startup Mentorship Program",
      description: "We provide free mentorship to early-stage founders, helping them validate ideas, refine their pitch, and navigate the challenges of building a product. Our team dedicates 10 hours per month to one-on-one mentorship sessions.",
      impact: "50+ startups mentored, 12 successfully funded",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Pro Bono Development",
      description: "We partner with nonprofits and social enterprises to build technology solutions that address social and environmental challenges. Selected organizations receive up to $50,000 in free development work annually.",
      impact: "10+ nonprofits supported, $500K+ donated",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: GraduationCap,
      title: "Tech Education Workshops",
      description: "We host free workshops and webinars on product development, UX design, and growth marketing to empower the next generation of builders. Topics range from beginner coding to advanced product strategy.",
      impact: "500+ workshop attendees, 24 events per year",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Code,
      title: "Open Source Contributions",
      description: "We actively contribute to open source projects and maintain several libraries used by thousands of developers worldwide. Our team dedicates 5% of work time to open source contributions and community support.",
      impact: "15+ projects maintained, 10K+ GitHub stars",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Diversity in Tech Scholarships",
      description: "We sponsor coding bootcamp scholarships for underrepresented groups in technology. Our scholarship program covers full tuition and provides mentorship throughout the program and job search.",
      impact: "25 scholarships awarded, 80% job placement",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "We operate as a carbon-neutral company through remote-first operations, renewable energy credits, and monthly donations to environmental organizations. We help clients build sustainable, energy-efficient applications.",
      impact: "100% carbon neutral since 2020",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const partners = [
    {
      name: "Code for Good",
      description: "Annual hackathon supporting local nonprofits",
      contribution: "Lead sponsor and volunteer organizer"
    },
    {
      name: "Girls Who Code",
      description: "Teaching young women programming skills",
      contribution: "Monthly workshop instructors"
    },
    {
      name: "Tech Talent Pipeline",
      description: "Connecting bootcamp grads with opportunities",
      contribution: "Hiring partner and curriculum advisor"
    },
    {
      name: "Climate Action Tech",
      description: "Building technology for environmental impact",
      contribution: "Pro bono development partner"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10">
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
              Making a positive difference through technology, mentorship, and social responsibility. We believe success means lifting others up and using our skills to create lasting positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$500K+</div>
              <div className="text-sm text-muted-foreground">Pro Bono Work Donated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Startups Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Workshop Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-sm text-muted-foreground">Scholarships Awarded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Initiatives</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to using our expertise and resources to create positive impact in the tech community and beyond.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {initiatives.map((initiative, idx) => {
                const Icon = initiative.icon;
                return (
                  <Card key={idx} className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-br ${initiative.color} rounded-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{initiative.title}</h3>
                        </div>
                      </div>
                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {initiative.description}
                      </p>
                      <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        {initiative.impact}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Community Partners</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              We collaborate with organizations that share our commitment to making technology more accessible and impactful.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Globe className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                        <p className="text-foreground/70 mb-2">{partner.description}</p>
                        <p className="text-sm text-accent font-medium">{partner.contribution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Get Involved */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get Involved</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Attend a Workshop</h3>
                  <p className="text-foreground/70 mb-4">
                    Join our free monthly workshops on product development and design.
                  </p>
                  <Button variant="outline" onClick={() => setContactModalOpen(true)}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Apply for Mentorship</h3>
                  <p className="text-foreground/70 mb-4">
                    Early-stage founders can apply for our free mentorship program.
                  </p>
                  <Button variant="outline" onClick={() => setContactModalOpen(true)}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Nonprofit Partner</h3>
                  <p className="text-foreground/70 mb-4">
                    Nonprofits can apply for pro bono development support.
                  </p>
                  <Button variant="outline" onClick={() => setContactModalOpen(true)}>
                    Partner With Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making an Impact</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Whether you're a startup founder, nonprofit leader, or aspiring developer, we'd love to support your journey.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
