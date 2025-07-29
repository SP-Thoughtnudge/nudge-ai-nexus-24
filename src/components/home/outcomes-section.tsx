import { TrendingUp, Brain, DollarSign } from "lucide-react";

const OutcomesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            More Revenue. Less Effort. Smarter Engagement.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Higher Conversions */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Guaranteed Conversion Lift
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We replace guesswork with science. By understanding each customer at a personal level, our empirical approach resonates more deeply and delivers verifiably higher conversion rates than any one-size-fits-all strategy.
            </p>
          </div>

          {/* Column 2: Autonomous Engine */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Zero Manual Work
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our platform is truly autonomous. You set the goal, and our AI handles everything else—no more building segments, A/B testing, or designing complex journeys. This frees your team and dramatically increases efficiency.
            </p>
          </div>

          {/* Column 3: Optimized Costs */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Profit-Driven Decisions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our AI makes profit-driven decisions. It finds the minimum effective offer for each user—knowing many don't need one at all—and optimizes messaging frequency to reduce costs and build better customer relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;