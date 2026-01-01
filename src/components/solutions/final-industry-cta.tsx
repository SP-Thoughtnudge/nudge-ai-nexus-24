import { Button } from "@/components/ui/button";
import { Brain, Sparkles } from "lucide-react";

const FinalIndustryCta = () => {
  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Brain className="w-10 h-10 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in [animation-delay:100ms]">
            Didn't Find Your Industry?
          </h2>
          
          {/* Subheader */}
          <h3 className="text-xl md:text-2xl text-foreground font-semibold mb-4 animate-fade-in [animation-delay:200ms]">
            If Your Growth Depends on Customer Actions — We Can Help.
          </h3>
          
          {/* Body Text */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:300ms]">
            Our Agentic AI adapts to any enterprise model where data, decisions, and personalization drive outcomes — from subscription platforms to digital banking.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:400ms]">
            <Button 
              size="lg" 
              className="px-8 min-w-[180px]"
              asChild
            >
              <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 min-w-[180px]"
              asChild
            >
              <a href="https://calendly.com/himanshu_chauhan/30min" target="_blank" rel="noopener noreferrer">Talk to Our AI Experts</a>
            </Button>
          </div>
          
          {/* Trust Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in [animation-delay:500ms]">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Enterprise-Ready | Goal-Driven | Industry-Agnostic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalIndustryCta;
