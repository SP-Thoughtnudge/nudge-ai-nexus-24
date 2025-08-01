import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Brain, MessageSquare, Smartphone, Bell, Phone, Package, Percent, DollarSign, Tag } from 'lucide-react';

const ToolkitBuilder = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [animationPhase, setAnimationPhase] = useState(0);
  const [activeRings, setActiveRings] = useState<number[]>([]);
  
  const rings = [
    {
      id: 1,
      radius: 80,
      items: [
        { icon: Bell, label: 'Push', angle: 0 },
        { icon: MessageSquare, label: 'WhatsApp', angle: 90 },
        { icon: Smartphone, label: 'In-App', angle: 180 },
        { icon: Phone, label: 'Voice', angle: 270 }
      ]
    },
    {
      id: 2,
      radius: 120,
      items: [
        { icon: Package, label: 'Product A', angle: 45 },
        { icon: Percent, label: '10% Off', angle: 135 },
        { icon: DollarSign, label: 'Free Ship', angle: 225 },
        { icon: Package, label: 'Product B', angle: 315 }
      ]
    },
    {
      id: 3,
      radius: 160,
      items: [
        { icon: Tag, label: 'FOMO', angle: 30 },
        { icon: Tag, label: 'Social Proof', angle: 120 },
        { icon: Tag, label: 'Trust', angle: 210 },
        { icon: Tag, label: 'Urgency', angle: 300 }
      ]
    }
  ];
  
  useEffect(() => {
    if (!isIntersecting) return;
    
    const timeouts: NodeJS.Timeout[] = [];
    
    // Phase 1: Show AI brain
    timeouts.push(setTimeout(() => setAnimationPhase(1), 500));
    
    // Phase 2-4: Show rings sequentially
    rings.forEach((ring, index) => {
      timeouts.push(setTimeout(() => {
        setActiveRings(prev => [...prev, ring.id]);
        setAnimationPhase(2 + index);
      }, 1200 + (index * 800)));
    });
    
    // Phase 5: Activate pulse lines
    timeouts.push(setTimeout(() => setAnimationPhase(5), 3800));
    
    // Phase 6: Show armed status
    timeouts.push(setTimeout(() => setAnimationPhase(6), 4500));
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isIntersecting]);

  const getItemPosition = (radius: number, angle: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  return (
    <div ref={targetRef} className="p-8 w-full relative overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className={`absolute inset-0 opacity-5 transition-opacity duration-1000 ${
        animationPhase >= 1 ? 'opacity-10' : 'opacity-0'
      }`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      {/* Central Container */}
      <div className="relative flex items-center justify-center min-h-[400px]">
        
        {/* Central AI Brain */}
        <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center transition-all duration-1000 z-20 ${
          animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } ${activeRings.length > 0 ? 'shadow-2xl shadow-primary/50 animate-pulse' : 'shadow-lg shadow-primary/30'}`}>
          <Brain className="w-10 h-10 text-white" />
          
          {/* Central glow effect */}
          {activeRings.length > 0 && (
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" />
          )}
        </div>

        {/* Orbiting Rings */}
        {rings.map((ring, ringIndex) => {
          const isActive = activeRings.includes(ring.id);
          const showPulse = animationPhase >= 5;
          
          return (
            <div key={ring.id} className="absolute inset-0">
              {/* Ring orbit path indicator */}
              {isActive && (
                <div 
                  className="absolute border border-primary/10 rounded-full animate-fade-in"
                  style={{
                    width: ring.radius * 2,
                    height: ring.radius * 2,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              )}
              
              {/* Ring items */}
              {ring.items.map((item, itemIndex) => {
                const position = getItemPosition(ring.radius, item.angle);
                const isItemActive = isActive && animationPhase >= 2 + ringIndex;
                
                return (
                  <div
                    key={`${ring.id}-${itemIndex}`}
                    className={`absolute transition-all duration-1000 ${
                      isItemActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                      animationDelay: `${itemIndex * 200}ms`
                    }}
                  >
                    {/* Item container with orbit animation */}
                    <div className={`${isActive ? 'animate-spin' : ''}`} style={{
                      animationDuration: '20s',
                      animationDirection: ringIndex % 2 === 0 ? 'normal' : 'reverse'
                    }}>
                      <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all duration-500 ${
                        isItemActive 
                          ? 'bg-white/90 border-primary shadow-lg shadow-primary/20' 
                          : 'bg-muted/40 border-muted/50'
                      }`}>
                        <item.icon className={`w-5 h-5 ${
                          isItemActive ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </div>
                      
                      {/* Item label */}
                      <div className={`absolute top-14 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                        isItemActive ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <span className="text-xs font-medium text-foreground bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full whitespace-nowrap border border-primary/10">
                          {item.label}
                        </span>
                      </div>
                    </div>
                    
                    {/* Pulse line to center */}
                    {showPulse && isItemActive && (
                      <div className="absolute inset-0 pointer-events-none">
                        <svg
                          className="absolute top-1/2 left-1/2 w-full h-full"
                          style={{ transform: 'translate(-50%, -50%)' }}
                        >
                          <line
                            x1="50%"
                            y1="50%"
                            x2={`calc(50% - ${position.x}px)`}
                            y2={`calc(50% - ${position.y}px)`}
                            stroke="hsl(var(--primary))"
                            strokeWidth="1"
                            strokeOpacity="0.4"
                            className="animate-pulse"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      
      {/* Status Indicator */}
      <div className={`text-center mt-8 transition-all duration-1000 ${
        animationPhase >= 6 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}>
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/30 rounded-full px-6 py-3 backdrop-blur-sm">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
          <span className="text-sm font-bold text-primary">
            ● AI Agent Armed & Ready
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-3 font-medium">
          All {activeRings.length}/3 option rings successfully configured
        </p>
      </div>
    </div>
  );
};

export default ToolkitBuilder;