
import React from "react";
import { Brain, Zap, RefreshCw, Layers } from "lucide-react";

const ContinuousIntelligence = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Continuous Intelligence
          </h2>
          <p className="text-xl text-gray-600">
            Our AI becomes the central brain for your organization, continuously learning about each customer and adapting in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="h-14 w-14 flex items-center justify-center bg-brand-orange/20 text-brand-orange rounded-full mb-6">
              <Brain className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-brand-black mb-4">Central Customer Intelligence</h3>
            <p className="text-gray-600 mb-6">
              Unlike siloed systems where customer data sits fragmented across tools, Thoughtnudge creates a unified intelligence layer that understands each customer holistically.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mr-2 flex-shrink-0 text-sm font-semibold">✓</span>
                <span>Unified customer profiles across all touchpoints</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mr-2 flex-shrink-0 text-sm font-semibold">✓</span>
                <span>Behavioral, psychographic, and preference data integration</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mr-2 flex-shrink-0 text-sm font-semibold">✓</span>
                <span>Cross-channel signal interpretation</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="h-14 w-14 flex items-center justify-center bg-brand-pink/20 text-brand-pink rounded-full mb-6">
              <RefreshCw className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-brand-black mb-4">Perpetual Learning System</h3>
            <p className="text-gray-600 mb-6">
              Our AI continuously learns from every interaction, building deeper understanding of each customer over time rather than relying on static models or segments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mr-2 flex-shrink-0 text-sm font-semibold">✓</span>
                <span>Real-time learning from customer responses</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mr-2 flex-shrink-0 text-sm font-semibold">✓</span>
                <span>Evolving customer models that adapt to changing behaviors</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mr-2 flex-shrink-0 text-sm font-semibold">✓</span>
                <span>No data decay or outdated personas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <div className="h-10 w-10 flex items-center justify-center bg-brand-yellow/20 text-brand-yellow rounded-full mr-4 flex-shrink-0">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-black mb-2">Organization-wide Intelligence</h4>
                  <p className="text-gray-600">
                    Teams across your organization gain access to individual-level customer intelligence that was previously impossible, enabling truly coordinated experiences.
                  </p>
                </div>
              </div>
              
              <div className="pl-14">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    <span>Marketing teams understand what resonates with each customer</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    <span>Product teams gain insights on feature usage patterns</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                    <span>Customer success anticipates individual needs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-6">
                <div className="h-10 w-10 flex items-center justify-center bg-brand-orange/20 text-brand-orange rounded-full mr-4 flex-shrink-0">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-black mb-2">Autonomous Decision-making</h4>
                  <p className="text-gray-600">
                    The AI doesn't just gather information—it makes decisions and takes actions based on what it learns, autonomously optimizing for your business goals.
                  </p>
                </div>
              </div>
              
              <div className="pl-14">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                    <span>Real-time channel, timing, and message selection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                    <span>Automated offer personalization by individual</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                    <span>Predictive engagement before churn signals appear</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinuousIntelligence;
