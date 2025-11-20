import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Heart } from "lucide-react";

export const IndustryFocusSection = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Purpose-Built for{" "}
            <span className="text-primary">Data-Rich, High-Engagement Businesses</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto leading-relaxed">
            Thoughtnudge delivers the highest ROI in industries where customers generate continuous behavioural signals — and where real-time decisions directly influence revenue, loyalty, and lifetime value.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1 - Financial Services */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Financial Services & Fintech
                </h3>
              </div>
              
              <p className="text-sm md:text-base text-primary font-semibold mb-4 uppercase tracking-wide">
                Activation • Engagement • Conversion • Cross-Sell • Retention
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Drive activation, increase product usage, and grow lifetime value across Cards, Payments, Lending, BNPL, Insurance, and Investing. 
                Thoughtnudge creates adaptive, hyper-personalized journeys that learn what drives trust, action, and long-term engagement — autonomously.
              </p>
              
              <Button 
                asChild 
                variant="default"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/solutions/bfsi">
                  Explore Financial Services →
                </Link>
              </Button>
            </div>
            
            {/* Card 2 - Consumer Platforms */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Consumer Platforms
                </h3>
              </div>
              
              <p className="text-sm md:text-base text-primary font-semibold mb-4 uppercase tracking-wide">
                Repeat Purchase • Subscription Conversion • Habit Formation • Adherence
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Turn first-party behavioural signals into adaptive, per-user experiences that increase retention, subscriptions, and repeat purchase — while keeping privacy and consent front-and-center.
              </p>
              
              <Button 
                asChild 
                variant="default"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/solutions/digital-services">
                  Explore Consumer Platforms →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
