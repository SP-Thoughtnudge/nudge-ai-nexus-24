import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FinalCtaNew = () => {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(hsl(var(--background)) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Transform how your growth team works.
          </h2>
          <p className="text-base md:text-lg text-background/60 mb-8 leading-relaxed max-w-xl mx-auto">
            Set your goal, then let Thoughtnudge take it from there. What used to take weeks happens continuously — so every interaction gets better.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium rounded-lg"
          >
            <Link to="/growth-audit">
              Get a Retention Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
