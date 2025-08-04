import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSectionNew = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Stop Building Journeys.{" "}
            <span className="text-primary">Start Driving Outcomes.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
            The future of growth for E-commerce is autonomous. Instead of manual rules, our AI makes millions of 1:1 decisions to solve your most profitable challenges: increasing repeat purchases and winning back dormant customers.
          </p>

          <div className="flex justify-center">
            <Button 
              asChild 
              size="xl" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/growth-audit">
                Request a Free Growth Audit
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};