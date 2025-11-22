import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

export default function EcommerceGrowth() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-semibold text-accent mb-4">CASE STUDY • E-COMMERCE</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              E-commerce Redesign: 3x Revenue Growth
            </h1>
            <p className="text-xl text-foreground/70">
              Complete website redesign, SEO optimization, and paid advertising strategy that tripled revenue in 12 months for a fashion retailer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, label: "3x Revenue", description: "In 12 months" },
              { icon: Users, label: "250% Traffic", description: "Organic + paid growth" },
              { icon: DollarSign, label: "45% Lower CAC", description: "Customer acquisition cost" }
            ].map((result, idx) => {
              const Icon = result.icon;
              return (
                <Card key={idx} className="bg-primary-foreground/10 border-primary-foreground/20">
                  <CardContent className="p-8 text-center">
                    <Icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{result.label}</div>
                    <p className="text-primary-foreground/80">{result.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Challenge</h2>
          <p className="text-lg text-foreground/70">
            A fashion e-commerce retailer was struggling with an outdated website, low conversion rates, and high customer acquisition costs. Despite having great products, they were losing sales to competitors with better online experiences.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Approach</h2>
          <div className="space-y-8">
            {[
              {
                title: "Website Redesign",
                items: [
                  "Mobile-first responsive design",
                  "Improved product pages with better imagery",
                  "Streamlined checkout process",
                  "Performance optimization (3x faster load times)"
                ]
              },
              {
                title: "SEO Optimization",
                items: [
                  "Technical SEO audit and fixes",
                  "Product page optimization",
                  "Content marketing strategy",
                  "Link building campaign"
                ]
              },
              {
                title: "Paid Advertising",
                items: [
                  "Google Shopping campaigns",
                  "Meta (Facebook/Instagram) retargeting",
                  "Influencer partnerships",
                  "Email marketing automation"
                ]
              }
            ].map((phase, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready for Similar Results?
            </h2>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
