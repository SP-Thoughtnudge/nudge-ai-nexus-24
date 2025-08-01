import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Brain, ArrowRight, MessageCircle, Tag, Package, Smartphone, Check, X, TrendingUp } from 'lucide-react';

const NewHeroSection = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isIntersecting) {
      // Phase 1: Goal Introduction (1 second)
      setTimeout(() => setAnimationStep(1), 0);     // Goal to AI arrow
      
      // Phase 2: AI Processing (2 seconds)
      setTimeout(() => setAnimationStep(2), 1000);  // AI Brain starts pulsing
      setTimeout(() => setAnimationStep(3), 1200);  // Decision arrows (sequential)
      
      // Phase 3: Personalized Decisions (2.5 seconds)
      setTimeout(() => setAnimationStep(4), 3500);  // Decision icons appear
      setTimeout(() => setAnimationStep(5), 4000);  // Dashed lines to customers
      
      // Phase 4: Customer Actions & Feedback (3 seconds)
      setTimeout(() => setAnimationStep(6), 6000);  // Dots move & customer responses
      setTimeout(() => setAnimationStep(7), 7500);  // Feedback arrows to AI
      
      // Phase 5: Continuous Learning & Growth (2.5 seconds)
      setTimeout(() => setAnimationStep(8), 9000);  // AI Brain pulses brighter
      setTimeout(() => setAnimationStep(9), 9500);  // Growth graph animates
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
            <div className="flex items-center justify-between min-h-[300px] px-4">
              
              {/* 1. Starting Point: Goal - Initially faded */}
              <div className="flex flex-col items-center opacity-80">
                <div className="bg-white border-2 border-primary rounded-xl p-4 shadow-lg">
                  <div className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">GOAL</div>
                  <div className="text-sm font-bold text-black">Increase<br/>Conversions</div>
                </div>
              </div>

              {/* Arrow to AI - Phase 1 */}
              <div className={`transition-all duration-1000 ease-in-out ${
                animationStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>

              {/* 2. AI Brain - Phase 2: Processing */}
              <div className="flex flex-col items-center relative">
                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-2000 ${
                  animationStep >= 2 
                    ? 'bg-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.4)]' 
                    : 'bg-primary/10'
                }`}>
                  <Brain className="w-8 h-8 text-primary" />
                  {animationStep >= 2 && (
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse"></div>
                  )}
                  {animationStep >= 8 && (
                    <div className="absolute inset-0 rounded-full bg-primary/50 animate-pulse"></div>
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-2">AI Brain</div>

                {/* Decision Arrows - Phase 2: Sequential appearance */}
                <div className="absolute top-20 flex space-x-8">
                  {decisions.map((decision, i) => (
                    <div key={i} className="flex flex-col items-center">
                      {/* Arrow from brain to decision */}
                      <div 
                        className={`w-0.5 h-12 bg-primary transition-all duration-500 ${
                          animationStep >= 3 ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                        }`}
                        style={{ 
                          transitionDelay: `${i * 200}ms`,
                          transformOrigin: 'top'
                        }}
                      />
                      
                      {/* Decision Icons - Phase 3 */}
                      <div 
                        className={`bg-primary/10 p-3 rounded-lg border-2 border-primary/20 transition-all duration-500 ${
                          animationStep >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                        style={{ transitionDelay: `${500 + i * 150}ms` }}
                      >
                        <decision.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-medium">{decision.label}</div>
                      
                      {/* Dashed lines to customers - Phase 3 */}
                      <div 
                        className={`w-20 h-0.5 border-t-2 border-dashed border-gray-400 mt-4 transition-all duration-800 ${
                          animationStep >= 5 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                        }`}
                        style={{ 
                          transitionDelay: `${1000 + i * 100}ms`,
                          transformOrigin: 'left'
                        }}
                      />
                      
                      {/* Moving dots - Phase 4 */}
                      {animationStep >= 6 && (
                        <div 
                          className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
                          style={{
                            top: '140px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            animation: `moveToCustomer 1s ease-in-out ${1500 + i * 200}ms forwards`
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Customers Section */}
              <div className="flex flex-col items-center">
                {/* Customer circles - positioned to align with decision lines */}
                <div className="grid grid-cols-2 gap-6 mt-16">
                  {customerResponses.map((customer, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center relative border-2 border-gray-400">
                        <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                        
                        {/* Customer response indicators - Phase 4 */}
                        {animationStep >= 6 && (
                          <div 
                            className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ${
                              customer.success ? 'bg-primary' : 'bg-gray-500'
                            }`}
                            style={{ transitionDelay: `${2000 + i * 150}ms` }}
                          >
                            {customer.success ? (
                              <Check className="w-3 h-3 text-white" />
                            ) : (
                              <X className="w-3 h-3 text-white" />
                            )}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Customer {i + 1}</div>
                    </div>
                  ))}
                </div>

                {/* Feedback arrows back to AI - Phase 4 */}
                {animationStep >= 7 && (
                  <div className="absolute left-1/2 top-20 transform -translate-x-1/2">
                    {customerResponses.map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-24 h-0.5 bg-gradient-to-l from-orange-500 to-yellow-500 opacity-70 animate-pulse"
                        style={{
                          transform: `rotate(${160 + (i - 1.5) * 15}deg)`,
                          transformOrigin: 'right center',
                          right: '0px',
                          top: `${i * 8}px`,
                          transitionDelay: `${500 + i * 100}ms`,
                          animation: `fade-in 0.8s ease-out ${500 + i * 100}ms forwards`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Arrow to growth - Phase 5 */}
              <div className={`transition-all duration-500 ${
                animationStep >= 9 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>

              {/* 5. Growth Outcome - Phase 5 */}
              <div className="flex flex-col items-center opacity-80">
                <div className={`bg-gradient-to-r from-primary to-orange-500 p-4 rounded-xl shadow-lg transition-all duration-1000 ${
                  animationStep >= 9 ? 'scale-110 shadow-2xl' : 'scale-100'
                }`}>
                  <div className="relative">
                    <TrendingUp className="w-8 h-8 text-white mb-2" />
                    {/* Animated growth line */}
                    {animationStep >= 9 && (
                      <div className="absolute -top-1 -right-1 w-full h-full">
                        <div className="w-6 h-0.5 bg-white animate-pulse transform rotate-45 origin-bottom-left"></div>
                      </div>
                    )}
                  </div>
                  <div className="text-xs font-bold text-white">GROWTH</div>
                </div>
                <div className="text-xs text-muted-foreground mt-2">Revenue Growth</div>
              </div>
            </div>
          </div>
          
          {/* Description text */}
          {animationStep >= 9 && (
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '1000ms' }}>
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