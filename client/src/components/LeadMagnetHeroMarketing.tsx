import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight, Download, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { sendEmail } from "@/lib/email";

export default function LeadMagnetHeroMarketing() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsSubmitting(true);

    try {
      await sendEmail("Marketing Guide Download", { email });
      setIsSubmitting(false);
      toast.success("Guide sent! Check your inbox.");
      setEmail("");
    } catch (error) {
      setIsSubmitting(false);
      toast.error(error instanceof Error ? error.message : "Failed to submit form. Please try again.");
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950 z-0" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
      
      {/* Animated Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy & Form */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              New for 2026
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Stop Guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Start Scaling with AI.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The old marketing playbook is dead. Download the <strong>2026 Marketing ROI Guide</strong> to see how top brands use AI agents to cut CAC by 40% and triple conversion rates.
            </p>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
              <form noValidate onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">
                    Get the Free Guide + 3-Step Action Plan
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="Enter your work email..." 
                      className="h-12 bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="h-12 px-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg shadow-purple-600/25 whitespace-nowrap"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Me The Guide"}
                      {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Free. Unsubscribe anytime.
                </p>
              </form>
            </div>

            <div className="mt-10 flex flex-wrap gap-y-4 gap-x-8 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>AI Ad Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>Predictive SEO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400" />
                <span>Automated Content</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Book Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 perspective-1000">
              {/* Book Cover Container */}
              <div className="relative w-[400px] mx-auto aspect-[3/4] rounded-r-2xl rounded-l-sm shadow-[20px_20px_60px_rgba(0,0,0,0.5)] bg-slate-900 border-r border-t border-b border-slate-700">
                {/* Spine Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-l-sm" />
                
                {/* Cover Image */}
                <img 
                  src="/marketing-guide-cover.png" 
                  alt="2026 Marketing ROI Guide" 
                  className="absolute inset-0 w-full h-full object-cover rounded-r-2xl ml-1"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    e.currentTarget.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-r-2xl ml-1 pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase">Downloads</p>
                  <p className="text-sm font-bold text-white">1,240+ this week</p>
                </div>
              </div>
            </div>
            
            {/* Background Glow behind book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 blur-[100px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
