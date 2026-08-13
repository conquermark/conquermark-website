import { Phone, MapPin } from "lucide-react";

/**
 * GlobalOffices Component
 * 
 * Displays Conquermark's 4 global office locations with contact information
 * Placement: Homepage, after testimonials section, before footer
 */
export default function GlobalOffices() {
  const offices = [
    {
      country: "INDIA (HEADQUARTERS)",
      flag: "🇮🇳",
      address: [
        "C9, Ami Akhand Anand Part 2",
        "Near Ambika Hotel",
        "CTM Cross Road",
        "Ahmedabad, 380026, GJ",
        "India"
      ]
    },
    {
      country: "UNITED STATES",
      flag: "🇺🇸",
      address: [
        "307 SW 15th Street",
        "Fort Lauderdale, FL 33315",
        "United States"
      ]
    },
    {
      country: "HONG KONG",
      flag: "🇭🇰",
      address: [
        "1101, Room B, 11/F",
        "Chuan Yuan Factory Building",
        "342-344 Kwun Tong Road",
        "Ngau Tau Kok",
        "Hong Kong"
      ]
    },
    {
      country: "AUSTRALIA",
      flag: "🇦🇺",
      address: [
        "Ground Floor Suite 3",
        "135 Macquarie Street",
        "Sydney NSW 2000",
        "Australia"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Global Offices
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Serving clients worldwide from our offices across four continents
          </p>
          
          {/* Phone Number - Prominent Display */}
          <div className="inline-block">
            <a 
              href="tel:+12098134001" 
              className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-blue-600 hover:text-blue-700 transition-all duration-300 px-8 py-4 border-4 border-blue-600 hover:border-blue-700 rounded-xl hover:bg-blue-50 group"
            >
              <Phone className="w-8 h-8 group-hover:animate-pulse" />
              <span>+1 (209) 813-4001</span>
            </a>
          </div>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Flag */}
              <div className="text-6xl mb-4 text-center">
                {office.flag}
              </div>
              
              {/* Country Name */}
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center uppercase tracking-wide">
                {office.country}
              </h3>
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <address className="not-italic text-gray-600 leading-relaxed text-sm">
                  {office.address.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </address>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Ready to start your project?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
