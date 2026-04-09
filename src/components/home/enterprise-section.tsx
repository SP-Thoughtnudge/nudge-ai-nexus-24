
import { Database, Workflow, Shield, Clock, BarChart3, Lightbulb, Lock, Server } from "lucide-react";

export const EnterpriseSection = () => {
  const features = [
    { icon: Workflow, text: "No journey builder needed" },
    { icon: Database, text: "Runs on your data warehouse" },
    { icon: Clock, text: "Live in days, not months" },
    { icon: BarChart3, text: "Measurable ROI in weeks" },
    { icon: Lightbulb, text: "Uncovers behavioral insights automatically" },
    { icon: Shield, text: "SOC 2 Type II & GDPR compliant" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Built for enterprise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                Replaces complexity, not your stack.
              </h2>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Thoughtnudge works alongside your existing infrastructure. No migration, no rip-and-replace, no months-long integration.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
                    <feature.icon className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-foreground font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise security visual */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-sm mx-auto">
                <div className="p-8 rounded-2xl border border-border bg-card relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Enterprise Security</p>
                        <p className="text-xs text-muted-foreground">Bank-grade protection</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "SOC 2 Type II", status: "Certified" },
                        { label: "GDPR", status: "Compliant" },
                        { label: "Data Residency", status: "Configurable" },
                        { label: "Encryption", status: "AES-256" },
                        { label: "Audit Trails", status: "Full coverage" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                          <span className="text-sm text-muted-foreground">{item.label}</span>
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
