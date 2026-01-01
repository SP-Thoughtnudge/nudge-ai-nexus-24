import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute -top-8 left-1/4 animate-bounce">
              <Sparkles className="w-6 h-6 text-primary/40" />
            </div>
            <div className="absolute -top-4 right-1/3 animate-bounce [animation-delay:1s]">
              <Sparkles className="w-4 h-4 text-primary/30" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-inter">
            Ready to Unlock Your <span className="text-primary">True Growth Potential?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-inter">
            See how Thoughtnudge can transform your customer engagement and deliver measurable results in weeks, not months.
          </p>
          
          <div className="space-y-4">
            <Button size="xl" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
              <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <p className="text-sm text-gray-500 font-inter">
              Free audit · No commitment · Results in 2 weeks
            </p>
          </div>

          {/* Trust signals */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-inter">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-inter">GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-inter">Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;