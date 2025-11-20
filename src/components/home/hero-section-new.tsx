import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSectionNew = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-8 leading-tight">
            AI Decisioning for 1:1 Personalized CX
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-muted-foreground mb-12 leading-relaxed max-w-5xl mx-auto">
            Your data already knows your customers — Thoughtnudge activates it.<br />
            Our agentic learning infrastructure runs thousands of micro-experiments, learns each individual's preferences, and delivers adaptive, hyper-personalized decisions in real time to drive activation, retention, and lifetime value.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="xl" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://calendly.com/himanshu_chauhan/30min?month=2025-11" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
            
            <Button 
              asChild 
              size="xl" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Link to="/how-it-works">
                Explore How It Works →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};