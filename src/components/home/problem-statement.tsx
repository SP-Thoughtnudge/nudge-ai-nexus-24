
import { ArrowRight, X } from "lucide-react";

const ProblemStatement = () => {
  const legacySteps = [
    { label: "Static Rules", desc: "If user did X, send Y", icon: "→" },
    { label: "Broad Segments", desc: "Millions into 5 buckets", icon: "◻" },
    { label: "Batch Campaigns", desc: "Same message for all", icon: "📢" },
    { label: "Manual A/B Tests", desc: "2 variants, 2 weeks", icon: "⚖" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Problem statement */}
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The problem</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Your stack wasn't built for 1:1.
              </h2>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Most lifecycle tools force you into the same loop: segment users, build journeys, 
                run A/B tests, repeat. Every customer gets roughly the same experience.
              </p>
              <div className="p-6 rounded-xl bg-foreground text-background">
                <p className="text-base md:text-lg font-medium leading-relaxed">
                  "10 million customers. 10 million unique contexts. But your tools treat them as 5 segments."
                </p>
              </div>
            </div>

            {/* Right: Legacy steps visual */}
            <div className="grid grid-cols-2 gap-3">
              {legacySteps.map((step, i) => (
                <div key={i} className="relative p-5 rounded-xl border border-destructive/20 bg-card group hover:border-destructive/40 transition-colors">
                  <X className="absolute top-3 right-3 w-3.5 h-3.5 text-destructive/40" />
                  <div className="text-2xl mb-3">{step.icon}</div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{step.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
