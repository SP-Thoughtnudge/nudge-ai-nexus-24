import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Brain, ArrowRight, MessageCircle, Tag, Package, Smartphone, Check, X, TrendingUp } from 'lucide-react';

const NewHeroSection = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isIntersecting) {
      const intervals = [
        () => setTimeout(() => setAnimationStep(1), 500),   // Goal appears
        () => setTimeout(() => setAnimationStep(2), 1000),  // Arrow to AI
        () => setTimeout(() => setAnimationStep(3), 1500),  // AI Brain pulses
        () => setTimeout(() => setAnimationStep(4), 2000),  // Decision arrows
        () => setTimeout(() => setAnimationStep(5), 2500),  // Customer lines
        () => setTimeout(() => setAnimationStep(6), 3000),  // Customer actions
        () => setTimeout(() => setAnimationStep(7), 3500),  // Feedback arrows
        () => setTimeout(() => setAnimationStep(8), 4000),  // Growth graph
      ];
      
      intervals.forEach(interval => interval());
    }
  }, [isIntersecting]);

  const decisions = [
    { icon: MessageCircle, label: 'Messaging' },
    { icon: Tag, label: 'Offers' },
    { icon: Package, label: 'Products' },
    { icon: Smartphone, label: 'Timing' }
  ];

  const customerResponses = [
    { success: true },   // Customer 1: Pink checkmark
    { success: false },  // Customer 2: Gray x
    { success: true },   // Customer 3: Pink checkmark
    { success: true }    // Customer 4: Pink checkmark
  ];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background to-muted/30 page-with-navbar">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            From Complex Data to Effortless Growth
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in [animation-delay:200ms] max-w-3xl mx-auto leading-relaxed">
            See how one simple goal triggers autonomous AI decisions, personalized customer actions, continuous learning, and measurable growth.
          </p>
          
          {/* The Autonomous Decision & Learning Cycle */}
          <div 
            ref={targetRef}
            className="relative mt-16 bg-white/60 rounded-3xl border border-gray-200 p-8 overflow-hidden"
          >
            <div className="flex items-center justify-between min-h-[200px]">
              
              {/* 1. Starting Point: Goal */}
              <div className={`flex flex-col items-center transition-all duration-700 ${
                animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="bg-white border-2 border-primary rounded-xl p-4 shadow-lg">
                  <div className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">GOAL</div>
                  <div className="text-sm font-bold text-black">Increase<br/>Conversions</div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">Define Goal</div>
              </div>

              {/* Arrow to AI */}
              <div className={`transition-all duration-500 ${
                animationStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>

              {/* 2. AI Brain */}
              <div className={`flex flex-col items-center transition-all duration-700 ${
                animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 ${
                  animationStep >= 3 
                    ? 'bg-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.4)]' 
                    : 'bg-primary/10'
                }`}>
                  <Brain className="w-8 h-8 text-primary" />
                  {animationStep >= 3 && (
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse"></div>
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-2">AI Processing</div>

                {/* Decision Arrows */}
                {animationStep >= 4 && (
                  <div className="absolute flex space-x-8 mt-20">
                    {decisions.map((decision, i) => (
                      <div key={i} className="flex flex-col items-center">
                        {/* Arrow from brain to decision */}
                        <div 
                          className={`w-0.5 h-8 bg-primary transition-all duration-500`}
                          style={{ transitionDelay: `${i * 100}ms` }}
                        />
                        <div 
                          className={`bg-primary/10 p-2 rounded-lg transition-all duration-500 ${
                            animationStep >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                          }`}
                          style={{ transitionDelay: `${200 + i * 100}ms` }}
                        >
                          <decision.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{decision.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Customers Section */}
              <div className="flex flex-col items-center">
                {/* Dashed lines to customers */}
                {animationStep >= 5 && (
                  <div className="absolute flex space-x-8 -translate-x-32">
                    {customerResponses.map((_, i) => (
                      <div 
                        key={i}
                        className={`w-16 h-0.5 border-t-2 border-dashed border-gray-400 transition-all duration-500`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                )}

                {/* Customer circles */}
                <div className={`grid grid-cols-2 gap-3 transition-all duration-700 ${
                  animationStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  {customerResponses.map((customer, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center relative transition-all duration-500`}>
                        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                        
                        {/* Customer response indicators */}
                        {animationStep >= 6 && (
                          <div 
                            className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                              customer.success ? 'bg-primary' : 'bg-gray-500'
                            }`}
                            style={{ transitionDelay: `${500 + i * 150}ms` }}
                          >
                            {customer.success ? (
                              <Check className="w-2.5 h-2.5 text-white" />
                            ) : (
                              <X className="w-2.5 h-2.5 text-white" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-2">Individual Customers</div>

                {/* Feedback arrows back to AI */}
                {animationStep >= 7 && customerResponses.map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-20 h-0.5 bg-orange-500 opacity-60"
                    style={{
                      transform: `rotate(${180 + (i - 1.5) * 10}deg)`,
                      transformOrigin: 'left center',
                      left: '-60px',
                      top: `${-10 + i * 5}px`,
                      transitionDelay: `${1000 + i * 100}ms`,
                      animation: 'fade-in 0.5s ease-out forwards'
                    }}
                  />
                ))}
              </div>

              {/* Arrow to growth */}
              <div className={`transition-all duration-500 ${
                animationStep >= 8 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>

              {/* 5. Growth Outcome */}
              <div className={`flex flex-col items-center transition-all duration-700 ${
                animationStep >= 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="bg-gradient-to-r from-primary to-orange-500 p-4 rounded-xl shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white mb-2" />
                  <div className="text-xs font-bold text-white">GROWTH</div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">Revenue Growth</div>
              </div>
            </div>
          </div>
          
          {/* Description text */}
          {animationStep >= 8 && (
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                <span className="font-semibold text-foreground">One simple goal</span> triggers autonomous AI decisions for each customer, learns from their responses, and continuously optimizes to drive measurable growth.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;