import { Card } from "@/components/ui/card";
import { Brain, Repeat, UserCheck } from "lucide-react";

export const AutonomousAdvantageSection = () => {
  const advantages = [
    {
      icon: Brain,
      title: "From Reactive to Proactive",
      description: "Don't wait for users to churn. Agents detect risk signals early — engagement decay, feature abandonment, timing shifts — and act before it's too late."
    },
    {
      icon: Repeat,
      title: "Every Renewal is Personalized",
      description: "No two users get the same renewal experience. The AI tailors timing, messaging, offers, and channels to what works for each individual."
    },
    {
      icon: UserCheck,
      title: "Retention Insights You Can't See",
      description: "Agents surface micro-cohorts, motivation patterns, and timing windows that no dashboard or SQL query can reveal."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            The{" "}
            <span className="text-primary">Retention Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Move from batch-and-blast retention to autonomous, per-user intelligence.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <adv.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{adv.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{adv.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
