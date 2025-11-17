import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  CreditCard, 
  Wallet, 
  Repeat, 
  Target, 
  PiggyBank,
  FileText,
  CalendarCheck,
  LineChart,
  Users,
  Activity,
  AlertCircle
} from "lucide-react";

const UseCasesGrid = () => {
  const useCaseGroups = [
    {
      category: "Activation & Early-Life Conversion",
      cases: [
        {
          icon: TrendingUp,
          title: "First Transaction Completion",
          description: "Guide new users to complete their first trade, transfer, or purchase within 48 hours."
        },
        {
          icon: FileText,
          title: "KYC & Document Upload",
          description: "Personalized reminders to complete KYC and verification steps based on user progress."
        }
      ]
    },
    {
      category: "Payments & Daily Banking Habits",
      cases: [
        {
          icon: Wallet,
          title: "Wallet Load & Balance Top-Up",
          description: "Contextual nudges when balance is low or before planned transactions."
        },
        {
          icon: Repeat,
          title: "Bill Payments & Autopay Setup",
          description: "Timely reminders for recurring bills and autopay configuration."
        }
      ]
    },
    {
      category: "Credit & Lending",
      cases: [
        {
          icon: CreditCard,
          title: "Credit Card Activation & Spend",
          description: "Drive first swipe and recurring spend through personalized offers."
        },
        {
          icon: CalendarCheck,
          title: "EMI & Loan Conversion",
          description: "Identify high-intent moments to convert purchases into EMI or personal loans."
        }
      ]
    },
    {
      category: "Investments & Wealth",
      cases: [
        {
          icon: LineChart,
          title: "SIP Setup & Contributions",
          description: "Automated nudges for systematic investment plan initiation and consistency."
        },
        {
          icon: PiggyBank,
          title: "Portfolio Diversification",
          description: "Contextual recommendations to add mutual funds, stocks, or bonds based on behavior."
        }
      ]
    },
    {
      category: "Retention & Engagement",
      cases: [
        {
          icon: Target,
          title: "Feature Adoption & Exploration",
          description: "Guide users to discover and use underutilized features like budgeting or goals."
        },
        {
          icon: Activity,
          title: "Transaction Frequency Optimization",
          description: "Increase login and transaction cadence through personalized engagement."
        }
      ]
    },
    {
      category: "Churn & Dormant Recovery",
      cases: [
        {
          icon: AlertCircle,
          title: "Early Churn Detection",
          description: "Proactive intervention when engagement drops or inactivity patterns emerge."
        },
        {
          icon: Users,
          title: "Dormant User Reactivation",
          description: "Win back inactive users with personalized incentives and contextual messaging."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              12 High-Impact BFSI Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pre-configured templates ready to deploy across your entire customer lifecycle — from onboarding to retention.
            </p>
          </div>

          {/* Use Cases by Category */}
          <div className="space-y-12">
            {useCaseGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-6">
                {/* Category Header */}
                <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-4">
                  {group.category}
                </h3>

                {/* Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.cases.map((useCase, caseIndex) => {
                    const Icon = useCase.icon;
                    return (
                      <Card 
                        key={caseIndex}
                        className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/50 animate-fade-in"
                        style={{ animationDelay: `${(groupIndex * 2 + caseIndex) * 50}ms` }}
                      >
                        <CardContent className="p-6 space-y-3">
                          {/* Icon & Title */}
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-grow">
                              <h4 className="text-lg font-bold text-foreground mb-2">
                                {useCase.title}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {useCase.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesGrid;
