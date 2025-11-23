import { Link } from "wouter";

interface ClientLogo {
  name: string;
  image: string;
  link?: string;
}

interface ClientLogosProps {
  title?: string;
  subtitle?: string;
  logos?: ClientLogo[];
}

export default function ClientLogos({ 
  title = "Trusted by Innovative Companies",
  subtitle = "Join the founders who've launched successful products with Conquermark",
  logos
}: ClientLogosProps) {
  const defaultLogos: ClientLogo[] = [
    { name: "Ramsons Trendsquares", image: "/clients/ramsons.png" },
    { name: "Shuriken", image: "/clients/shuriken.jpg" },
    { name: "KickAds", image: "/clients/kickads.png" },
    { name: "Ticket Bunny", image: "/clients/ticketbunny.png" },
    { name: "Red Star Soccer", image: "/clients/redstar.webp" },
    { name: "GroupMori", image: "/clients/groupmori.webp" },
    { name: "Invest in Turkey", image: "/clients/invest-turkey.png" },
    { name: "Propectin", image: "/clients/propectin.png" },
    { name: "Diamond Jewelry Wholesalers", image: "/clients/diamond-jewelry.png" },
    { name: "Divorce Your Ring", image: "/clients/divorce-ring.png" },
    { name: "USA MedPremium", image: "/clients/usa-medpremium.png" },
    { name: "Tight Bunz", image: "/clients/tight-bunz.png" },
    { name: "GreenSpot", image: "/clients/greenspot.png" },
    { name: "Celerity Telecom", image: "/clients/celerity-telecom.png" },
    { name: "Zivar Diamond Jewellery", image: "/clients/zivar.png" },
    { name: "Embtel", image: "/clients/embtel-blue.png" },
    { name: "Raisin", image: "/clients/raisin.png" },
    { name: "Embtel", image: "/clients/embtel-black.png" }
  ];

  const clientLogos = logos || defaultLogos;

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center max-w-7xl mx-auto">
          {clientLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="group transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center h-32 shadow-sm hover:shadow-xl hover:border-accent transition-all duration-300">
                <img 
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-foreground/60 uppercase tracking-wider font-semibold">
            500+ Projects Delivered • 98% Client Satisfaction • ISO Certified
          </p>
        </div>
      </div>
    </section>
  );
}
