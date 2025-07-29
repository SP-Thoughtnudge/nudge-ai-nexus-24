import React from "react";

const PricingProcess = () => {
  const steps = [
    {
      number: "01",
      title: "The Growth Audit",
      description: "We start with a complimentary, data-driven audit of your current customer engagement strategy to identify key areas for revenue uplift."
    },
    {
      number: "02", 
      title: "The Custom Proposal",
      description: "Based on the audit, we present a detailed proposal outlining the AI agents to be deployed, your specific goals, and a clear pricing structure."
    },
    {
      number: "03",
      title: "Launch & Grow",
      description: "Once we align, we launch your autonomous agents and begin the journey toward achieving and exceeding your growth targets."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Your Path to a Performance Partnership
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingProcess;