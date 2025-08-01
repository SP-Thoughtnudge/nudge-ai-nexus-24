import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ProductHero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            The Autonomous Platform to{" "}
            <span className="text-primary">Maximize Customer Lifetime Value</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Thoughtnudge isn't just a tool; it's your new strategic partner. Explore the features that combine behavioral science and artificial intelligence to turn every customer interaction into a revenue opportunity.
          </p>

          <div className="relative max-w-5xl mx-auto">
            {/* Customer Journey to Growth Visual */}
            <div className="relative h-[500px] bg-gradient-to-br from-background via-card/50 to-background border border-border rounded-xl shadow-2xl overflow-hidden">
              
              {/* Stage 1: Customer Data (Left) */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary/30 rounded-full border-2 border-border flex items-center justify-center mb-3 animate-fade-in">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Customer Data</p>
                </div>
              </div>

              {/* Data Flow Arrow 1 */}
              <div className="absolute left-32 top-1/2 transform -translate-y-1/2">
                <div className="w-20 h-0.5 bg-gradient-to-r from-muted-foreground/40 to-primary animate-data-flow"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                  <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              </div>

              {/* Stage 2: AI Brain (Center) */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Central AI Brain with Neural Network */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-full shadow-lg shadow-primary/30 animate-neural-pulse flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary-foreground/90 rounded-full relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Neural connections */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-brand-orange rounded-full animate-neural-node" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-brand-yellow rounded-full animate-neural-node" style={{animationDelay: '0.8s'}}></div>
                  <div className="absolute -bottom-2 -left-1 w-3 h-3 bg-brand-orange rounded-full animate-neural-node" style={{animationDelay: '1.2s'}}></div>
                  <div className="absolute -bottom-2 -right-1 w-4 h-4 bg-brand-yellow rounded-full animate-neural-node" style={{animationDelay: '0.4s'}}></div>
                  <div className="absolute top-1 -left-4 w-2 h-2 bg-primary/70 rounded-full animate-neural-node" style={{animationDelay: '1.6s'}}></div>
                  <div className="absolute top-1 -right-4 w-2 h-2 bg-primary/70 rounded-full animate-neural-node" style={{animationDelay: '0.6s'}}></div>
                  
                  {/* AI Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <p className="text-sm font-semibold text-primary">AI Engine</p>
                  </div>
                </div>
              </div>

              {/* Decision Branches (Right side) */}
              <div className="absolute right-32 top-1/2 transform -translate-y-1/2">
                <div className="space-y-6">
                  {/* Personalization */}
                  <div className="flex items-center space-x-3 animate-decision-branch" style={{animationDelay: '1s'}}>
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">Personalization</span>
                  </div>
                  
                  {/* Timing */}
                  <div className="flex items-center space-x-3 animate-decision-branch" style={{animationDelay: '1.5s'}}>
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">Optimal Timing</span>
                  </div>
                  
                  {/* Channel */}
                  <div className="flex items-center space-x-3 animate-decision-branch" style={{animationDelay: '2s'}}>
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">Best Channel</span>
                  </div>
                </div>
              </div>

              {/* Flow lines from AI to decisions */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent absolute top-[-40px] left-12 rotate-12 animate-connection-flow" style={{animationDelay: '1s'}}></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent absolute top-0 left-12 animate-connection-flow" style={{animationDelay: '1.5s'}}></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent absolute top-[40px] left-12 rotate-[-12deg] animate-connection-flow" style={{animationDelay: '2s'}}></div>
              </div>

              {/* Growth Outcome (Far Right) */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full border-2 border-primary/30 flex items-center justify-center mb-3">
                    <div className="space-y-1">
                      <div className="flex items-end justify-center space-x-1">
                        <div className="w-1 h-3 bg-primary/60 rounded-full animate-growth-bar" style={{animationDelay: '2.5s'}}></div>
                        <div className="w-1 h-5 bg-primary/70 rounded-full animate-growth-bar" style={{animationDelay: '3s'}}></div>
                        <div className="w-1 h-7 bg-primary/80 rounded-full animate-growth-bar" style={{animationDelay: '3.5s'}}></div>
                        <div className="w-1 h-9 bg-primary rounded-full animate-growth-bar" style={{animationDelay: '4s'}}></div>
                      </div>
                      <div className="text-xs font-bold text-primary">↗ +47%</div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-primary">Customer LTV</p>
                </div>
              </div>

              {/* Final Flow Arrow */}
              <div className="absolute right-32 top-1/2 transform -translate-y-1/2">
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary/60 to-primary animate-final-flow" style={{animationDelay: '2.5s'}}></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                  <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent animate-final-flow" style={{animationDelay: '2.5s'}}></div>
                </div>
              </div>

              {/* Ambient Background Elements */}
              <div className="absolute top-8 left-20 w-2 h-2 bg-brand-orange/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
              <div className="absolute bottom-12 left-32 w-1 h-1 bg-brand-yellow/40 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
              <div className="absolute top-16 right-24 w-1 h-1 bg-primary/30 rounded-full animate-float" style={{animationDelay: '5s'}}></div>
              <div className="absolute bottom-8 right-40 w-2 h-2 bg-brand-orange/20 rounded-full animate-float" style={{animationDelay: '6s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};