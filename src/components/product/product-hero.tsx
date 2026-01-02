export const ProductHero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            The Autonomous Platform to{" "}
            <span className="text-primary">Maximize Customer Lifetime Value</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Thoughtnudge is your enterprise AI decisioning platform. We activate your 1st party data and behavioral intelligence to deliver hyper-personalized experiences across every customer touchpoint, maximizing lifetime value at scale.
          </p>

          <div className="relative max-w-5xl mx-auto mt-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-60"></div>
            <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-2xl bg-card">
              <img 
                src="/lovable-uploads/goals-dashboard.png" 
                alt="Thoughtnudge Goals Dashboard - Define business outcomes with active goals, user activation tracking, KYC completion, and goal achievement metrics"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};