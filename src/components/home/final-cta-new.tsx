import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FinalCtaNew = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Ready to Fix{" "}
            <span className="text-primary">Your Retention Problem?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Get a free retention audit. We'll analyze your churn patterns and show you exactly where AI can recover lost revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="xl" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/growth-audit">
                Get a Retention Audit
              </Link>
            </Button>
            <Button 
              asChild 
              size="xl" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-lg"
            >
              <Link to="/product">
                Explore the Platform
              </Link>
            </Button>
          </div>
          
          {/* Trust Signals */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
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
    </section>
  );
};
