import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Target, Lightbulb, Rocket, ArrowRight, Heart, Globe, Award, TrendingUp, Shield, Zap } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function WhoWeAre() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const corePillars = [
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of technology trends and continuously explore new tools, frameworks, and methodologies to deliver cutting-edge solutions. Innovation is not just about using the latest technology, but about finding the right solution for your unique challenges."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We do not see ourselves as just a vendor or service provider. We are your partner in success. Your goals become our goals, your challenges become our challenges, and your victories become our victories. We invest in your success because we believe in building long-term relationships."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Excellence is not a destination but a continuous journey. We hold ourselves to the highest standards in code quality, design aesthetics, project management, and client communication. Every project, regardless of size, receives our full commitment to excellence."
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Client-First",
      description: "Every decision we make starts with one question: What is best for our client? We prioritize your needs, timeline, and budget above all else.",
      color: "text-red-600 bg-red-50"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "No hidden fees, no surprises, no excuses. We believe in honest communication, clear timelines, and realistic expectations from day one.",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace change and constantly explore new technologies, methodologies, and approaches to deliver better results faster.",
      color: "text-yellow-600 bg-yellow-50"
    },
    {
      icon: Target,
      title: "Integrity",
      description: "We do what we say we will do. Our word is our bond, and we take pride in delivering on our promises consistently.",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great results come from great teamwork. We work closely with you, treating your team as an extension of ours.",
      color: "text-orange-600 bg-orange-50"
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Good enough is never good enough. We push ourselves to deliver exceptional quality in every aspect of our work.",
      color: "text-indigo-600 bg-indigo-50"
    }
  ];

  const leadership = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      bio: "15+ years in product development and business strategy. Previously led digital transformation at Fortune 500 companies.",
      initial: "RK",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Former senior engineer at Google. Expert in scalable architecture and AI/ML integration with 12 years of experience.",
      initial: "SC",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Michael Torres",
      role: "Creative Director",
      bio: "Award-winning designer with a passion for user-centered design. 10+ years creating beautiful, functional interfaces.",
      initial: "MT",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Priya Sharma",
      role: "Head of Strategy",
      bio: "Growth marketing expert who has helped 100+ startups scale. MBA from Stanford, data-driven approach to growth.",
      initial: "PS",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries Served" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background Effect */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

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
              <span className="text-primary-foreground">Who We Are</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming Visions Into Digital Excellence
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl leading-relaxed">
              We are a team of passionate innovators, designers, and developers dedicated to turning your ideas into successful digital products that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Deep Dive */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  At Conquermark, we exist to empower businesses of all sizes to achieve their digital transformation goals. We believe that every great idea deserves exceptional execution, and every business deserves a technology partner who truly cares about their success.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Our mission is built on three core pillars that guide everything we do, from the first consultation to long-term partnership and growth.
                </p>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none shadow-lg">
                  <CardContent className="pt-8 pb-6">
                    <Target className="w-16 h-16 text-accent mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Our North Star</h3>
                    <p className="text-foreground/80">
                      To be the most trusted technology partner for businesses worldwide, delivering solutions that not only meet expectations but exceed them in every measurable way.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Three Core Pillars */}
            <div className="grid md:grid-cols-3 gap-8">
              {corePillars.map((pillar, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <pillar.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-foreground/70">
                The principles that guide our decisions, actions, and relationships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, idx) => (
                <Card 
                  key={idx} 
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                >
                  <CardContent className="pt-6 pb-6">
                    <div className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <value.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Showcase */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-foreground/70">
                Meet the people driving Conquermark's vision forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, idx) => (
                <div key={idx} className="text-center group">
                  <div className="relative mb-4 mx-auto w-32 h-32">
                    <div className={`w-full h-full bg-gradient-to-br ${leader.gradient} rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform`}>
                      {leader.initial}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-accent font-semibold mb-3">{leader.role}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Gallery */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Life at Conquermark</h2>
              <p className="text-xl text-foreground/70">
                A glimpse into our culture, team, and workspace
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden group cursor-pointer">
                  <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-white bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 transition-transform">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Let's discuss how we can help you build and launch your product.
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

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
    </div>
  );
}
