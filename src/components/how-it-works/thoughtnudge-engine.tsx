import { Database, Brain, Zap, Activity, ShoppingCart, Clock, Mail, MessageSquare, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const ThoughtnudgeEngine = () => {
  const signals = [
    { icon: Activity, label: "Event Streams" },
    { icon: Database, label: "CRM Data" },
    { icon: ShoppingCart, label: "Purchases" },
    { icon: Clock, label: "Timing Patterns" },
    { icon: Mail, label: "Message History" },
    { icon: Smartphone, label: "App Engagement" }
  ];

  const channels = [
    { icon: MessageSquare, label: "WhatsApp" },
    { icon: Smartphone, label: "Push" },
    { icon: Mail, label: "Email" },
    { icon: MessageSquare, label: "SMS" },
    { icon: Smartphone, label: "In-App" }
  ];

  const contextVariables = [
    "Recency & frequency",
    "Depth of engagement",
    "Product affinity",
    "Risk/motivation signals",
    "Timing patterns",
    "Historical response behavior",
    "Profile attributes from data warehouse"
  ];

  const dnaAttributes = [
    { label: "Motivation Affinity", value: 80 },
    { label: "Price Sensitivity", value: 40 },
    { label: "Timing Window", value: 60 },
    { label: "Channel Preference", value: 80 },
    { label: "Engagement Probability", value: 75 }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Thoughtnudge Engine
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A 3-Layer Architecture That Converts Signals Into Autonomous, Per-User Decisions
          </p>
        </div>

        {/* 3-Layer Overview */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border text-center hover:shadow-lg transition-shadow">
              <Database className="w-14 h-14 mx-auto mb-4 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-foreground mb-2">Data Layer</h3>
              <p className="text-sm text-muted-foreground">High-Fidelity Signal Intake</p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/40 text-center hover:shadow-xl transition-shadow">
              <Brain className="w-14 h-14 mx-auto mb-4 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-foreground mb-2">Intelligence Layer</h3>
              <p className="text-sm text-muted-foreground font-semibold">Agentic Decision Engine</p>
            </Card>
            <Card className="p-8 bg-card border-border text-center hover:shadow-lg transition-shadow">
              <Zap className="w-14 h-14 mx-auto mb-4 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-foreground mb-2">Experience Layer</h3>
              <p className="text-sm text-muted-foreground">Autonomous 1:1 Actions</p>
            </Card>
          </div>
        </div>

        {/* Layer 1: Data Layer */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Layer 1 — Data Layer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unifies high-volume, high-velocity signals from across the customer journey
            </p>
          </div>

          <Card className="p-10 bg-card border-border">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-8">
              {signals.map((signal, index) => (
                <div key={index} className="flex flex-col items-center gap-3 group cursor-default">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <signal.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-center text-muted-foreground font-medium">{signal.label}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                Techniques: embeddings, temporal patterns, behavioral vectorization, signal extraction
              </p>
            </div>
          </Card>
        </div>

        {/* Layer 2: Intelligence Layer */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Layer 2 — Intelligence Layer
            </h3>
            <p className="text-2xl font-semibold text-primary mb-6">
              "One agent per customer — continuously learning from context, behavior, and outcomes."
            </p>
          </div>

          {/* What it does */}
          <Card className="p-10 bg-card border-border mb-8">
            <h4 className="text-xl font-bold text-foreground mb-6">What it does:</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground">
                  Runs <span className="font-semibold">micro-experiments in parallel</span> across timing, channels, tone, offers, and content
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground">
                  Tests <span className="font-semibold">hundreds of hypotheses for each user</span> — discovering what works for that specific individual
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground font-semibold mb-3">Learns from rich context variables, not just events:</p>
                  <div className="grid md:grid-cols-2 gap-3 ml-4">
                    {contextVariables.map((variable, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                        <span className="text-sm text-muted-foreground">{variable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-foreground mb-2">Uses these signals to reason in permutations like:</p>
                  <Card className="p-4 bg-muted/50 border-border">
                    <p className="text-foreground italic">"If context = X, Y, Z → the best action = A, B, C."</p>
                  </Card>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground">
                  Builds a growing <span className="font-semibold">"Psychographic DNA"</span> profile per user that evolves after every interaction
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground">
                  Optimizes autonomously toward the business goal using <span className="font-semibold">continuous reinforcement learning</span>
                </p>
              </div>
            </div>
          </Card>

          <div className="mb-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
            <p className="text-lg text-foreground italic">
              "This is what enables adaptive, 1:1 personalized journeys — no rules, no static segments, no guessing."
            </p>
          </div>

          {/* User Intelligence Card */}
          <Card className="p-10 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-8">
              <Brain className="w-8 h-8 text-primary" />
              <h4 className="text-2xl font-bold text-foreground">User Intelligence Profile</h4>
            </div>
            <div className="space-y-6">
              {dnaAttributes.map((attr, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold text-foreground">{attr.label}</p>
                    <p className="text-sm font-mono text-primary">{attr.value}%</p>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500"
                      style={{ width: `${attr.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Layer 3: Experience Layer */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Layer 3 — Experience Layer
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Executes best action across channels. Every action feeds back into the learning loop.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Each agent builds a <span className="font-semibold">hyper-personalized, adaptive journey</span> for every customer based on all variables in your data warehouse — not just CRM attributes. <span className="font-semibold text-primary">No two customer journeys look the same.</span>
            </p>
          </div>

          <Card className="p-10 bg-card border-border">
            <div className="flex flex-wrap justify-center gap-10">
              {channels.map((channel, index) => (
                <div key={index} className="flex flex-col items-center gap-3 group cursor-default">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <channel.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{channel.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThoughtnudgeEngine;
