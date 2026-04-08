
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
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Outcomes</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            From batch campaigns to individual intelligence.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            When every customer gets their own journey, the numbers change.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="p-8 rounded-xl border border-border bg-card group hover:border-primary/20 transition-all duration-300">
              <metric.icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="text-base font-semibold text-foreground mb-2">{metric.label}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
