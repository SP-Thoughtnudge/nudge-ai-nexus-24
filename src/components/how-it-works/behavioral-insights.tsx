import { TrendingUp, Target, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const BehavioralInsights = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Churn Timing Patterns",
      description: "Day 7–14 is the critical window",
      stat: "+45%",
      detail: "retention lift when agents intervene during the disengagement window — before users hit the point of no return"
    },
    {
      icon: Target,
      title: "Renewal Motivators",
      description: "Value reminder vs. discount offer",
      stat: "2.3× variance",
      detail: "in renewal conversion across user micro-cohorts",
      example: "(Example: power users renew faster with feature unlock messages, while light users respond to social proof)"
    },
    {
      icon: Users,
      title: "High-CLTV Micro-Cohorts",
      description: "12% of users → 55% of subscription revenue",
      stat: "",
      detail: "Agents surface retention-critical cohorts defined by behavioral engagement, not demographics."
    }
  ];

  const retentionExamples = [
    "Users who skip 3+ sessions convert with 'progress reminder' nudges, not discounts",
    "Subscription renewals spike 40% when timed 5 days before expiry with personalized value summaries",
    "Dormant users reactivate 3× more with 'new feature' messages than 'we miss you' campaigns"
  ];

  const insightTypes = [
    "Engagement decay patterns",
    "Feature adoption sequences that predict retention",
    "Optimal renewal timing per user",
    "Channel-timing affinity for re-engagement",
    "Winback-specific behavioral triggers",
    "Subscription lifecycle risk signals"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Retention Insights You Can't See Today
          </h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
            Patterns That Segments, Dashboards, and A/B Tests Miss
          </p>
          <p className="text-base text-muted-foreground italic">
            These are examples of deep retention patterns agents uncover automatically from your behavioral data.
          </p>
        </div>

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

        {/* Retention Examples */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-10 bg-gradient-to-br from-muted/50 to-background border-border">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-7 h-7 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Real Retention Patterns</h3>
            </div>
            <div className="space-y-4">
              {retentionExamples.map((example, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground leading-relaxed">{example}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-lg text-foreground font-semibold text-center mb-8">
              Agents surface dozens of retention insights — including:
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
              Most of these retention patterns are invisible in dashboards, cohort reports, or manual analyses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehavioralInsights;
