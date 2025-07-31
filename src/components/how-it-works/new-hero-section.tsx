const NewHeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background to-muted/30 page-with-navbar">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            From Complex Data to Effortless Growth
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in [animation-delay:200ms] max-w-3xl mx-auto leading-relaxed">
            Thoughtnudge is designed for powerful results without the painful setup. We've replaced complex rule-builders and manual analysis with a simple, goal-driven framework.
          </p>
          
          {/* Data Flow Animation */}
          <div className="relative mt-16 animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center justify-center space-x-8 md:space-x-16">
              {/* Chaotic Data */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full animate-pulse [animation-delay:200ms]"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full animate-pulse [animation-delay:400ms]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-destructive rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-destructive rounded-full animate-bounce [animation-delay:100ms] ml-2"></div>
                    <div className="w-2 h-2 bg-destructive rounded-full animate-bounce [animation-delay:200ms] ml-2"></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Complex Data</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <div className="w-16 h-px bg-gradient-to-r from-primary to-primary/60"></div>
                <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent ml-auto"></div>
              </div>

              {/* Organized Growth */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/40 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Effortless Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;