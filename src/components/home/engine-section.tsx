
import { Database, Brain, Zap, ArrowRight } from "lucide-react";

export const EngineSection = () => {
  const layers = [
    {
      icon: Database,
      number: "01",
      title: "Data Layer",
      subtitle: "Behavioral Signal Intake",
      description: "Ingests behavioral signals from your stack — app events, purchase history, session patterns — creating real-time context for every customer.",
      details: ["Works on your data warehouse", "No data migration", "Real-time signals"],
    },
    {
      icon: Brain,
      number: "02",
      title: "Intelligence Layer",
      subtitle: "Per-Customer AI Agent",
      description: "Each customer gets their own AI agent running micro-experiments — testing timing, messaging, offers, channels — to discover what uniquely works. Powered by deep RL and agentic memory.",
      details: ["One agent per customer", "Continuous experimentation", "Behavioral DNA"],
      highlighted: true,
    },
    {
      icon: Zap,
      number: "03",
      title: "Action Layer",
      subtitle: "Autonomous Execution",
      description: "Executes the optimal action at the right moment — across push, email, SMS, WhatsApp, and in-app. Every action feeds back into the learning loop.",
      details: ["Multi-channel orchestration", "AI-generated creatives", "Closed-loop learning"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The engine</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Three layers. One intelligence.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A vertically integrated AI architecture that converts raw behavioral data into autonomous, 
              per-customer decisions — no rules, no journey builders, no manual optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {layers.map((layer, i) => (
              <div 
                key={i} 
                className={`relative p-6 md:p-8 rounded-xl border transition-all duration-300 group ${
                  layer.highlighted 
                    ? 'border-primary/40 bg-card shadow-lg scale-[1.02]' 
                    : 'border-border bg-card hover:border-primary/20'
                }`}
              >
                {layer.highlighted && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Core
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <layer.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-3xl font-bold text-muted-foreground/15 font-mono">{layer.number}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{layer.title}</h3>
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">{layer.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{layer.description}</p>
                <div className="space-y-2">
                  {layer.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                      <span className="text-xs text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
