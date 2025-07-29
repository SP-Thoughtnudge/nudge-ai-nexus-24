
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const IntegrationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Make Your Existing Stack Intelligent
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              ThoughtNudge seamlessly integrates with your current tools, transforming them into a self-learning, continuously optimizing ecosystem.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Check className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-gray-700">Marketing Automation</span>
              </div>
              <div className="flex items-center">
                <Check className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-gray-700">CRM Systems</span>
              </div>
              <div className="flex items-center">
                <Check className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-gray-700">Customer Data Platforms</span>
              </div>
              <div className="flex items-center">
                <Check className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-gray-700">Email Marketing Tools</span>
              </div>
              <div className="flex items-center">
                <Check className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-gray-700">Push Notification Systems</span>
              </div>
              <div className="flex items-center">
                <Check className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-gray-700">SMS Platforms</span>
              </div>
              <div className="flex items-center">
                <Check className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-gray-700">Analytics Tools</span>
              </div>
              <div className="flex items-center">
                <Check className="text-brand-orange mr-3 h-5 w-5" />
                <span className="text-gray-700">Data Warehouses</span>
              </div>
            </div>
            
            <Button asChild variant="outline" className="group">
              <Link to="/integrations">
                See All Integrations
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-inner">
            {/* Designer placeholder for integration visualization */}
            <div className="text-center p-8 border border-dashed border-gray-300 rounded-lg bg-white">
              <p className="text-gray-500 italic mb-6">
                [DESIGNER: Create a "hub and spoke" style diagram showing ThoughtNudge as the central intelligence layer connecting to various existing systems. 
                Show data flowing in from multiple sources, being processed by ThoughtNudge, and then intelligent decisions flowing out to activation channels.]
              </p>
              <h3 className="text-xl font-medium text-brand-black">Continuous Intelligence Layer</h3>
              <p className="text-gray-600 mt-2">
                ThoughtNudge becomes the decision-making brain that learns continuously while working with your existing tech stack.
              </p>
            </div>
            
            <div className="mt-8 bg-brand-orange/10 p-6 rounded-lg border-l-4 border-brand-orange">
              <h4 className="font-medium text-gray-800">Quick Integration</h4>
              <p className="text-gray-600 mt-2">
                Most customers are up and running within days, not weeks or months. Our team handles the technical heavy lifting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
