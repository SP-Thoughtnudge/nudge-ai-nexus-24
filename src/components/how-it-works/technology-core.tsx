import { Database, Brain, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const TechnologyCore = () => {
  const parts = [
    {
      icon: Database,
      title: "Unified Data Intake",
      description: "Our system integrates with your existing stack, pulling in customer context, app event streams, and historical data to build a complete picture.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Brain,
      title: "The Decision Engine", 
      description: "This is where AI and Behavioral Science meet. Our engine analyzes all data, determines the right psychological nudge, and selects the perfect combination of message, channel, offer, and time.",
      color: "from-primary/20 to-purple-500/20"
    },
    {
      icon: Zap,
      title: "Seamless Integration & Activation",
      description: "The AI's decisions are executed through your existing tools. We plug into your push provider, your WhatsApp BSP, and your in-app messaging platforms (like Plotline) to deliver the final message.",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Brains Behind the Operation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A high-level look at the technology that powers autonomous growth without the complexity.
          </p>
        </div>

        {/* Technology Flow Diagram */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {parts.map((part, index) => (
              <div key={index} className="relative">
                {/* Connector Arrow */}
                {index < parts.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-px bg-gradient-to-r from-primary to-primary/60"></div>
                    <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent ml-auto"></div>
                  </div>
                )}
                
                <Card className="p-6 h-full bg-gradient-to-br from-background to-muted/50 border-primary/10 hover:border-primary/20 transition-colors">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${part.color} flex items-center justify-center mb-4`}>
                      <part.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {part.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {part.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Showcase */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-background via-muted/20 to-primary/5 border-primary/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Seamless Integration with Your Existing Stack
              </h3>
              <p className="text-muted-foreground">
                No rip-and-replace. Thoughtnudge works with your current tools and systems.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["CRM", "Push Notifications", "WhatsApp", "In-App Messaging"].map((integration, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary/60 rounded"></div>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">{integration}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCore;