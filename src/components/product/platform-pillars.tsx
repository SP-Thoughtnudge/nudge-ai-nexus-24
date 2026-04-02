import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Brain, Users, BarChart3, Target, Zap, Database, TrendingUp } from "lucide-react";

const pillars = [
  {
    id: "agents",
    icon: <Bot className="h-8 w-8" />,
    title: "Goal-Driven AI Agents",
    subtitle: "Your Virtual Growth Manager",
    description: "Launch dedicated AI agents for each of your business goals—from winning back dormant users to upselling high-value products. You set the objective and guardrails; the agent handles the end-to-end strategy and execution for every single customer.",
    visual: (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold">Active Agents</h4>
          <Button size="sm" className="text-xs">
            <Target className="h-3 w-3 mr-1" />
            Launch Agent
          </Button>
        </div>
        <div className="space-y-3">
          <div className="bg-primary/10 border-l-4 border-primary p-3 rounded">
            <div className="font-medium text-sm">Q3 Renewal Push</div>
            <div className="text-xs text-muted-foreground">Target: 85% renewal rate</div>
          </div>
          <div className="bg-secondary/50 border-l-4 border-muted p-3 rounded animate-pulse">
            <div className="font-medium text-sm">Dormant User Winback</div>
            <div className="text-xs text-muted-foreground">Target: 25% reactivation</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "neuronudge",
    icon: <Brain className="h-8 w-8" />,
    title: "The Neuronudge™ Engine",
    subtitle: "Behavioral Science at Scale",
    description: "Our proprietary engine, built on proven research, crafts and tests thousands of message variations. It leverages over 60 psychological triggers—like FOMO, social proof, and loss aversion—to find the perfect emotional and rational key to motivate each individual.",
    visual: (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">Base Message:</div>
          <div className="bg-secondary/50 p-3 rounded text-sm">"Upgrade to Premium"</div>
        </div>
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">AI-Generated Variations:</div>
          <div className="bg-red-50 border-l-4 border-red-300 p-2 rounded text-xs">
            <span className="font-medium">Scarcity:</span> "Only 3 spots left for Premium"
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-300 p-2 rounded text-xs">
            <span className="font-medium">Social Proof:</span> "Join 10,000+ Premium users"
          </div>
          <div className="bg-green-50 border-l-4 border-green-300 p-2 rounded text-xs">
            <span className="font-medium">Convenience:</span> "Upgrade in just one tap"
          </div>
        </div>
      </div>
    )
  },
  {
    id: "profile",
    icon: <Users className="h-8 w-8" />,
    title: "The Unified Customer Profile",
    subtitle: "Beyond the Event Stream",
    description: "We synthesize four critical data streams—your CRM data, app event stream, historical message interactions, and the AI's own learnings—into a single, dynamic profile for each customer. This \"magnetic memory\" ensures every decision is made with complete context.",
    visual: (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            {/* Data sources flowing into center */}
            <div className="absolute -top-8 -left-8 bg-blue-100 p-2 rounded text-xs font-medium">CRM</div>
            <div className="absolute -top-8 -right-8 bg-green-100 p-2 rounded text-xs font-medium">Events</div>
            <div className="absolute -bottom-8 -left-8 bg-purple-100 p-2 rounded text-xs font-medium">Messages</div>
            <div className="absolute -bottom-8 -right-8 bg-orange-100 p-2 rounded text-xs font-medium">AI Insights</div>
            
            {/* Central profile */}
            <div className="bg-primary/20 p-4 rounded-full">
              <Users className="h-8 w-8 text-primary" />
            </div>
            
            {/* Connection lines */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <line x1="20" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="1" />
                <line x1="20" y1="80" x2="50" y2="50" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="80" x2="50" y2="50" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-center text-sm font-medium">Unified Customer Profile</div>
        <div className="text-center text-xs text-muted-foreground mt-1">Real-time synthesis</div>
      </div>
    )
  },
  {
    id: "insights",
    icon: <BarChart3 className="h-8 w-8" />,
    title: "The Growth Insights Dashboard",
    subtitle: "From Black Box to Actionable Insights",
    description: "We believe in transparency. Our dashboards don't just show you results; they show you *why*. Understand which emotional triggers work best, at what time of day, and for which cohorts, allowing you to continuously refine your high-level strategy.",
    visual: (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Emotion vs Time Heatmap</h4>
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
            <span>6AM</span>
            <span>12PM</span>
            <span>6PM</span>
            <span>12AM</span>
          </div>
        </div>
        <div className="flex justify-between text-xs">
          <div className="text-center">
            <div className="font-medium">Trust</div>
            <div className="text-muted-foreground">Morning peak</div>
          </div>
          <div className="text-center">
            <div className="font-medium">FOMO</div>
            <div className="text-muted-foreground">Evening surge</div>
          </div>
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
            A Smarter Way to Drive Growth
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Pillar tabs */}
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

          {/* Active pillar content */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">
                      {currentPillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {currentPillar.subtitle}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentPillar.description}
                  </p>
                </div>

                <div>
                  {currentPillar.visual}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlatformPillars;