
import React from "react";
import { Lightbulb } from "lucide-react";

const CoreInsight = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <div className="mb-6 inline-flex items-center justify-center h-12 w-12 rounded-md bg-brand-pink/10">
                <Lightbulb className="h-6 w-6 text-brand-pink" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                One Core Insight Changed Everything
              </h2>
              <div className="h-1 w-20 bg-brand-pink mb-6"></div>
              
              <p className="text-brand-gray mb-6 text-lg">
                Customers leave signals everywhere — what they click, what they ignore, how they feel, what they need.
                But most systems can't use these signals in real time, let alone adapt to them.
              </p>
              
              <p className="text-brand-gray mb-6">
                Another co-founder saw the other side of this at Amazon — where true 1:1 personalization wasn't just a buzzword, 
                it was driving massive results: higher LTV, better conversions, and world-class retention.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 mt-8">
                <p className="text-xl font-semibold text-brand-black mb-3">The contrast was clear.</p>
                <p className="text-brand-gray text-lg">Why should only tech giants have this advantage?</p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden border-2 border-brand-yellow">
                <img 
                  src="/placeholder.svg" 
                  alt="Data visualization showing customer signals" 
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

export default CoreInsight;
