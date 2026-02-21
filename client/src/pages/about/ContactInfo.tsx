import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Mail, MessageSquare, Phone, Clock, MapPin, Linkedin, Twitter, Github, Instagram, HelpCircle, Send, Briefcase, Users, Heart, Globe } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function ContactInfo() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      value: "hello@conquermark.com",
      description: "For general questions and information",
      link: "mailto:hello@conquermark.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      title: "New Projects",
      value: "sales@conquermark.com",
      description: "Start a conversation about your project",
      link: "mailto:sales@conquermark.com",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Support",
      value: "support@conquermark.com",
      description: "Technical support for existing clients",
      link: "mailto:support@conquermark.com",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Careers",
      value: "careers@conquermark.com",
      description: "Join our team - send your resume",
      link: "mailto:careers@conquermark.com",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Partnerships",
      value: "partners@conquermark.com",
      description: "Collaboration and partnership opportunities",
      link: "mailto:partners@conquermark.com",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (209) 813-4001",
      description: "Call us during business hours",
      link: "tel:+12098134001",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/conquermark",
      handle: "@conquermark"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/conquermark",
      handle: "@conquermark"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/conquermark",
      handle: "@conquermark"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/conquermark",
      handle: "@conquermark"
    }
  ];

  const faqs = [
    {
      question: "What's the best way to contact you?",
      answer: "For new project inquiries, email sales@conquermark.com or use our contact form. We typically respond within 24 hours on business days."
    },
    {
      question: "How quickly do you respond?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. Urgent matters are typically addressed within 4 hours."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a free 30-minute consultation to discuss your project, answer questions, and provide initial recommendations."
    },
    {
      question: "What information should I include in my inquiry?",
      answer: "Tell us about your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better we can help."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We work with clients worldwide and have experience across multiple time zones and markets."
    },
    {
      question: "Can I visit your office?",
      answer: "We operate as a remote-first company, but we're happy to schedule video calls or in-person meetings in major cities where our team is located."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 md:py-28 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link href="/"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">Home</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <Link href="/about"><span className="text-primary-foreground/70 hover:text-primary-foreground cursor-pointer">About</span></Link>
              <span className="mx-2 text-primary-foreground/50">/</span>
              <span className="text-primary-foreground">Contact Info</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl">
              We're here to help bring your product to life. Whether you have a project in mind, need support, or just want to chat about your idea, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Response Time Banner */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">24 Hours</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </div>
            <div className="text-center">
              <MessageSquare className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">Mon-Fri</div>
              <div className="text-sm text-muted-foreground">9 AM - 6 PM EST</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">Worldwide</div>
              <div className="text-sm text-muted-foreground">We Work With Global Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiple Ways to Reach Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the contact method that works best for you. We're responsive across all channels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <Card key={idx} className="border-2 hover:border-accent/50 transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className={`p-3 bg-gradient-to-br ${method.color} rounded-lg inline-block mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      <a 
                        href={method.link}
                        className="text-accent hover:underline font-medium break-all"
                      >
                        {method.value}
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-accent/30">
              <CardContent className="p-8 text-center">
                <Send className="h-16 w-16 text-accent mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fill out our contact form and we'll get back to you within 24 hours with next steps.
                </p>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => setContactModalOpen(true)}
                >
                  Open Contact Form <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Follow Us</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Stay updated with our latest projects, insights, and company news on social media.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <Card key={idx} className="hover:border-accent/50 transition-all hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Icon className="h-8 w-8 text-accent mx-auto mb-3" />
                        <h3 className="font-bold mb-1">{social.name}</h3>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Approach</h2>
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Remote-First Company</h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      We operate as a remote-first company with team members across 35+ countries. This allows us to work with the best talent worldwide and provide 24/7 coverage for our clients.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      While we don't have a traditional office, our team regularly meets in person for projects and events. We're happy to arrange in-person meetings in major cities including San Francisco, New York, London, Singapore, and more.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bold mb-2">Headquarters</h4>
                    <p className="text-sm text-foreground/70">
                      Registered in Delaware, USA<br />
                      Operating globally since 2019
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bold mb-2">Time Zones</h4>
                    <p className="text-sm text-foreground/70">
                      Coverage: UTC-8 to UTC+8<br />
                      Primary: EST (UTC-5)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about contacting us.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-foreground/70">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's turn your idea into a successful product. Get in touch today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => setContactModalOpen(true)}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="mailto:sales@conquermark.com">
                  Email Us Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}
