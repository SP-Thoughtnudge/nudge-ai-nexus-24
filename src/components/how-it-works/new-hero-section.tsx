import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Brain } from 'lucide-react';

const NewHeroSection = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (isIntersecting) {
      // Phase 1: Show goal card
      setTimeout(() => setAnimationPhase(1), 500);
      // Phase 2: Card moves to brain and brain pulses
      setTimeout(() => setAnimationPhase(2), 1500);
      // Phase 3: Output burst
      setTimeout(() => setAnimationPhase(3), 2500);
    }
  }, [isIntersecting]);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background to-muted/30 page-with-navbar">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            From Complex Data to Effortless Growth
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in [animation-delay:200ms] max-w-3xl mx-auto leading-relaxed">
            Thoughtnudge is designed for powerful results without the painful setup. We've replaced complex rule-builders and manual analysis with a simple, goal-driven framework.
          </p>
          
          {/* Leverage Engine Animation */}
          <div 
            ref={targetRef}
            className="relative mt-16 h-64 flex items-center justify-center overflow-hidden"
          >
            {/* Input: Goal Card (Left) */}
            <div className={`absolute left-0 md:left-16 transition-all duration-1000 ${
              animationPhase >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            } ${animationPhase >= 2 ? 'translate-x-32 md:translate-x-48 scale-75 opacity-50' : ''}`}>
              <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
                <div className="text-sm text-muted-foreground mb-1">GOAL:</div>
                <div className="font-semibold text-foreground">Increase Renewals</div>
              </div>
            </div>

            {/* Engine: AI Brain (Center) */}
            <div className={`relative transition-all duration-500 ${
              animationPhase >= 2 ? 'scale-110' : 'scale-100'
            }`}>
              <div className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                animationPhase >= 2 
                  ? 'bg-primary/20 shadow-[0_0_40px_hsl(var(--primary)/0.4)]' 
                  : 'bg-muted/50'
              }`}>
                <Brain 
                  className={`w-12 h-12 transition-all duration-500 ${
                    animationPhase >= 2 ? 'text-primary' : 'text-muted-foreground'
                  }`} 
                />
                {/* Pulse effect */}
                {animationPhase >= 2 && (
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                )}
              </div>
            </div>

            {/* Output: Autonomous Paths (Right) */}
            {animationPhase >= 3 && (
              <div className="absolute right-0 md:right-16 w-48 h-48 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Generate hundreds of unique paths */}
                  {Array.from({ length: 120 }, (_, i) => {
                    const angle = (i * 3) % 360;
                    const length = 20 + (i % 3) * 15;
                    const delay = (i % 20) * 50;
                    const color = [
                      'bg-primary',
                      'bg-blue-500',
                      'bg-green-500',
                      'bg-purple-500',
                      'bg-orange-500',
                      'bg-cyan-500'
                    ][i % 6];
                    
                    return (
                      <div
                        key={i}
                        className={`absolute w-px ${color} opacity-70 origin-left animate-fade-in`}
                        style={{
                          height: `${length}px`,
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${angle}deg)`,
                          transformOrigin: '0 0',
                          animationDelay: `${delay}ms`
                        }}
                      />
                    );
                  })}
                  
                  {/* Central connection point */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Description text that appears after animation */}
          {animationPhase >= 3 && (
            <div className="mt-12 animate-fade-in">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                <span className="font-medium text-foreground">One simple goal</span> triggers thousands of autonomous, personalized decisions—each customer receives their perfect journey.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;