import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, RotateCcw, ShoppingBag, Smartphone, RefreshCw } from "lucide-react";

const useCases = [
  {
    id: "churn",
    title: "Prevent Subscriber Churn",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "AI detects disengagement signals and intervenes before users cancel — with personalized nudges timed to each individual.",
    examples: [
      {
        industry: "Healthtech App",
        icon: <Smartphone className="h-5 w-5" />,
        scenario: "Fitness Subscription",
        challenge: "Users drop off after week 3 when motivation fades",
        solution: "Agent detects declining session frequency and sends personalized progress summaries + motivational content timed to the user's typical workout window.",
        result: "45% reduction in month-2 churn"
      },
      {
        industry: "Subscription E-commerce",
        icon: <ShoppingBag className="h-5 w-5" />,
        scenario: "Beauty Box",
        challenge: "Subscribers skip or cancel after receiving products that don't match their preferences",
        solution: "Agent learns product preferences from browsing and rating patterns, then proactively adjusts messaging and product recommendations before the next renewal cycle.",
        result: "35% fewer subscription cancellations"
      }
    ]
  },
  {
    id: "reactivate",
    title: "Reactivate Dormant Users",
    icon: <RotateCcw className="h-6 w-6" />,
    description: "AI finds the most effective re-engagement strategy for each dormant user — far beyond generic 'we miss you' campaigns.",
    examples: [
      {
        industry: "Digital Services",
        icon: <Smartphone className="h-5 w-5" />,
        scenario: "Fintech App",
        challenge: "Users who stop transacting rarely return with standard campaigns",
        solution: "Agent identifies that dormant high-value users respond to new feature announcements timed to their historically active periods — not discount offers.",
        result: "3× reactivation rate vs. generic campaigns"
      },
      {
        industry: "Lifestyle App",
        icon: <Smartphone className="h-5 w-5" />,
        scenario: "Meditation / Wellness",
        challenge: "Users lose habit after 2 weeks, standard re-engagement has <5% open rates",
        solution: "Agent learns that returning users respond to 'streak recovery' messages with social proof, not guilt-based messaging. Sends at user's historical meditation time.",
        result: "40% of dormant users return within 14 days"
      }
    ]
  }
];

const UseCasesAction = () => {
  const [activeUseCase, setActiveUseCase] = useState("churn");
  const currentUseCase = useCases.find(uc => uc.id === activeUseCase) || useCases[0];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Solve Your Toughest Retention Challenges
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-secondary/50 p-1 rounded-lg">
              {useCases.map((useCase) => (
                <Button
                  key={useCase.id}
                  variant={activeUseCase === useCase.id ? "default" : "ghost"}
                  onClick={() => setActiveUseCase(useCase.id)}
                  className="px-6 py-3 mx-1"
                >
                  <div className="flex items-center">
                    <div className="mr-2">{useCase.icon}</div>
                    {useCase.title}
                  </div>
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">{currentUseCase.description}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {currentUseCase.examples.map((example, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3">{example.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-primary">{example.industry}</div>
                      <div className="text-lg font-bold text-foreground">{example.scenario}</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-destructive mb-1">Challenge:</div>
                      <div className="text-sm text-muted-foreground">{example.challenge}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground mb-1">Thoughtnudge Solution:</div>
                      <div className="text-sm text-muted-foreground">{example.solution}</div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-sm font-semibold text-primary mb-1">Result:</div>
                      <div className="text-sm font-medium text-foreground">{example.result}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesAction;
