import { Quote, TrendingUp, Users, Zap, Target, BarChart3, Sparkles } from "lucide-react";

const CustomerProof = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(hsl(var(--background)) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-3">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            What changes when every customer<br className="hidden md:block" /> gets their own journey
          </h2>
          <p className="text-background/50 text-base max-w-xl mx-auto">
            From weeks of manual work to autonomous, self-optimizing experiences.
          </p>
        </div>

        {/* Two reviews side by side on desktop */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 mb-10">
          {/* Chalo */}
          <div className="bg-background/[0.06] border border-background/10 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary" />
                </div>
                <span className="text-primary font-semibold">Chalo</span>
              </div>
              <blockquote className="text-lg font-medium leading-relaxed mb-6">
                "Thoughtnudge replaced our entire manual lifecycle engine. What took a team of 4 people weeks now runs autonomously — and performs better."
              </blockquote>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">VP</span>
                </div>
                <div>
                  <p className="font-semibold text-background text-sm">VP of Product</p>
                  <p className="text-background/40 text-xs">India's largest bus transit app</p>
                </div>
              </div>
            </div>
            <div className="bg-background/[0.04] p-6 md:p-8 border-t border-background/10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background/[0.06] rounded-lg p-4 border border-background/10 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary">+68%</p>
                  <p className="text-background/50 text-xs mt-1">Pass Renewal</p>
                </div>
                <div className="bg-background/[0.06] rounded-lg p-4 border border-background/10 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary">+40%</p>
                  <p className="text-background/50 text-xs mt-1">New Purchases</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { icon: Users, text: "Eliminated manual segmentation" },
                  { icon: Target, text: "Static → 1:1 adaptive journeys" },
                  { icon: Zap, text: "Campaign setup: weeks → hours" },
                  { icon: BarChart3, text: "Continuous multi-variate optimization" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                    <p className="text-background/60 text-xs">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cookd */}
          <div className="bg-background/[0.06] border border-background/10 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary" />
                </div>
                <span className="text-primary font-semibold">Cookd</span>
              </div>
              <blockquote className="text-lg font-medium leading-relaxed mb-6">
                "We went from monthly generic campaigns to every customer receiving a uniquely crafted experience. The lift wasn't incremental — it was transformational."
              </blockquote>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-foreground font-bold text-sm">HG</span>
                </div>
                <div>
                  <p className="font-semibold text-background text-sm">Head of Growth</p>
                  <p className="text-background/40 text-xs">Recipe & meal-kit platform</p>
                </div>
              </div>
            </div>
            <div className="bg-background/[0.04] p-6 md:p-8 border-t border-background/10">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background/[0.06] rounded-lg p-4 border border-background/10 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary">+72%</p>
                  <p className="text-background/50 text-xs mt-1">Repeat Purchase</p>
                </div>
                <div className="bg-background/[0.06] rounded-lg p-4 border border-background/10 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary">3.2x</p>
                  <p className="text-background/50 text-xs mt-1">Experiment Velocity</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { icon: Sparkles, text: "Hyper-personalized offers per customer" },
                  { icon: TrendingUp, text: "NPS improved — customers felt understood" },
                  { icon: Zap, text: "2 tests/month → 100s running continuously" },
                  { icon: Target, text: "Discovered hidden behavioral patterns" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                    <p className="text-background/60 text-xs">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { metric: "Zero", label: "Manual Segments" },
            { metric: "100x", label: "More Experiments" },
            { metric: "Weeks → Hours", label: "Time to Launch" },
            { metric: "1:1", label: "Journeys Per Customer" },
          ].map((item, i) => (
            <div key={i} className="text-center p-4 bg-background/[0.04] rounded-xl border border-background/10">
              <p className="text-lg md:text-xl font-bold text-primary mb-0.5">{item.metric}</p>
              <p className="text-background/40 text-xs uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerProof;
