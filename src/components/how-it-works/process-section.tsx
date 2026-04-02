
import { ArrowRight } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            How Thoughtnudge Works
          </h2>
          <p className="text-xl text-gray-600">
            Our AI platform transforms customer engagement through a seamless five-step process.
          </p>
        </div>

        {/* Visual Process Flow */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-brand-orange/30 -translate-y-1/2 z-0"></div>
            
            {/* Process Steps */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-brand-orange">1</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Signal Collection</h3>
                <p className="text-sm text-gray-600">Collects behavioral and contextual data</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-brand-pink">2</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Experimentation</h3>
                <p className="text-sm text-gray-600">Conducts micro-tests to learn preferences</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-brand-yellow">3</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">AI Decision</h3>
                <p className="text-sm text-gray-600">Processes through our Neuronudge Framework</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-brand-orange">4</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Execution</h3>
                <p className="text-sm text-gray-600">Delivers personalized content via optimal channels</p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-brand-pink">5</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Optimization</h3>
                <p className="text-sm text-gray-600">Continuously learns and improves from results</p>
              </div>
            </div>
          </div>

          {/* Learning Loop Indicator */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-600">
                The system continuously learns and adapts with each interaction
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Demo Button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors">
            <span className="mr-2">See Interactive Demo</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
