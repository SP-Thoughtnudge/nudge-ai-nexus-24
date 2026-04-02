import { Target, TestTube, Database, TrendingUp, Lightbulb, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const EnterpriseValue = () => {
  const values = [
    { icon: Target, label: "Eliminates manual retention flows", description: "Autonomous agents replace static journey builders and drip campaigns" },
    { icon: TestTube, label: "Replaces slow A/B testing", description: "Continuous per-user experimentation at scale" },
    { icon: Database, label: "Works with your existing stack", description: "Connects to your data warehouse, CDP, and engagement tools" },
    { icon: TrendingUp, label: "Reduces churn, lifts CLTV", description: "Measurable impact on renewal rates, reactivation, and subscriber LTV" },
    { icon: Lightbulb, label: "Surfaces retention insights", description: "Uncovers churn patterns and engagement signals invisible to analysts" },
    { icon: DollarSign, label: "ROI visible in weeks", description: "Fast time-to-value with immediate retention optimization" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Enterprise-Grade Retention Infrastructure
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A complete shift from reactive win-back to proactive, per-user retention intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseValue;
