import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle, Star, Award, TrendingUp, Users, Shield,
  ArrowRight, Mail, Phone, Clock, Target, Zap, BarChart
} from "lucide-react";
import ContactModal from "@/components/ContactModal";

interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  image?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Benefit {
  icon: any;
  title: string;
  description: string;
}

interface OfferItem {
  title: string;
  description: string;
  value: string;
}

interface ConversionPageTemplateProps {
  // Section 1: Hero
  heroHeadline: string;
  heroSubheadline: string;
  heroCTA: string;
  heroCTALink?: string;
  heroStats?: { label: string; value: string; icon: any }[];
  
  // Section 2: Social Proof
  awards?: string[];
  asSeenIn?: string[];
  reviewCount?: number;
  rating?: number;
  
  // Section 3: Audience Call Out
  painPoints: string[];
  audienceThoughts: string[];
  
  // Section 4: Solution
  solutionHeadline: string;
  solutionDescription: string;
  usps: string[];
  
  // Section 5: Expertise
  expertiseHeadline: string;
  expertisePoints: { title: string; description: string }[];
  yearsExperience?: number;
  clientsServed?: number;
  
  // Section 6: Testimonials
  testimonials: Testimonial[];
  
  // Section 7: Future Pacing
  futureHeadline: string;
  futureDescription: string;
  futureOutcomes: string[];
  
  // Section 8: Offer Stack
  offerHeadline: string;
  offerItems: OfferItem[];
  totalValue?: string;
  urgencyText?: string;
  
  // Section 9: FAQs
  faqs: FAQ[];
  
  // Section 10: Final CTA
  finalCTAHeadline: string;
  finalCTADescription: string;
  psText?: string;
  
  // Popup component
  popupComponent?: React.ComponentType<any>;
  
  // Breadcrumbs
  breadcrumbs?: { label: string; href: string }[];
  
  // Trust Metrics (optional)
  trustMetrics?: {
    yearsExperience: number;
    clientsServed: number;
    reviewCount: number;
    rating: number;
    trustedBy: string;
    awardsCount: number;
  };
  
  // Related Services (optional)
  relatedServices?: { name: string; href: string; description: string }[];
}

export default function ConversionPageTemplate({
  heroHeadline,
  heroSubheadline,
  heroCTA,
  heroCTALink,
  heroStats = [],
  awards = [],
  asSeenIn = [],
  reviewCount = 500,
  rating = 4.9,
  painPoints,
  audienceThoughts,
  solutionHeadline,
  solutionDescription,
  usps,
  expertiseHeadline,
  expertisePoints,
  yearsExperience = 10,
  clientsServed = 500,
  testimonials,
  futureHeadline,
  futureDescription,
  futureOutcomes,
  offerHeadline,
  offerItems,
  totalValue,
  urgencyText,
  faqs,
  finalCTAHeadline,
  finalCTADescription,
  psText,
  popupComponent: PopupComponent,
  breadcrumbs = [],
  trustMetrics,
  relatedServices
}: ConversionPageTemplateProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <div className="bg-muted/30 py-3">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Section 1: Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold">{trustMetrics?.trustedBy || "Trusted by 150+ Companies"}</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {heroHeadline}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {heroSubheadline}
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="mailto:hello@conquermark.com" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">hello@conquermark.com</span>
                </a>
                <a href="tel:+12098134001" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+1 209-813-4001</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => heroCTALink ? window.location.href = heroCTALink : setIsContactOpen(true)}
                  className="bg-accent hover:bg-accent/90 text-white text-lg h-14 px-8"
                >
                  {heroCTA} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-white/30 text-white text-lg h-14 px-8"
                  onClick={() => setIsContactOpen(true)}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            {heroStats.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {heroStats.map((stat, index) => (
                  <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <stat.icon className="h-10 w-10 mb-4 text-accent" />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: Social Proof Bar */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold">{rating}/5 Rating</div>
                <div className="text-muted-foreground">{reviewCount}+ Reviews</div>
              </div>
            </div>

            {/* Awards */}
            {awards.length > 0 && (
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <div className="text-sm">
                  <div className="font-bold">{awards.length}+ Awards</div>
                  <div className="text-muted-foreground">Industry Recognition</div>
                </div>
              </div>
            )}

            {/* Clients */}
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div className="text-sm">
                <div className="font-bold">{clientsServed}+ Clients</div>
                <div className="text-muted-foreground">Worldwide</div>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-primary" />
              <div className="text-sm">
                <div className="font-bold">{yearsExperience}+ Years</div>
                <div className="text-muted-foreground">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Audience Call Out */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">Sound Familiar?</h2>
              <p className="text-xl text-muted-foreground">
                We understand the challenges you're facing...
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pain Points */}
              <Card className="p-8 border-2 border-destructive/20">
                <h3 className="text-2xl font-bold mb-6 text-destructive">Common Frustrations</h3>
                <ul className="space-y-4">
                  {painPoints.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                        <span className="text-destructive font-bold text-sm">✗</span>
                      </div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Thoughts */}
              <Card className="p-8 border-2 border-primary/20 bg-primary/5">
                <h3 className="text-2xl font-bold mb-6 text-primary">You're Probably Thinking...</h3>
                <ul className="space-y-4">
                  {audienceThoughts.map((thought, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="flex-shrink-0 text-2xl">💭</div>
                      <span className="italic text-muted-foreground">"{thought}"</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Introduce Your Solution */}
      <section className="py-20 bg-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-bold mb-6">
              🚀 There's a Better Way
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              {solutionHeadline}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {solutionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {usps.map((usp, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <p className="font-semibold text-lg">{usp}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Show Expertise */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">{expertiseHeadline}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experience and proven methodology shortcut your path to success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertisePoints.map((point, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Future Pacing */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                {futureHeadline}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {futureDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {futureOutcomes.map((outcome, index) => (
                <Card key={index} className="p-6 bg-white/50 backdrop-blur-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <p className="text-lg font-semibold">{outcome}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Full Offer Stack */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">{offerHeadline}</h2>
              {totalValue && (
                <div className="text-2xl text-accent font-bold mb-4">
                  Total Value: {totalValue}
                </div>
              )}
            </div>

            <Card className="p-8 border-2 border-primary/20">
              <div className="space-y-6">
                {offerItems.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-6 border-b last:border-0 last:pb-0">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-accent font-bold">{item.value}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {urgencyText && (
                <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-accent" />
                    <p className="font-semibold text-accent">{urgencyText}</p>
                  </div>
                </div>
              )}

              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  onClick={() => setIsContactOpen(true)}
                  className="text-lg h-14 px-12"
                >
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 9: FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA + P.S. */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              {finalCTAHeadline}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {finalCTADescription}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => setIsContactOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white text-lg h-14 px-12"
              >
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white/30 text-white text-lg h-14 px-12"
                asChild
              >
                <a href="tel:+12098134001">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +1 209-813-4001
                </a>
              </Button>
            </div>

            {psText && (
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="text-lg">
                  <span className="font-bold">P.S.</span> {psText}
                </p>
              </div>
            )}

            {/* Contact Info */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80">
              <a href="mailto:hello@conquermark.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>hello@conquermark.com</span>
              </a>
              <a href="tel:+12098134001" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>+1 209-813-4001</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
                More on our Digital Marketing Services
              </h2>
              <p className="text-xl text-center text-gray-600 mb-12">
                Explore related services to enhance your digital presence
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <Link key={index} href={service.href}>
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer group">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary text-sm font-semibold">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Modal */}
      <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />

      {/* Service-Specific Popup */}
      {PopupComponent && <PopupComponent trigger="scroll" />}
    </div>
  );
}
