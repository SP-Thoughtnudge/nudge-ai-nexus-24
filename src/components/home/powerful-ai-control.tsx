import { Card } from "@/components/ui/card";
import { Target, Shield, BarChart3 } from "lucide-react";

export const PowerfulAiControl = () => {
  const controls = [
    {
      icon: Target,
      title: "You Set the Retention Goal",
      description: "Reduce churn by 30%. Increase renewal rate. Reactivate dormant users. Define the objective — the AI figures out how."
    },
    {
      icon: Shield,
      title: "You Define the Guardrails",
      description: "Control messaging tone, offer limits, channel preferences, and frequency caps. The AI operates within your brand rules."
    },
    {
      icon: BarChart3,
      title: "You See Every Decision",
      description: "Full transparency into what the AI is learning, which patterns it's discovering, and the retention outcomes it's driving."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Autonomous AI. Full Human Control.
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Your retention team stays strategic. The AI handles millions of per-user decisions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {controls.map((control, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <control.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{control.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{control.description}</p>
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
