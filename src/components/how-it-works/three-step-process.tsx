import { Target, Settings, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedGrowthChart from "./animated-growth-chart";

const ThreeStepProcess = () => {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Define Your Goal",
      description: "Start with the business outcome. Tell the platform your objective (e.g., \"Increase pass renewals by 15%\") and the specific event that measures success (e.g., a \"payment_complete\" event).",
      visual: "Goal-setting UI mockup"
    },
    {
      number: "02", 
      icon: Settings,
      title: "Provide Your Options",
      description: "Give the AI its toolkit. You define the available channels (Push, WhatsApp, In-App, Voice), the products to promote, and the range of offers you approve—from a 20% discount to none at all.",
      visual: "Configuration interface"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Launch & Learn", 
      description: "Activate your agent. It immediately begins learning from your user data, running experiments, and executing the optimal strategy for each individual. Your job shifts from building rules to reviewing strategic insights.",
      visual: "Dashboard with upward trending graph"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Launch Your First AI Agent in Three Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined setup process gets you from onboarding to results faster than you thought possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-32 w-px h-24 bg-gradient-to-b from-primary to-primary/30 transform -translate-x-px z-0"></div>
              )}
              
              <div className={`grid md:grid-cols-2 gap-12 items-center mb-16 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-6xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual Mockup */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/20 border-primary/10">
                    <div className="aspect-video bg-gradient-to-br from-background to-muted rounded-lg border flex items-center justify-center">
                      {index === 0 && (
                        <div className="text-center space-y-4 p-6">
                          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                            <Target className="w-8 h-8 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-muted rounded w-3/4 mx-auto"></div>
                            <div className="h-3 bg-muted rounded w-1/2 mx-auto"></div>
                          </div>
                          <Button variant="default" size="sm" className="mt-4">
                            Set Goal
                          </Button>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="space-y-4 p-6 w-full">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="h-2 bg-muted rounded"></div>
                              <div className="h-6 bg-primary/20 rounded"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 bg-muted rounded"></div>
                              <div className="h-6 bg-primary/20 rounded"></div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-4 h-4 rounded bg-primary"></div>
                            <div className="w-4 h-4 rounded bg-muted"></div>
                            <div className="w-4 h-4 rounded bg-primary"></div>
                          </div>
                        </div>
                      )}
                      
                      {index === 2 && <AnimatedGrowthChart />}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;