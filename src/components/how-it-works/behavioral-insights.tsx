import { TrendingUp, Target, Users, Lightbulb } from "lucide-react";
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
    "Trust-building content sequences",
    "Risk appetite profiles",
    "Motivational drivers (curiosity, reassurance, urgency, FOMO)",
    "High-LTV micro-cohorts",
    "Winback-specific triggers",
    "Channel-timing affinity clusters"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Actionable Intelligence: Discovering Patterns Invisible to Legacy Systems
          </h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
            Insights You Can't Get From Segments, Rule-Based Journeys, or A/B Tests
          </p>
          <p className="text-base text-muted-foreground italic">
            These are illustrative examples of the types of deep patterns agents uncover automatically from your 1st-party data.
          </p>
        </div>

        {/* Main Insight Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <insight.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{insight.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{insight.description}</p>
                {insight.stat && (
                  <div className="text-4xl font-bold text-primary mb-3">{insight.stat}</div>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{insight.detail}</p>
                {insight.example && (
                  <p className="text-xs text-muted-foreground italic mt-4 pt-4 border-t border-border">
                    {insight.example}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Fintech Examples */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-10 bg-gradient-to-br from-muted/50 to-background border-border">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-7 h-7 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Fintech Examples</h3>
            </div>
            <div className="space-y-4">
              {fintechExamples.map((example, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">{example}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-lg text-foreground font-semibold text-center mb-8">
              Agents surface dozens of such insights — including:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {insightTypes.map((type, index) => (
                <Card key={index} className="p-5 bg-card border-border hover:bg-muted/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-foreground">{type}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
            <p className="text-lg text-foreground italic">
              Most of these patterns are not visible in dashboards, SQL reports, or manual analyses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehavioralInsights;
