import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({ 
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our automation services"
}: FAQSectionProps) {
  const defaultFAQs: FAQ[] = [
    {
      question: "How long does it take to implement automation?",
      answer: "Implementation time varies based on complexity. Simple automations can be set up in 1-2 weeks, while complex enterprise solutions may take 4-8 weeks. We provide a detailed timeline after understanding your specific requirements."
    },
    {
      question: "Do I need technical knowledge to use the automations?",
      answer: "No technical knowledge is required. We design all automations to be user-friendly and provide comprehensive training to your team. We also offer ongoing support to ensure smooth operation."
    },
    {
      question: "What platforms do you integrate with?",
      answer: "We integrate with 1000+ platforms including CRMs (Salesforce, HubSpot), marketing tools (Mailchimp, ActiveCampaign), e-commerce platforms (Shopify, WooCommerce), and custom APIs. If a platform has an API, we can integrate it."
    },
    {
      question: "How much does automation cost?",
      answer: "Pricing depends on the complexity and scope of automation. Simple workflows start from $500, while enterprise solutions can range from $5,000 to $50,000+. We offer flexible pricing models including one-time setup fees and monthly maintenance plans."
    },
    {
      question: "What if something breaks or stops working?",
      answer: "We provide ongoing monitoring and maintenance support. Our team is notified immediately if any automation fails, and we fix issues promptly. All our packages include support and maintenance for the first 30-90 days."
    },
    {
      question: "Can you automate my existing processes?",
      answer: "Yes! We start by analyzing your current workflows and identifying automation opportunities. We can automate most repetitive tasks including data entry, email campaigns, lead management, reporting, and customer communications."
    },
    {
      question: "How do you ensure data security?",
      answer: "We follow industry-standard security practices including encrypted connections, secure API authentication, and compliance with data protection regulations. We never store sensitive data and all integrations use secure, authorized connections."
    },
    {
      question: "Do you provide training for my team?",
      answer: "Yes, comprehensive training is included with all automation projects. We provide documentation, video tutorials, and live training sessions to ensure your team can manage and optimize the automations effectively."
    }
  ];

  const faqList = faqs || defaultFAQs;

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqList.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
