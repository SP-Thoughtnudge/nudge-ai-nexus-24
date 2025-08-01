import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Rocket, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnimatedGrowthChart = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [animationPhase, setAnimationPhase] = useState(0);
  const [decisionCount, setDecisionCount] = useState(0);
  const [visibleInsights, setVisibleInsights] = useState<string[]>([]);
  
  const insights = [
    'Personalized Offer Sent (Sarah J.)',
    'Engagement Nudge Activated (David K.)',
    'Psychographic Insight Learned (Emily L.)',
    'Optimal Channel Selected (Michael B.)',
    'Individual Goal Aligned (Jennifer S.)',
    'Custom Journey Triggered (Robert P.)',
    'Behavioral Pattern Detected (Lisa M.)',
    'Revenue Opportunity Identified (Mark T.)',
    'Timing Optimization Applied (Anna C.)',
    'Message Personalized (James W.)'
  ];
  
  useEffect(() => {
    if (!isIntersecting) return;
    
    const timeouts: NodeJS.Timeout[] = [];
    
    // Phase 1: Start counter animation
    timeouts.push(setTimeout(() => {
      setAnimationPhase(1);
      // Animate counter from 0 to target number
      let count = 0;
      const target = 42847;
      const increment = target / 100;
      const counterInterval = setInterval(() => {
        count += increment;
        if (count >= target) {
          setDecisionCount(target);
          clearInterval(counterInterval);
        } else {
          setDecisionCount(Math.floor(count));
        }
      }, 30);
    }, 300));
    
    // Phase 2: Start insights stream
    timeouts.push(setTimeout(() => {
      setAnimationPhase(2);
      let currentIndex = 0;
      const insightInterval = setInterval(() => {
        setVisibleInsights(prev => {
          const newInsights = [...prev, insights[currentIndex % insights.length]];
          return newInsights.length > 4 ? newInsights.slice(-4) : newInsights;
        });
        currentIndex++;
      }, 800);
      
      // Store interval to clear later
      timeouts.push(setTimeout(() => clearInterval(insightInterval), 10000));
    }, 1500));
    
    // Phase 3: Show outcome metric
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
      
      {/* Real-time Decision Counter */}
      <div className={`text-center mb-6 transition-all duration-700 ${
        animationPhase >= 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
      }`}>
        <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {decisionCount.toLocaleString()}
        </div>
        <div className="text-sm text-muted-foreground font-medium">
          1:1 Decisions Made This Week
        </div>
      </div>
      
      {/* Dynamic Insights Stream */}
      <div className={`bg-muted/30 rounded-lg p-4 mb-6 h-24 overflow-hidden transition-all duration-700 ${
        animationPhase >= 2 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="space-y-1">
          {visibleInsights.map((insight, index) => (
            <div
              key={`${insight}-${index}`}
              className="text-sm text-muted-foreground animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              • {insight}
            </div>
          ))}
        </div>
      </div>
      
      {/* Outcome Metric */}
      <div className={`text-center transition-all duration-700 ${
        animationPhase >= 3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
      }`}>
        <div className="bg-[#D72660] text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2 shadow-lg">
          <TrendingUp className="w-5 h-5" />
          <div className="font-bold text-lg">
            Autonomous Revenue Generated: +127%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGrowthChart;