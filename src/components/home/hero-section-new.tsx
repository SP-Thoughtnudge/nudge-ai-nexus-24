import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSectionNew = () => {
  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Built for FinTech & BFSI</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            AI Decisioning for Revenue Growth in FinTech
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-xl md:text-2xl font-medium text-foreground/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            Turn first-party data into real-time decisions that increase revenue per customer — automatically.
          </h2>
          
          {/* Supporting Line */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Replaces manual segments, A/B tests, and static journeys with a learning system that decides the next best action for every individual.
          </p>

          {/* Proof Bar */}
          <div className="mb-10">
            <p className="text-sm md:text-base text-muted-foreground/80 font-medium">
              Proven <span className="text-foreground font-semibold">25–40% uplift</span> in revenue-critical actions across production deployments.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="xl" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer">
                Talk to Us
              </a>
            </Button>
            
            <Button 
              asChild 
              size="xl" 
              variant="outline"
              className="border-2 border-border text-foreground hover:bg-secondary/50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
            >
              <Link to="/how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};