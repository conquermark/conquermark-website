import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Brain,
  Search,
  Target,
  PenTool,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  Zap,
  BarChart,
  Mail,
  Phone,
} from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { toast } from "sonner";

export default function DigitalMarketing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll send your custom digital marketing proposal within 24 hours.");
      setEmail("");
    }
  };

  const categories = [
    {
      icon: <Brain className="h-12 w-12" />,
      title: "AI Services",
      description: "Harness the power of artificial intelligence to automate workflows, optimize campaigns, and drive unprecedented growth",
      serviceCount: "7 Services",
      gradient: "from-blue-600 to-violet-600",
      link: "/digital-marketing/ai/overview",
      services: [
        "AI Consulting",
        "AI Digital Marketing",
        "ChatGPT Optimization",
        "AI Agent Development",
        "AI & GPT Integration",
        "Enterprise GEO Services"
      ]
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO & Search Visibility",
      description: "Dominate search results across traditional and AI-powered search engines with cutting-edge optimization strategies",
      serviceCount: "7 Services",
      gradient: "from-blue-500 to-cyan-500",
      link: "/digital-marketing/seo/overview",
      services: [
        "Generative Engine SEO",
        "SEO Services",
        "Enterprise SEO",
        "AI Visibility Tracking",
        "Brand Visibility Audit",
        "Local SEO Services"
      ]
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Digital Advertising",
      description: "Maximize ROI with data-driven advertising campaigns across Google, Facebook, LinkedIn, and emerging platforms",
      serviceCount: "7 Services",
      gradient: "from-orange-500 to-red-500",
      link: "/digital-marketing/advertising/overview",
      services: [
        "PPC Management",
        "Enterprise PPC",
        "Local Services Ads",
        "Social Media Advertising",
        "Enterprise Social Ads",
        "Programmatic Advertising"
      ]
    },
    {
      icon: <PenTool className="h-12 w-12" />,
      title: "Content Marketing",
      description: "Create compelling content that attracts, engages, and converts your target audience into loyal customers",
      serviceCount: "7 Services",
      gradient: "from-teal-500 to-green-500",
      link: "/digital-marketing/content/overview",
      services: [
        "Digital Marketing Services",
        "Content Marketing Services",
        "Website Copywriting",
        "Social Media Management",
        "Infographics & Motion Graphics",
        "Connected TV & OTT Advertising"
      ]
    }
  ];

  const stats = [
    { value: "500+", label: "Clients Served", icon: <Users className="h-6 w-6" /> },
    { value: "287%", label: "Average ROI", icon: <TrendingUp className="h-6 w-6" /> },
    { value: "94%", label: "Client Retention", icon: <Award className="h-6 w-6" /> },
    { value: "$50M+", label: "Revenue Generated", icon: <BarChart className="h-6 w-6" /> }
  ];

  const benefits = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Cutting-Edge Technology",
      description: "Access proprietary AI-powered tools and platforms worth $2M+ included in every package"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Experts",
      description: "Work with a team of specialists across AI, SEO, PPC, and content marketing"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Proven Results",
      description: "Join 500+ businesses that have achieved 287% average ROI with our strategies"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Deployment",
      description: "Start seeing results within 30-60 days with our accelerated implementation process"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Transparent Reporting",
      description: "Get detailed monthly reports showing exactly how your investment drives growth"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Industry Recognition",
      description: "Award-winning agency trusted by Fortune 500 companies and fast-growing startups"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>500+ Clients</span>
                </div>
                <div className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Award-Winning</span>
                </div>
                <div className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Transform Your Growth with{" "}
                <span className="text-accent">AI-Powered</span> Digital Marketing
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
                Drive measurable results with cutting-edge strategies across AI, SEO, advertising, and content marketing. Get the competitive edge you need to dominate your market.
              </p>

              {/* Lead Capture Form */}
              <form onSubmit={handleProposalSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white text-gray-900 h-16 text-lg px-6"
                />
                <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-white h-16 px-10 text-lg font-semibold">
                  Get Free Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Contact Options */}
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold text-lg">+1 (209) 813-4001</span>
                </a>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex items-center gap-2 hover:text-accent transition-colors font-semibold text-lg"
                >
                  <Mail className="h-5 w-5" />
                  <span>Talk to an Expert</span>
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center bg-white/95 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-3 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-extrabold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from 28 specialized services across 4 core categories. Each service is designed to deliver measurable results and maximum ROI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 group">
                <Link href={category.link}>
                  <div className={`bg-gradient-to-br ${category.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-extrabold">{category.title}</h3>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {category.serviceCount}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold group-hover:bg-accent group-hover:text-white transition-colors">
                    Explore {category.title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Why Choose Conquermark for Digital Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with an agency that combines cutting-edge technology, proven expertise, and unwavering commitment to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-600">
                Join 500+ businesses that have transformed their growth with our digital marketing services
              </p>
            </div>

            <Card className="p-10 bg-white">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-2xl text-gray-700 mb-8 italic text-center leading-relaxed">
                "Conquermark's digital marketing expertise transformed our business. Their AI-powered strategies and dedicated team helped us achieve 425% ROI in just 6 months. Best investment we've ever made."
              </p>
              <div className="text-center">
                <div className="font-bold text-xl mb-1">Michael Chen</div>
                <div className="text-gray-600 mb-4">CEO, Growth Ventures LLC</div>
                <div className="text-4xl font-extrabold text-primary">+425% ROI</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Transform Your Digital Marketing?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and custom proposal showing exactly how we'll help you achieve your growth goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => setIsContactModalOpen(true)}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg font-semibold h-16 px-12"
            >
              Get Your Free Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg font-semibold h-16 px-12 border-2"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call +1 (209) 813-4001
              </a>
            </Button>
          </div>
          <p className="text-primary-foreground/80">
            No long-term contracts • Flexible pricing • 30-day money-back guarantee
          </p>
        </div>
      </section>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        defaultService="Digital Marketing"
      />
    </div>
  );
}
