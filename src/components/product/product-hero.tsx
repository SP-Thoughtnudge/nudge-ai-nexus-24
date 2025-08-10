import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";

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

          <div className="relative max-w-6xl mx-auto mt-6">
            <div className="overflow-hidden rounded-3xl border border-border bg-card/60 shadow-2xl">
              <OptimizedImage
                src="/lovable-uploads/1d4a2046-adf3-4c69-a760-eb2737406da1.png?v=20250810"
                alt="Thoughtnudge Product hero illustration showing data to decisions to growth"
                className="w-full h-auto"
                lazy
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};