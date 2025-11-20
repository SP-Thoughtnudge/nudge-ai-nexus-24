export const AutonomousAdvantageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
            The{" "}
            <span className="text-primary">Autonomous Advantage</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            Your customers generate rich behavioural signals every second — but only an agentic system can learn from them continuously and act in real time. Thoughtnudge delivers what traditional CX stacks cannot: a self-learning, context-aware decisioning layer that improves every day.
          </p>
          
          {/* Four horizontal pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-md"></div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Built for Enterprise Scale
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Millions of adaptive decisions per day, with zero performance degradation.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-md"></div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Continuously Learning, Never Static
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                No journeys to maintain. No rules to rewrite. No segments to rebuild.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-md"></div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Explainable, Auditable Intelligence
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Every decision is traceable — what signal triggered it and why it was chosen.
              </p>
            </div>
            
            {/* Pillar 4 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-md"></div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                Turns Data Investment Into Outcomes
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Your warehouse, CDP, and analytics stack finally deliver real business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};