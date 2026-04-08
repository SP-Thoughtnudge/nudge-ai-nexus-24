
import { ArrowRight } from "lucide-react";

const ProblemStatement = () => {
  const legacySteps = [
    { label: "Static Rules", desc: "If user did X, send Y" },
    { label: "Broad Segments", desc: "Group millions into 5 buckets" },
    { label: "Batch Campaigns", desc: "Same message, same time, everyone" },
    { label: "Manual A/B Tests", desc: "Test 2 variants, wait 2 weeks" },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The problem</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Your stack wasn't built for 1:1.
          </h2>
          <p className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-2xl">
            Most lifecycle tools force you into the same loop: segment users, build journeys, 
            run A/B tests, repeat. The result? Every customer gets roughly the same experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {legacySteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="text-xs font-mono text-muted-foreground/60 mb-3">STEP {i + 1}</div>
                  <h3 className="font-semibold text-foreground mb-1">{step.label}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {i < 3 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/30 z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="p-8 rounded-xl bg-foreground text-background">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              "You have 10 million customers and 10 million unique contexts. But your tools treat them as 5 segments."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
