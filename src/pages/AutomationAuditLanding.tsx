import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Zap, Clock, Shield, Award, Star, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AutomationAuditLanding() {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    phone: "",
    businessType: "",
    currentTools: "",
    mainGoal: "",
    challenges: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (!formData.fullName || !formData.email || !formData.website) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Automation Audit Form Submitted:", formData);
    
    toast({
      title: "Success! 🎉",
      description: "We'll send your automation audit within 24-48 hours!",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      website: "",
      phone: "",
      businessType: "",
      currentTools: "",
      mainGoal: "",
      challenges: ""
    });
    setStep(1);
  };

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Time-Saving Opportunities",
      description: "Identify tasks that can be automated to save 10-20 hours per week"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Process Optimization",
      description: "Get recommendations on streamlining your current workflows"
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Integration Roadmap",
      description: "Custom plan for connecting your tools and systems"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "ROI Projection",
      description: "Estimated time and cost savings from automation"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager, TechStart Inc",
      content: "The automation audit helped us identify $50K in annual savings. We implemented their recommendations and saw results within 2 weeks!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, GrowthLab",
      content: "ConquerMark's team automated our entire lead capture process. We're now processing 3x more leads with the same team size.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section with Form */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left Column - Value Proposition */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-semibold">$497 Value • 100% Free • No Credit Card</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Free Automation Opportunity Audit
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Discover how automation can save your business 10-20 hours per week and reduce operational costs by 30-50%
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">24-48 Hours Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">No Commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">150+ Companies Helped</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-gray-900">4.8/5</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">150+</div>
                    <div className="text-sm text-gray-600">Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* What You'll Get */}
              <div>
                <h3 className="text-xl font-bold mb-4">What You'll Get:</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {benefit.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{benefit.title}</div>
                        <div className="text-sm text-gray-600">{benefit.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of 2</span>
                    <span className="text-sm text-gray-500">{step === 1 ? "50%" : "100%"}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: step === 1 ? "50%" : "100%" }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 ? (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold mb-4">Get Your Free Audit</h2>
                      
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Business Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@company.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="website">Website URL *</Label>
                        <Input
                          id="website"
                          type="url"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          placeholder="https://yourcompany.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <Button 
                        type="button"
                        onClick={handleContinue}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold">Almost Done!</h2>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setStep(1)}
                          className="text-sm"
                        >
                          ← Back
                        </Button>
                      </div>

                      <div>
                        <Label htmlFor="businessType">Business Type</Label>
                        <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="saas">SaaS / Tech</SelectItem>
                            <SelectItem value="agency">Agency / Services</SelectItem>
                            <SelectItem value="b2b">B2B Company</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="finance">Finance / Fintech</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="currentTools">Current Tools You Use</Label>
                        <Input
                          id="currentTools"
                          value={formData.currentTools}
                          onChange={(e) => handleInputChange("currentTools", e.target.value)}
                          placeholder="e.g., HubSpot, Shopify, Slack"
                        />
                      </div>

                      <div>
                        <Label htmlFor="mainGoal">Main Automation Goal</Label>
                        <Select value={formData.mainGoal} onValueChange={(value) => handleInputChange("mainGoal", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="What do you want to automate?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="save-time">Save Time</SelectItem>
                            <SelectItem value="reduce-errors">Reduce Errors</SelectItem>
                            <SelectItem value="scale-operations">Scale Operations</SelectItem>
                            <SelectItem value="improve-experience">Improve Customer Experience</SelectItem>
                            <SelectItem value="reduce-costs">Reduce Costs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="challenges">Current Challenges (Optional)</Label>
                        <Textarea
                          id="challenges"
                          value={formData.challenges}
                          onChange={(e) => handleInputChange("challenges", e.target.value)}
                          placeholder="Tell us about your biggest automation challenges..."
                          rows={3}
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                      >
                        Get My Free Audit Report
                        <CheckCircle2 className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </form>

                <p className="text-xs text-center text-gray-500 mt-4">
                  🔒 Your information is 100% secure and will never be shared
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
