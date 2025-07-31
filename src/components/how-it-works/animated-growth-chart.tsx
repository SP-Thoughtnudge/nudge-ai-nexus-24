import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedGrowthChart = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [animationPhase, setAnimationPhase] = useState(0);
  
  // Learning phase bars (small, erratic)
  const learningBars = [8, 12, 6, 10, 7, 14, 9, 11];
  // Growth phase bars (steady upward trend)
  const growthBars = [16, 22, 28, 35, 42, 50, 58, 67, 75, 85];
  
  useEffect(() => {
    if (!isIntersecting) return;
    
    const timeouts: NodeJS.Timeout[] = [];
    
    // Phase 1: Learning bars animate in
    timeouts.push(setTimeout(() => setAnimationPhase(1), 300));
    
    // Phase 2: Growth bars animate in  
    timeouts.push(setTimeout(() => setAnimationPhase(2), 1500));
    
    // Phase 3: Highlight final bar and show growth label
    timeouts.push(setTimeout(() => setAnimationPhase(3), 3000));
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isIntersecting]);

  return (
    <div ref={targetRef} className="p-6 w-full">
      {/* Header with launch button */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
          <Rocket className="w-4 h-4 mr-2" />
          Launch Agent
        </Button>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="text-sm text-muted-foreground font-medium">Live & Learning</div>
        </div>
      </div>
      
      {/* Chart container */}
      <div className="relative">
        {/* Chart bars */}
        <div className="flex items-end justify-center space-x-1 h-24 mb-4">
          {/* Learning phase bars */}
          {learningBars.map((height, i) => (
            <div
              key={`learning-${i}`}
              className={`bg-gray-400 rounded-t transition-all duration-500 ease-out ${
                animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                height: animationPhase >= 1 ? `${height}px` : '0px',
                width: '6px',
                transitionDelay: `${i * 100}ms`
              }}
            />
          ))}
          
          {/* Growth phase bars */}
          {growthBars.map((height, i) => (
            <div
              key={`growth-${i}`}
              className={`rounded-t transition-all duration-600 ease-out ${
                i === growthBars.length - 1 && animationPhase >= 3
                  ? 'bg-[#D72660] shadow-lg shadow-[#D72660]/30' 
                  : 'bg-primary'
              } ${animationPhase >= 2 ? 'opacity-100' : 'opacity-0'}`}
              style={{
                height: animationPhase >= 2 ? `${height}px` : '0px',
                width: '6px',
                transitionDelay: `${i * 80}ms`
              }}
            />
          ))}
        </div>
        
        {/* Growth label */}
        <div className={`flex items-center justify-center transition-all duration-500 ${
          animationPhase >= 3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <div className="bg-[#D72660] text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
            ↗ +127% Growth
          </div>
        </div>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-4 text-xs text-muted-foreground">
          <span>Week 1</span>
          <span>Learning</span>
          <span>Optimizing</span>
          <span>Week 12</span>
        </div>
      </div>
      
      {/* Performance indicators */}
      <div className={`grid grid-cols-3 gap-4 mt-6 transition-all duration-700 ${
        animationPhase >= 3 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="text-center">
          <div className="text-sm font-semibold text-primary">A/B Tests</div>
          <div className="text-xs text-muted-foreground">2,847 run</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-primary">Conversion</div>
          <div className="text-xs text-muted-foreground">+34.2%</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-[#D72660]">Revenue</div>
          <div className="text-xs text-muted-foreground">+127%</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGrowthChart;