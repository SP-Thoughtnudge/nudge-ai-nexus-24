export const ParadigmShiftComparison = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            A New Way to Grow: The{" "}
            <span className="text-primary">Thoughtnudge Difference</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Stressed Marketer Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <img 
                  src="/lovable-uploads/bd69a98a-5562-4e47-b201-28dd66278989.png" 
                  alt="Overwhelmed marketer dealing with complex tools and multiple challenges" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Right Column - Visual Comparison Lists */}
            <div className="space-y-8">
              {/* The Old Way */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  The Old Way: The Manual Toolbox
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Endless Journey Building</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Manual A/B Testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Static, Rule-Based Segments</span>
                  </div>
                </div>
              </div>
              
              {/* The New Way */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  The New Way: The Autonomous Engine
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Goal-Driven Outcomes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Continuous AI Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Dynamic 1:1 Decisions</span>
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