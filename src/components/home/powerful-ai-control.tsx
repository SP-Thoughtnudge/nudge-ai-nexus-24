export const PowerfulAiControl = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Powerful AI,{" "}
            <span className="text-primary">Full Human Control</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Your teams set the strategy. 
            Thoughtnudge's autonomous agents execute it — with full transparency, guardrails, and audit trails.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Point 1 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                You Define the Goal
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Activation, engagement, cross-sell, retention — you set a single business objective, and the AI optimizes toward it.
              </p>
            </div>
            
            {/* Point 2 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                You Set the Guardrails
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Choose what the AI can test: offers, tones, channels, timing windows, product categories, incentive thresholds, compliance boundaries. 
                All actions stay within your brand and regulatory guidelines.
              </p>
            </div>
            
            {/* Point 3 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                You Approve the Strategy
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Your team selects the strategic levers. 
                The AI generates hypotheses, runs experiments, and learns — but never creates strategy.
              </p>
            </div>
            
            {/* Point 4 */}
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                You See Every Decision
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Every action has a reason code: 
                why it was chosen, what signals influenced it, and which options were rejected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};