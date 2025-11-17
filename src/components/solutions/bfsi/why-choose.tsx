import { Card, CardContent } from "@/components/ui/card";
import { Plug, User, Sparkles, Database, Network } from "lucide-react";

const WhyChoose = () => {
  const benefits = [
    {
      icon: Plug,
      title: "One-time integration, infinite use cases",
      description: "Deploy once, activate across every customer touchpoint without rebuilding infrastructure."
    },
    {
      icon: User,
      title: "Hyper-personalization for every individual",
      description: "True 1:1 adaptive journeys, not segments or cohorts — powered by individual psychographic profiles."
    },
    {
      icon: Sparkles,
      title: "Next-gen digital financial experiences",
      description: "Move beyond static rules and manual campaigns to autonomous, intelligent customer engagement."
    },
    {
      icon: Database,
      title: "Define once, deliver everywhere",
      description: "Set business goals, and let AI autonomously orchestrate actions across email, push, SMS, in-app, and more."
    },
    {
      icon: Network,
      title: "BFSI-ready templates",
      description: "Pre-built use cases for onboarding, activation, cross-sell, churn prevention, and dormant recovery."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why BFSI Teams Choose Thoughtnudge
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade AI decisioning built specifically for financial services growth models.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-6 space-y-3 text-center h-full flex flex-col">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
