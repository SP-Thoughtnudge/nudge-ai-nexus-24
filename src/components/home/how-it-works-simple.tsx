
import { Brain, Zap, BarChart3, RefreshCw } from "lucide-react";

const HowItWorksSimple = () => {
  const steps = [
    {
      icon: Brain,
      title: "Learn",
      subtitle: "Deep Reinforcement Learning",
      description: "Every interaction is a learning signal. The system builds a persistent understanding of each customer — their motivations, timing preferences, channel affinity, and sensitivity to offers.",
    },
    {
      icon: Zap,
      title: "Decide",
      subtitle: "Agentic Memory & Context",
      description: "For each customer, an autonomous agent decides what to do next — what message, what channel, what timing, what offer. No rules. No segments. Pure contextual intelligence.",
    },
    {
      icon: BarChart3,
      title: "Act",
      subtitle: "Behavioral Science",
      description: "The system generates and executes the optimal action — crafting creative variations, selecting channels, and timing delivery to maximize the probability of the desired outcome.",
    },
    {
      icon: RefreshCw,
      title: "Repeat",
      subtitle: "Continuous Optimization",
      description: "Every outcome feeds back into the learning loop. The system gets smarter with every interaction — discovering patterns no human analyst could find.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Learn. Decide. Act. Repeat.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Thoughtnudge replaces static journeys with an autonomous loop that learns from every 
            customer interaction and continuously optimizes toward your business goal.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider">{step.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSimple;
