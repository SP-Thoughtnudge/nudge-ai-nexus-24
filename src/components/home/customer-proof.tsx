import { ArrowRight, Quote, TrendingUp, Users, Zap, Target, BarChart3, Sparkles } from "lucide-react";

const CustomerProof = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(hsl(var(--background)) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Real Results</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            What changes when every customer<br className="hidden md:block" /> gets their own journey
          </h2>
          <p className="text-background/60 text-lg max-w-2xl mx-auto">
            From weeks of manual segmentation to autonomous, self-optimizing experiences — here's what our customers achieved.
          </p>
        </div>

        {/* Review 1 — Chalo */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-background/[0.06] border border-background/10 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Quote & Attribution */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-primary font-semibold text-lg">Chalo</span>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                    "Thoughtnudge replaced our entire manual lifecycle engine. What took a team of 4 people weeks to set up now runs autonomously — and performs better than anything we built ourselves."
                  </blockquote>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-foreground font-bold text-lg">VP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-background">VP of Product</p>
                    <p className="text-background/50 text-sm">Chalo — India's largest bus transit app</p>
                  </div>
                </div>
              </div>

              {/* Right: Impact Metrics */}
              <div className="bg-background/[0.04] p-8 md:p-12">
                <p className="text-xs uppercase tracking-widest text-background/40 mb-8 font-medium">Impact After Thoughtnudge</p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-background/[0.06] rounded-xl p-5 border border-background/10">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1">+68%</p>
                    <p className="text-background/60 text-sm">Pass Renewal Rate</p>
                  </div>
                  <div className="bg-background/[0.06] rounded-xl p-5 border border-background/10">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1">+40%</p>
                    <p className="text-background/60 text-sm">New Pass Purchases</p>
                  </div>
                </div>

                <p className="text-xs uppercase tracking-widest text-background/40 mb-4 font-medium">What Changed</p>
                <div className="space-y-3">
                  {[
                    { icon: Users, text: "Eliminated manual segmentation — system auto-discovers micro-segments" },
                    { icon: Target, text: "Moved from 5 static journeys to 1:1 adaptive journeys per user" },
                    { icon: Zap, text: "Reduced campaign setup from weeks to hours" },
                    { icon: BarChart3, text: "A/B testing replaced by continuous multi-variate optimization" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-background/70 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review 2 — Cookd */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-background/[0.06] border border-background/10 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Quote & Attribution */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-primary font-semibold text-lg">Cookd</span>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                    "We went from running monthly campaigns with generic offers to every customer receiving a uniquely crafted experience. The lift in repeat purchase wasn't incremental — it was transformational."
                  </blockquote>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-foreground font-bold text-lg">HG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-background">Head of Growth</p>
                    <p className="text-background/50 text-sm">Cookd — Recipe & meal-kit platform</p>
                  </div>
                </div>
              </div>

              {/* Right: Impact Metrics */}
              <div className="bg-background/[0.04] p-8 md:p-12">
                <p className="text-xs uppercase tracking-widest text-background/40 mb-8 font-medium">Impact After Thoughtnudge</p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-background/[0.06] rounded-xl p-5 border border-background/10">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1">+72%</p>
                    <p className="text-background/60 text-sm">Repeat Purchase Rate</p>
                  </div>
                  <div className="bg-background/[0.06] rounded-xl p-5 border border-background/10">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1">3.2x</p>
                    <p className="text-background/60 text-sm">Experimentation Velocity</p>
                  </div>
                </div>

                <p className="text-xs uppercase tracking-widest text-background/40 mb-4 font-medium">What Changed</p>
                <div className="space-y-3">
                  {[
                    { icon: Sparkles, text: "Hyper-personalized offers per customer — no more one-size-fits-all promos" },
                    { icon: TrendingUp, text: "NPS improved as customers felt understood, not spammed" },
                    { icon: Zap, text: "Experimentation speed went from 2 tests/month to 100s running continuously" },
                    { icon: Target, text: "Discovered hidden behavioral patterns the team never knew existed" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-background/70 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom summary strip */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { metric: "Zero", label: "Manual Segments Needed" },
              { metric: "100x", label: "More Experiments Running" },
              { metric: "Weeks → Hours", label: "Time to Launch" },
              { metric: "1:1", label: "Journeys Per Customer" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-background/[0.04] rounded-xl border border-background/10">
                <p className="text-xl md:text-2xl font-bold text-primary mb-1">{item.metric}</p>
                <p className="text-background/50 text-xs uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerProof;
