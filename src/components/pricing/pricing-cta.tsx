import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingCta = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-orange/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Let's Build Your Growth Plan
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to discover how Thoughtnudge can accelerate your growth? 
              Our team is here to understand your unique challenges and create a custom solution that delivers results.
            </p>
            <Link to="/growth-audit">
              <Button variant="orange" size="xl">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCta;