import { Target, Brain, TrendingUp } from "lucide-react";

const SolutionProcess = () => {
  const steps = [
    {
      icon: Target,
      title: "Define Your Goal",
      description: "Simply tell our AI your business objective—like \"maximize CLTV\" or \"optimize customer lifecycle engagement.\""
    },
    {
      icon: Brain,
      title: "AI Takes Over",
      description: "Our engine analyzes each user's behavior and psychographic profile, running millions of micro-experiments to discover what truly motivates them."
    },
    {
      icon: TrendingUp,
      title: "Drive Results 24/7",
      description: "The AI autonomously delivers the perfect message, offer, and timing for each individual, continuously adapting to maximize your revenue goals."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-inter">
            Your <span className="text-primary">Autonomous Growth Engine</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 font-inter">
                      Step {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-inter">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual representation */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex justify-center items-center space-x-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-primary/40 rounded-full animate-pulse [animation-delay:0.5s]"></div>
                <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse [animation-delay:1s]"></div>
              </div>
              
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center relative">
                <Brain className="w-8 h-8 text-white" />
                <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-ping"></div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-4 h-4 bg-primary/30 rounded-full animate-pulse [animation-delay:1.5s]"></div>
                <div className="w-3 h-3 bg-primary/40 rounded-full animate-pulse [animation-delay:2s]"></div>
                <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse [animation-delay:2.5s]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionProcess;