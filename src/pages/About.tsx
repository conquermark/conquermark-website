import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Users, Lightbulb, TrendingUp } from "lucide-react";

export default function About() {
  const stats = [
    { number: "100+", label: "Products Launched" },
    { number: "50+", label: "Happy Clients" },
    { number: "$10M+", label: "Revenue Generated" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success by your success. Every decision is guided by data and focused on achieving your business goals."
    },
    {
      icon: Users,
      title: "Partnership Mindset",
      description: "We're not just a vendor - we're your partner. Your success is our success, which is why we offer equity partnerships."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends and best practices to deliver cutting-edge solutions that give you a competitive advantage."
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Building is just the beginning. We help you validate, launch, and scale with strategic growth marketing."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We Make Your Idea Real and Sellable
            </h1>
            <p className="text-xl text-foreground/70">
              Conquermark is your end-to-end partner for product development and growth. From idea validation to market launch and scaling, we handle everything so you can focus on building your business.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-foreground/70">
            <p>
              Conquermark was founded by experienced product builders and growth marketers who saw the same pattern repeated: great ideas failing not because of the idea itself, but because of poor execution, lack of validation, or ineffective go-to-market strategy.
            </p>
            <p>
              We've been on both sides - as founders building our own products and as consultants helping others build theirs. We know the challenges: limited budgets, tight timelines, technical uncertainty, and the pressure to get it right the first time.
            </p>
            <p>
              That's why we created Conquermark - a one-stop partner that handles everything from customer research and MVP development to launch marketing and growth optimization. We don't just build products; we help you build successful businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx}>
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-foreground/70">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Team</h2>
          <p className="text-lg text-foreground/70 text-center mb-12">
            We're a distributed team of product designers, developers, and growth marketers with experience at leading tech companies and successful startups. We've built products used by millions and helped dozens of startups go from idea to revenue.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Product", "Design", "Engineering", "Growth"].map((dept, idx) => (
              <div key={idx} className="text-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-3 flex items-center justify-center text-3xl">
                  {dept[0]}
                </div>
                <div className="font-semibold">{dept}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how we can help you build and launch your product.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
