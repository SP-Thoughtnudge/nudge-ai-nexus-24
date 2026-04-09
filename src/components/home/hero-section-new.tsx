
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSectionNew = () => {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 bg-background relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-foreground mb-6 leading-[1.08] tracking-tight">
              Every customer gets<br />
              <span className="text-primary">their own journey.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Thoughtnudge is the AI-native system behind every customer interaction — deciding what to do next, constantly learning, and optimizing performance across your entire lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-6 text-base font-medium rounded-lg transition-all duration-300"
              >
                <Link to="/growth-audit">
                  Get a Retention Audit
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

          {/* Visual: Animated autonomous loop */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-80 h-80">
              {/* Central hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-neural-pulse">
                  <span className="text-primary font-bold text-xs tracking-wider">AI ENGINE</span>
                </div>
              </div>
              
              {/* Orbiting nodes */}
              {[
                { label: "Learn", angle: 0, delay: "0s" },
                { label: "Decide", angle: 90, delay: "0.5s" },
                { label: "Act", angle: 180, delay: "1s" },
                { label: "Optimize", angle: 270, delay: "1.5s" },
              ].map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = Math.cos(rad) * 130;
                const y = Math.sin(rad) * 130;
                return (
                  <div
                    key={i}
                    className="absolute w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: node.delay,
                    }}
                  >
                    <span className="text-xs font-semibold text-foreground">{node.label}</span>
                  </div>
                );
              })}
              
              {/* Connecting ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/15 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-10 rounded-full border border-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
