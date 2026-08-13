import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, LucideIcon } from "lucide-react";

interface Challenge {
  title: string;
  description: string;
}

interface Capability {
  name: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface PricingModel {
  name: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  challenges: Challenge[];
  capabilities: Capability[];
  process: ProcessStep[];
  pricingModels: PricingModel[];
  faqs: FAQ[];
  caseStudyTitle?: string;
  caseStudyHref?: string;
}

export default function ServicePage({
  icon: Icon,
  title,
  subtitle,
  description,
  challenges,
  capabilities,
  process,
  pricingModels,
  faqs,
  caseStudyTitle,
  caseStudyHref
}: ServicePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
            </div>
            <p className="text-2xl text-foreground/80 mb-6">{subtitle}</p>
            <p className="text-lg text-foreground/70 mb-8">{description}</p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book a Free Scoping Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Challenges We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {challenges.map((challenge, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                  <p className="text-foreground/70">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">{capability.name}</h3>
                  <p className="text-foreground/70">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Flexible Pricing Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingModels.map((model, idx) => (
              <Card key={idx} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary-foreground">{model.name}</h3>
                  <p className="text-primary-foreground/80">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/pricing">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View Full Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study (if provided) */}
      {caseStudyTitle && caseStudyHref && (
        <section className="py-20 md:py-28">
          <div className="container">
            <Card className="max-w-4xl mx-auto border-2 border-accent">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="text-sm font-semibold text-accent mb-2">SUCCESS STORY</div>
                <h3 className="text-3xl font-bold mb-4">{caseStudyTitle}</h3>
                <Link href={caseStudyHref}>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Read Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something Great
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Schedule a free consultation to discuss your project and get a custom proposal.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book a Free Scoping Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
