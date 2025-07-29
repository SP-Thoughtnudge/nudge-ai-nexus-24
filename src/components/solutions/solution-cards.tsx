import { ShoppingCart, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* E-commerce & D2C Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl w-fit">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For E-commerce & D2C
              </h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                Increase repeat purchases, recover abandoned carts, and maximize customer 
                lifetime value without relying on sitewide discounts.
              </p>
              <Link to="/solutions/d2c">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Digital Apps & Services Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl w-fit">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Digital Apps & Services
              </h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                Reduce churn, drive free-to-paid conversions, and increase engagement 
                for your Fintech, Healthtech, Travel or Edtech platform.
              </p>
              <Link to="/solutions/digital-services">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More →
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