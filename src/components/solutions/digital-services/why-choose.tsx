import { Brain, UserCheck, Blocks } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Brain,
      title: "Learns From Deep Context",
      description: "Thoughtnudge analyzes behavior, motivation, lifestyle rhythms, past responses, and real-time signals to build a contextual profile that evolves with every interaction."
    },
    {
      icon: UserCheck,
      title: "One AI Agent Per User",
      description: "Every customer gets a dedicated learning agent that runs micro-experiments, tests timing/content, learns emotional triggers, and adapts autonomously."
    },
    {
      icon: Blocks,
      title: "Seamless Into Your Stack",
      description: "Thoughtnudge plugs into your existing stack seamlessly. We integrate into your data platforms and activation channels — enabling AI-driven decisions using your first-party data for every customer."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Why Health & Wellness Teams Choose Thoughtnudge
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Enterprise-grade AI decisioning that drives measurable outcomes
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-6 mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
