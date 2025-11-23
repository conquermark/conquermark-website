import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Target, Zap, Heart, Users, Lightbulb, Shield, TrendingUp, Award } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Values() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Customer Success First",
      description: "We measure our success by the success of the products we help launch. Your win is our win. Every decision we make starts with one question: How does this benefit our clients? We celebrate your milestones as our own and take pride in the long-term relationships we build.",
      quote: "I've never worked with a team that cares this much about our success.",
      author: "Sarah Chen, Founder"
    },
    {
      icon: Zap,
      title: "Quality Over Speed",
      description: "While we move fast, we never compromise on quality. Every product we build is crafted with care and attention to detail. We believe that rushing leads to technical debt, poor user experiences, and costly fixes. Our code is clean, our designs are thoughtful, and our testing is thorough.",
      quote: "They delivered fast, but the quality was exceptional. No shortcuts.",
      author: "Michael Rodriguez, CTO"
    },
    {
      icon: Shield,
      title: "Transparency & Honesty",
      description: "We communicate openly about timelines, challenges, and costs. No surprises, no hidden fees. If something goes wrong, we tell you immediately and work together on solutions. Our contracts are clear, our pricing is straightforward, and our updates are frequent and honest.",
      quote: "Finally, a team that tells it like it is. No sugarcoating, just facts.",
      author: "David Park, Product Manager"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "The tech landscape evolves rapidly. We stay ahead by constantly learning and adopting the best tools and practices. Every team member has a learning budget, attends conferences, and shares knowledge internally. We experiment with new technologies before recommending them to clients.",
      quote: "They knew about the latest frameworks before I did. Always learning.",
      author: "Emily Watson, Tech Lead"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great products are built through partnership. We work closely with you at every step, treating your project as our own. We believe in co-creation, not just execution. Your insights combined with our expertise create the best outcomes. We listen more than we talk.",
      quote: "It felt like they were part of our team, not just a vendor.",
      author: "James Liu, CEO"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to solve problems in ways that give you a competitive edge. Innovation isn't just about using the latest tools - it's about thinking differently. We challenge assumptions, explore unconventional approaches, and find elegant solutions to complex problems.",
      quote: "They proposed a solution we never would have thought of. Game changer.",
      author: "Rachel Green, Innovation Director"
    },
    {
      icon: Heart,
      title: "Empathy & Understanding",
      description: "We take time to understand your business, your users, and your challenges. Technology is just a tool - what matters is solving real human problems. We conduct user research, ask tough questions, and design with empathy. Every feature we build serves a genuine need.",
      quote: "They understood our users better than we did. True empathy.",
      author: "Alex Thompson, UX Lead"
    },
    {
      icon: Award,
      title: "Excellence in Execution",
      description: "We don't just start projects - we finish them exceptionally well. Our track record speaks for itself: 98% client satisfaction, 500+ successful launches, zero projects abandoned. We follow through on commitments, exceed expectations, and deliver results that make a real business impact.",
      quote: "They delivered exactly what they promised, on time, on budget.",
      author: "Maria Garcia, Operations Director"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link href="/"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Home</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <Link href="/about"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">About</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground">Our Values</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Core Values</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              The principles that guide everything we do. These aren't just words on a wall - they're the foundation of how we work, make decisions, and build relationships with our clients and team.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-sm text-muted-foreground">Core Values</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">75+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These values shape our culture, guide our decisions, and define how we serve our clients. They're lived every day by every team member.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Card key={idx} className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-accent to-accent/80 rounded-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                        </div>
                      </div>
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {value.description}
                      </p>
                      <div className="border-l-4 border-accent/30 pl-4 py-2 bg-muted/30 rounded-r">
                        <p className="text-sm italic text-foreground/70 mb-2">"{value.quote}"</p>
                        <p className="text-xs text-muted-foreground font-medium">- {value.author}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Live Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How We Live Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">In Client Relationships</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li>• Weekly progress updates with full transparency</li>
                    <li>• Direct access to project leads and developers</li>
                    <li>• Honest timelines and realistic expectations</li>
                    <li>• Proactive problem-solving and communication</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">In Team Culture</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li>• Monthly learning days for skill development</li>
                    <li>• Open feedback culture with regular retrospectives</li>
                    <li>• Recognition programs for living our values</li>
                    <li>• Collaborative decision-making processes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">In Product Development</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li>• User research before every major feature</li>
                    <li>• Comprehensive testing and quality assurance</li>
                    <li>• Code reviews and pair programming</li>
                    <li>• Continuous integration and deployment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">In Business Operations</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li>• Clear contracts with no hidden fees</li>
                    <li>• Fair pricing based on value delivered</li>
                    <li>• Ethical business practices and partnerships</li>
                    <li>• Commitment to environmental sustainability</li>
                  </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Work With a Values-Driven Team</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Experience the difference that strong values make. Let's build something exceptional together.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
