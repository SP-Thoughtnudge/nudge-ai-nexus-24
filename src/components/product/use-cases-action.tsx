import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, RotateCcw, ShoppingBag, Smartphone } from "lucide-react";

const useCases = [
  {
    id: "existing",
    title: "Increase Revenue from Existing Customers",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "The AI identifies upsell/cross-sell opportunities and converts free users by demonstrating value.",
    examples: [
      {
        industry: "D2C E-commerce",
        icon: <ShoppingBag className="h-5 w-5" />,
        scenario: "Fashion Brand",
        challenge: "Generic discount campaigns are eroding margins",
        solution: "For a fashion brand, the AI learns which users are \"quality-seekers\" and nudges them towards a premium collection instead of offering a discount.",
        result: "Higher AOV with maintained margins"
      },
      {
        industry: "Digital Services",
        icon: <Smartphone className="h-5 w-5" />,
        scenario: "Healthtech App",
        challenge: "Low free-to-paid conversion rates",
        solution: "For a Healthtech app, the AI identifies users tracking macros consistently and presents a personalized offer to upgrade to a premium plan with a nutritionist.",
        result: "3x higher conversion from personalized timing"
      }
    ]
  },
  {
    id: "dormant",
    title: "Win Back Dormant Customers",
    icon: <RotateCcw className="h-6 w-6" />,
    description: "The AI analyzes past behavior to find the most effective re-engagement strategy, far beyond a generic \"we miss you\" campaign.",
    examples: [
      {
        industry: "D2C E-commerce",
        icon: <ShoppingBag className="h-5 w-5" />,
        scenario: "Beauty Brand",
        challenge: "Standard win-back emails have low open rates",
        solution: "For a beauty brand, the AI might re-engage a user with a message about a new product for their specific skin type, coupled with a small, time-sensitive \"welcome back\" offer.",
        result: "60% higher reactivation vs generic campaigns"
      },
      {
        industry: "Digital Services",
        icon: <Smartphone className="h-5 w-5" />,
        scenario: "Travel App",
        challenge: "Users who stop using the service rarely return",
        solution: "For a Travel company, the AI identifies a user whose pass expired 60 days ago and nudges them with a message about new AC buses on their old route right before their typical commute time.",
        result: "40% of dormant users reactivate within 30 days"
      }
    ]
  }
];

const UseCasesAction = () => {
  const [activeUseCase, setActiveUseCase] = useState("existing");

  const currentUseCase = useCases.find(uc => uc.id === activeUseCase) || useCases[0];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Solve Your Toughest Growth Challenges
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Use case tabs */}
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
                    <div className="mr-2">
                      {useCase.icon}
                    </div>
                    {useCase.title}
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Active use case content */}
          <div className="mb-8">
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              {currentUseCase.description}
            </p>
          </div>

          {/* Examples */}
          <div className="grid lg:grid-cols-2 gap-8">
            {currentUseCase.examples.map((example, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-2 rounded-lg mr-3">
                      {example.icon}
                    </div>
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