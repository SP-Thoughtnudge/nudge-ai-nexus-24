export const AutonomousAdvantageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            The{" "}
            <span className="text-primary">Autonomous Advantage</span>
          </h2>
          
          {/* Two-column layout: Image and Content separated */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Powerful Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/7252c1df-4f46-41a4-8144-259abbed6110.png" 
                  alt="Diverse customers receiving personalized experiences" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right Column: Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-4 text-primary">
                  Outcome-Focused Intelligence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI agents are obsessed with your topline business goals—from conversion and retention to lifetime value.
                </p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-4 text-primary">
                  No Guesswork, Just Results
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We replace manual A/B tests with continuous optimization, ensuring every decision is based on data, not assumptions.
                </p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-4 text-primary">
                  True 1:1 Personalization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our engine treats every customer as an individual, delivering the right decision at the right time, every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};