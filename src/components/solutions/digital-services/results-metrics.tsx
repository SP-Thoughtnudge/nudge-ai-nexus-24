import { TrendingUp, Activity, UserMinus, Calendar, Users, DollarSign } from "lucide-react";

const ResultsMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "38%",
      label: "increase in refill/repurchase rate"
    },
    {
      icon: Activity,
      value: "25–40%",
      label: "improvement in adherence/habit consistency"
    },
    {
      icon: UserMinus,
      value: "22%",
      label: "reduction in early drop-offs"
    },
    {
      icon: Calendar,
      value: "32%",
      label: "lift in repeat test bookings"
    },
    {
      icon: Users,
      value: "2.5×",
      label: "dormant user recovery"
    },
    {
      icon: DollarSign,
      value: "30%",
      label: "lower incentive cost"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Results That Matter
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Real outcomes from enterprise health and wellness platforms
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;
