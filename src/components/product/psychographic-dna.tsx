import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PsychographicDna = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Deep Understanding Through Retention DNA
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI builds a unique <strong>Retention DNA</strong> profile for every subscriber. This evolving behavioral memory captures engagement patterns, motivation drivers, and churn risk signals — ensuring every retention intervention is the most effective one possible.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="w-full max-w-md border-2 border-primary/20 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">Retention DNA</CardTitle>
                <p className="text-sm text-muted-foreground">Subscriber #A8B2C1</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Churn Risk</span>
                      <span className="text-sm text-muted-foreground">22%</span>
                    </div>
                    <Progress value={22} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Renewal Likelihood</span>
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Engagement Depth</span>
                      <span className="text-sm text-muted-foreground">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Optimal Re-engagement Window</h4>
                  <p className="text-sm text-muted-foreground">7 PM - 9 PM on Weekdays via Push</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychographicDna;
