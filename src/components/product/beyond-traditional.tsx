
import React from "react";
import { Check, X } from "lucide-react";

const BeyondTraditional = () => {
  const comparisons = [
    {
      traditional: {
        title: "Segmentation & Rules",
        description: "Divide customers into broad segments and create manual rules for each segment.",
        disadvantages: [
          "Treats thousands of unique customers the same",
          "Static rules quickly become outdated",
          "Requires constant manual maintenance"
        ]
      },
      thoughtnudge: {
        title: "Individual AI Modeling",
        description: "Each customer gets their own AI model that continuously learns their unique preferences.",
        advantages: [
          "True 1:1 personalization at scale",
          "Models automatically adapt as customer behavior changes",
          "Zero manual rule maintenance"
        ]
      }
    },
    {
      traditional: {
        title: "A/B Testing",
        description: "Run experiments to find a single \"winner\" to apply to everyone.",
        disadvantages: [
          "One-size-fits-all approach ignores individual preferences",
          "Slow, manual setup and analysis",
          "Limited variables can be tested simultaneously"
        ]
      },
      thoughtnudge: {
        title: "Continuous Experimentation",
        description: "Run thousands of micro-experiments per customer to find what works for each individual.",
        advantages: [
          "Different \"winners\" for different customers",
          "Automated setup and optimization",
          "Tests all variables at once: message, timing, channel, etc."
        ]
      }
    },
    {
      traditional: {
        title: "Marketing Automation",
        description: "Build complex journey maps with branching logic to handle different scenarios.",
        disadvantages: [
          "Difficult to maintain as scale increases",
          "Limited branching possibilities can be managed",
          "Can't adapt to unexpected customer behavior"
        ]
      },
      thoughtnudge: {
        title: "Autonomous Agents",
        description: "Intelligent agents decide the next best action for each customer in real-time.",
        advantages: [
          "No journey mapping required",
          "Infinite pathways possible",
          "Adapts immediately to any customer behavior"
        ]
      }
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Beyond Traditional Methods
          </h2>
          <p className="text-xl text-gray-600">
            See how Thoughtnudge's approach fundamentally transforms customer engagement compared to conventional methods.
          </p>
        </div>

        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 rounded-xl overflow-hidden"
            >
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <X className="h-5 w-5 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-gray-800">{comparison.traditional.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {comparison.traditional.description}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-3">Limitations:</h4>
                  <ul className="space-y-3">
                    {comparison.traditional.disadvantages.map((disadvantage, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 text-xs">✕</span>
                        <span className="text-gray-600">{disadvantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-brand-orange/5">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                    <Check className="h-5 w-5 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-brand-black">{comparison.thoughtnudge.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {comparison.thoughtnudge.description}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-brand-black mb-3">Advantages:</h4>
                  <ul className="space-y-3">
                    {comparison.thoughtnudge.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="h-5 w-5 rounded-full bg-green-100 text-green-500 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 text-xs">✓</span>
                        <span className="text-gray-600">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-brand-black font-medium mb-6">
            "Thoughtnudge isn't just an incremental improvement—it's a fundamentally different approach to customer engagement."
          </p>
          <p className="text-gray-600 italic">
            — Marketing Technology Review
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeyondTraditional;
