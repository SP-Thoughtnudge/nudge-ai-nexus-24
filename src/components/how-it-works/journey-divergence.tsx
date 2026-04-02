import { useEffect, useState } from "react";
import { MessageSquare, Mail, Bell, ShoppingCart } from "lucide-react";

const JourneyDivergence = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const dots = [
    { id: 1, path: "top", channel: MessageSquare, color: "text-green-500", label: "WhatsApp" },
    { id: 2, path: "middle", channel: Bell, color: "text-blue-500", label: "Push" },
    { id: 3, path: "bottom", channel: Mail, color: "text-orange-500", label: "Email" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            One Goal. Infinite Paths to Conversion.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how our AI creates unique, personalized journeys for each customer, 
            choosing the perfect channel and timing for maximum impact.
          </p>
        </div>

        {/* Journey Visualization */}
        <div className="relative bg-muted/20 rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-3 gap-8 items-center min-h-[300px]">
            
            {/* Starting Point */}
            <div className="text-center space-y-4">
              <div className="inline-block p-4 bg-muted rounded-xl">
                <ShoppingCart className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Cohort</h3>
              <p className="text-sm text-muted-foreground">Abandoned Cart</p>
              
              {/* Grouped dots */}
              <div className="flex justify-center space-x-1 mt-4">
                {dots.map((dot) => (
                  <div
                    key={dot.id}
                    className={`w-3 h-3 rounded-full bg-primary transition-all duration-1000 ${
                      animationStep > 0 ? 'transform scale-110' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Journey Paths */}
            <div className="relative flex flex-col justify-center space-y-8">
              {dots.map((dot, index) => (
                <div key={dot.id} className="relative flex items-center justify-center">
                  {/* Moving dot */}
                  <div
                    className={`absolute w-3 h-3 rounded-full bg-primary transition-all duration-2000 ease-in-out ${
                      animationStep >= 1 ? 'transform translate-x-12' : ''
                    } ${
                      animationStep >= 2 ? 'translate-x-24' : ''
                    }`}
                    style={{
                      top: `${index * 32 - 16}px`,
                    }}
                  />

                  {/* Channel icon appears during journey */}
                  {animationStep >= 2 && (
                    <div className={`flex items-center space-x-2 ${dot.color} animate-fade-in`}>
                      <dot.channel className="w-6 h-6" />
                      <span className="text-sm font-medium">{dot.label}</span>
                    </div>
                  )}

                  {/* Curved path line */}
                  <svg
                    className="absolute w-32 h-8 opacity-30"
                    style={{ top: `${index * 32 - 16}px` }}
                  >
                    <path
                      d={`M 0 16 Q 64 ${16 + (index - 1) * 8} 128 16`}
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-primary"
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* End Point */}
            <div className="text-center space-y-4">
              <div className="inline-block p-4 bg-primary/10 rounded-xl">
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Goal</h3>
              <p className="text-sm text-muted-foreground">Purchase Complete</p>
              
              {/* Arriving dots */}
              <div className="flex justify-center space-x-1 mt-4">
                {dots.map((dot, index) => (
                  <div
                    key={dot.id}
                    className={`w-3 h-3 rounded-full bg-primary transition-all duration-1000 delay-${index * 200} ${
                      animationStep >= 3 ? 'transform scale-125 animate-pulse' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Animation indicator */}
          <div className="text-center mt-8">
            <div className="flex justify-center space-x-2">
              {[0, 1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    animationStep === step ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyDivergence;