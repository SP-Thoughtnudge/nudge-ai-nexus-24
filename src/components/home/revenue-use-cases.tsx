import { ShoppingCart, Smartphone, TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const UseCaseCard = ({ icon: Icon, title, description, examples }) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <CardContent className="p-8">
        <div className="mb-6 inline-flex items-center justify-center p-3 bg-brand-orange/10 rounded-lg">
          <Icon className="w-8 h-8 text-brand-orange" />
        </div>
        <h3 className="text-2xl font-bold text-brand-black mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="space-y-2">
          {examples.map((example, index) => (
            <div key={index} className="flex items-center text-sm text-gray-500">
              <ArrowUpRight className="w-4 h-4 mr-2 text-brand-orange" />
              {example}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const VerticalCard = ({ icon: Icon, title, description, metrics }) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full border-l-4 border-brand-orange">
      <CardContent className="p-8">
        <div className="mb-6 inline-flex items-center justify-center p-3 bg-brand-orange/10 rounded-lg">
          <Icon className="w-8 h-8 text-brand-orange" />
        </div>
        <h3 className="text-2xl font-bold text-brand-black mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-brand-black mb-3">Perfect For:</h4>
          <div className="space-y-2">
            {metrics.map((metric, index) => (
              <div key={index} className="text-sm text-gray-600">• {metric}</div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const RevenueUseCases = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Use Cases Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Two Revenue Goldmines You're Missing
          </h2>
          <p className="text-xl text-gray-600">
            Stop chasing new customers when your existing ones are ready to spend more. Our AI finds the revenue hiding in plain sight.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <UseCaseCard 
            icon={TrendingUp}
            title="Increase Revenue from Existing Customers"
            description="Transform your current customers into bigger spenders with intelligent upselling, cross-selling, and free-to-paid conversions."
            examples={[
              "Upsell premium plans at optimal moments",
              "Cross-sell complementary products based on behavior",
              "Convert free users with personalized nudges",
              "Upgrade subscriptions with minimal friction"
            ]}
          />
          <UseCaseCard 
            icon={Users}
            title="Reactivate Dormant Customers"
            description="Win back lost customers and prevent churn with behavioral science-driven campaigns that address the real reasons they left."
            examples={[
              "Winback campaigns with emotional triggers",
              "Churn prevention before it happens",
              "Reactivate inactive app users",
              "Bring back lapsed subscribers"
            ]}
          />
        </div>

        {/* Target Verticals Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Built for High-Growth Digital Businesses
          </h2>
          <p className="text-xl text-gray-600">
            We specialize in businesses where customer relationships and data-driven growth matter most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VerticalCard 
            icon={ShoppingCart}
            title="E-commerce D2C Brands"
            description="Maximize customer lifetime value with AI that understands purchase patterns, seasonal behavior, and product affinity to drive repeat purchases and bigger basket sizes."
            metrics={[
              "Fashion and lifestyle brands",
              "Consumer electronics and gadgets", 
              "Health and beauty products",
              "Home and lifestyle goods",
              "Subscription box services"
            ]}
          />
          <VerticalCard 
            icon={Smartphone}
            title="Digital App-Based Services"
            description="Increase user engagement and monetization with behavioral insights that drive in-app purchases, subscription upgrades, and feature adoption."
            metrics={[
              "HealthTech (HealthifyMe, Practo)",
              "EdTech platforms and learning apps",
              "FinTech and investment apps", 
              "Fitness apps (CureFit, Cult.fit)",
              "Mobility and transport (Chalo, Ola)"
            ]}
          />
        </div>

        {/* Results Promise */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-brand-orange/10 to-brand-yellow/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
              We Guarantee Better Results Than Your Current Setup
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our AI agents work as autonomous growth managers - one for each customer - continuously learning and optimizing to achieve your revenue goals. No manual work required.
            </p>
            <div className="text-sm text-gray-500 italic">
              "Think of it as having a dedicated, AI-powered growth manager for every single customer, working 24/7 to maximize their value to your business."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueUseCases;