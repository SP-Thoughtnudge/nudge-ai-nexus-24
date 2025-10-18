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
            title="Maximize Customer Lifetime Value"
            description="Activate your 1st party data to deliver segment-of-1 experiences across every customer touchpoint, driving engagement, retention, and long-term value."
            examples={[
              "Next-best-action recommendations across channels",
              "Contextual engagement at optimal moments",
              "Lifecycle orchestration that evolves with each customer",
              "Hyper-personalized experiences based on behavioral intelligence"
            ]}
          />
          <UseCaseCard 
            icon={Users}
            title="Optimize Customer Lifecycle Journeys"
            description="Autonomously orchestrate personalized experiences across every touchpoint—from onboarding to retention—ensuring consistent, context-aware engagement."
            examples={[
              "Intelligent re-engagement across all channels",
              "Proactive retention strategies",
              "Cross-channel journey optimization",
              "Real-time decisioning that adapts to customer context"
            ]}
          />
        </div>

        {/* Target Verticals Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Built for Enterprise-Scale Organizations
          </h2>
          <p className="text-xl text-gray-600">
            We specialize in enterprises where 1st party data activation and hyper-personalized customer experiences drive competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VerticalCard 
            icon={ShoppingCart}
            title="BFSI & Financial Services"
            description="Activate 1st party data to deliver hyper-personalized financial experiences across every customer touchpoint, driving product adoption, engagement, and lifetime value."
            metrics={[
              "Retail banking and digital banking",
              "Wealth management and investment platforms", 
              "Insurance providers and InsurTech",
              "Credit card and lending services",
              "Payment platforms and FinTech"
            ]}
          />
          <VerticalCard 
            icon={Smartphone}
            title="Consumer Technology & SaaS"
            description="Deliver segment-of-1 experiences across web, mobile, and all communication channels to drive activation, feature adoption, and long-term customer retention."
            metrics={[
              "Enterprise SaaS and B2B platforms",
              "Consumer apps and digital services",
              "Telecom and connectivity services", 
              "Media streaming and entertainment",
              "Travel, hospitality, and mobility"
            ]}
          />
        </div>

        {/* Results Promise */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-brand-orange/10 to-brand-yellow/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">
              Enterprise-Grade Intelligence, Measurable Outcomes
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We <span className="font-semibold text-brand-black">guarantee</span> measurable CLTV improvements. Our autonomous AI agents activate your 1st party data to deliver enterprise-grade personalization at scale, driving outcomes faster than traditional customer engagement platforms.
            </p>
            <div className="text-sm text-gray-500 italic">
              "Think of it as having an intelligent AI decisioning layer that continuously optimizes every customer interaction across every touchpoint—24/7, autonomously."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueUseCases;