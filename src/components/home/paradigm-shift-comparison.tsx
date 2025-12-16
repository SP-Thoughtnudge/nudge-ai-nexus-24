export const ParadigmShiftComparison = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-6 max-w-4xl mx-auto leading-relaxed">
            Modern FinTechs capture thousands of behavioral and transactional signals per user.
            But activation decisions are still made using segments, averages, and delayed human judgment — freezing dynamic behavior at the moment it matters most.
          </p>
          
          <p className="text-xl md:text-2xl font-semibold text-foreground text-center mb-16 max-w-3xl mx-auto">
            This is why activation improvements stall after early wins.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Visual */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <img 
                  src="/lovable-uploads/bd69a98a-5562-4e47-b201-28dd66278989.png" 
                  alt="Traditional enterprise data infrastructure with disconnected systems and manual processes" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Right Column - Visual Comparison Lists */}
            <div className="space-y-8">
              {/* The Old Way */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Traditional Activation Stack
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Data lives in warehouse tables, not decisions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Segments flatten individual intent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">A/B tests optimize one variable at a time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Journeys take weeks to change</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Same strategy applied to fundamentally different users</span>
                  </div>
                </div>
              </div>
              
              {/* The New Way */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Thoughtnudge Agentic Layer
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">First-party data activated in real time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">One autonomous learning agent per user</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Thousands of micro-experiments daily</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Decisions adapt per user, per moment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Measurable lift in weeks — not quarters</span>
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