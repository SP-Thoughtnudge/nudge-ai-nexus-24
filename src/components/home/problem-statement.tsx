import { AlertTriangle, DollarSign, MessageSquare } from "lucide-react";
import { useFadeInOnScroll } from "@/hooks/use-fade-in-on-scroll";

const ProblemStatement = () => {
  const { elementRef, isVisible } = useFadeInOnScroll({ threshold: 0.1, rootMargin: '100px' });
  
  const problems = [
    {
      icon: AlertTriangle,
      title: "Manual Work Overload",
      description: "Your team is trapped in an endless cycle of segmenting, testing, and building rigid journeys that don't scale."
    },
    {
      icon: DollarSign,
      title: "Wasted Offer Spend",
      description: "You're burning cash on one-size-fits-all discounts, giving away margin to customers who would have converted anyway."
    },
    {
      icon: MessageSquare,
      title: "Generic Messaging",
      description: "Your campaigns fail to resonate because they ignore the individual psychology of each user, leaving engagement and revenue on the table."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-inter">
            Your Growth Strategy is <span className="text-primary">Leaking Revenue</span>
          </h2>
        </div>

        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className={`
                bg-white p-8 rounded-xl shadow-sm border border-gray-100 
                transition-all duration-500 ease-out
                hover:scale-[1.03] hover:shadow-lg hover:-translate-y-1
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-inter">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed font-inter">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;