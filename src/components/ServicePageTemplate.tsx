import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Star,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import ContactModal from "./ContactModal";
import { toast } from "sonner";

interface ServicePageProps {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroStats: { label: string; value: string; color: string }[];
  heroTestimonial?: { quote: string; author: string; company: string };
  
  // What's Included Section
  includedTitle: string;
  includedFeatures: { icon: React.ReactNode; title: string; description: string }[];
  
  // Platform/Technology Section (optional)
  platformTitle?: string;
  platformDescription?: string;
  platformFeatures?: { title: string; description: string; stat?: string }[];
  
  // Pricing Section
  pricingStarting: string;
  pricingIncludes: string[];
  
  // Benefits Section
  benefitsTitle: string;
  benefits: { icon: React.ReactNode; title: string; description: string }[];
  
  // Process Section
  processTitle: string;
  processSteps: { number: string; title: string; description: string }[];
  
  // Results Section
  resultsTitle: string;
  results: { metric: string; description: string; industry?: string }[];
  resultsTestimonial?: { quote: string; author: string; company: string; result: string };
  
  // FAQ Section
  faqs: { question: string; answer: string }[];
  
  // SEO
  breadcrumbs: { label: string; href: string }[];
  category: string;
  serviceName: string;
  
  // Popup offer
  popupOffer?: string;
  
  // Related Services (optional)
  relatedServices?: { name: string; href: string; description: string }[];
}

export default function ServicePageTemplate({
  heroTitle,
  heroSubtitle,
  heroStats,
  heroTestimonial,
  includedTitle,
  includedFeatures,
  platformTitle,
  platformDescription,
  platformFeatures,
  pricingStarting,
  pricingIncludes,
  benefitsTitle,
  benefits,
  processTitle,
  processSteps,
  resultsTitle,
  results,
  resultsTestimonial,
  faqs,
  breadcrumbs,
  category,
  serviceName,
  popupOffer,
  relatedServices,
}: ServicePageProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll send your custom proposal within 24 hours.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm mb-8 text-primary-foreground/80">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <Link href={crumb.href} className="hover:text-primary-foreground transition-colors">
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>500+ Clients Served</span>
                </div>
                <div className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Industry Leaders</span>
                </div>
                <div className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {heroTitle}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
                {heroSubtitle}
              </p>

              {/* Lead Capture Form */}
              <form onSubmit={handleProposalSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white text-gray-900 h-14 text-lg"
                />
                <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-lg font-semibold">
                  Send Me a Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Contact Options */}
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">(123) 456-7890</span>
                </a>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex items-center gap-2 hover:text-accent transition-colors font-semibold"
                >
                  <Mail className="h-4 w-4" />
                  <span>Talk to an Expert</span>
                </button>
              </div>
            </div>

            {/* Stats & Testimonial */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat, index) => (
                  <Card key={index} className={`p-6 text-center bg-${stat.color}/10 border-${stat.color}/20`}>
                    <div className={`text-4xl md:text-5xl font-extrabold text-${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                  </Card>
                ))}
              </div>

              {heroTestimonial && (
                <Card className="p-6 bg-white/95 backdrop-blur-sm">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{heroTestimonial.quote}"</p>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{heroTestimonial.author}</div>
                    <div className="text-gray-600">{heroTestimonial.company}</div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            {includedTitle}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Get a turn-key solution with everything you need to succeed
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform/Technology Section (if provided) */}
      {platformTitle && platformFeatures && (
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{platformTitle}</h2>
              {platformDescription && (
                <p className="text-xl text-gray-600">{platformDescription}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="p-6 text-center">
                  {feature.stat && (
                    <div className="text-4xl font-extrabold text-primary mb-2">{feature.stat}</div>
                  )}
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
              Pricing Custom to You
            </h2>
            <div className="text-center mb-12">
              <div className="text-5xl font-extrabold text-primary mb-2">
                Starting at {pricingStarting}
              </div>
              <p className="text-gray-600">Flexible packages tailored to your goals</p>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Included in All Plans:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {pricingIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => setIsContactModalOpen(true)}
                size="lg"
                className="w-full mt-8 bg-accent hover:bg-accent/90 text-lg font-semibold h-14"
              >
                Get Your Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            {benefitsTitle}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            When you partner with Conquermark, you get results that matter
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-accent">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            {processTitle}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our proven methodology delivers consistent results
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            {resultsTitle}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Real results from real clients
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {results.map((result, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="text-5xl font-extrabold text-primary mb-3">{result.metric}</div>
                <div className="text-lg font-semibold mb-2">{result.description}</div>
                {result.industry && (
                  <div className="text-sm text-gray-600">Industry average: {result.industry}</div>
                )}
              </Card>
            ))}
          </div>

          {resultsTestimonial && (
            <Card className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic">"{resultsTestimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">{resultsTestimonial.author}</div>
                  <div className="text-gray-600">{resultsTestimonial.company}</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-primary">{resultsTestimonial.result}</div>
                  <div className="text-sm text-gray-600">Result Achieved</div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Everything you need to know about {serviceName}
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {popupOffer || "Get your custom proposal and see how we can help you achieve your goals"}
          </p>
          <div className="text-5xl font-extrabold mb-8">
            Starting at {pricingStarting}
          </div>
          <Button
            onClick={() => setIsContactModalOpen(true)}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white text-lg font-semibold h-14 px-12"
          >
            Request Your Free Proposal
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        defaultService={serviceName}
      />
    </div>
  );
}
