import { Brain, Zap, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ApproachSection = () => {
  const steps = [
    {
      icon: Brain,
      title: "Learn",
      description: "Understands every user's behavioral, psychographic, and transactional patterns.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Zap,
      title: "Decide",
      description: "Tests thousands of micro-hypotheses in real time to uncover what works.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Target,
      title: "Act",
      description: "Delivers the right message, tone, and timing across all touchpoints — app, email, WhatsApp, or voice.",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section id="approach" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              From Data to Decisions — Automatically.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Thoughtnudge acts as your AI decisioning and learning layer, turning first-party data into a continuously improving personalization engine.
            </p>
            <p className="text-lg md:text-xl text-foreground font-medium mt-4 max-w-3xl mx-auto">
              Our agentic AI infrastructure doesn't just automate delivery — it automates learning and decision-making.
            </p>
          </div>
          
          {/* Three Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative flex flex-col items-center text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Icon Container */}
                  <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Connection Arrow (not on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-4 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-32 -z-10"></div>
          
          {/* CTA */}
          <div className="text-center mt-12 animate-fade-in [animation-delay:600ms]">
            <Button 
              size="lg" 
              className="px-8"
              asChild
            >
              <Link to="/how-it-works">
                See How It Works
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
