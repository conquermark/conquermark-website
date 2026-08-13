import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Heart, Leaf, Users, GraduationCap, Briefcase, Globe, Handshake, TrendingUp } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function ConquermarkCares() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const programs = [
    {
      icon: Users,
      title: "Startup Mentorship",
      description: "We offer free 1-on-1 mentorship sessions to early-stage founders, helping them refine their ideas, build their MVPs, and navigate the startup journey. Our team dedicates 10 hours per month to mentorship.",
      impact: "50+ founders mentored",
      action: "Apply for Mentorship",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Pro Bono Development",
      description: "We partner with select nonprofits and social enterprises to build technology solutions at significantly reduced rates or pro bono. We prioritize organizations working on education, healthcare, and environmental causes.",
      impact: "$500K+ in free services",
      action: "Submit Your Nonprofit",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: GraduationCap,
      title: "Tech Education",
      description: "We host free workshops, webinars, and coding bootcamp scholarships to make tech education accessible to everyone. Our team teaches practical skills in product development, design, and marketing.",
      impact: "500+ students taught",
      action: "Join a Workshop",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "We operate as a carbon-neutral company through remote-first operations, renewable energy credits, and monthly donations to environmental organizations. We help clients build sustainable, energy-efficient applications.",
      impact: "100% carbon neutral",
      action: "Learn More",
      color: "from-green-500 to-green-600"
    }
  ];

  const initiatives = [
    {
      category: "Social Impact",
      items: [
        {
          title: "Healthcare Access",
          description: "Built telehealth platform for rural communities, serving 10,000+ patients"
        },
        {
          title: "Education Technology",
          description: "Developed learning management system for underserved schools, reaching 5,000+ students"
        },
        {
          title: "Food Security",
          description: "Created food bank coordination app, distributing 100,000+ meals"
        }
      ]
    },
    {
      category: "Economic Empowerment",
      items: [
        {
          title: "Small Business Support",
          description: "Free website and e-commerce setup for 25+ local businesses"
        },
        {
          title: "Job Training Programs",
          description: "Partnered with workforce development orgs to train 200+ job seekers"
        },
        {
          title: "Microfinance Platform",
          description: "Built lending platform connecting entrepreneurs with investors"
        }
      ]
    },
    {
      category: "Environmental Action",
      items: [
        {
          title: "Carbon Tracking",
          description: "Developed carbon footprint calculator used by 50+ companies"
        },
        {
          title: "Renewable Energy",
          description: "100% renewable energy for all operations and cloud infrastructure"
        },
        {
          title: "Tree Planting",
          description: "Plant 100 trees for every project completed (5,000+ trees planted)"
        }
      ]
    }
  ];

  const partners = [
    { name: "Doctors Without Borders", contribution: "Telehealth platform development" },
    { name: "Teach For America", contribution: "Educational technology solutions" },
    { name: "Feeding America", contribution: "Food distribution coordination system" },
    { name: "Climate Action Network", contribution: "Carbon tracking and reporting tools" },
    { name: "Girls Who Code", contribution: "Coding workshop instruction and mentorship" },
    { name: "Local Food Bank", contribution: "Inventory management and volunteer coordination" }
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
              <span className="text-primary-foreground">Conquermark Cares</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Conquermark Cares</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Giving back through mentorship, education, and pro bono work. We believe in using our skills to make a positive impact on communities, the environment, and the next generation of entrepreneurs.
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
              <div className="text-sm text-muted-foreground">Pro Bono Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Founders Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Trees Planted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission to Give Back</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in using our skills to make a positive impact. Through Conquermark Cares, we dedicate time and resources to support causes we care about and help the next generation of entrepreneurs succeed.
            </p>
            <Card className="border-2 border-accent/30 bg-accent/5">
              <CardContent className="p-8 text-left">
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We commit 10% of our time and resources to social impact initiatives. This includes pro bono development work, mentorship programs, educational workshops, and environmental sustainability efforts. Every team member participates in giving back, and we track our impact quarterly to ensure we're making a real difference.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Programs Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, idx) => {
                const Icon = program.icon;
                return (
                  <Card key={idx} className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-br ${program.color} rounded-lg flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                        </div>
                      </div>
                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                          {program.impact}
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setContactModalOpen(true)}>
                          {program.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Impact Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {initiatives.map((initiative, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold mb-6 text-accent">{initiative.category}</h3>
                  <div className="space-y-6">
                    {initiative.items.map((item, itemIdx) => (
                      <Card key={itemIdx}>
                        <CardContent className="p-6">
                          <h4 className="font-bold mb-2">{item.title}</h4>
                          <p className="text-sm text-foreground/70">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Partners</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              We're proud to work with these organizations to create positive change.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Handshake className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">{partner.name}</h3>
                        <p className="text-sm text-foreground/70">{partner.contribution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Business Practices */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Ethical Business Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Supplier Diversity</h3>
                  <p className="text-foreground/70">
                    We prioritize working with minority-owned, women-owned, and small businesses for our vendor relationships.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Leaf className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Carbon Neutral</h3>
                  <p className="text-foreground/70">
                    We offset 100% of our carbon emissions through renewable energy credits and reforestation projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Fair Labor</h3>
                  <p className="text-foreground/70">
                    We ensure fair wages, benefits, and working conditions for all team members and contractors.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Briefcase className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                  <p className="text-foreground/70">
                    We provide clear, upfront pricing with no hidden fees or surprise charges.
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Whether you're a startup founder, nonprofit leader, or want to support our initiatives, we'd love to hear from you.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
