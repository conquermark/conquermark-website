import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { 
  Smartphone, Globe, Zap, TrendingUp, CheckCircle2, 
  ArrowRight, Lightbulb, Pencil, Rocket, BarChart3,
  Play, Quote, Mail
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import ClientLogos from "@/components/ClientLogos";
import VideoLightbox from "@/components/VideoLightbox";
import TestimonialSubmissionModal from "@/components/TestimonialSubmissionModal";
import ContactModal from "@/components/ContactModal";
import GetStartedPopup from "@/components/popups/GetStartedPopup";

export default function Home() {
  const [email, setEmail] = useState("");
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");
  const [currentVideoCaption, setCurrentVideoCaption] = useState("");
  const [testimonialModalOpen, setTestimonialModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openVideoLightbox = (testimonial: typeof videoTestimonials[0]) => {
    setCurrentVideo(testimonial.video);
    setCurrentVideoTitle(`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`);
    setCurrentVideoCaption(testimonial.caseNote);
    setVideoLightboxOpen(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! Check your inbox for the MVP Launch Checklist.");
      setEmail("");
    }
  };

  const services = [
    {
      icon: Lightbulb,
      title: "Product Validation",
      description: "Customer interviews, landing tests, and go-to-market strategy",
      link: "/services/product-validation"
    },
    {
      icon: Pencil,
      title: "Wireframing & UX",
      description: "User research, wireframes, and prototypes that get to the heart of user needs",
      link: "/services/wireframing-ux"
    },
    {
      icon: Rocket,
      title: "MVP Development",
      description: "Build and launch MVPs in 4-8 weeks with our rapid development process",
      link: "/services/mvp-development"
    },
    {
      icon: Zap,
      title: "No-Code Development",
      description: "Rapid prototyping and no-code platforms for faster time-to-market",
      link: "/services/no-code"
    },
    {
      icon: Globe,
      title: "Web App Development",
      description: "Modern, fast web applications that convert and scale",
      link: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "iOS, Android, React Native, Flutter - native and cross-platform solutions",
      link: "/services/mobile-app"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Paid ads, SEO, SEM, and growth marketing that drives real results",
      link: "/services/digital-marketing"
    },
    {
      icon: BarChart3,
      title: "Funding & Pitch",
      description: "Pitch decks, financial models, and investor-ready materials",
      link: "/services/funding-pitch"
    },
    {
      icon: CheckCircle2,
      title: "Accounting Handling",
      description: "Bookkeeping, tax prep, and financial reporting for startups",
      link: "/services/accounting-handling"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Validate Idea",
      description: "Customer interviews, market research, and landing page tests to validate demand before you build."
    },
    {
      number: "02",
      title: "Wireframe & MVP",
      description: "Rapid prototyping and minimum viable product development to get to market fast."
    },
    {
      number: "03",
      title: "Launch",
      description: "Strategic launch with paid channels, organic strategy, and conversion optimization."
    },
    {
      number: "04",
      title: "Grow",
      description: "Data-driven optimization, A/B testing, and scalable acquisition channels."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      tagline: "Perfect for validating an idea or building a simple MVP",
      features: ["Landing page + validation", "Basic MVP (4-6 weeks)", "1 platform (web or mobile)"],
      cta: "View Details"
    },
    {
      name: "Growth",
      tagline: "For established products ready to scale and acquire customers",
      features: ["Full product development", "Multi-platform launch", "Marketing & growth support"],
      cta: "Most Popular",
      highlighted: true
    },
    {
      name: "Scale",
      tagline: "Enterprise-grade solutions with dedicated team and custom roadmap",
      features: ["Dedicated product team", "Custom tech stack", "Ongoing support & iteration"],
      cta: "View Details"
    }
  ];

  const videoTestimonials = [
    {
      name: "Terrence",
      video: "/videos/Terrence.mp4",
      photo: "/testimonial-terrence.webp",
      company: "Kickads",
      role: "Co-Founder",
      quote: "From idea to funded startup - Conquermark guided us through product validation, MVP development, and pitch preparation.",
      caseNote: "Raised $500K seed round after launching MVP built by Conquermark."
    },
    {
      name: "Felipe",
      video: "/videos/FELIPE.mp4",
      photo: "/testimonial-felipe.webp",
      company: "Intermarketing",
      role: "CEO",
      quote: "The team at Conquermark transformed our e-commerce platform. Revenue grew 3x in 6 months.",
      caseNote: "Complete platform redesign with conversion optimization that tripled revenue."
    },
    {
      name: "Franki",
      video: "/videos/FRANKI.mp4",
      photo: "/testimonial-frankie.webp",
      company: "GroupMori",
      role: "Founder",
      quote: "Conquermark helped us launch our app in just 8 weeks. Their expertise in mobile development and marketing was invaluable.",
      caseNote: "Launched a fitness tracking app that reached 10K users in the first month."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTEyIDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build. Validate. <span className="text-accent">Launch.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              We take your idea to market.
            </p>
            <p className="text-lg mb-12 text-primary-foreground/80 max-w-3xl mx-auto">
              Product strategy, app & web development, no-code builds and growth marketing - 
              one partner from prototype to customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
                onClick={() => setContactModalOpen(true)}
              >
                Talk to an Expert <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
                onClick={() => setContactModalOpen(true)}
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Vision Section - Inspired by King Kong */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">Dear Founder,</p>
            
            <p className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
              Building a product is hard. Really hard.
            </p>

            <p className="text-lg text-foreground/80 mb-4">
              You've got an idea that keeps you up at night. You know it could work. But you're stuck wondering:
            </p>

            <ul className="text-lg text-foreground/70 space-y-2 mb-6">
              <li>Will anyone actually pay for this?</li>
              <li>Should I build an app or start with a website?</li>
              <li>Do I need to raise funding first?</li>
              <li>How do I find my first 100 customers?</li>
            </ul>

            <p className="text-lg text-foreground/80 mb-4">
              Most founders waste months (or years) building the wrong thing. They skip validation, over-engineer the MVP, 
              and launch to crickets.
            </p>

            <p className="text-lg text-foreground/80 mb-4">
              <strong className="text-foreground">We've seen it a hundred times.</strong>
            </p>

            <p className="text-lg text-foreground/80 mb-6">
              That's why we built Conquermark differently. We don't just build apps and websites - we help you validate 
              demand, build the right MVP, launch strategically, and acquire your first customers.
            </p>

            <p className="text-xl font-bold text-foreground mb-4">
              One partner. End-to-end. From idea to revenue.
            </p>

            <p className="text-lg text-foreground/70">
              Whether you're validating an idea or scaling to 10,000 users, we've got the playbook to get you there faster.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">End-to-End Product Development</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              From idea validation to market launch, we handle every step of your product journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link key={idx} href={service.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                      <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                      <div className="text-accent text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              A repeatable blueprint to turn your idea into a successful product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl font-bold text-accent mb-4 opacity-80">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                See How It Works <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Real founders sharing their experience working with Conquermark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoTestimonials.map((testimonial, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                onClick={() => openVideoLightbox(testimonial)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 group overflow-hidden">
                    <img 
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      style={{ objectPosition: 'center 20%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                        <Play className="h-12 w-12 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="font-bold text-xl mb-1">{testimonial.name}</p>
                      <p className="text-sm opacity-90">{testimonial.role}</p>
                      <p className="text-sm font-semibold opacity-90">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="p-5 bg-card">
                    <p className="text-sm text-foreground/70 italic line-clamp-3">"{testimonial.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Share Your Story CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setTestimonialModalOpen(true)}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Share Your Story
            </Button>
          </div>
        </div>
      </section>

      <VideoLightbox
        open={videoLightboxOpen}
        onOpenChange={setVideoLightboxOpen}
        videoSrc={currentVideo}
        title={currentVideoTitle}
        caption={currentVideoCaption}
      />

      <TestimonialSubmissionModal
        open={testimonialModalOpen}
        onOpenChange={setTestimonialModalOpen}
      />

      {/* Client Logos */}
      <ClientLogos />

      {/* Case Study Teaser */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">CASE STUDY</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Mobile App Launch Success
                </h2>
                <p className="text-lg text-foreground/70 mb-6">
                  How we helped a fintech startup then built an MVP in 6 weeks and scaled to 10,000 users 
                  in 3 months with paid acquisition.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Validated product-market fit through customer interviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Launched MVP in 6 weeks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Scaled to 10k users with paid acquisition</span>
                  </li>
                </ul>
                <Link href="/case-studies/app-launch">
                  <Button variant="outline" size="lg">
                    Read Case Study <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/60 rounded-2xl p-12 text-primary-foreground">
                <div className="text-center">
                  <div className="text-6xl font-bold text-accent mb-2">3x</div>
                  <p className="text-xl mb-8">Revenue Growth</p>
                  
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div>
                      <div className="text-3xl font-bold mb-1">10k</div>
                      <p className="text-sm text-primary-foreground/70">Users in 3 months</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">6 weeks</div>
                      <p className="text-sm text-primary-foreground/70">MVP launch time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible Packages for Every Stage</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Whether you're validating an idea or scaling a product, we have a package that fits your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, idx) => (
              <Card key={idx} className={tier.highlighted ? "border-2 border-accent shadow-xl scale-105" : ""}>
                <CardContent className="p-8">
                  {tier.highlighted && (
                    <div className="bg-accent text-accent-foreground text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-foreground/70 mb-6 min-h-[3rem]">{tier.tagline}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/pricing">
                    <Button 
                      className={tier.highlighted ? "w-full bg-accent hover:bg-accent/90 text-accent-foreground" : "w-full"} 
                      variant={tier.highlighted ? "default" : "outline"}
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setContactModalOpen(true)}
            >
              Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTEyIDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Free MVP Launch Checklist
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get our comprehensive checklist covering everything from idea validation to 
              post-launch growth. Used by 1,000+ founders.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-primary-foreground text-primary px-6 py-6 text-lg"
                required
              />
              <Button 
                type="submit"
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              >
                Get Checklist
              </Button>
            </form>
            <p className="text-sm text-primary-foreground/60 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
      />
      
      <GetStartedPopup />
    </div>
  );
}
