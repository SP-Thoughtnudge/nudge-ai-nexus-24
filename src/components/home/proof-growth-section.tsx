export const ProofGrowthSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-background via-secondary/5 to-background border-y border-border/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-foreground">
            The Proof is in the{" "}
            <span className="text-primary">Growth</span>
          </h2>
          
          {/* Compact Testimonial Card */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-border shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-4 text-foreground">
                "Thoughtnudge didn't just lift our conversions by 80%; it fundamentally changed how we approach growth. We're more strategic, efficient, and profitable."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-sm">Head of Growth</div>
                  <div className="text-muted-foreground text-sm">Cookd</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-3">
                +210%
              </div>
              <div className="text-base font-medium text-foreground">
                Dormant User Reactivation
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-3">
                -45%
              </div>
              <div className="text-base font-medium text-foreground">
                Offer Cost
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-3">
                +180%
              </div>
              <div className="text-base font-medium text-foreground">
                Revenue per Customer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};