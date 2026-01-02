import goalSuccessCriteria from "@/assets/product/goal-success-criteria.png";

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
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Screenshot */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl blur-xl opacity-40"></div>
              <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-xl bg-card">
                <img 
                  src={goalSuccessCriteria} 
                  alt="Goal configuration showing success event selection with AI suggestions, exit criteria including maximum messages and negative signals"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Right side - 4 Points */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Point 1 */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      You Define the Goal
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Activation, engagement, cross-sell, retention — you set a single business objective, and the AI optimizes toward it.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Point 2 */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      You Set the Guardrails
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Choose what the AI can test: offers, tones, channels, timing windows, product categories, incentive thresholds, compliance boundaries.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Point 3 */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      You Approve the Strategy
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Your team selects the strategic levers. The AI generates hypotheses, runs experiments, and learns — but never creates strategy.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Point 4 */}
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      You See Every Decision
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Every action has a reason code: why it was chosen, what signals influenced it, and which options were rejected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};