import { X, TestTube, Database, TrendingUp, Lightbulb, DollarSign } from "lucide-react";

const EnterpriseValue = () => {
  const values = [
    { icon: X, label: "Removes need for journeys" },
    { icon: TestTube, label: "Eliminates A/B testing" },
    { icon: Database, label: "Runs on your data warehouse" },
    { icon: TrendingUp, label: "Improves activation, retention, CLTV" },
    { icon: Lightbulb, label: "Uncovers behavioral insights" },
    { icon: DollarSign, label: "Measurable ROI in weeks" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Enterprise-Grade Value
          </h2>

          <div className="space-y-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-lg font-medium text-foreground">{value.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseValue;
