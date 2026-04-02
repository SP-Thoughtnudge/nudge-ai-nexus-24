
import React from "react";
import { Target, Users, TrendingUp, Lightbulb } from "lucide-react";

const ImpactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Why It Matters
            </h2>
            <div className="h-1 w-20 bg-brand-orange mb-6 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black">For Marketers</h3>
              <p className="text-gray-600">
                It means less time buried in tools — and more time focused on strategy.
                No more complex segmentation, manual A/B testing, or struggling with rigid journey builders.
                Let AI handle the execution while you focus on the creative and strategic elements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-brand-pink/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-brand-pink" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black">For Growth Leaders</h3>
              <p className="text-gray-600">
                It means measurable ROI, faster experimentation, and compounding performance.
                Move beyond broad segments to truly individualized experiences that drive 
                higher conversion rates, retention, and lifetime value for every customer.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-brand-black/10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black">For Investors</h3>
              <p className="text-gray-600">
                It's the future of how brands engage, convert, and retain customers — at scale.
                We're building the infrastructure for a new generation of personalized marketing
                that delivers better results with less manual effort.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-black">For Our Team</h3>
              <p className="text-gray-600">
                It's a chance to redefine the industry. We're tackling complex challenges at the 
                intersection of AI, marketing, and human psychology to create something genuinely new.
                We're building technology that understands people as individuals.
              </p>
            </div>
          </div>
          
          <div className="border-b border-gray-200 my-16 max-w-xs mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
