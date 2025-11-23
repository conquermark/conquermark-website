import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Users, Trophy, Globe, TrendingUp, Coffee, Award, Shield, DollarSign } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Careers() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const benefits = [
    {
      icon: Globe,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world. We believe talent is everywhere, and great work happens when people have flexibility and autonomy."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and your family. We also provide mental health support and wellness stipends."
    },
    {
      icon: TrendingUp,
      title: "Learning Budget",
      description: "$2,000 per year for courses, conferences, books, and certifications. We invest in your continuous growth and development."
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours and unlimited PTO. We trust you to manage your time and deliver great work without burning out."
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Top-tier salaries that match or exceed industry standards. We pay fairly and transparently based on skills and impact."
    },
    {
      icon: Trophy,
      title: "Performance Bonuses",
      description: "Quarterly bonuses based on company and individual performance. When we win, you win."
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "Work with cutting-edge tools, frameworks, and technologies. We provide the best equipment and software you need."
    },
    {
      icon: Users,
      title: "Career Growth",
      description: "Clear advancement paths with regular reviews and promotions. We promote from within and invest in leadership development."
    },
    {
      icon: Shield,
      title: "Equity Options",
      description: "Share in the company's success with stock options. As we grow, you grow with us."
    },
    {
      icon: Award,
      title: "Team Retreats",
      description: "Annual company retreats in amazing locations. Build relationships, have fun, and recharge together."
    }
  ];

  const openings = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build scalable web and mobile applications using React, Node.js, TypeScript, and modern cloud infrastructure. Work directly with startups to bring their ideas to life."
    },
    {
      title: "Product Designer (UX/UI)",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Create beautiful, user-centered designs for web and mobile products. Conduct user research, create wireframes, and deliver pixel-perfect UI designs in Figma."
    },
    {
      title: "Growth Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive user acquisition and retention through SEO, paid ads, content marketing, and email campaigns. Analyze data and optimize for growth."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Manage cloud infrastructure, CI/CD pipelines, and deployment automation. Ensure high availability, security, and performance of client applications."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Define product strategy, prioritize features, and work with cross-functional teams to deliver products that users love and businesses need."
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Hybrid",
      type: "Full-time",
      description: "Build relationships with potential clients, understand their needs, and present Conquermark's services. Close deals and grow our client base."
    }
  ];

  const hiringProcess = [
    {
      step: "1",
      title: "Apply Online",
      description: "Submit your application through our careers portal. Include your resume, portfolio (for designers/developers), and a brief cover letter explaining why you want to join Conquermark."
    },
    {
      step: "2",
      title: "Initial Screening",
      description: "Our recruiting team will review your application. If you are a good fit, we will schedule a 15-minute phone call to discuss your background, experience, and career goals."
    },
    {
      step: "3",
      title: "Technical/Portfolio Review",
      description: "For technical roles, you will complete a take-home assignment or live coding challenge. Designers will present their portfolio and walk us through their design process."
    },
    {
      step: "4",
      title: "Team Interviews",
      description: "Meet with team members and hiring managers. We will assess cultural fit, collaboration skills, and how you approach problem-solving. This is also your chance to ask questions and learn about us."
    },
    {
      step: "5",
      title: "Final Interview",
      description: "Meet with senior leadership to discuss your role, expectations, and how you can contribute to Conquermark's growth. We will also discuss compensation and benefits."
    },
    {
      step: "6",
      title: "Offer & Onboarding",
      description: "If everything aligns, we will extend an offer. Once you accept, our onboarding team will help you get set up with equipment, tools, and introductions to the team."
    }
  ];

  const cultureValues = [
    {
      title: "Ownership & Accountability",
      description: "We trust you to own your work and make decisions. With ownership comes accountability. We celebrate wins and learn from failures together."
    },
    {
      title: "Collaboration Over Competition",
      description: "We win as a team. No rockstars, no lone wolves. We help each other, share knowledge, and lift each other up."
    },
    {
      title: "Continuous Learning",
      description: "The tech industry moves fast. We encourage curiosity, experimentation, and learning from mistakes. Growth mindset is non-negotiable."
    },
    {
      title: "Customer Obsession",
      description: "Our clients' success is our success. We go above and beyond to deliver value, solve problems, and build long-term relationships."
    }
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
              <span className="text-primary-foreground">Careers</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build Your Career with Conquermark
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join a team of passionate innovators working on exciting projects that make a real impact. We are always looking for talented people who share our values and want to grow with us.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work at Conquermark?</h2>
              <p className="text-xl text-foreground/70">
                We invest in our people because they are our greatest asset
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <CardContent className="pt-6 pb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Culture & Values</h2>
              <p className="text-xl text-foreground/70">
                What it is really like to work at Conquermark
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cultureValues.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-foreground/70">
                Find your perfect role and start making an impact
              </p>
            </div>

            <div className="space-y-4">
              {openings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                        <p className="text-foreground/70 leading-relaxed">{job.description}</p>
                      </div>
                      <Button 
                        className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap"
                        onClick={() => setContactModalOpen(true)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Hiring Process</h2>
              <p className="text-xl text-foreground/70">
                Simple, transparent, and respectful of your time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hiringProcess.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">{phase.description}</p>
                </div>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We are always looking for talented people who share our passion for building great products.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setContactModalOpen(true)}
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
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
