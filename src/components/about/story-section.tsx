import React from "react";

const StorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-8">
              From Static Rules to Adaptive Intelligence
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              Traditional marketing automation taught businesses to think in rigid segments and static journeys. 
              The result is a digital experience that feels impersonal and ineffective.
            </p>
            
            <p>
              We saw a different path forward. We asked a different set of questions: What if a system could do more than just automate? 
              What if it could actually <strong className="text-brand-black">learn</strong>? What if it could understand the unique <strong className="text-brand-black">psychology</strong> of each user and autonomously find the perfect way to engage them?
            </p>
            
            <p>
              These questions led us to build Thoughtnudge. We didn't want to make a better automation tool; we wanted to create an entirely new capability built on three innovations:
            </p>
            
            <div className="pl-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-brand-pink rounded-full mt-3 flex-shrink-0"></div>
                <p>
                  An evolving <strong className="text-brand-black">customer contextual memory</strong> that gets smarter with every interaction.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-brand-pink rounded-full mt-3 flex-shrink-0"></div>
                <p>
                  A <strong className="text-brand-black">continuous and adaptive intelligence</strong> that makes real-time decisions.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-brand-pink rounded-full mt-3 flex-shrink-0"></div>
                <p>
                  An AI that <strong className="text-brand-black">learns from data, generates powerful insights, and then acts on them</strong> to deliver real business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;