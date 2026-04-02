import { Quote } from "lucide-react";

const TestimonialProof = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-inter">
            The Proof is in the <span className="text-primary">Growth</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-primary" />
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium text-center mb-8 leading-relaxed font-inter">
              "Thoughtnudge didn't just lift our conversions by 80%; it fundamentally changed how we approach growth. We're more strategic, efficient, and profitable."
            </blockquote>
            
            <div className="text-center">
              <div className="inline-flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white font-inter">Head of Growth</div>
                  <div className="text-gray-400 font-inter">Cookd</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-inter">+210%</div>
              <div className="text-gray-300 font-inter">Dormant User Reactivation</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-inter">-45%</div>
              <div className="text-gray-300 font-inter">Offer Cost</div>
            </div>
            
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-inter">+180%</div>
              <div className="text-gray-300 font-inter">Revenue per Customer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialProof;