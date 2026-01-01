import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSectionNew = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Built for BFSI</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 leading-tight px-2">
            AI Decisioning for FinTech Activation
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 mb-4 leading-relaxed max-w-4xl mx-auto">
            AI that learns what it takes to activate each user — and executes it automatically.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Replaces segments, A/B tests, and static journeys with real-time decisions for every user.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="xl" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer">
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