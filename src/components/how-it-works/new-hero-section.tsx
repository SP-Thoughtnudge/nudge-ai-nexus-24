import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Brain } from 'lucide-react';

const NewHeroSection = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (isIntersecting) {
      // Phase 1: Show goal card sliding in
      setTimeout(() => setAnimationPhase(1), 800);
      // Phase 2: Card connects with brain, brain pulses brighter
      setTimeout(() => setAnimationPhase(2), 2200);
      // Phase 3: Output burst of decision lines
      setTimeout(() => setAnimationPhase(3), 2800);
    }
  }, [isIntersecting]);

  // Generate line configurations for consistent animation
  const generateLines = () => {
    return Array.from({ length: 80 }, (_, i) => {
      const baseAngle = (i * 4.5) % 360;
      const angleVariation = (Math.sin(i * 0.3) * 15);
      const angle = baseAngle + angleVariation;
      const length = 40 + (i % 4) * 20 + Math.sin(i * 0.7) * 15;
      const delay = (i % 30) * 80;
      const duration = 1500 + (i % 3) * 500;
      
      // Brand color distribution
      const colorIndex = i % 10;
      let color;
      if (colorIndex < 6) color = 'hsl(var(--primary))'; // Brand Pink majority
      else if (colorIndex < 8) color = '#F97316'; // Brand Orange
      else color = '#F6C343'; // Brand Yellow accent
      
      return { angle, length, delay, duration, color };
    });
  };

  const lines = generateLines();

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
            className="relative mt-16 h-64 flex items-center justify-center overflow-visible"
          >
            {/* Central AI Brain (Always visible, pulsing softly) */}
            <div className="relative z-10">
              <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 ${
                animationPhase >= 2 
                  ? 'bg-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.6)] scale-110' 
                  : 'bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.2)]'
              }`}>
                <Brain 
                  className={`w-10 h-10 transition-all duration-700 ${
                    animationPhase >= 2 ? 'text-primary scale-110' : 'text-primary/70'
                  }`} 
                />
                
                {/* Soft pulse animation */}
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
                
                {/* Bright pulse when goal connects */}
                {animationPhase >= 2 && (
                  <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping"></div>
                )}
              </div>
            </div>

            {/* Input: Goal Card sliding from left */}
            <div className={`absolute left-0 md:left-8 transition-all duration-1200 ease-out ${
              animationPhase >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'
            } ${animationPhase >= 2 ? 'translate-x-20 md:translate-x-32 scale-90 opacity-60' : ''}`}>
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xl min-w-[200px]">
                <div className="text-xs font-medium text-gray-500 mb-2 tracking-wide uppercase">DEFINE GOAL</div>
                <div className="text-base font-bold text-black leading-tight">
                  Maximize Customer<br />Lifetime Value
                </div>
              </div>
            </div>

            {/* Output: Burst of decision lines from right side of brain */}
            {animationPhase >= 3 && (
              <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 translate-x-2">
                {lines.map((line, i) => {
                  // Create a unique keyframe name for each line
                  const keyframeName = `lineAppear-${i}`;
                  
                  return (
                    <div key={i}>
                      <style>
                        {`
                          @keyframes ${keyframeName} {
                            0% {
                              opacity: 0;
                              transform: scale(0) rotate(${line.angle}deg);
                            }
                            20% {
                              opacity: 0.8;
                              transform: scale(1) rotate(${line.angle}deg);
                            }
                            100% {
                              opacity: 0;
                              transform: scale(1) rotate(${line.angle}deg);
                            }
                          }
                        `}
                      </style>
                      <div
                        className="absolute origin-left"
                        style={{
                          width: '2px',
                          height: `${line.length}px`,
                          backgroundColor: line.color,
                          transform: `rotate(${line.angle}deg)`,
                          animation: `${keyframeName} ${line.duration}ms ease-out ${line.delay}ms forwards`
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Description text that appears after animation */}
          {animationPhase >= 3 && (
            <div className="mt-16 animate-fade-in" style={{ animationDelay: '1000ms' }}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                <span className="font-semibold text-foreground">One simple goal</span> triggers thousands of autonomous, personalized decisions—each customer receives their perfect journey.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;