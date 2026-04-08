
import { Database, Brain, Zap } from "lucide-react";

export const EngineSection = () => {
  const layers = [
    {
      icon: Database,
      number: "01",
      title: "Data Layer",
      subtitle: "Behavioral Signal Intake",
      description: "Ingests and unifies behavioral signals from your existing stack — app events, purchase history, session patterns, engagement signals — creating a real-time behavioral context for every customer.",
      details: ["Works on your data warehouse", "No data migration needed", "Real-time signal processing"],
    },
    {
      icon: Brain,
      number: "02",
      title: "Intelligence Layer",
      subtitle: "Per-Customer AI Agent",
      description: "Each customer gets their own AI agent that runs micro-experiments — testing timing, messaging, offers, and channels — to discover what works for that specific individual. Powered by deep reinforcement learning and agentic memory.",
      details: ["One agent per customer", "Continuous micro-experimentation", "Builds persistent 'Behavioral DNA'"],
      highlighted: true,
    },
    {
      icon: Zap,
      number: "03",
      title: "Action Layer",
      subtitle: "Autonomous Execution",
      description: "Executes the optimal action for each customer at the right moment — across push, email, SMS, WhatsApp, and in-app. Every action feeds back into the learning loop.",
      details: ["Multi-channel orchestration", "AI-generated creative variations", "Every outcome feeds learning"],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The engine</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Three layers. One intelligence.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A vertically integrated AI architecture that converts raw behavioral data into autonomous, 
            per-customer decisions — no rules, no journey builders, no manual optimization.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {layers.map((layer, i) => (
            <div 
              key={i} 
              className={`p-8 md:p-10 rounded-xl border transition-all duration-300 ${
                layer.highlighted 
                  ? 'border-primary/40 bg-card shadow-lg' 
                  : 'border-border bg-card hover:border-primary/20'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="text-4xl font-bold text-muted-foreground/20 font-mono">{layer.number}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <layer.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{layer.subtitle}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{layer.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{layer.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {layer.details.map((detail, j) => (
                      <span key={j} className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
