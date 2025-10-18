import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSectionNew = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            One AI Agent for Every Customer
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 leading-tight">
            Autonomous AI that learns and decides for each customer in real time dynamically shaping every experience to drive revenue, loyalty, and lifetime value with Amazon-like intelligence, deployed securely inside your enterprise.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
            It understands each customer's intent and context continuously and acts instantly to move them toward the next best action.
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