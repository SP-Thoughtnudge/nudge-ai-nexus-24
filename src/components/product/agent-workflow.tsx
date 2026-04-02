
import React from "react";
import { ArrowRight } from "lucide-react";

const AgentWorkflow = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Step 1 */}
        <div className="bg-gray-50 p-6 rounded-lg relative">
          <div className="h-10 w-10 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center mb-4">1</div>
          <h4 className="text-lg font-semibold mb-2">Set Goal</h4>
          <p className="text-sm text-gray-600">Define one clear objective for the AI agent</p>
          <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
            <ArrowRight className="h-6 w-6 text-gray-400" />
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="bg-gray-50 p-6 rounded-lg relative">
          <div className="h-10 w-10 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center mb-4">2</div>
          <h4 className="text-lg font-semibold mb-2">Define Options</h4>
          <p className="text-sm text-gray-600">Provide messages, offers, products for AI to choose from</p>
          <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
            <ArrowRight className="h-6 w-6 text-gray-400" />
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="bg-gray-50 p-6 rounded-lg relative">
          <div className="h-10 w-10 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center mb-4">3</div>
          <h4 className="text-lg font-semibold mb-2">Set Guardrails</h4>
          <p className="text-sm text-gray-600">Define constraints like frequency, timing, budget limits</p>
          <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
            <ArrowRight className="h-6 w-6 text-gray-400" />
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="bg-gray-50 p-6 rounded-lg relative">
          <div className="h-10 w-10 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center mb-4">4</div>
          <h4 className="text-lg font-semibold mb-2">Launch Agent</h4>
          <p className="text-sm text-gray-600">Activate the AI agent with trigger conditions</p>
          <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
            <ArrowRight className="h-6 w-6 text-gray-400" />
          </div>
        </div>
        
        {/* Step 5 */}
        <div className="bg-brand-orange/10 p-6 rounded-lg">
          <div className="h-10 w-10 rounded-full bg-brand-orange text-white font-bold flex items-center justify-center mb-4">5</div>
          <h4 className="text-lg font-semibold mb-2">AI Executes</h4>
          <p className="text-sm text-gray-600">AI runs autonomously, optimizing for your goal</p>
        </div>
      </div>
      
      {/* AI Action Process */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-6 text-center">What the AI Does Autonomously</h4>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-0">
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mb-3">
              <span className="font-bold">1</span>
            </div>
            <h5 className="font-medium mb-2">Analyzes Signals</h5>
            <p className="text-sm text-gray-600">Collects and processes all customer data points</p>
          </div>
          
          <div className="hidden md:block">
            <ArrowRight className="h-5 w-5 text-gray-400 mt-4" />
          </div>
          
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mb-3">
              <span className="font-bold">2</span>
            </div>
            <h5 className="font-medium mb-2">Experiments</h5>
            <p className="text-sm text-gray-600">Runs micro-experiments to test effectiveness</p>
          </div>
          
          <div className="hidden md:block">
            <ArrowRight className="h-5 w-5 text-gray-400 mt-4" />
          </div>
          
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mb-3">
              <span className="font-bold">3</span>
            </div>
            <h5 className="font-medium mb-2">Makes Decisions</h5>
            <p className="text-sm text-gray-600">Determines optimal action for each customer</p>
          </div>
          
          <div className="hidden md:block">
            <ArrowRight className="h-5 w-5 text-gray-400 mt-4" />
          </div>
          
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mb-3">
              <span className="font-bold">4</span>
            </div>
            <h5 className="font-medium mb-2">Executes Actions</h5>
            <p className="text-sm text-gray-600">Triggers messages across channels</p>
          </div>
          
          <div className="hidden md:block">
            <ArrowRight className="h-5 w-5 text-gray-400 mt-4" />
          </div>
          
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center mb-3">
              <span className="font-bold">5</span>
            </div>
            <h5 className="font-medium mb-2">Learns & Adapts</h5>
            <p className="text-sm text-gray-600">Refines strategy based on results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentWorkflow;
