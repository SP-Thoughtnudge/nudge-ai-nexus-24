
import { Bot, BrainCircuit, BarChart, Compass } from "lucide-react";

const BenefitCard = ({ 
  title, 
  description, 
  icon: Icon,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] ${className}`}>
      <div className="inline-flex items-center justify-center p-3 bg-brand-yellow/20 rounded-lg mb-6">
        <Icon className="w-7 h-7 text-brand-orange" />
      </div>
      <h3 className="text-xl font-bold text-brand-black mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "No More A/B Testing Fatigue",
      description: "Let AI discover what works best for each customer instead of manually creating and analyzing endless test variations.",
      icon: BarChart,
      className: "border-l-4 border-l-brand-orange"
    },
    {
      title: "Autonomous Customer Decisioning",
      description: "The platform makes real-time decisions on what to send, when to send it, and which channel to use—all autonomously.",
      icon: BrainCircuit,
      className: "border-l-4 border-l-brand-pink"
    },
    {
      title: "Explains Every Decision It Makes",
      description: "Unlike black-box AI, Thoughtnudge shows you why it made each decision, building trust and providing valuable insights.",
      icon: Bot,
      className: "border-l-4 border-l-brand-yellow"
    },
    {
      title: "Cross-Channel, Cross-Journey",
      description: "Deliver consistent yet personalized experiences across email, SMS, push, and on-site interactions throughout the customer lifecycle.",
      icon: Compass,
      className: "border-l-4 border-l-brand-orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Your AI Teammate for Personalization at Scale
          </h2>
          <p className="text-xl text-gray-600">
            Thoughtnudge works alongside your team, handling the complexity of 1:1 marketing while you focus on strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              className={benefit.className}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-brand-black mb-6">Trusted by innovative brands across e-commerce, travel, and loyalty</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Placeholder for customer logos */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
