import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSectionNew = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-8 leading-tight">
            One AI Agent for Every Customer
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-muted-foreground mb-12 leading-relaxed max-w-5xl mx-auto">
            AI learning infrastructure for true 1:1 personalization — no rules, segments, A/B tests or manual analysis. Autonomous agents learn from every interaction and adapt experiences across messaging and in-app touchpoints in real time.
          </h2>

          <div className="flex justify-center">
            <Button 
              asChild 
              size="xl" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/growth-audit">
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};