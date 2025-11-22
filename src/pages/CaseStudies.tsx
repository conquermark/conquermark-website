import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Mobile App Launch Success",
      client: "FinTech Startup",
      industry: "Financial Technology",
      challenge: "Launch a mobile banking app in a competitive market",
      results: [
        { icon: Users, label: "50,000 Users", value: "in 6 months" },
        { icon: TrendingUp, label: "3x Revenue", value: "growth YoY" },
        { icon: DollarSign, label: "$2M Funding", value: "raised" }
      ],
      description: "How we helped a fintech startup validate their idea, build an MVP, and scale to 50,000 users with strategic growth marketing.",
      href: "/case-studies/app-launch",
      image: "📱"
    },
    {
      title: "E-commerce Growth Success",
      client: "Fashion Retailer",
      industry: "E-commerce",
      challenge: "Increase online sales and improve conversion rates",
      results: [
        { icon: TrendingUp, label: "3x Revenue", value: "in 12 months" },
        { icon: Users, label: "250% Traffic", value: "increase" },
        { icon: DollarSign, label: "45% Lower", value: "CAC" }
      ],
      description: "Complete website redesign, SEO optimization, and paid advertising strategy that tripled revenue in one year.",
      href: "/case-studies/ecommerce-growth",
      image: "🛍️"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-foreground/70">
              Real results from real clients. See how we've helped startups and SMBs build, launch, and grow successful digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="overflow-hidden border-2 hover:border-accent transition-colors">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-12">
                    <div className="text-9xl">{study.image}</div>
                  </div>
                  <CardContent className="p-8 md:p-12">
                    <div className="text-sm font-semibold text-accent mb-2">{study.industry}</div>
                    <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                    <p className="text-foreground/70 mb-6">{study.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      {study.results.map((result, ridx) => {
                        const Icon = result.icon;
                        return (
                          <div key={ridx} className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                              <div className="font-bold text-lg">{result.label}</div>
                              <div className="text-sm text-foreground/70">{result.value}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <Link href={study.href}>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
