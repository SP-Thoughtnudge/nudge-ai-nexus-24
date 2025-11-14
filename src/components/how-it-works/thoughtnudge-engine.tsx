import { Database, Brain, Zap, Activity, ShoppingCart, Clock, Mail, MessageSquare, Smartphone, Wifi } from "lucide-react";
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

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Thoughtnudge Engine
          </h2>
          <p className="text-xl text-muted-foreground">
            A 3-Layer Architecture That Converts Signals Into Autonomous, Per-User Decisions
          </p>
        </div>

        {/* 3-Layer System Diagram */}
        <div className="max-w-5xl mx-auto mb-20 grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Database className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Data Layer</h3>
            <p className="text-sm text-muted-foreground">Signal Intake</p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-lg p-8 text-center">
            <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Intelligence Layer</h3>
            <p className="text-sm text-muted-foreground">Decision Engine</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Experience Layer</h3>
            <p className="text-sm text-muted-foreground">Action Execution</p>
          </div>
        </div>

        {/* Layer 1: Data Layer */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Layer 1 — Data Layer: High-Fidelity Signal Intake
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            We unify high-volume, high-velocity signals: Event streams, CRM attributes, purchase and transaction histories, app timing patterns, past message interactions, content and feature engagement.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Techniques used: embeddings, temporal patterns, behavioral vectorization, signal extraction.
          </p>

          {/* Signal Cloud */}
          <div className="relative bg-card border border-border rounded-lg p-12">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {signals.map((signal, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <signal.icon className="w-8 h-8 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-xs text-center text-muted-foreground">{signal.label}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-lg pointer-events-none" />
          </div>
        </div>

        {/* Layer 2: Intelligence Layer */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Layer 2 — Intelligence Layer: Agentic Decisioning Engine
          </h3>
          <p className="text-2xl font-semibold text-primary mb-8">
            "One agent per customer — learning continuously."
          </p>
          
          <div className="mb-8">
            <p className="text-lg font-semibold text-foreground mb-4">What it does:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">Runs micro-experiments in parallel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">Tests hundreds of hypotheses on timing, content, channel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">Builds a growing "Psychographic DNA" for each user</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">Learns from each action and outcome</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">Optimizes toward the business goal autonomously</span>
              </li>
            </ul>
          </div>

          {/* User Intelligence Card */}
          <Card className="p-8 bg-gradient-to-br from-card to-muted/30 border-2 border-primary/20">
            <h4 className="text-xl font-bold mb-6 text-foreground">User Intelligence Profile</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Motivation Affinity</p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-4/5" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Price Sensitivity</p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/5" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Timing Window</p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/5" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Channel Preference</p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-4/5" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Engagement Probability</p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Layer 3: Experience Layer */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Layer 3 — Experience Layer: Autonomous 1:1 Actions
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Executes best action across channels: WhatsApp, Push, Email, SMS, In-App, and future channels. Every action feeds back into the learning loop.
          </p>

          {/* Channel Icons */}
          <div className="flex flex-wrap justify-center gap-8 p-8 bg-card border border-border rounded-lg">
            {channels.map((channel, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <channel.icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                <span className="text-sm text-muted-foreground">{channel.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtnudgeEngine;
