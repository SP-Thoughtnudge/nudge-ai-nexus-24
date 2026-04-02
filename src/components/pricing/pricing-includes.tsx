import React from "react";
import { Check } from "lucide-react";

const PricingIncludes = () => {
  const features = [
    "Dedicated Goal-Driven AI Agents",
    "Full Access to the Thoughtnudge Platform", 
    "The Neuronudge™ Behavioral Science Engine",
    "Cross-Channel Integration Support (Push, In-App, WhatsApp, etc.)",
    "Actionable Insights & Growth Dashboard",
    "Dedicated Onboarding & Strategic Support"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            A Complete Platform for Growth
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
                <span className="text-lg text-brand-black font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingIncludes;