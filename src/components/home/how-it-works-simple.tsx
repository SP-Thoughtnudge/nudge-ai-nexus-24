
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorksSimple = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            How Thoughtnudge Works
          </h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform delivers the right message at the right time to the right person.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Process Flow Diagram */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-sm">
            {/* Main Flow with Connecting Lines */}
            <div className="hidden md:block absolute top-1/2 left-16 right-16 h-1 bg-brand-orange/30 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-bold text-brand-orange">1</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Signal Collection</h3>
                <p className="text-sm text-gray-600 text-center max-w-[150px]">
                  Collects behavioral and contextual data
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-bold text-brand-pink">2</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">AI Decision</h3>
                <p className="text-sm text-gray-600 text-center max-w-[150px]">
                  Processes through our Neuronudge Framework
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-bold text-brand-yellow">3</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Execution</h3>
                <p className="text-sm text-gray-600 text-center max-w-[150px]">
                  Delivers personalized content via optimal channels
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-bold text-gray-700">4</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Results</h3>
                <p className="text-sm text-gray-600 text-center max-w-[150px]">
                  Optimizes for your specific business goals
                </p>
              </div>
            </div>

            {/* Continuous Learning Loop */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">
                  System continuously learns and improves with each interaction
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/how-it-works" 
              className="inline-flex items-center text-brand-orange hover:text-brand-orange/80 font-medium"
            >
              <span>Learn more about how it works</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSimple;
