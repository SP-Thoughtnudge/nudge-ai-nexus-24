import { TrendingUp, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const BehavioralInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Optimal Timing Windows",
      description: "4–7 PM spike in conversions",
      stat: "+320%",
      detail: "lift discovered through per-user timing experiments"
    },
    {
      icon: Target,
      title: "Motivational Drivers",
      description: "FOMO vs. Reassurance",
      stat: "2.1× variance",
      detail: "in response across user micro-segments",
      example: "(Example: reassurance messaging outperforms urgency for users who browse frequently but act slowly)"
    },
    {
      icon: Users,
      title: "High LTV Micro-Cohorts",
      description: "15% of users → 60% of revenue",
      stat: "",
      detail: "Agents surface micro-cohorts defined by behavioral patterns, not demographic fields."
    }
  ];

  const fintechExamples = [
    "High-browse/no-KYC users convert with reassurance-based nudges rather than offers",
    "Market-event-sensitive users show 3× higher trade activity with educational insights",
    "Long-term holders respond best to \"portfolio health\" messages, not transactional notifications"
  ];

  const insightTypes = [
    "trust-building content sequences",
    "risk appetite profiles",
    "motivational drivers (curiosity, reassurance, urgency, FOMO)",
    "high-LTV micro-cohorts",
    "winback-specific triggers",
    "channel-timing affinity clusters"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Deep Behavioral Insights (Automatically Discovered)
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Insights You Can't Get From Segments, Rule-Based Journeys, or A/B Tests
          </p>
          <p className="text-lg text-muted-foreground italic">
            These are illustrative examples of the types of deep patterns agents uncover automatically from your 1st-party data.
          </p>
        </div>

        {/* Main Insight Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {insights.map((insight, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow">
              <insight.icon className="w-12 h-12 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-foreground mb-2">{insight.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{insight.description}</p>
              {insight.stat && <div className="text-4xl font-bold text-primary mb-2">{insight.stat}</div>}
              <p className="text-sm text-muted-foreground mb-2">{insight.detail}</p>
              {insight.example && <p className="text-xs text-muted-foreground italic mt-2">{insight.example}</p>}
            </Card>
          ))}
        </div>

        {/* Fintech Examples */}
        <div className="max-w-4xl mx-auto mb-12 p-6 bg-muted/30 rounded-lg border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4">Fintech Examples:</h3>
          <ul className="space-y-3">
            {fintechExamples.map((example, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">{example}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Insights Footer */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-foreground mb-4">
            Agents surface dozens of such insights — including:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {insightTypes.map((type, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">{type}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground italic text-center">
            Most of these patterns are not visible in dashboards, SQL reports, or manual analyses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BehavioralInsights;
