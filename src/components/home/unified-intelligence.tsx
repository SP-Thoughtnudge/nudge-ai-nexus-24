export const UnifiedIntelligence = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            Your Data Intelligence Layer:{" "}
            <span className="text-primary">Agentic Learning at Enterprise Scale</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 order-1 lg:order-1">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Thoughtnudge sits on top of your existing data infrastructure and becomes the <strong>agentic decisioning layer</strong> that activates your first-party data. Every customer gets a dedicated AI agent that continuously learns their behavioral patterns, psychographic profile, and optimal engagement windows—then autonomously acts across all touchpoints to maximize lifetime value.
              </p>
              
              {/* Key Features */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Activates dormant first-party data</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">One learning agent per customer</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Autonomous optimization across channels</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Real-time decisioning at scale</span>
                </div>
              </div>
            </div>
            
            {/* Central AI Brain Image */}
            <div className="flex justify-center order-2 lg:order-2">
              <div className="relative w-full max-w-lg">
                <img 
                  src="/lovable-uploads/b753f089-0a73-4cc1-8a49-d2746310a00c.png" 
                  alt="Central AI brain orchestrating personalized customer interactions" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};