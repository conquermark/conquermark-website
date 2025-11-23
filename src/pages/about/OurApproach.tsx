import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Pencil, Code, Rocket, TrendingUp, ArrowRight, CheckCircle2, Clock, DollarSign, Users, Zap, Shield } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function OurApproach() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const methodology = [
    {
      icon: Search,
      phase: "01",
      title: "Discovery & Strategy",
      duration: "Week 1-2",
      description: "We begin every project with deep discovery. We want to understand your business, your customers, your competition, and your goals. This is not a quick questionnaire. This is a comprehensive research and strategy phase that sets the foundation for everything that follows.",
      activities: [
        "Stakeholder interviews and workshops",
        "Market research and competitive analysis",
        "User persona development",
        "Technical feasibility assessment",
        "Business model validation",
        "Risk analysis and mitigation planning"
      ],
      deliverables: [
        "Product Requirements Document (PRD)",
        "Market research report",
        "User personas and journey maps",
        "Technical architecture proposal",
        "Project timeline and milestones",
        "Budget breakdown and resource allocation"
      ]
    },
    {
      icon: Pencil,
      phase: "02",
      title: "Design & Prototyping",
      duration: "Week 3-5",
      description: "Design is where your product starts to come alive. Our designers create intuitive, beautiful interfaces that users love. We do not just make things look pretty. We design for conversion, usability, and scalability. Every design decision is backed by research and best practices.",
      activities: [
        "Information architecture and sitemap creation",
        "Wireframing and user flow design",
        "High-fidelity UI design in Figma",
        "Interactive prototype development",
        "Usability testing with real users",
        "Design system and component library creation"
      ],
      deliverables: [
        "Complete wireframes for all screens",
        "High-fidelity mockups",
        "Interactive clickable prototype",
        "Design system documentation",
        "Usability test results and insights",
        "Developer handoff package"
      ]
    },
    {
      icon: Code,
      phase: "03",
      title: "Development & Testing",
      duration: "Week 6-12",
      description: "This is where the magic happens. Our developers build your product using modern, scalable technologies. We follow agile methodology with two-week sprints, giving you regular updates and the ability to provide feedback throughout the process. Quality is built in, not bolted on.",
      activities: [
        "Sprint planning and backlog refinement",
        "Frontend and backend development",
        "API integration and database design",
        "Automated testing implementation",
        "Code reviews and quality assurance",
        "Weekly demo sessions with stakeholders"
      ],
      deliverables: [
        "Clean, documented codebase",
        "Automated test suite (unit, integration, E2E)",
        "API documentation",
        "Admin panel and CMS (if applicable)",
        "Weekly progress reports",
        "Staging environment for testing"
      ]
    },
    {
      icon: Rocket,
      phase: "04",
      title: "Launch & Deployment",
      duration: "Week 13-14",
      description: "Launch day is exciting, but it requires careful planning and execution. We handle everything from server configuration to app store submissions. We set up monitoring, analytics, and support systems to ensure your product launches smoothly and stays healthy.",
      activities: [
        "Production environment setup",
        "Security hardening and SSL configuration",
        "Performance optimization",
        "App store submission (iOS/Android)",
        "Analytics and monitoring setup",
        "Launch checklist execution"
      ],
      deliverables: [
        "Live production website/app",
        "App store listings (if applicable)",
        "Analytics dashboard setup",
        "Monitoring and alerting system",
        "Launch announcement materials",
        "Technical documentation and handover"
      ]
    },
    {
      icon: TrendingUp,
      phase: "05",
      title: "Growth & Optimization",
      duration: "Ongoing",
      description: "Launch is just the beginning. The real work starts when users start using your product. We help you grow through data-driven optimization, A/B testing, and continuous improvements based on real user feedback and behavior.",
      activities: [
        "User behavior analysis",
        "A/B testing and experiments",
        "Conversion rate optimization",
        "Performance monitoring and optimization",
        "Feature prioritization based on data",
        "Monthly strategy and planning sessions"
      ],
      deliverables: [
        "Monthly growth reports",
        "A/B test results and recommendations",
        "Feature enhancement roadmap",
        "Performance optimization reports",
        "User feedback analysis",
        "Quarterly business review"
      ]
    }
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Agile & Transparent",
      description: "We work in two-week sprints with regular demos and updates. You always know what we are working on, what is coming next, and how your budget is being spent. No black boxes, no surprises."
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "We have refined our process over 500+ projects. We know what works and what does not. This means faster delivery without sacrificing quality. Most MVPs launch in 8-12 weeks."
    },
    {
      icon: Shield,
      title: "Quality-Obsessed",
      description: "We do not cut corners. Every line of code is reviewed, every design is tested, every feature is validated. We build products that scale and stand the test of time."
    },
    {
      icon: DollarSign,
      title: "Fixed-Price Options",
      description: "Tired of hourly billing that spirals out of control? We offer fixed-price packages for defined scopes, giving you budget certainty and peace of mind."
    }
  ];

  const technologies = [
    {
      category: "Frontend Development",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      category: "Backend Development",
      tools: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Mobile Development",
      tools: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "PWA"]
    },
    {
      category: "Cloud & DevOps",
      tools: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      category: "AI & Automation",
      tools: ["OpenAI", "LangChain", "TensorFlow", "Zapier", "n8n", "Make"]
    },
    {
      category: "Design & Collaboration",
      tools: ["Figma", "Adobe XD", "Sketch", "Jira", "Slack", "Linear"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

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
              <span className="text-primary-foreground">Our Approach</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              A Proven Process That Delivers Results
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We have refined our methodology over 500+ projects to consistently deliver exceptional products on time and on budget. Here is exactly how we work with you from concept to launch and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Deep Dive */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our 5-Phase Methodology</h2>
              <p className="text-xl text-foreground/70">
                A systematic approach that turns ideas into successful products
              </p>
            </div>

            <div className="space-y-16">
              {methodology.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Phase Number & Icon */}
                    <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {phase.phase}
                      </div>
                      <div className="hidden lg:block w-0.5 h-full bg-gradient-to-b from-blue-300 to-purple-300 ml-10"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <Card className="hover:shadow-xl transition-shadow">
                        <CardContent className="pt-8 pb-6">
                          <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <phase.icon className="w-7 h-7 text-accent" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-3 mb-3">
                                <h3 className="text-2xl md:text-3xl font-bold">{phase.title}</h3>
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {phase.duration}
                                </span>
                              </div>
                              <p className="text-foreground/80 leading-relaxed text-lg">
                                {phase.description}
                              </p>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <div>
                              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-orange-500" />
                                Key Activities
                              </h4>
                              <ul className="space-y-2">
                                {phase.activities.map((activity, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-foreground/70">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                                <Rocket className="w-5 h-5 text-blue-500" />
                                Deliverables
                              </h4>
                              <ul className="space-y-2">
                                {phase.deliverables.map((deliverable, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-foreground/70">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What Makes Us Different</h2>
              <p className="text-xl text-foreground/70">
                Why startups and businesses choose Conquermark over other agencies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <CardContent className="pt-6 pb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-xl text-foreground/70">
                We use modern, proven technologies to build scalable, maintainable products
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((stack, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-lg font-bold mb-4">{stack.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.tools.map((tool, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-default">
                          {tool}
                        </span>
                      ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your idea and create a custom roadmap for success.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setContactModalOpen(true)}
            >
              Schedule Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
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
