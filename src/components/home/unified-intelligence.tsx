export const UnifiedIntelligence = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            The Brain Behind the Growth:{" "}
            <span className="text-primary">Continuous Learning & Adaptive Intelligence</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Central AI Brain Image */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg">
                <img 
                  src="/lovable-uploads/b753f089-0a73-4cc1-8a49-d2746310a00c.png" 
                  alt="Central AI brain orchestrating personalized customer interactions" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our Agentic AI is the central intelligence layer for your entire growth stack. It unifies cross-channel behavior and real-time user intent to make the single best decision for every customer. It <strong>continuously learns</strong> from every interaction, making each decision sharper and more <strong>adaptive</strong> than the last.
              </p>
              
              {/* Key Features */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Cross-channel behavior unification</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Real-time user intent analysis</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Continuous learning optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};