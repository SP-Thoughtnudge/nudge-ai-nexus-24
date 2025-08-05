export const AutonomousAdvantageSection = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/7252c1df-4f46-41a4-8144-259abbed6110.png" 
          alt="Diverse customers receiving personalized experiences" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            The{" "}
            <span className="text-primary">Autonomous Advantage</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/90 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Outcome-Focused Intelligence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI agents are obsessed with your topline business goals—from conversion and retention to lifetime value.
              </p>
            </div>
            
            <div className="bg-background/90 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                No Guesswork, Just Results
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We replace manual A/B tests with continuous optimization, ensuring every decision is based on data, not assumptions.
              </p>
            </div>
            
            <div className="bg-background/90 backdrop-blur-sm rounded-xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                True 1:1 Personalization
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our engine treats every customer as an individual, delivering the right decision at the right time, every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};