import { Target, Brain, Zap, Play, BarChart3, Database, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";

const AgenticLoop = () => {
  const steps = [
    { icon: Target, label: "Brand sets the goal", number: 1 },
    { icon: Brain, label: "Agent interprets user state", number: 2 },
    { icon: Zap, label: "Chooses best action", number: 3 },
    { icon: Play, label: "Executes instantly", number: 4 },
    { icon: BarChart3, label: "Measures outcome", number: 5 },
    { icon: Database, label: "Updates DNA profile", number: 6 },
    { icon: RefreshCw, label: "Repeats continuously", number: 7 }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Full Loop
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            How One Goal Drives Millions of Decisions
          </p>
        </div>

        {/* Loop Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full p-6 bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{step.number}</span>
                    </div>
                    <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    <p className="text-sm font-medium text-foreground leading-tight">{step.label}</p>
                  </div>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-1.5 top-1/2 transform -translate-y-1/2 z-10 text-primary/40">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Loop Indicator */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 rounded-full">
            <RefreshCw className="w-6 h-6 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-base font-semibold text-primary">Continuous Learning Loop</span>
          </div>
        </div>

        {/* Strategic Context */}
        <div className="max-w-5xl mx-auto">
          <Card className="p-10 md:p-12 bg-gradient-to-br from-card to-muted/30 border-border">
            <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
              With agents running micro-experiments autonomously, your team focuses on <span className="font-semibold">setting goals, defining guardrails, exposing key experimentation variables,</span> and reviewing behavioral insights the AI surfaces.
            </p>
            <div className="h-px bg-border mb-6" />
            <p className="text-lg text-muted-foreground italic leading-relaxed">
              Agents continuously return emerging patterns — shifts in motivations, timing windows, channel affinity — enriching your strategy each cycle.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AgenticLoop;
