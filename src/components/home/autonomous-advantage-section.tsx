export const AutonomousAdvantageSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            The{" "}
            <span className="text-primary">Autonomous Advantage</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <img 
                  src="/lovable-uploads/7252c1df-4f46-41a4-8144-259abbed6110.png" 
                  alt="Diverse customers receiving personalized experiences" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Three Columns of Benefits */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Outcome-Focused Intelligence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our AI agents are obsessed with your topline business goals—from conversion and retention to lifetime value.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    No Guesswork, Just Results
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We replace manual A/B tests with continuous optimization, ensuring every decision is based on data, not assumptions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
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
      </div>
    </section>
  );
};