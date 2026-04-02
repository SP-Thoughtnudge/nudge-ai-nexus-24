
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-brand-pink/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight mb-6 animate-fade-in">
            Unlock Hidden Revenue from Your <span className="text-brand-orange">Existing Customers</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Stop losing money on manual segmentation and generic offers. Our AI agents autonomously drive upsells, cross-sells, and winback campaigns with personalized nudges that guarantee better results than your current setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button variant="orange" size="xl" asChild>
              <Link to="/demo">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        {/* Visual representation of autonomous agents */}
        <div className="mt-16 relative z-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-scale-in">
            <div className="aspect-video bg-gray-50 relative p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 max-w-lg">
              <p className="text-gray-500 mb-4 italic">
                [DESIGNER: Show revenue growth visualization - existing customers moving from dormant to active, 
                with AI identifying optimal offers, timing, and channels. Display before/after revenue metrics 
                for E-commerce D2C and Digital app services, highlighting upsell/cross-sell opportunities 
                and winback campaigns with personalized nudging strategies.]
              </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 text-center">
              <p className="text-lg text-gray-700 font-medium">
                Your existing customers are your goldmine. Our AI finds the perfect moment, message, and offer to maximize revenue from every customer relationship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
