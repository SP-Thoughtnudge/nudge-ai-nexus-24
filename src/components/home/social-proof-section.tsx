export const SocialProofSection = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo Ticker */}
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center space-x-8 animate-scroll-left">
              <div className="flex items-center space-x-8 min-w-max">
                <span className="text-2xl font-bold text-muted-foreground">Cookd</span>
                <span className="text-2xl font-bold text-muted-foreground">GrowthCo</span>
                <span className="text-2xl font-bold text-muted-foreground">RetailMax</span>
                <span className="text-2xl font-bold text-muted-foreground">EcomPro</span>
                <span className="text-2xl font-bold text-muted-foreground">ShopSmart</span>
                <span className="text-2xl font-bold text-muted-foreground">Cookd</span>
                <span className="text-2xl font-bold text-muted-foreground">GrowthCo</span>
                <span className="text-2xl font-bold text-muted-foreground">RetailMax</span>
              </div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2X</div>
              <div className="text-sm text-muted-foreground">Revenue Lift</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Higher Conversion</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">-45%</div>
              <div className="text-sm text-muted-foreground">Offer Cost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};