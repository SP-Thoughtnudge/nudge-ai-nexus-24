import { TrendingUp, Brain, DollarSign } from "lucide-react";

export const MoreRevenueSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            More Revenue. Less Effort.{" "}
            <span className="text-primary">Smarter Engagement.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Guaranteed Conversion Lift */}
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">
                Guaranteed Conversion Lift
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                We replace guesswork with science. By understanding each customer at a personal level, our empirical approach resonates more deeply and delivers verifiably higher conversion rates than any one-size-fits-all strategy.
              </p>
            </div>
            
            {/* Zero Manual Work */}
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">
                Zero Manual Work
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Our platform is truly autonomous. You set the goal, and our AI handles everything else—no more building segments, A/B testing, or designing complex journeys. This frees your team and dramatically increases efficiency.
              </p>
            </div>
            
            {/* Profit-Driven Decisions */}
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <DollarSign className="w-10 h-10 text-primary" />
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
      </div>
    </section>
  );
};