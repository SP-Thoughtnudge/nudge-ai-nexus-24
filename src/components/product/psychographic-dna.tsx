import intelligenceSignals from "@/assets/product/intelligence-signals.png";

const PsychographicDna = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Deep Understanding Through{" "}
            <span className="text-primary">Continuous Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our AI doesn't just segment; it builds a unique intelligence profile for every customer. 
            This evolving contextual memory allows our engine to understand the deep-seated motivations 
            behind every action, ensuring the next nudge is always the most effective one.
          </p>
        </div>

        {/* Intelligence Screenshot */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl blur-xl opacity-40"></div>
          <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-xl bg-card">
            <img 
              src={intelligenceSignals} 
              alt="Intelligence dashboard showing what the agent is learning, context variables like user tenure and transaction history, event signals, and variable correlations"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Key insights from the screenshot */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-3">Context Variables</h3>
            <p className="text-sm text-muted-foreground mb-4">
              User Tenure, Transaction History, App Engagement, KYC Status — weighted by importance.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">User Tenure</span>
                <span className="text-primary font-medium">82%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Transaction History</span>
                <span className="text-primary font-medium">78%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Engagement Score</span>
                <span className="text-primary font-medium">71%</span>
              </div>
            </div>
          </div>

          <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-3">Event Signals</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Real-time behavioral signals feeding into the learning engine.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">app_open</span>
                <span className="text-foreground">1,247 events</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">kyc_started</span>
                <span className="text-foreground">89 events</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">transaction_initiated</span>
                <span className="text-foreground">34 events</span>
              </div>
            </div>
          </div>

          <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-3">Variable Correlations</h3>
            <p className="text-sm text-muted-foreground mb-4">
              How each variable correlates to timing, channel, and outcome.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">User Tenure</span>
                <span className="text-primary font-medium">81% outcome</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Engagement Score</span>
                <span className="text-primary font-medium">74% outcome</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">KYC Status</span>
                <span className="text-primary font-medium">89% outcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychographicDna;