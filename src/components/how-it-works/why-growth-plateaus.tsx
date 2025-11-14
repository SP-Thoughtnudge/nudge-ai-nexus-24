import { TrendingDown, Users, TestTube, Clock } from "lucide-react";

const WhyGrowthPlateaus = () => {
  const blockers = [
    { icon: Users, label: "Static Segments" },
    { icon: Clock, label: "Manual Journeys" },
    { icon: TestTube, label: "Slow A/B Tests" },
    { icon: TrendingDown, label: "Stagnant Growth" }
  ];

  const challenges = [
    "Journeys cannot adapt in real time",
    "Segments oversimplify behaviour",
    "A/B tests learn too slowly",
    "Insights lag behind decisions & actions",
    "No system learns at a per-user level"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Growth Plateaus — Even With More Data
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stacks have evolved. Customer behaviour has evolved. But growth engines still rely on static journeys and slow, manual decisions.
          </p>
          <p className="text-lg text-muted-foreground">
            Enterprises collect thousands of signals, customer context, app events, purchases, trades, timing patterns, content consumption, engagement history, app journeys, yet use only a few because:
          </p>
        </div>

        {/* Challenges List */}
        <div className="max-w-3xl mx-auto mb-16">
          <ul className="space-y-4">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-lg text-foreground">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Blockers Visual */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {blockers.map((blocker, index) => (
            <div key={index} className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg border border-border">
              <blocker.icon className="w-12 h-12 text-muted-foreground" strokeWidth={1.5} />
              <p className="text-sm font-medium text-center text-foreground">{blocker.label}</p>
              {index < blockers.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-muted-foreground">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGrowthPlateaus;
