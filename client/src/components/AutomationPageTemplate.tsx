import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, BarChart3, Shield, Clock, Users, AlertCircle, ChevronDown, ChevronUp, Star, TrendingUp } from 'lucide-react';
import { DefaultToolLogos } from '@/components/ToolLogos';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO from '@/components/SEO';
import ContactModal from '@/components/ContactModal';
import ROICalculator from '@/components/ROICalculator';

interface AutomationPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  features: string[]; // Pain Points
  workflowImage?: string;
  problemImage?: string;
  tools?: string[];
  toolLogos?: { name: string; component: React.ReactNode }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  roiRate?: number;
  
  // Restored Sections
  process?: { step: number; title: string; description: string }[];
  useCases?: { title: string; industry?: string; challenge: string; solution: string; results: string[] }[];
  testimonials?: { quote: string; author: string; role: string; company: string; rating?: number }[];
  pricingPlans?: { name: string; price: string; period: string; features: string[]; popular?: boolean }[];
  faqs?: { question: string; answer: string }[];
  relatedServices?: { name: string; href: string }[];
}

const AutomationPageTemplate: React.FC<AutomationPageProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  features,
  workflowImage = "/n8n-workflow.png", // Default to real n8n workflow image
  problemImage = "/problem-placeholder.jpg", // Default placeholder
  tools = ["Zapier", "Make", "n8n", "Salesforce", "HubSpot", "Slack", "OpenAI", "Stripe"],
  toolLogos = DefaultToolLogos,
  ctaTitle = "Ready to Automate Your Workflow?",
  ctaSubtitle = "Book a free strategy call to see how much time and money you can save.",
  seoTitle,
  seoDescription,
  seoKeywords,
  roiRate = 50,
  process = [
    { step: 1, title: "Discovery", description: "We analyze your current workflow and identify bottlenecks." },
    { step: 2, title: "Design", description: "We map out the perfect automation architecture for your needs." },
    { step: 3, title: "Build", description: "Our experts build and test your custom automation solution." },
    { step: 4, title: "Launch", description: "We deploy, train your team, and provide ongoing support." }
  ],
  useCases = [],
  testimonials = [],
  pricingPlans = [],
  faqs = [],
  relatedServices = []
}) => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={seoTitle || `${title} | Conquermark Automation`}
        description={seoDescription || description}
        keywords={seoKeywords || "automation, ai, workflow, efficiency"}
      />
      
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />

      {/* Hero Section - High Impact & Realism */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-slate-950 text-white">
        {/* Background Gradient & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                <Zap className="w-4 h-4" />
                <span>Real Automation Systems</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                {subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg shadow-lg shadow-blue-600/20 font-semibold" onClick={() => setContactModalOpen(true)}>
                  Start Automating Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-300 h-14 text-lg px-8 font-medium" onClick={() => setContactModalOpen(true)}>
                  View Case Studies
                </Button>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800">
                <div>
                  <p className="text-3xl font-bold text-white mb-1">60%</p>
                  <p className="text-sm text-slate-400">Time Saved</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">3x</p>
                  <p className="text-sm text-slate-400">Faster Response</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">40+</p>
                  <p className="text-sm text-slate-400">Tools Connected</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              {/* Main Hero Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 aspect-video">
                {/* Dark Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent z-10 pointer-events-none" />
                
                <img 
                  src={heroImage} 
                  alt={`${title} - Real Automation System`} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                
                {/* Floating KPI Card - Real Data Style */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-lg shadow-xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">System Status</p>
                        <p className="text-sm font-bold text-white">All Systems Operational</p>
                      </div>
                    </div>
                    <div className="h-8 w-px bg-slate-700" />
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tasks Automating</p>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <p className="text-sm font-bold text-white">Processing Live Data...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <ROICalculator defaultHourlyRate={roiRate} />

      {/* Trust Bar - Tools */}
      <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-10">
            Trusted Integrations & Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90 hover:opacity-100 transition-all duration-500">
            {toolLogos.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform duration-300 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-2">
                  {tool.component}
                </div>
                <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section (Pain Points) */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Why Businesses Need {title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Stop wasting time on manual tasks. We automate the bottlenecks slowing you down.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-shadow bg-slate-50 dark:bg-slate-900/50 border-y-0 border-r-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Our {title} Solutions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-slate-200 dark:border-slate-800 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Visualization Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-6">
              Real Transformation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Chaos to Clarity</h2>
            <p className="text-lg text-slate-300">
              See the difference professional automation makes. We turn manual, error-prone processes into streamlined, automated workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Problem Side */}
            <div className="relative group">
              <div className="absolute -top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                BEFORE: Manual Chaos
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-red-900/30 bg-slate-800 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Minimal Browser Header */}
                <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                </div>
                <img 
                  src={problemImage} 
                  alt="Manual Process - Before Automation" 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-red-900/10 pointer-events-none" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-red-400 mb-2">The Problem</h3>
                <p className="text-slate-400 text-sm">Manual data entry, disconnected tools, and human errors.</p>
              </div>
            </div>

            {/* Solution Side */}
            <div className="relative group">
              <div className="absolute -top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                AFTER: Automated Flow
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-green-500/30 bg-slate-800 ring-1 ring-green-500/20">
                {/* Minimal Browser Header */}
                <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                </div>
                <img 
                  src={workflowImage} 
                  alt="Automated Workflow - After Automation" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-green-400 mb-2">The Solution</h3>
                <p className="text-slate-400 text-sm">Seamless integration, real-time sync, and zero errors.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-lg" onClick={() => setContactModalOpen(true)}>
              Automate My Workflow
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      {process && process.length > 0 && (
        <section className="py-24 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">How Our Process Works</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">From concept to deployment in 4 simple steps.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-slate-800 -z-10" />
              
              {process.map((step, index) => (
                <div key={index} className="text-center relative bg-white dark:bg-background p-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-600/20">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {useCases && useCases.length > 0 && (
        <section id="use-cases" className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Real Success Stories</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">See how we've helped businesses like yours.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow border-slate-200 dark:border-slate-800 overflow-hidden h-full flex flex-col">
                  <div className="h-2 bg-blue-600 w-full" />
                  <CardContent className="p-8 flex flex-col h-full">
                    {useCase.industry && (
                      <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold mb-4 w-fit">
                        {useCase.industry}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{useCase.title}</h3>
                    <div className="space-y-6 flex-grow">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">The Challenge</h4>
                        <p className="text-slate-700 dark:text-slate-300">{useCase.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Our Solution</h4>
                        <p className="text-slate-700 dark:text-slate-300">{useCase.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2">Key Results</h4>
                        <ul className="space-y-2">
                          {useCase.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-24 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">What Our Clients Say</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Don't just take our word for it.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed flex-grow">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {pricingPlans && pricingPlans.length > 0 && (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Transparent Pricing</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Choose the plan that fits your growth stage.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative border-2 flex flex-col ${plan.popular ? 'border-blue-600 shadow-xl scale-105 z-10' : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 transition-colors'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-md">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pt-8 pb-4">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                      <span className="text-slate-500">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex flex-col flex-grow">
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full h-12 text-lg ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'} text-white`} onClick={() => setContactModalOpen(true)}>
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-24 bg-white dark:bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need to know about our process.</p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 dark:border-slate-800 rounded-lg px-4">
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-900 dark:text-white hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{ctaTitle}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">{ctaSubtitle}</p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-8 text-lg font-bold shadow-xl" onClick={() => setContactModalOpen(true)}>
            Book Your Free Strategy Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="mt-6 text-sm text-blue-200 opacity-80">No commitment required. 100% free consultation.</p>
        </div>
      </section>
    </div>
  );
};

export default AutomationPageTemplate;
