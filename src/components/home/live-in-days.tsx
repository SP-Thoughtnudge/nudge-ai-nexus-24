export const LiveInDays = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            Live in Days, Not Quarters
          </h2>
          
          {/* 3-Step Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-6 relative z-10">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Connect Your Stack
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With one-click connectors for your existing tools, setup is fast and painless.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-6 relative z-10">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Launch Your First Agent
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our onboarding guides you to launch a high-impact agent in minutes.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-6 relative z-10">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Measure the Impact
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Start seeing measurable ROI on your dashboard from week one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};