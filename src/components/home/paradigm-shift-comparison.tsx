export const ParadigmShiftComparison = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            From Data Warehouse to{" "}
            <span className="text-primary">Intelligent Action</span>
          </h2>
          
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
                  Traditional Infrastructure
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Data sits unused in warehouses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Static rule engines and segments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Slow A/B tests, manual analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Weeks to launch new strategies</span>
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
                    <span className="text-foreground font-medium">First-party data activated in real-time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Autonomous learning per customer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Millions of micro-experiments daily</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Live in days with measurable ROI</span>
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