import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewHeroSection = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-pulse [animation-delay:1s]"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-primary/20 rounded-full animate-pulse [animation-delay:2s]"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/35 rounded-full animate-pulse [animation-delay:0.5s]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-inter">
            Unlock the Hidden Revenue in <span className="text-primary">Every Customer</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-inter">
            Our goal-driven AI acts as a dedicated marketer for each user, understanding their unique psychology to autonomously drive upsells, win-backs, and higher lifetime value. <span className="font-semibold text-gray-900">Guaranteed.</span>
          </p>
          
          <div className="mb-16">
            <Button size="xl" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/growth-audit" className="flex items-center">
                Request a Growth Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="border-t border-gray-200 pt-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 font-inter">
              TRUSTED BY THE FASTEST-GROWING BRANDS
            </p>
            <div className="flex justify-center items-center space-x-12 opacity-60 grayscale">
              <div className="text-2xl font-bold text-gray-400">Chalo</div>
              <div className="text-2xl font-bold text-gray-400">Cookd</div>
              <div className="text-2xl font-bold text-gray-400">Sure</div>
              <div className="text-2xl font-bold text-gray-400">Conscious Chemist</div>
              <div className="text-2xl font-bold text-gray-400">Enphase Energy</div>
              <div className="text-2xl font-bold text-gray-400">Charmacy Milano</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHeroSection;