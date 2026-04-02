import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Users, BarChart3, Target, Zap, RefreshCw, TrendingDown } from "lucide-react";

const pillars = [
  {
    id: "agents",
    icon: <Bot className="h-8 w-8" />,
    title: "Retention AI Agents",
    subtitle: "Your Autonomous Retention Manager",
    description: "Launch AI agents for specific retention goals — reduce churn, boost renewals, reactivate dormant subscribers. You set the objective and guardrails; the agent handles per-user strategy and execution autonomously.",
    visual: (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold">Active Retention Agents</h4>
          <Button size="sm" className="text-xs">
            <Target className="h-3 w-3 mr-1" />
            Launch Agent
          </Button>
        </div>
        <div className="space-y-3">
          <div className="bg-primary/10 border-l-4 border-primary p-3 rounded">
            <div className="font-medium text-sm">Churn Prevention</div>
            <div className="text-xs text-muted-foreground">Target: Reduce churn by 30%</div>
          </div>
          <div className="bg-secondary/50 border-l-4 border-muted p-3 rounded animate-pulse">
            <div className="font-medium text-sm">Subscription Renewal</div>
            <div className="text-xs text-muted-foreground">Target: 85% renewal rate</div>
          </div>
          <div className="bg-secondary/50 border-l-4 border-muted p-3 rounded">
            <div className="font-medium text-sm">Dormant Reactivation</div>
            <div className="text-xs text-muted-foreground">Target: 25% reactivation</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "neuronudge",
    icon: <Brain className="h-8 w-8" />,
    title: "Behavioral Intelligence Engine",
    subtitle: "Retention Science at Scale",
    description: "Our engine tests thousands of message variations using behavioral triggers — loss aversion, social proof, progress reminders, value reinforcement — to find the exact emotional key that keeps each subscriber engaged and retained.",
    visual: (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">Base: Renewal Reminder</div>
          <div className="bg-secondary/50 p-3 rounded text-sm">"Your subscription expires soon"</div>
        </div>
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">AI-Personalized Variations:</div>
          <div className="bg-primary/5 border-l-4 border-primary/40 p-2 rounded text-xs">
            <span className="font-medium">Progress:</span> "You've tracked 45 workouts — keep the streak alive"
          </div>
          <div className="bg-primary/5 border-l-4 border-primary/30 p-2 rounded text-xs">
            <span className="font-medium">Social:</span> "Join 10,000+ members renewing this month"
          </div>
          <div className="bg-primary/5 border-l-4 border-primary/20 p-2 rounded text-xs">
            <span className="font-medium">Value:</span> "Unlock advanced analytics in your next cycle"
          </div>
        </div>
      </div>
    )
  },
  {
    id: "profile",
    icon: <Users className="h-8 w-8" />,
    title: "Retention DNA Profile",
    subtitle: "Per-User Behavioral Memory",
    description: "We synthesize behavioral signals — app events, engagement patterns, subscription lifecycle data, and the AI's own learnings — into a dynamic 'Retention DNA' for each subscriber. This evolving profile ensures every intervention is informed by full context.",
    visual: (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="text-center mb-4">
          <div className="inline-flex bg-primary/20 p-4 rounded-full mb-2">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div className="text-sm font-medium">Subscriber Retention DNA</div>
          <div className="text-xs text-muted-foreground mt-1">User #A8B2C1</div>
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between"><span>Churn Risk</span><span className="text-primary font-mono">Low (18%)</span></div>
          <div className="flex justify-between"><span>Renewal Likelihood</span><span className="text-primary font-mono">82%</span></div>
          <div className="flex justify-between"><span>Best Channel</span><span className="text-primary font-mono">Push + Email</span></div>
          <div className="flex justify-between"><span>Optimal Window</span><span className="text-primary font-mono">7-9 PM weekdays</span></div>
        </div>
      </div>
    )
  },
  {
    id: "insights",
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Retention Insights Dashboard",
    subtitle: "See Why Users Stay (or Leave)",
    description: "Full transparency into what the AI is learning about your subscriber base. Understand which engagement patterns predict retention, what motivations drive renewals, and where your biggest churn risks are — all surfaced automatically.",
    visual: (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Retention Risk Heatmap</h4>
          <div className="grid grid-cols-4 gap-1">
            {Array.from({ length: 16 }, (_, i) => (
              <div 
                key={i} 
                className={`h-4 rounded ${
                  i % 3 === 0 ? 'bg-primary/70' : 
                  i % 3 === 1 ? 'bg-primary/40' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Week 1</span><span>Week 4</span><span>Week 8</span><span>Week 12</span>
          </div>
        </div>
        <div className="flex justify-between text-xs">
          <div className="text-center"><div className="font-medium">Active</div><div className="text-muted-foreground">68%</div></div>
          <div className="text-center"><div className="font-medium">At Risk</div><div className="text-muted-foreground">22%</div></div>
          <div className="text-center"><div className="font-medium">Churned</div><div className="text-muted-foreground">10%</div></div>
        </div>
      </div>
    )
  }
];

const PlatformPillars = () => {
  const [activePillar, setActivePillar] = useState("agents");
  const currentPillar = pillars.find(p => p.id === activePillar) || pillars[0];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            A Smarter Way to Retain Subscribers
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {pillars.map((pillar) => (
              <Button
                key={pillar.id}
                variant={activePillar === pillar.id ? "default" : "outline"}
                onClick={() => setActivePillar(pillar.id)}
                className="h-auto p-4 flex flex-col items-center text-center"
              >
                <div className={`mb-2 ${activePillar === pillar.id ? 'text-primary-foreground' : 'text-primary'}`}>
                  {pillar.icon}
                </div>
                <div className="text-sm font-medium">{pillar.title}</div>
              </Button>
            ))}
          </div>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">{currentPillar.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground">{currentPillar.subtitle}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{currentPillar.description}</p>
                </div>
                <div>{currentPillar.visual}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlatformPillars;
