import React from "react";

const PricingHero = () => {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-black mb-6 leading-tight">
            Pricing That Aligns With Your Growth
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            We believe in a true partnership model. Our pricing is designed to be a direct investment in your success, 
            with a structure that ensures we only win when you win.
          </p>
          <div className="flex justify-center">
            <div className="w-64 h-32 bg-gradient-to-r from-brand-orange/20 to-brand-pink/20 rounded-xl flex items-center justify-center">
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-brand-orange rounded-full"></div>
                <div className="w-8 h-8 bg-brand-pink rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;