import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Smartphone,
  Globe,
  Zap,
  TrendingUp,
  Target,
  PenTool,
  Rocket,
  DollarSign,
  ArrowRight
} from "lucide-react";
import ClientLogos from "@/components/ClientLogos";

export default function Services() {
  const services = [
    {
      icon: Target,
      title: "Product Validation & Go-to-Market",
      description: "Validate your idea before building. Customer research, landing page tests, and strategic go-to-market planning.",
      features: ["Customer Interviews", "Landing Page Tests", "Market Research", "GTM Strategy"],
      href: "/services/product-validation"
    },
    {
      icon: PenTool,
      title: "Wireframing & UX Design",
      description: "User-centered design that converts. From wireframes to high-fidelity prototypes and design systems.",
      features: ["User Research", "Wireframes", "UI/UX Design", "Prototyping"],
      href: "/services/wireframing-ux"
    },
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Build your minimum viable product fast. Validate assumptions and get user feedback before full-scale development.",
      features: ["Rapid Prototyping", "Core Features", "User Testing", "Iteration"],
      href: "/services/mvp-development"
    },
    {
      icon: Zap,
      title: "No-Code Development",
      description: "Rapid MVP development using no-code platforms. Get to market fast without compromising on quality or functionality.",
      features: ["Bubble", "Webflow", "Airtable", "Zapier Integration"],
      href: "/services/no-code"
    },
    {
      icon: Globe,
      title: "Web App Development",
      description: "Modern, responsive web applications built with cutting-edge technologies for performance and conversion.",
      features: ["React & Next.js", "Responsive Design", "SEO Optimized", "E-commerce"],
      href: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, cross-platform solutions with React Native and Flutter. From concept to App Store launch.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
      href: "/services/mobile-app"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven growth marketing strategies to acquire, engage, and retain customers across all digital channels.",
      features: ["Paid Ads (Google, Meta)", "SEO & Content", "Email Marketing", "Analytics"],
      href: "/services/digital-marketing"
    },
    {
      icon: DollarSign,
      title: "Funding & Pitch Preparation",
      description: "Prepare for fundraising success. Pitch deck design, financial modeling, and investor outreach strategy.",
      features: ["Pitch Deck Design", "Financial Models", "Investor Research", "Demo Preparation"],
      href: "/services/funding-pitch"
    },
    {
      icon: DollarSign,
      title: "Accounting Handling",
      description: "Focus on building your product while we handle your books, taxes, and financial reporting.",
      features: ["Bookkeeping", "Tax Preparation", "Financial Reports", "CFO Advisory"],
      href: "/services/accounting-handling"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              End-to-End Product Services
            </h1>
            <p className="text-xl text-foreground/70">
              From idea validation to market launch and growth, we provide all the services you need to build and scale successful digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="hover:shadow-xl transition-shadow border-2 hover:border-accent">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                    <p className="text-foreground/70 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos 
        title="Trusted by Growing Companies"
        subtitle="Join successful founders who've built and launched with Conquermark"
      />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book a free consultation to discuss your product idea and get a custom proposal.
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
