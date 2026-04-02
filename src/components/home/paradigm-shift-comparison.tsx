import { Card } from "@/components/ui/card";
import { XCircle, CheckCircle } from "lucide-react";

export const ParadigmShiftComparison = () => {
  const oldWay = [
    "Batch campaigns to cold segments",
    "Manual A/B tests that take weeks",
    "Static win-back flows that ignore context",
    "One-size-fits-all renewal reminders",
  ];

  const newWay = [
    "Per-user retention decisions in real time",
    "Continuous micro-experiments per customer",
    "Adaptive re-engagement based on behavior",
    "1:1 renewal nudges timed to each user",
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Why Retention Programs Fail
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Your users are unique. Your retention strategy shouldn't treat them all the same.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                The Status Quo
              </h3>
              <div className="space-y-4">
                {oldWay.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                <p className="text-sm text-muted-foreground italic">
                  Result: 30–50% of users churn within 90 days. Win-back campaigns recover &lt;5%.
                </p>
              </div>
            </Card>
            
            {/* The New Way */}
            <Card className="p-8 bg-card border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-primary mb-6">
                With Thoughtnudge
              </h3>
              <div className="space-y-4">
                {newWay.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-foreground italic">
                  Result: 40% higher renewal rates. 3× dormant reactivation. Measurable CLTV lift in weeks.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
