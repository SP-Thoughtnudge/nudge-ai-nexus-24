import { Database, ArrowRight, AlertCircle, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProblemContext = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                You Capture Everything. Yet You Still Don't Know Your Customers.
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Enterprises today collect hundreds of behavioral signals — clicks, sessions, transactions, drop-offs, preferences — stored neatly in data warehouses.
                </p>
                <p className="font-medium text-foreground">
                  But when it comes to action, most use only 3–5 variables.
                </p>
                <p>
                  That's because today's systems don't learn or evolve. They depend on static rules, manual segmentation, and A/B tests that can't keep up with dynamic customer behavior.
                </p>
                <div className="bg-muted/50 border-l-4 border-destructive p-6 rounded-r-lg space-y-3">
                  <p className="font-semibold text-foreground">The result?</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Weeks of manual analytics for marginal improvements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Fragmented journeys that fail to adapt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Lost revenue from missed micro-moments of intent</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button 
                variant="link" 
                className="text-primary p-0 h-auto font-semibold text-lg group"
                asChild
              >
                <a href="#approach">
                  Learn How Thoughtnudge Solves This
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            
            {/* Right Side - Visual Infographic */}
            <div className="relative h-[500px] flex items-start justify-center pt-0">
              <div className="relative w-full max-w-md">
                {/* Data Warehouse */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-card border-2 border-border rounded-lg p-6 shadow-lg w-48 animate-fade-in">
                  <Database className="w-8 h-8 text-primary mb-2 mx-auto" />
                  <p className="text-sm font-semibold text-center">Data Warehouse</p>
                  <p className="text-xs text-muted-foreground text-center mt-1">50+ Variables</p>
                </div>
                
                {/* Arrow Down */}
                <div className="absolute top-24 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:200ms]">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
                
                {/* Rules Engine */}
                <div className="absolute top-36 left-1/2 -translate-x-1/2 bg-muted border-2 border-border rounded-lg p-6 shadow-lg w-48 animate-fade-in [animation-delay:400ms]">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 border-2 border-muted-foreground rounded flex items-center justify-center">
                      <span className="text-xs font-bold">IF</span>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-center">Static Rules Engine</p>
                  <p className="text-xs text-destructive text-center mt-1">Uses 3-5 Variables</p>
                </div>
                
                {/* Arrow Down */}
                <div className="absolute top-60 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:600ms]">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
                
                {/* Lost Opportunities */}
                <div className="absolute top-72 left-1/2 -translate-x-1/2 bg-destructive/10 border-2 border-destructive/50 rounded-lg p-6 shadow-lg w-56 animate-fade-in [animation-delay:800ms]">
                  <AlertCircle className="w-8 h-8 text-destructive mb-2 mx-auto" />
                  <p className="text-sm font-semibold text-center text-destructive">Lost Opportunities</p>
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Missed Intent</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Poor Timing</span>
                      <span className="font-semibold">73%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Wrong Message</span>
                      <span className="font-semibold">65%</span>
                    </div>
                  </div>
                </div>
                
                {/* Scattered data visualization */}
                <div className="absolute -right-8 top-12 opacity-30">
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemContext;
