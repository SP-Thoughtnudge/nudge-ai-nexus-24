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

          <div className="relative max-w-4xl mx-auto">
            {/* Autonomous Growth Orchestration Visual */}
            <div className="relative h-96 bg-gradient-to-br from-background to-card border border-border rounded-lg shadow-2xl overflow-hidden">
              {/* Central AI Brain */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Core brain node */}
                  <div className="w-16 h-16 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary-foreground/90 rounded-full"></div>
                  </div>
                  
                  {/* Inner network nodes */}
                  <div className="absolute -top-4 -left-4 w-6 h-6 bg-brand-orange rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -top-4 -right-4 w-4 h-4 bg-brand-yellow rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute -bottom-4 -left-2 w-4 h-4 bg-brand-orange rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <div className="absolute -bottom-4 -right-2 w-6 h-6 bg-brand-yellow rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                </div>
              </div>

              {/* Radiating Connection Lines */}
              {/* Top-left connection */}
              <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] origin-left">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Top-right connection */}
              <div className="absolute top-1/2 left-1/2 w-28 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-[-135deg] origin-left">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom-left connection */}
              <div className="absolute top-1/2 left-1/2 w-36 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45 origin-left">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom-right connection */}
              <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-135 origin-left">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-8a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Growth indicators */}
              <div className="absolute top-8 right-8">
                <div className="flex items-end space-x-1">
                  <div className="w-2 h-4 bg-primary/60 rounded-sm"></div>
                  <div className="w-2 h-6 bg-primary/70 rounded-sm"></div>
                  <div className="w-2 h-8 bg-primary rounded-sm"></div>
                  <div className="w-2 h-10 bg-primary rounded-sm"></div>
                </div>
              </div>

              {/* Floating data points */}
              <div className="absolute top-16 left-16 w-3 h-3 bg-brand-orange rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-16 right-16 w-2 h-2 bg-brand-yellow rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
              <div className="absolute top-20 right-20 w-2 h-2 bg-primary/70 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};