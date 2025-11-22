import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Brain } from "lucide-react";
import AIAuditPopup from "@/components/popups/AIAuditPopup";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import { pricingStrategies, urgencyText, trustMetrics } from "@/data/affordablePricing";

export default function AIGPTIntegration() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const benefits = ["Seamless data flow between systems", "Automated data enrichment", "Real-time AI insights in your tools", "Custom API integrations"];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link href="/"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Home</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <Link href="/digital-marketing"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Digital Marketing</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground/70">AI Services</span>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground">AI & GPT Integration</span>
            </nav>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              <AIAuditPopup trigger="scroll" />
      </div>
              <h1 className="text-5xl md:text-6xl font-bold">AI & GPT Integration</h1>
            <AIAuditPopup trigger="scroll" />
      </div>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              Integrate AI models with CRMs, analytics tools, and websites for seamless automation.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Get Free AI Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          <AIAuditPopup trigger="scroll" />
      </div>
        <AIAuditPopup trigger="scroll" />
      </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            <AIAuditPopup trigger="scroll" />
      </div>
          <AIAuditPopup trigger="scroll" />
      </div>
        <AIAuditPopup trigger="scroll" />
      </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "Discovery", desc: "Analyze your needs and identify opportunities" },
                { step: "Strategy", desc: "Design custom AI solutions" },
                { step: "Implementation", desc: "Deploy and integrate AI tools" },
                { step: "Optimization", desc: "Monitor and continuously improve" }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-3">{String(idx + 1).padStart(2, '0')}<AIAuditPopup trigger="scroll" />
      </div>
                    <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            <AIAuditPopup trigger="scroll" />
      </div>
          <AIAuditPopup trigger="scroll" />
      </div>
        <AIAuditPopup trigger="scroll" />
      </div>
      </section>

      {/* Case Study Snippet */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Success Story</h3>
                <p className="text-lg mb-6">
                  "Conquermark's AI solutions helped us automate 70% of our customer support inquiries and increase conversion rates by 45% through intelligent personalization."
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-primary-foreground/70">CEO, TechStartup Inc.</p>
                  <AIAuditPopup trigger="scroll" />
      </div>
                <AIAuditPopup trigger="scroll" />
      </div>
              </CardContent>
            </Card>
          <AIAuditPopup trigger="scroll" />
      </div>
        <AIAuditPopup trigger="scroll" />
      </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Schedule a free consultation to discuss how AI can transform your marketing.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setContactModalOpen(true)}
            >
              Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          <AIAuditPopup trigger="scroll" />
      </div>
        <AIAuditPopup trigger="scroll" />
      </div>
      </section>

      
      {/* FAQ Section */}
      
      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/digital-marketing/ai/agent-development">
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full border hover:border-primary/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">AI Agent Development</h3>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-1 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  <AIAuditPopup trigger="scroll" />
      </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/digital-marketing/ai/consulting">
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full border hover:border-primary/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">AI Consulting</h3>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-1 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  <AIAuditPopup trigger="scroll" />
      </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/digital-marketing/seo/enterprise">
              <Card className="group hover:shadow-lg transition-all cursor-pointer h-full border hover:border-primary/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Enterprise SEO</h3>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-1 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  <AIAuditPopup trigger="scroll" />
      </div>
                </CardContent>
              </Card>
            </Link>
            <AIAuditPopup trigger="scroll" />
      </div>
            <div className="text-center">
              <Link href="/digital-marketing">
                <Button variant="outline" className="gap-2">
                  View All Digital Marketing Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            <AIAuditPopup trigger="scroll" />
      </div>
          <AIAuditPopup trigger="scroll" />
      </div>
        <AIAuditPopup trigger="scroll" />
      </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What systems can you integrate GPT with?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We integrate GPT with CRMs (Salesforce, HubSpot), analytics tools (Google Analytics, Mixpanel), marketing platforms (Mailchimp, ActiveCampaign), and custom databases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">How does data flow between systems?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                We build secure API connections that enable real-time data synchronization. GPT can pull context from multiple systems and push insights back automatically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Is coding required for integration?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                No, we handle all technical development. You simply define your requirements and approve the integration workflows.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Can integrations be modified later?</AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                Yes, our integrations are built to be flexible and scalable. We can add new data sources, modify workflows, and expand functionality as your needs evolve.
              </AccordionContent>
            </AccordionItem>
            </Accordion>
          <AIAuditPopup trigger="scroll" />
      </div>
        <AIAuditPopup trigger="scroll" />
      </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    <AIAuditPopup trigger="scroll" />
      </div>
  );
}
