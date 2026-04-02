import { Brain, TrendingDown, Clock, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

export const UnifiedIntelligence = () => {
  const capabilities = [
    {
      icon: TrendingDown,
      title: "Predict Churn Before It Happens",
      description: "Agents detect disengagement signals — session drop-offs, skipped content, declining frequency — and intervene proactively."
    },
    {
      icon: Clock,
      title: "Optimal Timing for Every User",
      description: "Discover each user's engagement window. Reach them when they're most likely to act — not when your calendar says to."
    },
    {
      icon: RefreshCw,
      title: "Adaptive Re-engagement",
      description: "Every interaction teaches the agent. Messaging, offers, and channels evolve per-user to maximize retention outcomes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Retention Intelligence That{" "}
            <span className="text-primary">Learns Per User</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            One AI agent per customer. Continuously learning what keeps them subscribed, engaged, and coming back.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <cap.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
