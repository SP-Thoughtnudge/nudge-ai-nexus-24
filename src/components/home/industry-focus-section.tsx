import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Wallet, CreditCard, PiggyBank, LineChart } from "lucide-react";

export const IndustryFocusSection = () => {
  const useCases = [
    { icon: Wallet, label: "Payments" },
    { icon: CreditCard, label: "Cards" },
    { icon: PiggyBank, label: "Lending & BNPL" },
    { icon: LineChart, label: "Trading & Investments" },
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center">
            Purpose-Built for{" "}
            <span className="text-primary">FinTech Activation</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            Where rich user signals meet high-frequency decisioning — Thoughtnudge delivers measurable activation lift across cards, payments, lending, and trading products.
          </p>
          
          {/* Single FinTech Card */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                FinTech & Financial Services
              </h3>
            </div>
            
            <p className="text-sm md:text-base text-primary font-semibold mb-4 uppercase tracking-wide">
              Activation • First Transaction • Product Adoption • Cross-Sell • Retention
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Drive activation, increase product usage, and grow lifetime value across your FinTech product portfolio. 
              Thoughtnudge creates adaptive, hyper-personalized journeys that learn what drives trust, action, and long-term engagement — autonomously.
            </p>
            
            {/* Use Case Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center space-x-2 bg-secondary/30 rounded-lg px-4 py-3">
                  <useCase.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{useCase.label}</span>
                </div>
              ))}
            </div>
            
            <Button 
              asChild 
              variant="default"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link to="/solutions/bfsi">
                Explore FinTech Solutions →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
