import { Database, Users, Clock, Zap, Brain, Target, TrendingUp, Layers } from "lucide-react";

export const ParadigmShiftComparison = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-6 max-w-4xl mx-auto leading-relaxed">
            Modern FinTechs capture thousands of behavioral and transactional signals per user.
            But activation decisions are still made using segments, averages, and delayed human judgment — freezing dynamic behavior at the moment it matters most.
          </p>
          
          <p className="text-xl md:text-2xl font-semibold text-foreground text-center mb-16 max-w-3xl mx-auto">
            This is why activation improvements stall after early wins.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Activation Stack */}
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/5 rounded-2xl blur-xl"></div>
              <div className="relative bg-card border border-destructive/20 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Traditional Activation Stack
                  </h3>
                </div>
                
                {/* Visual Flow */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-destructive/5 rounded-xl border border-destructive/10">
                    <Layers className="w-5 h-5 text-destructive/70 shrink-0" />
                    <span className="text-foreground">Data lives in warehouse tables, not decisions</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-destructive/5 rounded-xl border border-destructive/10">
                    <Users className="w-5 h-5 text-destructive/70 shrink-0" />
                    <span className="text-foreground">Segments flatten individual intent</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-destructive/5 rounded-xl border border-destructive/10">
                    <Target className="w-5 h-5 text-destructive/70 shrink-0" />
                    <span className="text-foreground">A/B tests optimize one variable at a time</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-destructive/5 rounded-xl border border-destructive/10">
                    <Clock className="w-5 h-5 text-destructive/70 shrink-0" />
                    <span className="text-foreground">Journeys take weeks to change</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-destructive/5 rounded-xl border border-destructive/10">
                    <Users className="w-5 h-5 text-destructive/70 shrink-0" />
                    <span className="text-foreground">Same strategy for fundamentally different users</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-destructive/20">
                  <p className="text-sm text-muted-foreground italic">
                    Result: Diminishing returns after initial optimization gains
                  </p>
                </div>
              </div>
            </div>
            
            {/* Thoughtnudge Agentic Layer */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-card border border-primary/30 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Thoughtnudge Agentic Layer
                  </h3>
                </div>
                
                {/* Visual Flow */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <Zap className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">First-party data activated in real time</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <Brain className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">One autonomous learning agent per user</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <Target className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">Thousands of micro-experiments daily</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <Zap className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">Decisions adapt per user, per moment</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <TrendingUp className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">Measurable lift in weeks — not quarters</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-primary/30">
                  <p className="text-sm text-primary font-medium">
                    Result: Continuous compounding improvements at scale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};