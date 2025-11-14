import { Target, Brain, Zap, Play, BarChart3, Database, RefreshCw } from "lucide-react";

const AgenticLoop = () => {
  const steps = [
    { icon: Target, label: "Brand sets the goal", number: 1 },
    { icon: Brain, label: "Agent interprets user state", number: 2 },
    { icon: Zap, label: "Chooses best action at that moment", number: 3 },
    { icon: Play, label: "Executes instantly", number: 4 },
    { icon: BarChart3, label: "Measures outcome", number: 5 },
    { icon: Database, label: "Updates Psychographic DNA", number: 6 },
    { icon: RefreshCw, label: "Repeats continuously", number: 7 }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Full Loop
          </h2>
          <p className="text-xl text-muted-foreground">
            The Agentic Loop: How One Goal Drives Millions of Decisions
          </p>
        </div>

        {/* Circular Flow Diagram */}
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <step.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-foreground">{step.label}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 text-primary">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loop Indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
              <RefreshCw className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold text-primary">Continuous Learning Loop</span>
            </div>
          </div>
        </div>

        {/* Your Role Section */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-card border border-border rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Your Role: From Machine Operator → Strategic Growth Leader
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            "With agents running micro-experiments autonomously, your team focuses on setting goals, defining guardrails, exposing key experimentation variables, and reviewing new behavioral insights the AI surfaces."
          </p>
          <p className="text-lg text-foreground">
            Agents continuously return emerging patterns — shifts in motivations, timing windows, channel affinity — enriching your strategy each cycle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgenticLoop;
