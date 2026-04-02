export const LiveInDays = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Your Data",
      description: "Integrate your app events, CRM, and behavioral data. One-click connectors for your existing stack."
    },
    {
      number: 2,
      title: "Launch a Retention Agent",
      description: "Set a retention goal — reduce churn, increase renewals, reactivate dormant users. The agent starts learning immediately."
    },
    {
      number: 3,
      title: "See Retention Impact",
      description: "Measurable improvements in churn rate, renewal rate, and CLTV — visible in your dashboard from week one."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center">
            Live in Days, Not Quarters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="absolute top-6 -right-4 hidden md:block z-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
