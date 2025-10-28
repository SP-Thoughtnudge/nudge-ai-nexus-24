import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSectionNew = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-8 leading-tight">
            AI Decisioning for 1:1 Lifecycle Marketing
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-muted-foreground mb-12 leading-relaxed max-w-5xl mx-auto">
            Agentic learning infrastructure that activates your first-party data to autonomously learn, decide and act - replacing static rules, A/B tests and manual analysis. Our AI agents run millions of micro-experiments, infer individual intent, and adapt every customer touchpoint in real-time to maximise LTV.
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