export const ProofGrowthSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-background via-secondary/5 to-background border-y border-border/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-foreground">
            The Proof is in the{" "}
            <span className="text-primary">Retention</span>
          </h2>
          
          {/* Testimonial */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-border shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-4 text-foreground">
                "Thoughtnudge transformed how we think about retention. We went from reactive win-back campaigns to proactive, per-user intelligence — and saw an 80% lift in renewals within 8 weeks."
              </blockquote>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">H</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-sm">Head of Retention</div>
                  <div className="text-muted-foreground text-sm">B2C Subscription App</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-3">+40%</div>
              <div className="text-base font-medium text-foreground">Higher Renewal Rates</div>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-3">3×</div>
              <div className="text-base font-medium text-foreground">Dormant User Reactivation</div>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-3">+60%</div>
              <div className="text-base font-medium text-foreground">CLTV Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
