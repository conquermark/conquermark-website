import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Users, TrendingUp, DollarSign, Calendar } from "lucide-react";

export default function AppLaunch() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-semibold text-accent mb-4">CASE STUDY • FINTECH</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mobile Banking App Launch: 0 to 50,000 Users
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              How we helped a fintech startup validate their idea, build an MVP, and scale to 50,000 users in 6 months with strategic product development and growth marketing.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="text-sm">6 months</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm">50,000 users</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-sm">3x revenue growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, label: "50,000 Users", description: "Acquired in 6 months" },
              { icon: TrendingUp, label: "3x Revenue", description: "Year-over-year growth" },
              { icon: DollarSign, label: "$2M Funding", description: "Series A raised" }
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

      {/* Challenge */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Challenge</h2>
          <p className="text-lg text-foreground/70 mb-6">
            A fintech startup had a vision for a mobile banking app targeting millennials and Gen Z, but faced significant challenges: intense competition from established banks and neobanks, uncertainty about product-market fit, limited technical resources, and a tight timeline to launch before running out of runway.
          </p>
          <p className="text-lg text-foreground/70">
            They needed a partner who could validate their idea, build a production-ready app quickly, and help them acquire their first customers cost-effectively.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Approach</h2>
          <div className="space-y-8">
            {[
              {
                title: "1. Validation (Weeks 1-2)",
                items: [
                  "Conducted 30 customer interviews with target demographic",
                  "Built landing page and ran paid traffic tests",
                  "Validated core value proposition and pricing",
                  "Identified must-have features for MVP"
                ]
              },
              {
                title: "2. Design & Build (Weeks 3-10)",
                items: [
                  "Created user flows and wireframes based on research",
                  "Designed beautiful, intuitive UI with strong brand identity",
                  "Built native iOS and Android apps with React Native",
                  "Integrated with banking APIs and payment processors"
                ]
              },
              {
                title: "3. Launch (Weeks 11-12)",
                items: [
                  "Beta testing with 100 early users",
                  "App Store and Play Store optimization",
                  "PR campaign and influencer partnerships",
                  "Paid acquisition campaigns on Meta and Google"
                ]
              },
              {
                title: "4. Growth (Months 4-6)",
                items: [
                  "Optimized onboarding flow (improved conversion by 40%)",
                  "Implemented referral program (25% of new users from referrals)",
                  "Scaled paid acquisition while maintaining CAC under $15",
                  "Added features based on user feedback and data"
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

      {/* Testimonial */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <Card className="border-2 border-accent">
            <CardContent className="p-8 md:p-12">
              <p className="text-2xl font-semibold mb-6 italic">
                "Conquermark didn't just build our app - they helped us validate the idea, refine our strategy, and scale to 50,000 users. Their expertise in both product development and growth marketing was invaluable."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <div className="font-bold">Sarah Chen</div>
                  <div className="text-sm text-foreground/70">CEO, FinTech Startup</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how we can help you build and launch your product.
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
