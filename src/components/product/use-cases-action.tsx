import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, RotateCcw } from "lucide-react";

const useCases = [
  {
    id: "existing",
    title: "Increase Revenue from Existing Customers",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "The AI identifies upsell/cross-sell opportunities and converts free users by demonstrating value.",
    examples: [
      {
        industry: "Financial Services",
        icon: <TrendingUp className="h-5 w-5" />,
        scenario: "Neobank",
        challenge: "Low adoption of premium accounts and credit products",
        solution: "For a neobank, the AI identifies users with consistent high-value transactions and nudges them toward premium accounts with personalized benefits like higher cashback on their top spending categories.",
        result: "3.5x higher premium account conversion"
      },
      {
        industry: "Financial Services",
        icon: <TrendingUp className="h-5 w-5" />,
        scenario: "Investment Platform",
        challenge: "Low conversion to managed portfolio services",
        solution: "For an investment platform, the AI identifies users with growing portfolios and presents personalized recommendations for managed funds based on their risk profile and investment patterns.",
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
        industry: "Financial Services",
        icon: <TrendingUp className="h-5 w-5" />,
        scenario: "Payment App",
        challenge: "Dormant users rarely reactivate after stopping usage",
        solution: "For a payment app, the AI identifies users who stopped transacting and re-engages them with personalized cashback offers on merchants they previously used, timed with their typical shopping patterns.",
        result: "62% higher reactivation vs generic campaigns"
      },
      {
        industry: "Financial Services",
        icon: <TrendingUp className="h-5 w-5" />,
        scenario: "Trading Platform",
        challenge: "Inactive traders rarely return after market volatility",
        solution: "For a trading platform, the AI detects when dormant traders' previously watched stocks hit significant price movements and sends personalized alerts with relevant market insights to re-engage them.",
        result: "45% of dormant traders reactivate within 30 days"
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