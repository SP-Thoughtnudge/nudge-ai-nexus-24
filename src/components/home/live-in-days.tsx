export const LiveInDays = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            Enterprise-Ready in{" "}
            <span className="text-primary">Days, Not Months</span>
          </h2>
          
          {/* 4-Step Timeline */}
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg transform transition-transform hover:scale-110">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Connect Your Existing Stack
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Thoughtnudge integrates with your warehouse, CDP, and engagement channels through a simple, one-time setup. 
                  No migration. No workflow rebuilding. No engineering-heavy effort.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg transform transition-transform hover:scale-110">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Define Your Business Goal
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Activation, deposit, EMI conversion, subscription renewal, portfolio growth, or retention — you choose the outcome. 
                  Agents begin learning immediately.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg transform transition-transform hover:scale-110">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Define Your Strategies
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  You're no longer limited to one strategy for everyone. 
                  You define the strategic levers; the system provides insights: what's working/failing, emerging behavioural patterns, micro-segment dynamics, new strategy angles. 
                  Your role shifts from operating tools → shaping strategy.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg transform transition-transform hover:scale-110">
                  4
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  See Measurable Lift in Weeks
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Track real-time improvements in activation, retention, repeat transactions, and LTV. 
                  Most enterprises see measurable lift within 3–6 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};