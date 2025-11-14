import { TrendingDown, Users, TestTube, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyGrowthPlateaus = () => {
  const blockers = [
    { icon: Users, label: "Static Segments", description: "Oversimplify behavior" },
    { icon: Clock, label: "Manual Journeys", description: "Cannot adapt in real-time" },
    { icon: TestTube, label: "Slow A/B Tests", description: "Learn too slowly" },
    { icon: TrendingDown, label: "Stagnant Growth", description: "Insights lag behind actions" }
  ];

  const signals = [
    "Customer context",
    "App events",
    "Purchases & transactions",
    "Timing patterns",
    "Content consumption",
    "Engagement history",
    "App journeys"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Growth Plateaus — Even With More Data
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stacks have evolved. Customer behaviour has evolved. But growth engines still rely on static journeys and slow, manual decisions.
          </p>
        </div>

        {/* The Problem Statement */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-muted/50 to-background border-border">
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              Enterprises collect <span className="font-semibold text-primary">thousands of signals</span> — {signals.join(", ")} — yet use only a few because traditional systems can't keep up.
            </p>
            <div className="h-px bg-border mb-6" />
            <p className="text-base text-muted-foreground italic">
              The gap between data available and data utilized continues to widen.
            </p>
          </Card>
        </div>

        {/* Blockers Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {blockers.map((blocker, index) => (
              <div key={index} className="relative group">
                <Card className="h-full p-8 bg-card hover:bg-muted/30 border-border hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <blocker.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{blocker.label}</h3>
                    <p className="text-sm text-muted-foreground">{blocker.description}</p>
                  </div>
                </Card>
                {index < blockers.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            This is the plateau most enterprises hit — not from lack of data, but from <span className="font-semibold text-foreground">systems that can't learn at per-user level</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyGrowthPlateaus;
