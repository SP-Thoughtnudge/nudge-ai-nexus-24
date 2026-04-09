
import { TrendingUp, TrendingDown, Timer, Eye } from "lucide-react";

const OutcomesSection = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "35%",
      label: "Higher conversion rates",
      description: "Per-customer optimization drives significantly higher action rates vs. batch campaigns.",
    },
    {
      icon: TrendingDown,
      value: "40%",
      label: "Reduction in churn",
      description: "Early detection and intervention through continuous behavioral learning.",
    },
    {
      icon: Timer,
      value: "Weeks",
      label: "Time to measurable ROI",
      description: "Not months. The system starts learning from day one and compounds.",
    },
    {
      icon: Eye,
      value: "∞",
      label: "Behavioral insights",
      description: "Continuous discovery of customer motivations, timing patterns, and preferences.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Outcomes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              From batch campaigns to individual intelligence.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              When every customer gets their own journey, the numbers change.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, i) => (
              <div key={i} className="p-6 rounded-xl border border-border bg-card group hover:border-primary/20 hover:shadow-md transition-all duration-300 text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-sm font-semibold text-foreground mb-2">{metric.label}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
