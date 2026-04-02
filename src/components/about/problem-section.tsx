
import React from "react";
import { Shield } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-flex items-center justify-center h-12 w-12 rounded-md bg-brand-orange/10">
                <Shield className="h-6 w-6 text-brand-orange" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                A Problem We Lived Firsthand
              </h2>
              <div className="h-1 w-20 bg-brand-orange mb-6"></div>
              
              <p className="text-gray-600 mb-6">
                While building and implementing AI systems across voice, email, SMS, web and WhatsApp for global enterprises, 
                we kept encountering the same roadblock: creating journeys, rules, and segments that actually worked was 
                painful — and the results were often underwhelming.
              </p>
              
              <p className="text-gray-600">
                Despite all the tools and tech, most marketing still boiled down to guesswork.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-brand-black mb-6">The Pain Points We Saw:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-orange/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-brand-orange font-medium text-sm">•</span>
                  </div>
                  <p className="text-gray-600">Segments were too broad and difficult to create using data</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-orange/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-brand-orange font-medium text-sm">•</span>
                  </div>
                  <p className="text-gray-600">Journeys were rigid</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-orange/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-brand-orange font-medium text-sm">•</span>
                  </div>
                  <p className="text-gray-600">A/B tests were slow</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-brand-orange/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-brand-orange font-medium text-sm">•</span>
                  </div>
                  <p className="text-gray-600">Insights stayed stuck in silos</p>
                </li>
              </ul>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-gray-700 font-medium">
                  And marketers were left stitching it all together manually across channels, tools, and vendors.
                </p>
                <p className="text-gray-700 mt-4 font-medium">
                  We realized the core issue wasn't a missing feature. It was the fact that most tools weren't built to treat every customer as unique and that the intelligence was missing.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-b border-gray-200 my-16 max-w-xs mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
