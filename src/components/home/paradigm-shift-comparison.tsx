export const ParadigmShiftComparison = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Maximize Value From Your{" "}
            <span className="text-primary">First-Party Data</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            Enterprises capture hundreds of behavioural and transactional signals, but this data never turns into real decisions for real customers. 
            Thoughtnudge turns your first-party data into real-time, hyper-personalised customer decisions that drive measurable business outcomes.
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
                  Traditional Infrastructure
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Data sits unused inside warehouse tables</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Segments freeze dynamic customer behaviour</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Slow A/B tests limit experimentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-destructive text-xl">❌</span>
                    <span className="text-foreground font-medium">Manual workflows take weeks to update</span>
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
                    <span className="text-foreground font-medium">One autonomous learning agent per customer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Thousands of micro-experiments every day</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Hyper-personalized decisions for every touchpoint</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">✅</span>
                    <span className="text-foreground font-medium">Measurable lift in weeks, not months</span>
                  </div>
                </div>
              </div>
              
              {/* Outcome Statement */}
              <div className="lg:col-span-2 mt-8 text-center">
                <p className="text-lg md:text-xl text-foreground font-medium">
                  True 1:1 personalization that adapts automatically — without journeys, rules, or manual decisioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};