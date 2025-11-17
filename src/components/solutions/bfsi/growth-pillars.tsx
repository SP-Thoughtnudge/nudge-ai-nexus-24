import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Zap, TrendingUp, Shield } from "lucide-react";

const GrowthPillars = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: "Adaptive Onboarding & Activation",
      description: "Boost early-life completion rates by guiding each new customer through onboarding steps at optimal times with personalized content — ensuring first transaction, KYC completion, or feature adoption happens faster."
    },
    {
      icon: Zap,
      title: "Intelligent Engagement & Habit Formation",
      description: "Drive habitual usage — daily login, wallet load, transaction frequency, portfolio checks — by learning individual user rhythms and delivering timely nudges that align with behavior patterns and motivations."
    },
    {
      icon: TrendingUp,
      title: "Autonomous Cross-Sell & Revenue Expansion",
      description: "Contextual financial product recommendations (credit cards, loans, insurance, mutual funds, premium tiers) that trigger at the moment of highest relevance — when user signals intent or readiness — increasing CLTV without manual targeting."
    },
    {
      icon: Shield,
      title: "Proactive Churn Prevention & Dormant Recovery",
      description: "Detect and recover early churn signals — declining login frequency, abandoned cart, unused balance — with preemptive, personalized interventions before customers disengage, maximizing retention and lifetime value."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              The 4 Growth Pillars of BFSI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From acquisition to retention, Thoughtnudge optimizes every stage of the customer lifecycle with autonomous, real-time decisioning.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-[1.02] animate-fade-in bg-background"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 space-y-4">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
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

export default GrowthPillars;
