import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsDark() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CMO, TechFlow",
      content: "We replaced our entire manual outreach team with Conquermark's AI agents. Our CAC dropped by 40% in the first month.",
      avatar: "SJ",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, ScaleUp",
      content: "The predictive SEO model is insane. We're ranking for keywords we didn't even know existed. Traffic is up 300%.",
      avatar: "MC",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Director of Growth, FinEdge",
      content: "Finally, a marketing partner that speaks 'Revenue' not just 'Vanity Metrics'. The ROI dashboard is my daily go-to.",
      avatar: "ER",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by Growth Leaders
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See how modern brands are scaling faster with our AI-first marketing engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-slate-900/50 border-slate-800 hover:border-purple-500/30 transition-all duration-300">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-800" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 border border-slate-700">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.avatar}`} />
                    <AvatarFallback className="bg-slate-800 text-slate-400">{t.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
