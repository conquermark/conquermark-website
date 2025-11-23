import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Users, Globe, Heart, Shield, Award, CheckCircle, Target, Briefcase } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Equality() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const initiatives = [
    {
      icon: Users,
      title: "Inclusive Hiring Practices",
      description: "We actively recruit from diverse talent pools, partner with organizations supporting underrepresented groups, and use blind resume screening to reduce unconscious bias. Our interview panels are diverse, and we provide accommodations for all candidates.",
      actions: [
        "Partnerships with diversity-focused bootcamps",
        "Blind resume screening process",
        "Diverse interview panels",
        "Flexible interview accommodations"
      ]
    },
    {
      icon: Award,
      title: "Equal Pay Commitment",
      description: "We conduct annual pay equity audits to ensure fair compensation across all demographics. Our salary bands are transparent, and pay is based on role, experience, and performance - never on gender, race, or background.",
      actions: [
        "Annual pay equity audits",
        "Transparent salary bands",
        "Performance-based compensation",
        "Regular market benchmarking"
      ]
    },
    {
      icon: Heart,
      title: "Employee Resource Groups",
      description: "We support employee-led groups that foster community, provide mentorship, and advocate for inclusive policies. Each group receives budget and leadership support to organize events and initiatives.",
      actions: [
        "Women in Tech group",
        "LGBTQ+ allies network",
        "Cultural heritage celebrations",
        "Mental health advocates"
      ]
    },
    {
      icon: Target,
      title: "Diversity Goals & Accountability",
      description: "We set measurable diversity goals and report progress quarterly. Leadership compensation is tied to diversity metrics, ensuring accountability at the highest levels of the organization.",
      actions: [
        "Quarterly diversity reporting",
        "Leadership accountability metrics",
        "Public transparency commitments",
        "Third-party audits"
      ]
    },
    {
      icon: Briefcase,
      title: "Career Development Programs",
      description: "We provide mentorship, sponsorship, and leadership development programs specifically designed to support underrepresented groups in advancing their careers and reaching leadership positions.",
      actions: [
        "Leadership development programs",
        "Mentorship matching",
        "Sponsorship for promotions",
        "Skills training opportunities"
      ]
    },
    {
      icon: Shield,
      title: "Anti-Discrimination Policies",
      description: "We maintain zero-tolerance policies for discrimination and harassment. All employees receive training, and we have clear reporting channels with protection for whistleblowers.",
      actions: [
        "Zero-tolerance policy enforcement",
        "Anonymous reporting channels",
        "Regular training programs",
        "Third-party investigation process"
      ]
    }
  ];

  const commitments = [
    {
      title: "Accessibility First",
      description: "All our products and workspaces are designed with accessibility in mind, following WCAG 2.1 AA standards and providing accommodations for team members with disabilities."
    },
    {
      title: "Flexible Work Arrangements",
      description: "We offer remote work, flexible hours, and part-time options to accommodate different life circumstances, caregiving responsibilities, and work preferences."
    },
    {
      title: "Inclusive Benefits",
      description: "Our benefits package includes parental leave for all parents, mental health support, gender-affirming care, and support for diverse family structures."
    },
    {
      title: "Cultural Celebrations",
      description: "We recognize and celebrate holidays and observances from diverse cultures and religions, providing floating holidays so everyone can observe what matters to them."
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
              <span className="text-primary-foreground">Equality & Diversity</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Equality & Diversity</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Building an inclusive workplace where everyone can thrive. Diversity isn't just a goal - it's our strength, our competitive advantage, and the right thing to do.
            </p>
          </div>
        </div>
      </section>

      {/* Diversity Stats */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <div className="text-sm text-muted-foreground">Women in Leadership</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">35+</div>
              <div className="text-sm text-muted-foreground">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Pay Equity Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Employee Resource Groups</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Commitment to Inclusion</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              At Conquermark, we believe that diverse teams build better products. We are committed to creating an inclusive environment where people of all backgrounds, identities, and experiences feel welcome, valued, and empowered to do their best work.
            </p>
            <Card className="border-2 border-accent/30 bg-accent/5">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Equal Opportunity Employer</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We are an equal opportunity employer and do not discriminate based on race, color, religion, gender, gender identity, sexual orientation, national origin, age, disability, veteran status, or any other protected characteristic. We actively seek to build a team that reflects the diversity of the communities we serve and the clients we support.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Initiatives Grid */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {initiatives.map((initiative, idx) => {
                const Icon = initiative.icon;
                return (
                  <Card key={idx} className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{initiative.title}</h3>
                        </div>
                      </div>
                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {initiative.description}
                      </p>
                      <div className="space-y-2">
                        {initiative.actions.map((action, actionIdx) => (
                          <div key={actionIdx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm text-foreground/70">{action}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Commitments */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Beyond the Basics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{commitment.title}</h3>
                    <p className="text-foreground/70">{commitment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Education */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Continuous Learning</h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  We provide regular training on unconscious bias, inclusive leadership, and cultural competency to ensure our team continues to grow in their understanding and practice of diversity and inclusion. All employees complete diversity training during onboarding and participate in ongoing workshops throughout the year.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Training Completion</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">12+</div>
                    <div className="text-sm text-muted-foreground">Hours Per Year</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-2">4.8/5</div>
                    <div className="text-sm text-muted-foreground">Training Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/30 bg-accent/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Questions or Concerns?</h3>
                <p className="text-foreground/70 mb-6">
                  If you have questions about our diversity and inclusion practices, or if you experience discrimination, please contact our dedicated team. All reports are taken seriously and investigated thoroughly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:diversity@conquermark.com" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
                  >
                    diversity@conquermark.com
                  </a>
                  <Button variant="outline" onClick={() => setContactModalOpen(true)}>
                    Anonymous Reporting
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Inclusive Team</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We're always looking for talented people from diverse backgrounds to join our mission.
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
