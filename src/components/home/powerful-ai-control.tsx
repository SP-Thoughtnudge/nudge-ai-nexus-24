export const PowerfulAiControl = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            Powerful AI, Human Control
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Goal Setting Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="/lovable-uploads/89663867-ccab-49fc-9875-8353a0a78bf6.png" 
                    alt="Strategic goal setting interface showing business objectives and AI configuration" 
                    className="w-full h-auto transition-transform duration-1000 hover:scale-105 animate-pulse"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Three Control Points */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    You Set the Goal
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You define the business objective. Our AI's job is to achieve it.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    You Approve the Strategy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You approve the strategic angles. The AI only operates within the brand guardrails you set.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    You Have Full Transparency
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our analytics provide a clear view into every decision the AI makes and the results it drives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};