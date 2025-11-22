import ServicePage from "@/components/ServicePage";
import { TrendingUp, ArrowRight, Brain, Search, Target, Video } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DigitalMarketing() {
  const categories = [
    {
      icon: Brain,
      title: "AI Services",
      count: "7 Services",
      description: "AI consulting, ChatGPT optimization, agent development, and enterprise GEO",
      link: "/digital-marketing/ai/overview",
      color: "from-blue-500 to-violet-500"
    },
    {
      icon: Search,
      title: "SEO & Search Visibility",
      count: "7 Services",
      description: "Generative engine SEO, traditional SEO, enterprise solutions, and local SEO",
      link: "/digital-marketing/seo/overview",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Digital Advertising",
      count: "7 Services",
      description: "PPC management, social media ads, programmatic advertising, and local services",
      link: "/digital-marketing/advertising/overview",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Video,
      title: "Content Marketing",
      count: "7 Services",
      description: "Content strategy, copywriting, social management, and CTV/OTT advertising",
      link: "/digital-marketing/content/overview",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Marketing Services
            </h1>
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Data-driven growth marketing powered by AI. From intelligent automation to advanced analytics, 
              we help you acquire, engage, and retain customers at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/digital-marketing">
                <Button size="lg" className="gap-2">
                  Explore All Digital Marketing Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Main Categories */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Choose from 28 specialized services across 4 main categories, each designed to drive measurable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.title} href={category.link}>
                  <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full border-2 hover:border-primary/50">
                    <CardContent className="p-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-primary font-semibold mb-3">{category.count}</p>
                      <p className="text-foreground/70 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                        View Services
                        <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/digital-marketing">
              <Button size="lg" variant="outline" className="gap-2">
                View Complete Digital Marketing Hub
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Digital Marketing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Digital Marketing Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Measurable ROI</h3>
                  <p className="text-foreground/70">
                    Track every dollar spent and its impact on revenue. Our data-driven approach ensures 
                    you know exactly what's working and what's not.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">AI-Powered Optimization</h3>
                  <p className="text-foreground/70">
                    Leverage cutting-edge AI tools for campaign automation, audience targeting, 
                    and predictive analytics to stay ahead of competition.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Multi-Channel Strategy</h3>
                  <p className="text-foreground/70">
                    Reach your audience wherever they are - search engines, social media, email, 
                    streaming platforms, and emerging channels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Scalable Growth</h3>
                  <p className="text-foreground/70">
                    Start small and scale what works. Our flexible approach grows with your business, 
                    from startup to enterprise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Marketing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and custom strategy tailored to your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/digital-marketing">
                <Button size="lg" variant="secondary" className="gap-2">
                  Explore All Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
