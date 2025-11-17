import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Thoughtnudge helped us move from segment-based campaigns to true 1:1 journeys. We saw a 40% improvement in first-trade completion within the first month, and activation costs dropped by 22%.",
      author: "VP of Growth",
      company: "Leading Stock Broking Platform",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=exec1"
    },
    {
      quote: "We were running hundreds of manual A/B tests to optimize onboarding. With Thoughtnudge, the AI autonomously learns what works for each user. Our EMI conversion rate improved 35% in 8 weeks.",
      author: "Head of Digital Banking",
      company: "Top-5 Private Bank",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=exec2"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Trusted by BFSI Innovators
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what industry leaders say about transforming their customer experiences with Thoughtnudge.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg animate-fade-in bg-muted/30"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  {/* Quote Icon */}
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-lg text-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
