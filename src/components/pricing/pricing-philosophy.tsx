import React from "react";
import { TrendingUp, Handshake, Search } from "lucide-react";

const PricingPhilosophy = () => {
  const principles = [
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-orange" />,
      title: "Value-Based, Not Feature-Based",
      description: "Your growth challenges are unique. Instead of charging for seats or features, our pricing is based on the specific business goals we are tasked to achieve and the value we deliver."
    },
    {
      icon: <Handshake className="h-8 w-8 text-brand-orange" />,
      title: "A Partnership in Performance",
      description: "We are so confident in our platform's ability to generate results that our model often includes a performance component tied to the incremental revenue we create for you."
    },
    {
      icon: <Search className="h-8 w-8 text-brand-orange" />,
      title: "Complete Transparency",
      description: "Following our initial growth audit, we provide a detailed, custom proposal with no hidden fees. You'll understand the exact scope and potential ROI before you commit."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Why You Won't Find a Price List Here
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-black">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPhilosophy;