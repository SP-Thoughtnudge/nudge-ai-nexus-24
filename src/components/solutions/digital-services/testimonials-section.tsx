import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We always thought our wellness journeys were optimized — until Thoughtnudge started learning at an individual level.",
      author: "VP Growth, Leading Wellness App"
    },
    {
      quote: "Our refill journeys were rule-based and unpredictable. Thoughtnudge changed everything — 41% lift in refill conversions.",
      author: "Head of CRM, Diagnostics Platform"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-primary/30" />
                  </div>
                  <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground">
                    {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
