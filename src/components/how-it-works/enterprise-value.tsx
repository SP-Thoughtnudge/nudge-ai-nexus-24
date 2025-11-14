import { Target, TestTube, Database, TrendingUp, Lightbulb, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const EnterpriseValue = () => {
  const values = [
    { 
      icon: Target, 
      label: "Removes need for journeys",
      description: "Autonomous agents replace static journey builders" 
    },
    { 
      icon: TestTube, 
      label: "Eliminates A/B testing",
      description: "Continuous experimentation at per-user level" 
    },
    { 
      icon: Database, 
      label: "Runs on your data warehouse",
      description: "Leverage all existing customer data and signals" 
    },
    { 
      icon: TrendingUp, 
      label: "Improves activation, retention, CLTV",
      description: "Measurable impact across key growth metrics" 
    },
    { 
      icon: Lightbulb, 
      label: "Uncovers behavioral insights",
      description: "Surface patterns invisible to traditional analysis" 
    },
    { 
      icon: DollarSign, 
      label: "Measurable ROI in weeks",
      description: "Fast time-to-value with immediate optimization" 
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Enterprise-Grade Value
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A complete shift from manual optimization to autonomous intelligence
            </p>
          </div>

          {/* Value Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseValue;
