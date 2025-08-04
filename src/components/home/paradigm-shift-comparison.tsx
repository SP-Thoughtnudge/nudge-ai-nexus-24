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
            
            {/* Right Column - Comparison Table */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-muted/50 to-secondary/30">
                        <th className="px-6 py-4 text-left font-semibold text-foreground">The Old Way: The Manual Toolbox</th>
                        <th className="px-6 py-4 text-left font-semibold text-foreground">The New Way: The Autonomous Engine</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-6 py-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-lg">🧠</span>
                            <div>
                              <p className="font-medium text-foreground">Human-Led Guesswork:</p>
                              <p className="text-sm text-muted-foreground">Relies on marketers building journeys based on assumptions.</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-lg">🎯</span>
                            <div>
                              <p className="font-medium text-primary">AI-Led Goal Achievement:</p>
                              <p className="text-sm text-muted-foreground">Relies on an AI defining the optimal path based on a business goal.</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-lg">🧑‍💻</span>
                            <div>
                              <p className="font-medium text-foreground">The Human is the Operator:</p>
                              <p className="text-sm text-muted-foreground">Your team spends its time building, testing, and tweaking campaigns.</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-lg">🤖</span>
                            <div>
                              <p className="font-medium text-primary">The Human is the Strategist:</p>
                              <p className="text-sm text-muted-foreground">Your team is freed to focus on high-level strategy.</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-lg">❌</span>
                            <div>
                              <p className="font-medium text-foreground mb-2">The Manual Grind:</p>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">No Segments</span>
                                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">No Journeys</span>
                                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">No Static Rules</span>
                                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">No A/B Tests</span>
                                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">No Manual Analysis</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-lg">✅</span>
                            <div>
                              <p className="font-medium text-primary mb-2">The Autonomous Advantage:</p>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">AI-Discovered Micro-Cohorts</span>
                                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Dynamic 1:1 Decisions</span>
                                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Continuous Learning</span>
                                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Automated Insights</span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};