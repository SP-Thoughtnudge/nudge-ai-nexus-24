
import React from "react";
import { Rocket } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center justify-center h-12 w-12 rounded-md bg-brand-black/10">
              <Rocket className="h-6 w-6 text-brand-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              So We Built Thoughtnudge
            </h2>
            <div className="h-1 w-20 bg-brand-black mb-6 mx-auto"></div>
            
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Thoughtnudge is our answer to the bloated, fragmented, and manual-first growth stack.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                Instead of static journeys, manual A/B tests, manual optimization and endless segmentation, we built Agentic AI — intelligent agents that:
              </h3>
              
              <ul className="space-y-6 mt-8">
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-semibold mr-4 mt-0.5 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800">Learn continuously from every customer signal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-semibold mr-4 mt-0.5 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800">Make 1:1 decisions in real time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-semibold mr-4 mt-0.5 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800">Select the best message, offer, channel, and timing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-semibold mr-4 mt-0.5 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800">Act autonomously — across the entire lifecycle</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-lg font-semibold text-brand-black">You set the goals and guardrails. The AI delivers the outcomes.</p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Thoughtnudge platform visualization" 
                  className="w-full h-auto rounded" 
                />
              </div>
            </div>
          </div>
          
          <div className="border-b border-gray-200 my-16 max-w-xs mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
