export const DecisionExplainability = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                User-Level{" "}
                <span className="text-primary">Explainability</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Understand exactly what the AI has learned about individual users and why specific decisions were made. 
                Full transparency into every action, with chronological decision timelines and reasoning.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Decision Context</h4>
                    <p className="text-sm text-muted-foreground">
                      See the full context behind each decision — last login, pages viewed, market conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Actions Considered</h4>
                    <p className="text-sm text-muted-foreground">
                      View all alternatives the AI evaluated, with confidence scores for each option.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Reasoning & Outcomes</h4>
                    <p className="text-sm text-muted-foreground">
                      Understand why a specific action was chosen and track user response and state transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl blur-xl opacity-40"></div>
              <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-xl bg-card">
                <img 
                  src="/product/explainability-timeline.png" 
                  alt="Decision Timeline showing AI decisions with full context, actions considered with confidence scores, reasoning explanations, and user response tracking"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex justify-center gap-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">78%</div>
                  <div className="text-xs text-muted-foreground">Confidence</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">Full</div>
                  <div className="text-xs text-muted-foreground">Audit Trail</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">Real-time</div>
                  <div className="text-xs text-muted-foreground">Tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionExplainability;
