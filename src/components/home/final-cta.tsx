import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-inter">
            Ready to Fix Your <span className="text-primary">Retention Problem?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-inter">
            Get a free retention audit. We'll analyze your churn patterns and show you exactly where AI can recover lost revenue.
          </p>
          
          <div className="space-y-4">
            <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
              <Link to="/growth-audit" className="flex items-center">
                Get a Retention Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground font-inter">
              Free audit · No commitment · Results in 2 weeks
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
