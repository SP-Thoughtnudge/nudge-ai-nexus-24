import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Brain, MessageSquare, Percent, Tags, Package } from 'lucide-react';

const ToolkitBuilder = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [animationPhase, setAnimationPhase] = useState(0);
  const [connectedTools, setConnectedTools] = useState<string[]>([]);
  
  const toolkits = [
    {
      id: 'channels',
      label: 'Channels',
      icon: MessageSquare,
      items: ['Push', 'WhatsApp', 'In-App', 'Voice'],
      color: 'bg-blue-500'
    },
    {
      id: 'offers',
      label: 'Offers',
      icon: Percent,
      items: ['10% Discount', 'Free Shipping', 'No Offer'],
      color: 'bg-green-500'
    },
    {
      id: 'messaging',
      label: 'Message Styles',
      icon: Tags,
      items: ['FOMO', 'Social Proof', 'Trust'],
      color: 'bg-purple-500'
    },
    {
      id: 'products',
      label: 'Product Options',
      icon: Package,
      items: ['Product A', 'Product B', 'Product N'],
      color: 'bg-orange-500'
    }
  ];
  
  useEffect(() => {
    if (!isIntersecting) return;
    
    const timeouts: NodeJS.Timeout[] = [];
    
    // Phase 1: Show AI brain
    timeouts.push(setTimeout(() => setAnimationPhase(1), 300));
    
    // Phase 2-5: Connect each toolkit with delays
    toolkits.forEach((toolkit, index) => {
      timeouts.push(setTimeout(() => {
        setConnectedTools(prev => [...prev, toolkit.id]);
        setAnimationPhase(2 + index);
      }, 1000 + (index * 600)));
    });
    
    // Final phase: Show completion
    timeouts.push(setTimeout(() => setAnimationPhase(6), 3800));
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isIntersecting]);

  return (
    <div ref={targetRef} className="p-6 w-full relative">
      {/* Central AI Brain */}
      <div className="relative flex items-center justify-center">
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center transition-all duration-700 ${
          animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${connectedTools.length > 0 ? 'shadow-lg shadow-primary/30' : ''}`}>
          <Brain className="w-10 h-10 text-white" />
        </div>
        
        {/* Toolkit Cards */}
        <div className="absolute inset-0">
          {toolkits.map((toolkit, index) => {
            const isConnected = connectedTools.includes(toolkit.id);
            const angle = (index * 90) - 45; // Position cards around the brain
            const radius = 80;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={toolkit.id}
                className={`absolute transition-all duration-700 ${
                  animationPhase >= 2 + index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px) ${isConnected ? 'scale(1)' : 'scale(0.8)'}`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-40px',
                  marginTop: '-32px'
                }}
              >
                <div className={`w-20 h-16 rounded-lg border-2 p-2 transition-all duration-500 ${
                  isConnected 
                    ? 'bg-white border-primary shadow-md' 
                    : 'bg-muted/50 border-muted'
                }`}>
                  <div className="flex flex-col items-center text-center">
                    <toolkit.icon className={`w-4 h-4 mb-1 ${
                      isConnected ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <span className={`text-xs font-medium ${
                      isConnected ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {toolkit.label}
                    </span>
                  </div>
                </div>
                
                {/* Connection Line */}
                {isConnected && (
                  <div 
                    className="absolute w-px bg-primary/50 animate-fade-in"
                    style={{
                      height: `${radius - 30}px`,
                      left: '50%',
                      top: '100%',
                      transformOrigin: 'top',
                      transform: `rotate(${180 + angle}deg)`,
                      marginLeft: '-0.5px'
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Status Indicator */}
      <div className={`text-center mt-16 transition-all duration-700 ${
        animationPhase >= 6 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
      }`}>
        <div className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/20 rounded-lg px-4 py-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-primary">
            AI Agent Armed & Ready
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {connectedTools.length}/4 toolkits configured
        </p>
      </div>
    </div>
  );
};

export default ToolkitBuilder;