
import React from "react";
import { BrainCircuit, Database, Layers } from "lucide-react";

const TechnologyDiagram = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <h3 className="text-xl font-bold text-brand-black mb-6 text-center">How Our Technology Works</h3>
      
      <div className="relative">
        {/* Data Layer */}
        <div className="bg-gray-50 p-6 rounded-xl mb-8">
          <div className="flex items-center mb-4">
            <Database className="h-6 w-6 text-gray-700 mr-2" />
            <h4 className="text-lg font-semibold">Data Layer</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">CDP</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">CRM</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Website/App</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Other Sources</div>
          </div>
          <div className="flex justify-center my-4">
            <svg height="40" width="40">
              <polygon points="20,0 40,20 0,20" className="fill-gray-200" />
            </svg>
          </div>
        </div>
        
        {/* AI Layer */}
        <div className="bg-brand-orange/10 p-6 rounded-xl mb-8">
          <div className="flex items-center mb-4">
            <BrainCircuit className="h-6 w-6 text-brand-orange mr-2" />
            <h4 className="text-lg font-semibold">AI Decision Layer</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium text-center mb-2">Signal Processing</p>
              <p className="text-sm text-gray-600">Behavioral, contextual, and psychographic signals analyzed</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium text-center mb-2">Neuronudge Framework</p>
              <p className="text-sm text-gray-600">AI + Behavioral Science decision engine</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-medium text-center mb-2">Continuous Learning</p>
              <p className="text-sm text-gray-600">Micro-experiments & feedback loops</p>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <svg height="40" width="40">
              <polygon points="20,0 40,20 0,20" className="fill-brand-orange/20" />
            </svg>
          </div>
        </div>
        
        {/* Execution Layer */}
        <div className="bg-brand-pink/10 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Layers className="h-6 w-6 text-brand-pink mr-2" />
            <h4 className="text-lg font-semibold">Execution Layer</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Email</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">SMS</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Voice</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">WhatsApp</div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">Push</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <p className="text-center text-gray-600 italic">
          The system continuously learns from each interaction, building a more accurate understanding of each customer over time.
        </p>
      </div>
    </div>
  );
};

export default TechnologyDiagram;
