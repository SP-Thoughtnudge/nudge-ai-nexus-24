import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "@/components/ui/optimized-image";
import { Link } from "react-router-dom";

export const ProductHero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            The AI Platform Built to{" "}
            <span className="text-primary">Retain Every Subscriber</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Thoughtnudge is your autonomous retention engine. We activate your behavioral data to predict churn, personalize re-engagement, and maximize subscriber lifetime value — at per-user scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/growth-audit">Get a Retention Audit</Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>

          <div className="relative max-w-6xl mx-auto mt-12">
            <div className="relative bg-transparent">
              <OptimizedImage
                src="/lovable-uploads/1d4a2046-adf3-4c69-a760-eb2737406da1.png?v=20250810"
                alt="Thoughtnudge retention platform: behavioral data to per-user retention decisions"
                className="w-full h-[280px] md:h-[340px] lg:h-[360px] object-contain"
                lazy={false}
                priority={true}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
