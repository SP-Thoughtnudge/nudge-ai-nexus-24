import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Brain, ArrowRight } from 'lucide-react';

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
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            From Complex Data to Effortless Growth
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in [animation-delay:200ms] max-w-3xl mx-auto leading-relaxed">
            Thoughtnudge is designed for powerful results without the painful setup. We've replaced complex rule-builders and manual analysis with a simple, goal-driven framework.
          </p>
          
          {/* Horizontal Story Flow */}
          <div 
            ref={targetRef}
            className="relative mt-16 h-48 flex items-center justify-between overflow-hidden bg-white/50 rounded-2xl border border-gray-200 p-8"
          >
            {/* Step 1: Goal Input */}
            <div className={`flex flex-col items-center transition-all duration-1000 ${
              animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white border-2 border-primary rounded-lg p-3 shadow-lg mb-2">
                <div className="text-xs font-medium text-primary mb-1">GOAL</div>
                <div className="text-sm font-bold text-gray-900">Increase<br/>Renewals</div>
              </div>
              <div className="text-xs text-muted-foreground">Define Goal</div>
            </div>

            {/* Arrow 1 */}
            <div className={`transition-all duration-500 ${
              animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            } [transition-delay:800ms]`}>
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>

            {/* Step 2: AI Brain Processing */}
            <div className={`flex flex-col items-center transition-all duration-1000 ${
              animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 ${
                animationPhase >= 2 
                  ? 'bg-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.4)]' 
                  : 'bg-primary/10'
              }`}>
                <Brain className="w-8 h-8 text-primary" />
                {animationPhase >= 2 && (
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse"></div>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-2">AI Processing</div>
            </div>

            {/* Arrow 2 */}
            <div className={`transition-all duration-500 ${
              animationPhase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            } [transition-delay:1600ms]`}>
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>

            {/* Step 3: Multiple Decisions */}
            <div className={`flex flex-col items-center transition-all duration-1000 ${
              animationPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="grid grid-cols-2 gap-1 mb-2">
                {['Email', 'SMS', 'Push', 'Call'].map((decision, i) => (
                  <div 
                    key={decision}
                    className={`bg-gradient-to-r from-primary to-orange-500 text-white px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                      animationPhase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ transitionDelay: `${2000 + i * 200}ms` }}
                  >
                    {decision}
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">Multiple Decisions</div>
            </div>

            {/* Connecting Lines to Customers */}
            {animationPhase >= 3 && (
              <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 translate-x-8">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`absolute w-16 h-0.5 origin-left transition-all duration-500`}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'hsl(var(--primary))' : '#F97316',
                      transform: `rotate(${(i - 1.5) * 15}deg)`,
                      transitionDelay: `${2800 + i * 100}ms`,
                      opacity: animationPhase >= 3 ? 1 : 0
                    }}
                  />
                ))}
              </div>
            )}

            {/* Step 4: Individual Customers */}
            <div className={`flex flex-col items-center transition-all duration-1000 ${
              animationPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } [transition-delay:3000ms]`}>
              <div className="grid grid-cols-2 gap-1 mb-2">
                {['User A', 'User B', 'User C', 'User D'].map((user, i) => (
                  <div 
                    key={user}
                    className={`bg-white border border-gray-300 px-2 py-1 rounded text-xs font-medium text-gray-700 transition-all duration-300 ${
                      animationPhase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{ transitionDelay: `${3200 + i * 150}ms` }}
                  >
                    {user}
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">Unique Customers</div>
            </div>

            {/* Arrow 3 */}
            <div className={`transition-all duration-500 ${
              animationPhase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            } [transition-delay:3800ms]`}>
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>

            {/* Step 5: Learning & Feedback */}
            <div className={`flex flex-col items-center transition-all duration-1000 ${
              animationPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } [transition-delay:4000ms]`}>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-lg shadow-lg mb-2">
                <div className="text-xs font-bold">LEARNING</div>
                <div className="text-xs">📊 Analytics</div>
              </div>
              <div className="text-xs text-muted-foreground">Continuous Learning</div>
            </div>
          </div>
          
          {/* Description text that appears after animation */}
          {animationPhase >= 3 && (
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '4500ms' }}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <span className="font-semibold text-foreground">One simple goal</span> triggers intelligent AI processing that creates personalized decisions for each unique customer, continuously learning from their responses.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;