import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Network } from "lucide-react";

const SolutionsHeroNew = () => {
  return (
    <section className="relative min-h-[85vh] bg-gradient-to-b from-background via-background to-muted/20 pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      {/* Subtle network pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32">
          <Network className="w-full h-full text-primary" />
        </div>
        <div className="absolute bottom-32 right-32 w-24 h-24">
          <Brain className="w-full h-full text-primary" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Header */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            AI Decisioning for Fintech Activation & Growth
          </h1>
          
          {/* Subheader */}
          <h3 className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms]">
            Turn your first-party data into real-time, 1:1 personalized experiences that drive activation, retention, and lifetime value across banking, trading, payments, and lending.
          </h3>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:400ms]">
            <Button 
              size="lg" 
              className="px-8 min-w-[200px]"
              asChild
            >
              <Link to="/solutions/bfsi">Explore Industry Solutions</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 min-w-[200px]"
              asChild
            >
              <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
          </div>
          
          {/* Abstract AI Visual */}
          <div className="mt-16 relative h-64 flex items-center justify-center animate-fade-in [animation-delay:600ms]">
            <div className="relative">
              {/* Central Brain/AI Node */}
              <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/25 animate-neural-pulse">
                <Brain className="w-12 h-12 text-primary-foreground"/>
              </div>
              
              {/* Orbiting data nodes */}
              <div className="absolute inset-0 w-24 h-24">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary/60 rounded-full animate-orbit-1"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary/60 rounded-full animate-orbit-2"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary/60 rounded-full animate-orbit-3"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary/60 rounded-full animate-orbit-4"></div>
              </div>
              
              {/* Connecting lines animation */}
              <svg className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-30">
                <line x1="128" y1="128" x2="208" y2="128" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse"/>
                <line x1="128" y1="128" x2="48" y2="128" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse [animation-delay:200ms]"/>
                <line x1="128" y1="128" x2="128" y2="48" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse [animation-delay:400ms]"/>
                <line x1="128" y1="128" x2="128" y2="208" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse [animation-delay:600ms]"/>
              </svg>
              
              {/* Glow effect */}
              <div className="absolute inset-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHeroNew;
