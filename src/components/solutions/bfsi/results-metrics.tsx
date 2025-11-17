import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, BarChart3, Target, Zap } from "lucide-react";

const ResultsMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      stat: "2.3×",
      label: "Increase in first-transaction completion"
    },
    {
      icon: DollarSign,
      stat: "40%",
      label: "Improvement in EMI conversion"
    },
    {
      icon: Users,
      stat: "32%",
      label: "Lift in monthly active investors"
    },
    {
      icon: BarChart3,
      stat: "25-45%",
      label: "Dormant user recovery"
    },
    {
      icon: Target,
      stat: "20-30%",
      label: "Incentive cost savings"
    },
    {
      icon: Zap,
      stat: "3-5×",
      label: "Faster activation vs. control"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Real Results From BFSI Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable impact across activation, engagement, revenue expansion, and retention — delivered in weeks, not quarters.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-[1.05] animate-fade-in bg-background overflow-hidden relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary" />
                  
                  <CardContent className="p-8 text-center space-y-4">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Stat */}
                    <div className="text-5xl md:text-6xl font-bold text-primary">
                      {metric.stat}
                    </div>
                    
                    {/* Label */}
                    <p className="text-base text-muted-foreground font-medium leading-relaxed">
                      {metric.label}
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

export default ResultsMetrics;
