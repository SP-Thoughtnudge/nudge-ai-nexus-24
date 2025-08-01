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
      direction: 'top-right',
      slideFrom: 'translate-x-32 -translate-y-32'
    },
    {
      id: 'products',
      label: 'Product Options',
      icon: Package,
      items: ['Product A', 'Product B', 'Product N'],
      direction: 'top-left',
      slideFrom: '-translate-x-32 -translate-y-32'
    },
    {
      id: 'offers',
      label: 'Offers',
      icon: Percent,
      items: ['10% Discount', 'Free Shipping', 'No Offer'],
      direction: 'bottom-right',
      slideFrom: 'translate-x-32 translate-y-32'
    },
    {
      id: 'messaging',
      label: 'Message Styles',
      icon: Tags,
      items: ['FOMO', 'Social Proof', 'Trust'],
      direction: 'bottom-left',
      slideFrom: '-translate-x-32 translate-y-32'
    }
  ];
  
  useEffect(() => {
    if (!isIntersecting) return;
    
    const timeouts: NodeJS.Timeout[] = [];
    
    // Phase 1: Show AI brain with grid background
    timeouts.push(setTimeout(() => setAnimationPhase(1), 500));
    
    // Phase 2-5: Connect each toolkit sequentially with dramatic timing
    toolkits.forEach((toolkit, index) => {
      timeouts.push(setTimeout(() => {
        setConnectedTools(prev => [...prev, toolkit.id]);
        setAnimationPhase(2 + index);
      }, 1200 + (index * 800)));
    });
    
    // Final phase: Show armed status
    timeouts.push(setTimeout(() => setAnimationPhase(6), 4800));
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isIntersecting]);

  return (
    <div ref={targetRef} className="p-8 w-full relative overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className={`absolute inset-0 opacity-10 transition-opacity duration-1000 ${
        animationPhase >= 1 ? 'opacity-20' : 'opacity-0'
      }`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Central AI Brain */}
      <div className="relative flex items-center justify-center min-h-[300px]">
        <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center transition-all duration-1000 ${
          animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } ${connectedTools.length > 0 ? 'shadow-2xl shadow-primary/40' : 'shadow-lg shadow-primary/20'} ${
          connectedTools.length === 4 ? 'animate-pulse' : ''
        }`}>
          <Brain className="w-12 h-12 text-white" />
          
          {/* Pulse rings when connecting */}
          {connectedTools.length > 0 && (
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
          )}
        </div>
        
        {/* Toolkit Modules */}
        <div className="absolute inset-0">
          {toolkits.map((toolkit, index) => {
            const isConnected = connectedTools.includes(toolkit.id);
            const isCurrentlyConnecting = animationPhase === 2 + index;
            
            // Position modules in the four corners with even more space
            const positions = {
              'top-right': { x: 160, y: -120 },
              'top-left': { x: -160, y: -120 },
              'bottom-right': { x: 160, y: 120 },
              'bottom-left': { x: -160, y: 120 }
            };
            
            const pos = positions[toolkit.direction as keyof typeof positions];
            
            return (
              <div
                key={toolkit.id}
                className={`absolute transition-all duration-1000 ease-out ${
                  animationPhase >= 2 + index 
                    ? 'opacity-100 transform translate-x-0 translate-y-0' 
                    : `opacity-0 ${toolkit.slideFrom}`
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`
                }}
              >
                {/* Module Card - Much larger size to accommodate text */}
                <div className={`relative w-48 h-36 rounded-xl border-2 p-4 backdrop-blur-sm transition-all duration-700 ${
                  isConnected 
                    ? 'bg-white/95 border-primary shadow-xl shadow-primary/20' 
                    : 'bg-muted/40 border-muted/50'
                } ${isCurrentlyConnecting ? 'scale-110' : 'scale-100'}`}>
                  
                  {/* Module Header */}
                  <div className="flex items-start space-x-2 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isConnected ? 'bg-primary/10' : 'bg-muted/50'
                    }`}>
                      <toolkit.icon className={`w-4 h-4 ${
                        isConnected ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-sm font-bold leading-tight block ${
                        isConnected ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {toolkit.label}
                      </span>
                    </div>
                  </div>
                  
                  {/* Module Items - Better spacing and sizing */}
                  <div className="space-y-2">
                    {toolkit.items.slice(0, 2).map((item, itemIndex) => (
                      <div key={itemIndex} className={`text-sm px-3 py-2 rounded-lg leading-tight ${
                        isConnected ? 'bg-primary/5 text-primary' : 'bg-muted/30 text-muted-foreground'
                      }`}>
                        {item}
                      </div>
                    ))}
                    {toolkit.items.length > 2 && (
                      <div className={`text-sm px-3 py-2 rounded-lg leading-tight ${
                        isConnected ? 'bg-primary/5 text-primary' : 'bg-muted/30 text-muted-foreground'
                      }`}>
                        +{toolkit.items.length - 2} more
                      </div>
                    )}
                  </div>
                  
                  {/* Connection Status */}
                  {isConnected && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white animate-scale-in" />
                  )}
                </div>
                
                {/* Glowing Connection Line */}
                {isConnected && (
                  <div className="absolute inset-0 pointer-events-none">
                    <svg
                      className="absolute top-1/2 left-1/2 w-full h-full"
                      style={{ transform: 'translate(-50%, -50%)' }}
                    >
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% - ${pos.x}px)`}
                        y2={`calc(50% - ${pos.y}px)`}
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeOpacity="0.6"
                        className="animate-fade-in"
                        pathLength="1"
                        strokeDasharray="5,5"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="10;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
          All {connectedTools.length}/4 toolkits successfully configured
        </p>
      </div>
    </div>
  );
};

export default ToolkitBuilder;