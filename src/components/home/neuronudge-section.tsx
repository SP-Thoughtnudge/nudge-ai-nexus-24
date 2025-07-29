
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NeuronudgeSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            AI + Behavioral Science = Magnetic Memory That Never Forgets
          </h2>
          <p className="text-xl text-gray-600">
            Our agents build psychographic profiles using magnetic memory, making each customer engagement sharper than the previous one. It's continuous intelligence that adapts and evolves.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-md p-8">
            {/* Designer placeholder for Neuronudge framework visualization */}
            <div className="text-center p-8 border border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500 italic mb-6">
                [DESIGNER: Create a visualization showing the magnetic memory system:
                1. Customer interaction data flowing in
                2. Psychographic profile building over time
                3. AI generating personalized nudges (emotion, tone, copy, offer)
                4. Results feeding back to improve the profile
                5. Show the continuous learning loop getting stronger
                
                Emphasize the "memory" aspect - like a brain that remembers and learns from every interaction.]
              </p>
              <p className="text-gray-600">
                Visualize how each customer interaction makes the AI smarter and more personalized for future engagements.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-yellow">
              <h3 className="text-xl font-bold text-brand-black mb-3">Magnetic Memory System</h3>
              <p className="text-gray-600">
                Every customer interaction is stored and analyzed to build deeper psychographic profiles. The AI remembers preferences, behaviors, and emotional triggers to make future engagements more effective.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-black mb-3">Goal-Driven Intelligence</h3>
              <p className="text-gray-600">
                You provide the business goal and guardrails, then our AI works autonomously to achieve it. Think of it as a dedicated growth manager for each customer, working 24/7 to maximize their value.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-brand-pink">
              <h3 className="text-xl font-bold text-brand-black mb-3">Adaptive Experience Engine</h3>
              <p className="text-gray-600">
                Our AI generates insights about each customer and then acts on them immediately. It delivers the right nudge (emotion, tone, copy, offer) at the right time on the right channel with perfect frequency.
              </p>
            </div>
            
            <Button asChild variant="default" className="mt-4 group bg-brand-black text-white hover:bg-brand-black/90">
              <Link to="/how-it-works">
                Explore the Framework
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuronudgeSection;
