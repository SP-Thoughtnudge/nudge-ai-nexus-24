export const UnifiedIntelligence = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            The Brain Behind the Growth:{" "}
            <span className="text-primary">Unified Customer Intelligence</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Central AI Brain Illustration */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-lg">
                {/* Central AI Brain */}
                <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 flex items-center justify-center">
                  <div className="relative">
                    {/* Main AI Brain */}
                    <div className="w-40 h-40 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-full shadow-2xl shadow-primary/30 animate-neural-pulse flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary-foreground/90 rounded-full relative flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">AI</span>
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    
                    {/* Orbiting Customer Icons */}
                    <div className="absolute -top-8 -left-8 w-12 h-12 bg-brand-orange rounded-full animate-orbit-1 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    <div className="absolute -top-8 -right-8 w-12 h-12 bg-brand-yellow rounded-full animate-orbit-2 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-primary/80 rounded-full animate-orbit-3 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-brand-orange/80 rounded-full animate-orbit-4 flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    {/* Communication Bubbles */}
                    <div className="absolute top-4 -right-16 w-8 h-8 bg-white rounded-lg shadow-lg border border-border animate-pulse flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    
                    <div className="absolute bottom-4 -left-16 w-8 h-8 bg-white rounded-lg shadow-lg border border-border animate-pulse flex items-center justify-center" style={{animationDelay: '0.5s'}}>
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our Agentic AI is the central intelligence layer for your entire growth stack. It unifies cross-channel behavior, content, and real-time user intent to make the single best decision for every customer.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                It continuously learns from every interaction, making each decision sharper than the last.
              </p>
              
              {/* Key Features */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Cross-channel behavior unification</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Real-time user intent analysis</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Continuous learning optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};