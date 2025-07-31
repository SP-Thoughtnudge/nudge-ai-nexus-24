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
            {/* Dashboard mockup placeholder */}
            <div className="bg-card border border-border rounded-lg shadow-2xl p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-32 h-6 bg-primary/20 rounded animate-pulse"></div>
                  <div className="w-24 h-8 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-medium">Live</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="w-16 h-4 bg-primary/30 rounded mb-2 animate-pulse"></div>
                    <div className="w-20 h-8 bg-primary/60 rounded animate-pulse"></div>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="w-16 h-4 bg-primary/30 rounded mb-2 animate-pulse"></div>
                    <div className="w-20 h-8 bg-primary/60 rounded animate-pulse"></div>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="w-16 h-4 bg-primary/30 rounded mb-2 animate-pulse"></div>
                    <div className="w-20 h-8 bg-primary/60 rounded animate-pulse"></div>
                  </div>
                </div>

                <div className="bg-secondary/30 p-6 rounded-lg">
                  <div className="w-48 h-4 bg-primary/40 rounded mb-4 animate-pulse"></div>
                  <div className="flex space-x-2">
                    <div className="w-full h-2 bg-primary/20 rounded animate-pulse"></div>
                    <div className="w-full h-2 bg-primary/30 rounded animate-pulse"></div>
                    <div className="w-full h-2 bg-primary/40 rounded animate-pulse"></div>
                    <div className="w-full h-2 bg-primary/50 rounded animate-pulse"></div>
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