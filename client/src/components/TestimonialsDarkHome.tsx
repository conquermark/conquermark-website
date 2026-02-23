import { Star, Quote, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  video?: string;
  photo?: string;
  caseNote?: string;
}

interface TestimonialsDarkHomeProps {
  testimonials?: Testimonial[];
  onPlayVideo?: (testimonial: any) => void;
}

export default function TestimonialsDarkHome({ 
  testimonials: propTestimonials, 
  onPlayVideo 
}: TestimonialsDarkHomeProps) {
  const defaultTestimonials: Testimonial[] = [
    {
      name: "David Miller",
      role: "CEO",
      company: "LogisticsPro",
      quote: "We automated 80% of our dispatch workflow. The ROI calculator was spot on - we saved $120k in the first year alone.",
      photo: "DM",
      caseNote: "Saved $120k/year"
    },
    {
      name: "Sarah Jenkins",
      role: "CMO",
      company: "TechFlow",
      quote: "We replaced our entire manual outreach team with Conquermark's AI agents. Our CAC dropped by 40% in the first month.",
      photo: "SJ",
      caseNote: "CAC reduced by 40%"
    },
    {
      name: "James Wilson",
      role: "Founder",
      company: "BuildRight",
      quote: "I was skeptical about 'AI Agents', but seeing them handle our entire invoicing process without a single error changed my mind.",
      photo: "JW",
      caseNote: "Zero error rate achieved"
    }
  ];

  const testimonials = propTestimonials || defaultTestimonials;

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real results from businesses that switched to autonomous workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-slate-900/50 border-slate-800 hover:border-purple-500/30 transition-all duration-300 group h-full">
              <CardContent className="p-8 relative h-full flex flex-col">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-800 group-hover:text-purple-500/20 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed relative z-10 flex-grow">
                  "{t.quote}"
                </p>

                {t.caseNote && (
                  <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium w-fit">
                    {t.caseNote}
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative">
                    <Avatar className="h-12 w-12 border border-slate-700">
                      <AvatarImage src={t.photo?.startsWith('/') ? t.photo : `https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} />
                      <AvatarFallback className="bg-slate-800 text-slate-400">{t.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    {t.video && onPlayVideo && (
                      <button 
                        onClick={() => onPlayVideo(t)}
                        className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg z-20"
                      >
                        <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                      </button>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
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
