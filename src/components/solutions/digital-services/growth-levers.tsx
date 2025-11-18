import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, RotateCcw, Shield } from "lucide-react";

const GrowthLevers = () => {
  const levers = [
    {
      icon: Zap,
      title: "Adaptive Onboarding & Activation",
      points: [
        "Personalized early-life nudges",
        "First consultation/test completion",
        "First purchase or plan start",
        "Profile completion",
        "Smooth habit onboarding"
      ]
    },
    {
      icon: Target,
      title: "Intelligent Habit Formation & Engagement",
      points: [
        "Daily check-ins",
        "Routine reinforcement",
        "Missed-day recovery",
        "Feature adoption",
        "Personalized motivation triggers"
      ]
    },
    {
      icon: RotateCcw,
      title: "Autonomous Renewals & Repeat Purchases",
      points: [
        "Refill reminders",
        "Renewals based on individualized timing",
        "Cross-sell to relevant products",
        "Premium plan upsell",
        "Repurchase prediction"
      ]
    },
    {
      icon: Shield,
      title: "Proactive Churn Prevention & Dormant Recovery",
      points: [
        "Early churn detection",
        "Personalized reactivation",
        "Minimum effective offer",
        "Competitor-switch risk",
        "Habit reactivation journeys"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            The Four Growth Levers
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            AI-powered decisioning across every stage of the customer lifecycle
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {levers.map((lever, index) => {
              const Icon = lever.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {lever.title}
                    </h3>
                    <ul className="space-y-2">
                      {lever.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
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

export default GrowthLevers;
