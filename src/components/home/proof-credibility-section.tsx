export const ProofCredibilitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Proof. Credibility.{" "}
            <span className="text-primary">Outcomes.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            Your data and channels stay the same — the outcomes change. 
            Thoughtnudge delivers measurable, compounding improvement across activation, engagement, retention, and lifetime value.
          </p>

          {/* Outcomes Dashboard Screenshot */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
            <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <img 
                src="/lovable-uploads/outcomes-dashboard.png" 
                alt="Outcomes dashboard showing +24.3% net uplift, 94% confidence, Agent vs Control comparison with 30.1% vs 24.2% conversion rate, and outcome over time chart"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Testimonial Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Testimonial 1 - Fintech EMI */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Metric Header */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 border-b border-border">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  27% Increase in EMI Conversions
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide font-semibold mb-4">
                  In 6 Weeks
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">27%</div>
                    <div className="text-xs text-muted-foreground">More EMI Conversions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">22%</div>
                    <div className="text-xs text-muted-foreground">Incentive Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">24-48h</div>
                    <div className="text-xs text-muted-foreground">Faster Decisions</div>
                  </div>
                </div>
              </div>
              
              {/* Quote Section */}
              <div className="p-8">
                <blockquote className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                  "Thoughtnudge didn't just improve our EMI click-throughs — it learned each customer's repayment behaviour, timing preferences, and reassurance needs. 
                  Within six weeks, EMI conversions increased by 27% while our incentive spend dropped. This is the first time we've seen personalization actually drive measurable financial impact."
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">V</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">VP, Cards & Payments</div>
                    <div className="text-sm text-muted-foreground">Leading Fintech</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 - Trading Platform */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Metric Header */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 border-b border-border">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  41% Increase in First Trade
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide font-semibold mb-4">
                  In 5 Weeks
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">41%</div>
                    <div className="text-xs text-muted-foreground">First Trade Activation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">2.3×</div>
                    <div className="text-xs text-muted-foreground">Deposit Completion</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">19%</div>
                    <div className="text-xs text-muted-foreground">Dormant Reactivation</div>
                  </div>
                </div>
              </div>
              
              {/* Quote Section */}
              <div className="p-8">
                <blockquote className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                  "Our activation funnels were stuck — same drop-offs, same segments, same strategies. 
                  Thoughtnudge learned what each user needed to complete their first trade: timing, product framing, reassurance. 
                  First-trade activation jumped 41% without changing our product."
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Product Lead</div>
                    <div className="text-sm text-muted-foreground">Trading Platform</div>
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
