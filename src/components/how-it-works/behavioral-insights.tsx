import { TrendingUp, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const BehavioralInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Optimal Timing Windows",
      description: "4–7 PM conversion lift",
      stat: "+320%",
      detail: "Discovered through continuous per-user timing experiments"
    },
    {
      icon: Target,
      title: "Motivational Drivers",
      description: "FOMO vs. Reassurance",
      stat: "2.1x variance",
      detail: "User segments respond to different psychological triggers"
    },
    {
      icon: Users,
      title: "High-LTV Micro-Cohorts",
      description: "Behavioral pattern clusters",
      stat: "15% of users",
      detail: "Drive 60% of revenue through specific engagement patterns"
    }
  ];

  const insightTypes = [
    "Trust-building content sequences",
    "Risk appetite profiles",
    "Motivational drivers (FOMO, curiosity, reassurance, urgency)",
    "Concrete insight examples",
    "High-LTV micro-cohorts",
    "Winback-specific patterns"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Deep Behavioral Insights
          </h2>
          <p className="text-xl text-muted-foreground">
            Insights You Can't Get From A/B Tests or Segments
          </p>
        </div>

        {/* Main Insight Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {insights.map((insight, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow">
              <insight.icon className="w-12 h-12 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-foreground mb-2">{insight.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{insight.description}</p>
              <div className="text-4xl font-bold text-primary mb-4">{insight.stat}</div>
              <p className="text-sm text-muted-foreground">{insight.detail}</p>
            </Card>
          ))}
        </div>

        {/* Additional Insights */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Showcases insights discovered automatically:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {insightTypes.map((type, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehavioralInsights;
