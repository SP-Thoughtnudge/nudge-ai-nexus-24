
import { Database, Workflow, Shield, Clock, BarChart3, Lightbulb } from "lucide-react";

export const EnterpriseSection = () => {
  const features = [
    { icon: Workflow, text: "No journey builder needed" },
    { icon: Database, text: "Runs on your data warehouse" },
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Clock, text: "Live in days, not months" },
    { icon: BarChart3, text: "Measurable ROI in weeks" },
    { icon: Lightbulb, text: "Uncovers behavioral insights automatically" },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Built for enterprise</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Replaces complexity, not your stack.
          </h2>
          <p className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-2xl">
            Thoughtnudge works alongside your existing infrastructure. No migration, no rip-and-replace, no months-long integration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
