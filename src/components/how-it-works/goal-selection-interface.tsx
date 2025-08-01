import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Target, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GoalSelectionInterface = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [animationPhase, setAnimationPhase] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  
  const goals = [
    'Drive Higher Conversions',
    'Maximize Upsell Revenue', 
    'Increase Customer Retention'
  ];
  
  useEffect(() => {
    if (!isIntersecting) return;
    
    const timeouts: NodeJS.Timeout[] = [];
    
    // Phase 1: Show interface
    timeouts.push(setTimeout(() => setAnimationPhase(1), 300));
    
    // Phase 2: Show goal options
    timeouts.push(setTimeout(() => setAnimationPhase(2), 800));
    
    // Phase 3: Simulate selection
    timeouts.push(setTimeout(() => {
      setSelectedGoal('Increase Customer Retention');
      setAnimationPhase(3);
    }, 2000));
    
    // Phase 4: Lock in selection
    timeouts.push(setTimeout(() => setAnimationPhase(4), 2800));
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isIntersecting]);

  return (
    <div ref={targetRef} className="p-6 w-full">
      {/* Header */}
      <div className={`text-center mb-6 transition-all duration-700 ${
        animationPhase >= 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
      }`}>
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Target className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Select Agent's Primary Goal
        </h3>
        <p className="text-sm text-muted-foreground">
          Choose the business outcome to maximize
        </p>
      </div>
      
      {/* Goal Options */}
      <div className="space-y-3 mb-6">
        {goals.map((goal, index) => (
          <div
            key={goal}
            className={`transition-all duration-500 ${
              animationPhase >= 2 ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
            }`}
            style={{
              transitionDelay: `${(index + 1) * 200}ms`
            }}
          >
            <div className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
              selectedGoal === goal 
                ? 'bg-primary/5 border-primary shadow-md' 
                : 'bg-muted/30 border-muted hover:border-primary/50'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{goal}</span>
                {selectedGoal === goal && (
                  <CheckCircle2 className="w-5 h-5 text-primary animate-scale-in" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Confirmation */}
      <div className={`text-center transition-all duration-700 ${
        animationPhase >= 4 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
      }`}>
        <Button variant="default" className="bg-primary hover:bg-primary/90">
          <CheckCircle2 className="w-4 h-4 mr-2" />
          Goal Configured
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
          AI agent will now optimize for this outcome
        </p>
      </div>
    </div>
  );
};

export default GoalSelectionInterface;