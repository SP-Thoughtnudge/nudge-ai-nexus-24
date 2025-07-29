import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PsychographicDna = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Explanatory content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Deep Understanding Through Psychographic DNA
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI doesn't just segment; it builds a unique <strong>Psychographic DNA</strong> profile for every customer. This evolving 'contextual memory' allows our engine to understand the deep-seated motivations behind every action, ensuring the next nudge is always the most effective one.
            </p>
          </div>

          {/* Right side - Psychographic DNA Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md border-2 border-primary/20 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  Psychographic DNA
                </CardTitle>
                <p className="text-sm text-muted-foreground">User ID: #A8B2C1</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress bars for different affinities */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Scarcity Affinity</span>
                      <span className="text-sm text-muted-foreground">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Social Proof Affinity</span>
                      <span className="text-sm text-muted-foreground">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Authority Affinity</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>

                {/* Optimal engagement window */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Optimal Engagement Window
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    8 PM - 10 PM on Weekdays
                  </p>
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