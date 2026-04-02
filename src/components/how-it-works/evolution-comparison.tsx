import { X, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const EvolutionComparison = () => {
  const oldWayItems = [
    "Manual Segmentation",
    "A/B Testing for one 'winner'",
    "Rigid 'if-this-then-that' rules",
    "Manual data analysis",
    "Slow optimization cycles"
  ];

  const newWayItems = [
    "1:1 Personalization",
    "Continuous micro-experiments",
    "Goal-oriented autonomous agents",
    "Real-time adaptive learning",
    "Rapid revenue impact"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            It's Time to Evolve Beyond Journeys
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The era of manual, rule-based marketing is over. Welcome to autonomous, intelligent growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* The Old Way */}
          <Card className="p-8 border-destructive/20 bg-destructive/5">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">The Old Way</h3>
              <p className="text-lg font-semibold text-destructive">Manual, Rule-Based Journeys</p>
            </div>
            
            <div className="space-y-4">
              {oldWayItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* The Thoughtnudge Way */}
          <Card className="p-8 border-primary/20 bg-primary/5 relative overflow-hidden">
            <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full"></div>
            
            <div className="relative text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">The Thoughtnudge Way</h3>
              <p className="text-lg font-semibold text-primary">Autonomous, Goal-Driven AI</p>
            </div>
            
            <div className="relative space-y-4">
              {newWayItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EvolutionComparison;