import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight, Download, Lock } from "lucide-react";
import { toast } from "sonner";

export default function LeadMagnetHero() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Success! Your Playbook is on its way to your inbox.");
      setEmail("");
      // In a real implementation, this would trigger a download or redirect
    }, 1500);
  };

  return (
    <section className="relative bg-[#0f1729] text-white py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#2d1b4e] opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTEyIDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy & Form */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              New for 2026: The Ultimate Automation Guide
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Stop Wasting Hours on <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">Manual Work.</span>
              <br />
              Automate Your Growth.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover the exact strategies we use to save businesses 40+ hours per week. Get the comprehensive guide to AI-driven operations.
            </p>
            
            <div className="flex flex-col gap-3 max-w-md mx-auto lg:mx-0">
              {[
                "Identify high-impact automation opportunities",
                "Select the right tools (Zapier, Make, n8n)",
                "Blueprint for scaling without hiring more staff"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Lead Capture Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-md mx-auto lg:mx-0 shadow-2xl">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Download className="h-5 w-5 text-accent" />
                Get Your Free Playbook
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    type="email" 
                    placeholder="Enter your work email..." 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 focus:ring-accent focus:border-accent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-bold bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-600 shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-[1.02]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Me The Playbook Now"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                  <Lock className="h-3 w-3" />
                  Your data is secure. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>

          {/* Right Column: 3D Book Cover */}
          <div className="relative flex justify-center lg:justify-end perspective-1000">
            {/* Glow behind book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-accent/30 blur-[80px] rounded-full"></div>
            
            {/* Book Image */}
            <div className="relative z-10 transform transition-transform duration-500 hover:scale-105 hover:rotate-y-12">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/nIKMnLAcwnHJjb2Mzql0Nb/sandbox/YNzw32uuCbQAYFcHwYFy47_1771824325552_na1fn_YXV0b21hdGlvbi1wbGF5Ym9vay1jb3Zlcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbklLTW5MQWN3bkhKamIyTXpxbDBOYi9zYW5kYm94L1lOenczMnV1Q2JRQVlGY0h3WUZ5NDdfMTc3MTgyNDMyNTU1Ml9uYTFmbl9ZWFYwYjIxaGRHbHZiaTF3YkdGNVltOXZheTFqYjNabGNnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a6hdIk-ZRrTo0k9KIMYg8qgH~p7mu2XUBl3pz6nkQuVIOKDaLkXx1we75WTopvp4lueCCz~BoyS4Mkd3a82~UarbXR5SwCnEvGMoT8FG0nqjbmJ95u7~juun6TNFoE05Z6S1luJXadFM0y6Hq~rW-zPL7NsHFS5XeQMAayaRPZqq7~c27qFenLmI3EdLboqgTIFNDCLIY5toFDNiD1ofMcfSiAp6W~ipPvDEYl4hbT0vqxGDm21szbf71M8sPe~nXbCYv8sd-aIuFKFMVrJYtC~fzPqX65wZdWrEXkR-fX8dDfJ0f0Sq4Yl1rC3cnHSY-X6YeFJcQnbZgsQHVmpUmw__" 
                alt="The 2026 AI Automation Playbook" 
                className="w-full max-w-[400px] drop-shadow-2xl rounded-r-lg"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white text-[#0f1729] font-bold py-3 px-6 rounded-full shadow-xl transform rotate-12 border-4 border-accent/20 animate-bounce" style={{ animationDuration: '3s' }}>
                FREE <br/> DOWNLOAD
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
