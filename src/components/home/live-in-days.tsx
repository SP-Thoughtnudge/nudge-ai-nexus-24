export const LiveInDays = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            Enterprise-Ready in{" "}
            <span className="text-primary">Days, Not Months</span>
          </h2>
          
          {/* 3-Step Timeline */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center relative">
...
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Connect Your Data Infrastructure
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Plug into your CDP, data warehouse, and activation channels. Native connectors for Segment, Snowflake, Braze, and more.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center relative">
...
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Define Your Business Goal
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Set your target outcome—deposit activation, portfolio growth, subscription renewal—and our AI agents autonomously optimize toward it.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg transform transition-transform hover:scale-110">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  See Measurable Lift in Weeks
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track real-time impact on CLTV, activation rates, and engagement—with full transparency into every AI decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};