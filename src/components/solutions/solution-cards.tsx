import { Smartphone, Activity, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Digital Apps & Consumer Internet Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl w-fit">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                You track 50+ variables per user, yet most journeys are still built using 4–5 static rules.
              </h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                Your data team spends weeks running A/B tests and building manual segments, while outcomes barely move. We transform those behavioral signals into real-time, autonomous decisions that drive retention, engagement, and subscription revenue.
              </p>
              <Link to="/solutions/digital-services">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More → Digital Apps & Services
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* HealthTech & Adherence Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl w-fit">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Your users sign up, order once, and drop off—despite your team's best efforts.
              </h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                Why? Because most engagement is reactive, not adaptive. Your CRM knows *when* they bought, but not *why* they stopped. Thoughtnudge's agents learn from health context and engagement signals to build an adaptive, 1:1 journey that improves adherence.
              </p>
              <Link to="/solutions/healthtech">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More → HealthTech Adherence
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Financial Services Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl w-fit">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Every investor is different—risk appetite, product affinity, trading pattern—yet most outreach treats them the same.
              </h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                You capture dozens of behavioral variables (portfolio, watchlist, app activity), but your campaigns still rely on static segments. Thoughtnudge replaces this guesswork with adaptive intelligence to drive activation and AUM growth.
              </p>
              <Link to="/solutions/financial-services">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More → Financial Services
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolutionCards;