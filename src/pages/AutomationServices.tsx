import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Zap, CheckCircle2, TrendingUp, Clock, DollarSign, Users,
  ArrowRight, Play, Shield, Award, Star
} from "lucide-react";
import { useState } from "react";

export default function AutomationServices() {
  const [showAuditForm, setShowAuditForm] = useState(false);

  const automationCategories = [
    {
      icon: "📧",
      title: "Marketing",
      description: "Email campaigns, social media, lead nurturing",
      link: "/automation/marketing"
    },
    {
      icon: "💼",
      title: "Sales & CRM",
      description: "Lead management, pipeline automation, follow-ups",
      link: "/automation/sales"
    },
    {
      icon: "💬",
      title: "Support",
      description: "Ticket routing, chatbots, customer communications",
      link: "/automation/support"
    },
    {
      icon: "⚙️",
      title: "Operations",
      description: "Workflows, approvals, task management",
      link: "/automation/internal-workflows"
    },
    {
      icon: "📊",
      title: "Reporting",
      description: "Dashboards, analytics, data syncing",
      link: "/automation/reporting"
    },
    {
      icon: "💰",
      title: "Finance",
      description: "Invoicing, payments, expense tracking",
      link: "/automation/finance"
    },
    {
      icon: "🎓",
      title: "Education",
      description: "LMS integration, student management",
      link: "/automation/education"
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description: "Patient records, appointments, compliance",
      link: "/automation/healthcare"
    }
  ];

  const platforms = [
    {
      name: "n8n",
      logo: "🔷",
      description: "Open-source, self-hosted automation with 400+ integrations",
      link: "/automation/n8n"
    },
    {
      name: "Zapier",
      logo: "⚡",
      description: "Most popular no-code automation platform with 5000+ apps",
      link: "/automation/zapier"
    },
    {
      name: "Make",
      logo: "🔶",
      description: "Visual automation builder (formerly Integromat)",
      link: "/automation/make"
    },
    {
      name: "Pabbly",
      logo: "🟢",
      description: "Unlimited workflows at a flat monthly rate",
      link: "/automation/pabbly"
    }
  ];

  const useCases = [
    {
      title: "Form ➜ CRM ➜ WhatsApp Follow-up",
      description: "Automatically capture leads and send personalized messages",
      time: "Saves 10+ hours/week",
      link: "/automation/form-to-crm"
    },
    {
      title: "Order ➜ Slack ➜ Google Sheets",
      description: "Real-time order notifications and inventory tracking",
      time: "Saves 15+ hours/week",
      link: "/automation/order-sync"
    },
    {
      title: "Email ➜ Task ➜ Notification",
      description: "Convert emails to tasks with automatic team alerts",
      time: "Saves 8+ hours/week",
      link: "/automation/notifications"
    },
    {
      title: "Lead Capture ➜ Scoring ➜ Assignment",
      description: "Qualify and route leads to the right sales rep instantly",
      time: "Saves 12+ hours/week",
      link: "/automation/lead-capture"
    }
  ];

  const stats = [
    { value: "40%", label: "Time Saved on Average" },
    { value: "150+", label: "Clients Automated" },
    { value: "98%", label: "Accuracy Rate" },
    { value: "$50K+", label: "Avg Annual Savings" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Trusted by 150+ Companies</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Streamline Your Business with <span className="text-yellow-300">Automation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Save time, boost accuracy, and connect tools with no-code & low-code solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-8"
                onClick={() => setShowAuditForm(true)}
              >
                Get Free Automation Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/automation-audit">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-blue-100">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Automation Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Automation Matters
            </h2>
            <p className="text-lg text-gray-600">
              Manual processes cost businesses an average of 40% of their productive time
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Save Time</h3>
              <p className="text-gray-600">
                Eliminate repetitive tasks and focus on high-value work. Our clients save an average of 15-20 hours per week.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reduce Costs</h3>
              <p className="text-gray-600">
                Cut operational expenses by 30-50% through intelligent automation. ROI typically achieved within 3 months.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Better Experience</h3>
              <p className="text-gray-600">
                Faster response times, fewer errors, and seamless workflows lead to happier customers and teams.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span className="text-sm font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Automate
            </h2>
            <p className="text-lg text-gray-600">
              From marketing to finance, we automate every aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {automationCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supported Automation Platforms
            </h2>
            <p className="text-lg text-gray-600">
              We're experts in all major automation tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <Link key={index} href={platform.link}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="text-5xl mb-4">{platform.logo}</div>
                  <h3 className="font-bold text-xl mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600">
                    {platform.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/automation/custom-api">
              <Button variant="outline" className="gap-2">
                Need Custom API Integration?
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Real Use Cases */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Automation Examples
            </h2>
            <p className="text-lg text-gray-600">
              See how businesses like yours are saving time with automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <Link key={index} href={useCase.link}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg">{useCase.title}</h3>
                    <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {useCase.time}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="flex items-center text-blue-600 font-medium text-sm">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Saving Time Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a custom automation strategy in 24-48 hours — absolutely free
            </p>
            <Link href="/automation-audit">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-8">
                Get My Free Automation Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-blue-200 mt-4">
              ⚡ Limited spots available • No credit card required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
