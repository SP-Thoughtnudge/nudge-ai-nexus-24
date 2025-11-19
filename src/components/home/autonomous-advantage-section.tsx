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
                  Built for Enterprise Scale
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Process millions of decisions per day across your entire customer base. Our infrastructure scales with your growth without performance degradation.
                </p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-4 text-primary">
                  Full Transparency & Control
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every AI decision is explainable and auditable. Set brand guardrails, approve strategies, and monitor performance in real-time—complete visibility into autonomous operations.
                </p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-4 text-primary">
                  Activate Your Data Investment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your enterprise has invested in data infrastructure—warehouses, CDPs, analytics tools. Thoughtnudge finally activates that investment by turning passive data into autonomous, revenue-driving actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};