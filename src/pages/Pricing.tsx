import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Pricing() {
  const packages = [
    {
      name: "Starter",
      tagline: "Perfect for idea validation",
      price: "Custom",
      description: "Validate your idea and build an MVP to test the market",
      features: [
        "Customer discovery interviews (10-15)",
        "Landing page design and development",
        "MVP scoping and feature prioritization",
        "No-code or rapid prototype development",
        "Basic analytics setup",
        "2-4 week delivery"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth",
      tagline: "Full product development",
      price: "Custom",
      description: "Build, launch, and grow your product with end-to-end support",
      features: [
        "Everything in Starter, plus:",
        "Custom web or mobile app development",
        "Professional UI/UX design",
        "Backend and database architecture",
        "App Store / Play Store launch",
        "Go-to-market strategy",
        "Growth marketing (3 months)",
        "8-16 week delivery"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Scale",
      tagline: "Enterprise-grade solutions",
      price: "Custom",
      description: "Dedicated team for complex products and ongoing development",
      features: [
        "Everything in Growth, plus:",
        "Dedicated product team",
        "Advanced features and integrations",
        "Scalable infrastructure",
        "Ongoing development and optimization",
        "Priority support",
        "Custom SLAs",
        "Flexible engagement"
      ],
      cta: "Contact Us",
      popular: false
    }
  ];

  const pricingModels = [
    {
      title: "Fixed Price",
      description: "Well-defined scope with a fixed budget and timeline. Best for projects with clear requirements."
    },
    {
      title: "Time & Materials",
      description: "Flexible engagement billed hourly or by sprint. Best for evolving requirements and ongoing development."
    },
    {
      title: "Retainer",
      description: "Monthly capacity for continuous product development and optimization. Best for long-term partnerships."
    },
    {
      title: "Equity Partnership",
      description: "We invest our expertise in exchange for equity. Best for high-potential startups with limited cash."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Flexible Packages for Every Stage
            </h1>
            <p className="text-xl text-foreground/70">
              Whether you're validating an idea or scaling a product, we have a package that fits your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <Card key={idx} className={pkg.popular ? "border-accent border-2 shadow-xl relative" : "relative"}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-4">{pkg.tagline}</p>
                  <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                  <p className="text-foreground/70 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button 
                      className={pkg.popular ? "w-full bg-accent hover:bg-accent/90 text-accent-foreground" : "w-full"}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      {pkg.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Flexible Pricing Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingModels.map((model, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{model.title}</h3>
                  <p className="text-sm text-foreground/70">{model.description}</p>
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
              Not Sure Which Package is Right?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book a free consultation and we'll create a custom proposal based on your specific needs.
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
