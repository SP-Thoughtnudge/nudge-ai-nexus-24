import { Smartphone, Activity, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IndustrySolutions = () => {
  const solutions = [
    {
      icon: Smartphone,
      title: "Consumer Internet & Digital Natives",
      subtitle: "Activate Growth Through Adaptive, 1:1 Personalization",
      description: "For Edtech, Mobility, Travel, or Lifestyle platforms that collect rich behavior but struggle to act on it in real time.",
      outcomes: [
        "Higher retention",
        "Lower churn",
        "Continuous intelligence"
      ],
      link: "/solutions/digital-services",
      ctaText: "See How It Works"
    },
    {
      icon: Activity,
      title: "Health & Wellness Engagement",
      subtitle: "Drive repeat purchase, renewals and higher CLTV through 1:1 personalization.",
      description: "For health, wellness, and diagnostics platforms where long-term adherence and repeat interactions define growth.",
      outcomes: [
        "40% higher repeat purchase & winback",
        "25% higher dormant user activation",
        "Continuous insights into user motivation and behavior"
      ],
      link: "/solutions/healthtech",
      ctaText: "See How It Works"
    },
    {
      icon: TrendingUp,
      title: "Financial Services & Stock Broking",
      subtitle: "Activate and Retain Investors Through Real-Time Personalization",
      description: "For stock broking and investment platforms where millions open accounts — but never trade.",
      outcomes: [
        "2–3x activation",
        "22% lower cost",
        "40% more repeat trades"
      ],
      link: "/solutions/financial-services",
      ctaText: "Explore BFSI Solutions"
    }
  ];

  return (
    <section id="industry-solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Purpose-Built for Enterprise Growth Models
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From engagement to retention, Thoughtnudge delivers measurable outcomes across verticals.
            </p>
          </div>
          
          {/* Solution Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6 inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {solution.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <h4 className="text-lg font-semibold text-primary mb-4">
                      {solution.subtitle}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Outcomes */}
                    <div className="mb-6 space-y-2">
                      {solution.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm font-medium text-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                      asChild
                    >
                      <Link to={solution.link}>
                        {solution.ctaText}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
