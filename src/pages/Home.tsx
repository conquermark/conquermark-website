import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { 
  Smartphone, Globe, Zap, TrendingUp, CheckCircle2, 
  ArrowRight, Lightbulb, Pencil, Rocket, BarChart3,
  Play, Quote, Mail, Shield, Clock, Users, Star, Award, Target
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import ClientLogos from "@/components/ClientLogos";
import VideoLightbox from "@/components/VideoLightbox";
import TestimonialSubmissionModal from "@/components/TestimonialSubmissionModal";
import ContactModal from "@/components/ContactModal";
import SEO from "@/components/SEO";
import { getSEOData } from "@/config/seoData";

export default function Home() {
  const seoData = getSEOData('/');

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
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical="https://conquermark.com/"
        schema={seoData.schema}
      />
      <div className="min-h-screen">
      
      {/* 1. HERO SECTION */}
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

      {/* 2. SOCIAL PROOF BAR */}
      <section className="py-12 bg-accent/5 border-y border-accent/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-foreground/70">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-1">98%</div>
              <div className="text-sm text-foreground/70">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-1">$50M+</div>
              <div className="text-sm text-foreground/70">Revenue Generated</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 fill-accent text-accent" />)}
              </div>
              <div className="text-sm text-foreground/70">5.0 Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-background">
        <div className="container">
          <h3 className="text-center text-lg font-semibold text-foreground/70 mb-8">
            Trusted by Innovative Companies
          </h3>
          <ClientLogos />
        </div>
      </section>

      {/* 3. DUAL-AUDIENCE FOUNDER SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(251,146,60,0.05),transparent_50%)]"></div>
        
        <div className="container relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Which One Are You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're starting from scratch or scaling an established business, we've got the exact playbook you need.
            </p>
          </div>

          {/* Two Boxes Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* BOX 1: STARTUPS & NEW FOUNDERS (B2C) */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-2xl group">
              <CardContent className="p-8 md:p-10">
                {/* Badge */}
                <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Got an Idea?
                </div>

                {/* Hook */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                  You've got an idea that keeps you up at night.
                </h3>

                {/* Storytelling Pain Points */}
                <div className="space-y-4 mb-6 text-base leading-relaxed">
                  <p>You know it could work.</p>
                  
                  <p>You can see it clearly in your head.</p>
                  
                  <p>But you're stuck wondering...</p>
                  
                  <p><strong>Will anyone actually pay for this?</strong></p>
                  
                  <p>Should you build an app? Or start with a website?</p>
                  
                  <p>Do you need funding first? Or can you bootstrap?</p>
                  
                  <p>How do you find your first 100 customers?</p>
                  
                  <p>Where do you even start?</p>
                  
                  <p className="italic">And to top it all off...</p>
                  
                  <p><strong>You're terrified of spending 6 months building something nobody wants.</strong></p>
                  
                  <p>You've heard the horror stories.</p>
                  
                  <p>Founders who spent $50K on development only to realize they built the wrong features.</p>
                  
                  <p>Startups that launched with zero customers because they never validated demand.</p>
                  
                  <p>Ideas that died because the founder tried to do everything themselves.</p>
                  
                  <p className="font-semibold mt-4">Look, most founders waste months (or years) building the wrong thing.</p>
                  
                  <p>They skip validation because "they just know" it'll work.</p>
                  
                  <p>They over-engineer the MVP with features nobody asked for.</p>
                  
                  <p>They launch to crickets because they forgot to build an audience first.</p>
                  
                  <p>Then they run out of money.</p>
                  
                  <p>Or worse - they give up on a great idea because they executed it wrong.</p>
                  
                  <p className="font-semibold">We've seen it a hundred times.</p>
                </div>

                {/* Solution */}
                <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mb-6">
                  <p className="font-bold text-lg mb-3">Here's the thing: It doesn't have to be this way.</p>
                  <p className="text-base">What if you had <strong>ONE partner</strong> who could validate your idea with real customers, build the right MVP (not the bloated one), launch strategically with an audience ready to buy, and get you your first paying customers?</p>
                  <p className="mt-3">Not a developer who just codes what you tell them.</p>
                  <p>Not an agency that disappears after launch.</p>
                  <p className="mt-3"><strong>A true partner who's invested in your success from day one.</strong></p>
                  <p className="mt-3"><strong>No guessing. No wasted time. No launching to crickets.</strong></p>
                </div>

                {/* Promise */}
                <div className="space-y-2 mb-6">
                  <p className="text-xl font-bold">One partner. End-to-end.</p>
                  <p className="text-xl"><strong className="text-accent">From idea to revenue.</strong></p>
                </div>

                {/* What We Do */}
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p>✓ Validate demand before you build anything</p>
                  <p>✓ Build the right MVP (not the bloated one)</p>
                  <p>✓ Launch with a strategy that gets attention</p>
                  <p>✓ Acquire your first 100 paying customers</p>
                </div>

                {/* CTA */}
                <Link href="/services/mvp-development">
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </CardContent>
            </Card>

            {/* BOX 2: ESTABLISHED BUSINESSES (B2B) */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl group">
              <CardContent className="p-8 md:p-10">
                {/* Badge */}
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Already in Business?
                </div>

                {/* Hook */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Your business is stuck. And you know it.
                </h3>

                {/* Storytelling Pain Points */}
                <div className="space-y-4 mb-6 text-base leading-relaxed">
                  <p>Maybe you're doing $50K/month but can't break $100K.</p>
                  
                  <p>Maybe you're growing but drowning in manual work.</p>
                  
                  <p>Maybe your tech stack is held together with duct tape and prayers.</p>
                  
                  <p className="italic">Whatever it is...</p>
                  
                  <p><strong>You're working 60-hour weeks and still falling behind.</strong></p>
                  
                  <p>Customer support tickets are piling up.</p>
                  
                  <p>Your team is overwhelmed.</p>
                  
                  <p>Your website converts at 1%.</p>
                  
                  <p>Your ads are burning money.</p>
                  
                  <p className="font-semibold mt-4">You KNOW technology could fix this.</p>
                  
                  <p>You know automation could save you 30 hours a week.</p>
                  
                  <p>You know a better website could double your revenue.</p>
                  
                  <p>But every time you try to fix it?</p>
                  
                  <p>You get a developer who ghosts you after the first payment.</p>
                  
                  <p>Or an agency that builds something pretty but useless.</p>
                  
                  <p>Or a "marketing expert" who burns your entire budget in 3 weeks.</p>
                  
                  <p className="font-semibold">We call this the "tech Frankenstein problem."</p>
                </div>

                {/* Solution */}
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                  <p className="font-bold text-lg mb-3">Here's the truth: You don't need more vendors.</p>
                  <p className="text-base">You need <strong>ONE partner</strong> who can handle your <strong>website</strong>, <strong>mobile app</strong>, <strong>automation</strong>, <strong>AI</strong>, and <strong>marketing</strong> - without you managing 5 different people who don't talk to each other.</p>
                  <p className="mt-3"><strong>One team. One vision. Real results.</strong></p>
                </div>

                {/* Promise */}
                <div className="space-y-2 mb-6">
                  <p className="text-xl font-bold">One partner. End-to-end.</p>
                  <p className="text-xl"><strong className="text-primary">From stuck to scaling.</strong></p>
                </div>

                {/* What We Do */}
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <p>✓ Automate the manual work eating your time</p>
                  <p>✓ Rebuild your tech stack (properly this time)</p>
                  <p>✓ Integrate AI that actually works</p>
                  <p>✓ Scale your revenue without scaling your headcount</p>
                </div>

                {/* CTA */}
                <Link href="/automation-services">
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                    Scale Your Business
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </CardContent>
            </Card>

          </div>

          {/* Bottom Statement */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-bold mb-4">
              We don't consider the project done until you're seeing real results.
            </p>
            <p className="text-lg text-muted-foreground">
              Not just "it looks nice." Not just "it works technically."
            </p>
            <p className="text-xl font-semibold mt-4">
              <span className="text-accent">More customers.</span> <span className="text-primary">More revenue.</span> Less manual work.
            </p>
            <p className="text-2xl font-bold mt-6">That's the Conquermark difference.</p>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">End-to-End Product Development</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              From idea validation to market launch, we handle every step of your product journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Link key={idx} href={service.link}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-foreground/70">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS TIMELINE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Our proven 4-step process to take you from idea to launch
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">Validate Idea</h3>
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">Week 1-2</span>
                </div>
                <p className="text-lg text-foreground/70 mb-4">
                  Customer interviews, market research, and landing page tests to validate demand before you build.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>20+ customer discovery interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Landing page with waitlist validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Competitive analysis & market sizing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">Wireframe & MVP</h3>
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">Week 3-8</span>
                </div>
                <p className="text-lg text-foreground/70 mb-4">
                  Rapid prototyping and minimum viable product development to get to market fast.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>User flows & wireframes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>MVP development (web or mobile)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Beta testing with early users</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">Launch</h3>
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">Week 9-10</span>
                </div>
                <p className="text-lg text-foreground/70 mb-4">
                  Strategic launch with paid channels, organic strategy, and conversion optimization.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Product Hunt & launch strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Paid ads setup (Google, Meta)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Analytics & tracking implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold">Grow</h3>
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full font-semibold">Ongoing</span>
                </div>
                <p className="text-lg text-foreground/70 mb-4">
                  Data-driven optimization, A/B testing, and scalable acquisition channels.
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Conversion rate optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>A/B testing & experimentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Scaling paid acquisition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Schedule Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 6. VIDEO TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-muted/30">
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
                    <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/30 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/40 transition-all">
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

      {/* 7. CASE STUDY HIGHLIGHT */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-primary/10">
            <div className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">CASE STUDY</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile App Launch Success</h2>
            <p className="text-lg text-foreground/70 mb-8">
              How we helped a fintech startup then built an MVP in 6 weeks and scaled to 10,000 users in 3 months with paid acquisition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">3x</div>
                <div className="text-foreground/70">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">10k</div>
                <div className="text-foreground/70">Users in 3 months</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">6</div>
                <div className="text-foreground/70 flex items-center justify-center gap-1">
                  <span>weeks</span>
                  <span className="text-sm">(MVP launch)</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Validated product-market fit through customer interviews</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Launched MVP in 6 weeks</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Scaled to 10k users with paid acquisition</span>
              </li>
            </ul>

            <Button 
              variant="outline" 
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <Link href="/case-studies">
                Read Case Study <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. RISK REVERSAL / GUARANTEE */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Zero-Risk Guarantee</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We're so confident in our process, we back it with a guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">14-Day Guarantee</h3>
                <p className="text-foreground/70">
                  If you're not satisfied with our validation process in the first 14 days, we'll refund 100% of your deposit.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
                <p className="text-foreground/70">
                  We commit to timeline milestones. If we miss a major deadline, you get a 10% credit on your next project.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Promise</h3>
                <p className="text-foreground/70">
                  Every deliverable goes through our 3-stage QA process. We don't consider it done until you're thrilled.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. URGENCY SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent/10 to-primary/10 border-y border-accent/20">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold mb-6">
            <Target className="h-5 w-5" />
            <span>Limited Availability</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Only Take 8 New Clients Per Quarter
          </h2>
          
          <p className="text-lg text-foreground/70 mb-8">
            To ensure quality and dedicated attention, we limit our client intake. 
            <strong className="text-foreground"> 3 spots remaining for Q1 2025.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Dedicated Team</div>
                <div className="text-sm text-foreground/70">Your project gets a dedicated product manager and dev team</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Weekly Check-ins</div>
                <div className="text-sm text-foreground/70">Direct access to founders, not just account managers</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Fast Turnaround</div>
                <div className="text-sm text-foreground/70">Start within 2 weeks of signing, not months</div>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
            onClick={() => setContactModalOpen(true)}
          >
            Claim Your Spot <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Product?
          </h2>
          <p className="text-xl text-foreground/70 mb-10">
            Schedule a free 30-minute strategy call to discuss your idea and see if we're a good fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
              onClick={() => setContactModalOpen(true)}
            >
              Schedule Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              onClick={() => setContactModalOpen(true)}
            >
              Get Custom Quote
            </Button>
          </div>

          <p className="text-sm text-foreground/60">
            No sales pitch. No pressure. Just an honest conversation about your product.
          </p>
        </div>
      </section>

      {/* Modals */}
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

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
      </div>
    </>
  );
}
