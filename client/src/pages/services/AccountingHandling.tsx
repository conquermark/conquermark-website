import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Calculator, FileText, TrendingUp, Shield } from "lucide-react";

export default function AccountingHandling() {
  const features = [
    "Bookkeeping & financial record management",
    "Tax preparation and compliance",
    "Financial reporting and analysis",
    "Payroll processing",
    "Expense tracking and management",
    "CFO advisory services"
  ];

  const process = [
    {
      step: "1",
      title: "Financial Assessment",
      description: "We review your current financial systems and identify areas for improvement."
    },
    {
      step: "2",
      title: "Setup & Integration",
      description: "Implement accounting software and integrate with your existing tools."
    },
    {
      step: "3",
      title: "Ongoing Management",
      description: "Regular bookkeeping, reporting, and strategic financial guidance."
    }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Accurate Books",
      description: "Clean, organized financial records that are audit-ready"
    },
    {
      icon: FileText,
      title: "Tax Compliance",
      description: "Stay compliant with tax regulations and maximize deductions"
    },
    {
      icon: TrendingUp,
      title: "Financial Insights",
      description: "Monthly reports and dashboards to track business performance"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify financial risks early and make informed decisions"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Accounting Handling</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Focus on building your product while we handle your books, taxes, and financial reporting.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-accent mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Our Accounting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx}>
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-foreground/70">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof / Case Study Teaser */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-4xl">
          <Card className="border-2 border-accent/20">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">SUCCESS STORY</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Saved 15+ Hours Per Week on Financial Management
                </h3>
                <p className="text-lg text-foreground/70 mb-6">
                  "Conquermark's accounting team took over our books and freed up our time to focus on product development. 
                  Their monthly reports give us clear visibility into our burn rate and runway."
                </p>
                <p className="font-semibold">- SaaS Startup Founder</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What accounting software do you use?",
                a: "We work with QuickBooks, Xero, and FreshBooks. We'll recommend the best fit for your business size and needs."
              },
              {
                q: "How often will I receive financial reports?",
                a: "Monthly reports are standard, with quarterly deep-dives. We can provide weekly reports for fast-growing startups."
              },
              {
                q: "Do you handle tax filing?",
                a: "Yes, we prepare and file business taxes. We also work with your CPA if you prefer to keep tax filing separate."
              },
              {
                q: "What's the typical cost?",
                a: "Pricing depends on transaction volume and complexity. Most startups pay $500-2000/month. Contact us for a custom quote."
              }
            ].map((faq, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
                </CardContent>
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
              Ready to Clean Up Your Books?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get a free financial assessment and custom accounting plan.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
