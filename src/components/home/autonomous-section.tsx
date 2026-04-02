
import { BrainCircuit, BarChart, Compass, Zap } from "lucide-react";

const AutonomousSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-40 top-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Intelligence That Evolves, Not Just Automates
          </h2>
          <p className="text-xl text-gray-600">
            Unlike reactive AI systems that don't improve over time, ThoughtNudge agents build contextual memory and continuously evolve with every customer interaction.
          </p>
        </div>

        {/* Autonomous execution visualization */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-black mb-6">What's Holding Back Your Customer Engagement?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-2 rounded-full text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Siloed Channel Technologies</p>
                    <p className="text-gray-600 mt-1">Your email platform doesn't know what happened on WhatsApp, and your SMS system ignores web behavior.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-2 rounded-full text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Reactive Messaging Without Memory</p>
                    <p className="text-gray-600 mt-1">Even LLM-based agents are reactive—stuck in one channel, lacking persistent context across interactions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-red-100 p-2 rounded-full text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">No Evolution Over Time</p>
                    <p className="text-gray-600 mt-1">Systems that don't improve with each interaction, missing the opportunity to build intelligence that gets better.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              {/* Designer placeholder for autonomous execution visualization */}
              <div className="text-center p-4 border border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500 italic mb-4">
                  [DESIGNER: Create a visualization showing the evolution of intelligence:
                  1. Customer interactions across multiple channels
                  2. Thoughtnudge agents learning from every interaction
                  3. Building contextual memory over time
                  4. Intelligence that grows stronger with each engagement]
                </p>
                <p className="text-gray-600">Show how our agents build unified intelligence that learns across all touchpoints, not just isolated channels.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Zap className="w-12 h-12 text-brand-orange mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Acts On First-Party Data
            </h3>
            <p className="text-gray-600">
              Our agents integrate all your customer data to build a comprehensive understanding that informs every decision.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <BrainCircuit className="w-12 h-12 text-brand-pink mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Learns What Works For Each User
            </h3>
            <p className="text-gray-600">
              Beyond segments, our agents understand individual preferences, behaviors, and responses to optimize engagement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <BarChart className="w-12 h-12 text-brand-yellow mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Coordinates Across Channels
            </h3>
            <p className="text-gray-600">
              With contextual intelligence, our agents deliver coherent experiences across all touchpoints, not fragmented messages.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Compass className="w-12 h-12 text-brand-orange mb-6" />
            <h3 className="text-xl font-bold text-brand-black mb-4">
              Evolves With Contextual Memory
            </h3>
            <p className="text-gray-600">
              Unlike one-off interactions, our agents build persistent memory that makes them smarter with every customer engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSection;
