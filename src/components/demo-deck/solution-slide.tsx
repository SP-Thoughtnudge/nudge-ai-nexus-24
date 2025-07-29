
import React from "react";
import { 
  Users, Brain, Zap, MessageSquare, Mail, Bell, Mic, 
  Infinity, Shield, Check 
} from "lucide-react";

const SolutionSlide = () => {
  return (
    <section className="py-6 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-black mb-2">
              Thoughtnudge: AI Agents That Drive Results
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-2">
              Set your business goals. Our AI agents deliver the outcomes.
            </p>
          </div>
          
          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-[#9b87f5]/10 to-[#F97316]/10 p-6 rounded-xl mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Brain className="h-8 w-8 text-[#9b87f5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Thoughtnudge eliminates:</h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <div className="px-3 py-1 bg-white rounded-full shadow-sm text-xs">Manual campaigns</div>
                  <div className="px-3 py-1 bg-white rounded-full shadow-sm text-xs">Static rules</div>
                  <div className="px-3 py-1 bg-white rounded-full shadow-sm text-xs">Complex A/B testing</div>
                  <div className="px-3 py-1 bg-white rounded-full shadow-sm text-xs">Manual optimization</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* 1:1 Decision */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-[#9b87f5]/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-[#9b87f5]" />
                </div>
                <h3 className="text-lg font-bold text-brand-black">1:1 AI Agents</h3>
              </div>
              <p className="text-sm text-gray-600">
                One dedicated AI agent per customer that learns and adapts to deliver personalized experiences at scale.
              </p>
            </div>
            
            {/* Autonomous Execution */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-[#F97316]" />
                </div>
                <h3 className="text-lg font-bold text-brand-black">Autonomous Execution</h3>
              </div>
              <p className="text-sm text-gray-600">
                Set your goals and let AI handle the rest — no rules, no journeys, just results that continuously improve.
              </p>
            </div>
            
            {/* Cross-Channel Intelligence */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-[#0EA5E9]" />
                </div>
                <h3 className="text-lg font-bold text-brand-black">Cross-Channel Intelligence</h3>
              </div>
              <p className="text-sm text-gray-600">
                Unified insights across all touchpoints, optimizing the right channel, message, and timing for each customer.
              </p>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
            <h3 className="text-lg font-bold text-brand-black mb-3 text-center">Real Business Impact</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#9b87f5]/10 p-4 rounded">
                <p className="text-2xl font-bold text-[#9b87f5]">2.4x</p>
                <p className="text-xs text-gray-600">Higher Conversions</p>
              </div>
              <div className="bg-[#F97316]/10 p-4 rounded">
                <p className="text-2xl font-bold text-[#F97316]">60%</p>
                <p className="text-xs text-gray-600">Less Manual Work</p>
              </div>
              <div className="bg-[#0EA5E9]/10 p-4 rounded">
                <p className="text-2xl font-bold text-[#0EA5E9]">93%</p>
                <p className="text-xs text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
          
          {/* Control & Transparency */}
          <div className="bg-white rounded-lg border border-gray-100 p-5 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <Shield className="h-6 w-6 text-gray-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-brand-black">Always in Control</h3>
                <div className="flex items-center bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
                  <Check className="h-3 w-3 mr-1" />
                  Explainable AI
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Complete transparency with guardrails you define. You set the parameters, our AI drives the results.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm font-semibold text-[#9b87f5]">
              Transform your customer engagement with AI that delivers outcomes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSlide;
