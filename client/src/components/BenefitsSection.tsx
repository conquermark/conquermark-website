import { Clock, ShieldCheck, TrendingUp } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-accent" />,
      title: "Reclaim 40+ Hours/Week",
      description: "Stop drowning in manual data entry. We automate repetitive tasks so your team can focus on high-value strategy and creative work."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent" />,
      title: "Eliminate Human Error",
      description: "Manual processes are prone to mistakes. Our automated workflows ensure 100% data accuracy and consistent execution, every single time."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-accent" />,
      title: "Scale Without Headcount",
      description: "Grow your revenue without growing your payroll. Our systems handle increased volume effortlessly, allowing you to scale operations instantly."
    }
  ];

  return (
    <section className="py-20 bg-[#0f1729] border-b border-white/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Leading Companies <span className="text-accent">Automate</span>
          </h2>
          <p className="text-lg text-gray-400">
            Transform your operations from a bottleneck into a competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
