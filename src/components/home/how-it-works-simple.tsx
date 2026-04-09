
import { Brain, Zap, BarChart3, RefreshCw, ArrowDown } from "lucide-react";

const HowItWorksSimple = () => {
  const steps = [
    {
      icon: Brain,
      title: "Learn",
      subtitle: "Deep Reinforcement Learning",
      description: "Every interaction is a learning signal. The system builds a persistent understanding of each customer's motivations, timing, and channel affinity.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Zap,
      title: "Decide",
      subtitle: "Agentic Memory & Context",
      description: "An autonomous agent decides what to do next for each customer — what message, channel, timing, and offer. No rules. No segments.",
      color: "bg-primary/15 text-primary",
    },
    {
      icon: BarChart3,
      title: "Act",
      subtitle: "Behavioral Science",
      description: "Generates and executes the optimal action — crafting creative variations, selecting channels, and timing delivery for maximum impact.",
      color: "bg-primary/20 text-primary",
    },
    {
      icon: RefreshCw,
      title: "Repeat",
      subtitle: "Continuous Optimization",
      description: "Every outcome feeds back into the loop. The system compounds intelligence — discovering patterns no human analyst could find.",
      color: "bg-primary/25 text-primary",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Set your goal, then let Thoughtnudge take it from there.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Agents analyze your customers, generate creatives, test ideas, and share insights. 
              What used to take weeks happens continuously, so every interaction gets better.
            </p>
          </div>

          {/* Horizontal flow on desktop, vertical on mobile */}
          <div className="relative">
            {/* Connection line (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">{step.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  {/* Arrow between cards on mobile */}
                  {i < 3 && (
                    <div className="md:hidden flex justify-center py-2">
                      <ArrowDown className="w-4 h-4 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSimple;
