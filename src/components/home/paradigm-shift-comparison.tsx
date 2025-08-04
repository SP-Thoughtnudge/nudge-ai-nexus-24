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
            {/* Left Column - Stressed Marketer Illustration */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                  {/* Illustration representing stressed marketer with multiple channels */}
                  <div className="relative">
                    {/* Central figure */}
                    <div className="w-32 h-32 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Floating elements around the figure */}
                    <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center animate-float">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-brand-orange/20 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
                      <svg className="w-8 h-8 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-brand-yellow/20 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                      <svg className="w-8 h-8 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '1.5s'}}>
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                </div>
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