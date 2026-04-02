
import React from "react";
import { Target, Users, TrendingUp, Lightbulb } from "lucide-react";

const WhyItMattersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Why It Matters
          </h2>
          <p className="text-lg text-gray-600">
            Thoughtnudge transforms how businesses connect with their customers, delivering measurable impact across your organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-10 w-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-5 w-5 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-black">For Marketers</h3>
            <p className="text-gray-600">
              Less time buried in tools, more time on strategy. 
              AI handles execution so you can focus on creative elements.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-brand-orange">30% reduction in campaign setup time</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-10 w-10 bg-brand-pink/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-5 w-5 text-brand-pink" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-black">For Growth Leaders</h3>
            <p className="text-gray-600">
              Measurable ROI with faster experimentation. Move beyond segments to true 1:1 experiences driving higher conversion rates.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-brand-pink">15-25% increase in customer lifetime value</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-10 w-10 bg-brand-yellow/10 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="h-5 w-5 text-brand-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-black">For Product Teams</h3>
            <p className="text-gray-600">
              Deep user insights without expensive research. Understand what drives engagement for continuous product improvement.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-brand-yellow">40% better user retention metrics</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-5 w-5 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-black">For Customer Success</h3>
            <p className="text-gray-600">
              Proactively identify at-risk accounts and engagement opportunities to drive satisfaction and reduce churn.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-700">20% reduction in customer churn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;
