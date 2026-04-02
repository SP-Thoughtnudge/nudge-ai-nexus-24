import { TrendingUp, Users, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ResultsImpact = () => {
  const metrics = [
    {
      icon: Zap,
      value: "3x",
      label: "Faster Time-to-Outcome",
      description: "Deploy autonomous decisioning in days, not months",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      value: "40%",
      label: "Higher Retention",
      description: "Adaptive journeys that learn and improve continuously",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      value: "50%",
      label: "Reduction in Manual Operations",
      description: "Eliminate guesswork with AI-powered decisioning",
      color: "text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              From Guesswork to Intelligence. From Campaigns to Outcomes.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              When AI learns and acts autonomously, results follow.
            </p>
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index}
                  className="relative bg-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className={`w-12 h-12 ${metric.color}`} />
                  </div>
                  
                  {/* Value */}
                  <div className="mb-3">
                    <span className="text-5xl md:text-6xl font-bold text-foreground">
                      {metric.value}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {metric.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                  
                  {/* Decorative gradient bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-b-2xl"></div>
                </div>
              );
            })}
          </div>
          
          {/* Animated Background Elements */}
          <div className="relative py-12 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <TrendingUp className="w-64 h-64 text-primary animate-pulse" />
            </div>
            
            {/* CTA */}
            <div className="relative text-center animate-fade-in [animation-delay:450ms]">
              <Button 
                size="lg" 
                className="px-8"
                asChild
              >
                <Link to="/use-cases">
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsImpact;
