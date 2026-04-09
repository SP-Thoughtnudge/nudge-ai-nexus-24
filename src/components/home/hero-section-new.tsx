
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSectionNew = () => {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32 bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl">
          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Powering 1:1 journeys for Chalo, Cookd & more</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground mb-8 leading-[1.05] tracking-tight">
            Stop running campaigns.<br />
            <span className="text-primary">Start running outcomes.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
            Thoughtnudge is the AI-native system that autonomously decides the next best action for every customer — learning what works, generating variations, and optimizing your entire lifecycle without manual rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 text-base font-medium rounded-lg transition-all duration-300"
            >
              <Link to="/growth-audit">
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="px-8 py-6 text-base font-medium text-muted-foreground hover:text-foreground"
              onClick={scrollToHowItWorks}
            >
              See how it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
