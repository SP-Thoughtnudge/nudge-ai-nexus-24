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
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                {/* Arrow to next step */}
                <div className="absolute top-6 -right-4 hidden md:block z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary animate-pulse">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg transform transition-transform hover:scale-110">
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
                {/* Arrow to next step */}
                <div className="absolute top-6 -right-4 hidden md:block z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary animate-pulse">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg transform transition-transform hover:scale-110">
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
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6 relative z-10 shadow-lg transform transition-transform hover:scale-110">
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