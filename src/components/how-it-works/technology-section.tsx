
import { BrainCircuit, Zap, Users } from "lucide-react";

const TechnologySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            The Technology Behind Thoughtnudge
          </h2>
          <p className="text-xl text-gray-600">
            Our platform combines advanced AI technologies with behavioral science to create a truly autonomous marketing intelligence layer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <BrainCircuit className="w-12 h-12 text-brand-orange mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Agentic AI Architecture
            </h3>
            <p className="text-gray-600">
              Unlike traditional AI that just predicts, our agentic AI makes decisions, takes actions, and learns from outcomes. Each customer gets their own AI agent that continuously optimizes their experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <Zap className="w-12 h-12 text-brand-pink mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Neuronudge Framework
            </h3>
            <p className="text-gray-600">
              Our proprietary decision-making framework combines behavioral science with machine learning to understand deep customer psychographics—knowing not just what users do, but why they do it.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <Users className="w-12 h-12 text-brand-yellow mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Continuous Learning System
            </h3>
            <p className="text-gray-600">
              Unlike static systems that require manual optimization, our platform runs thousands of micro-experiments in parallel, continuously improving its understanding of what works for each individual.
            </p>
          </div>
        </div>
        
        <div className="mt-20 bg-gray-50 p-8 md:p-12 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-brand-yellow/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-brand-pink/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-brand-black">Beyond Black Box AI</h3>
              <p className="text-gray-600">
                Thoughtnudge is designed for transparency. See exactly why decisions were made for each customer, what patterns are emerging, and how the AI is improving your outcomes over time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-orange/20 text-brand-orange rounded-full mr-3 mt-1">✓</span>
                  <span>Decision explanations for every customer interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-orange/20 text-brand-orange rounded-full mr-3 mt-1">✓</span>
                  <span>Psychographic insights dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-brand-orange/20 text-brand-orange rounded-full mr-3 mt-1">✓</span>
                  <span>Performance analytics with actionable insights</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="bg-gray-100 h-64 rounded flex items-center justify-center text-gray-500">
                  [Dashboard visualization showing AI decision explanations and customer insights]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
