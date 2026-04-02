import React, { ReactNode } from 'react';
import { useFadeInOnScroll } from '@/hooks/use-fade-in-on-scroll';
import { cn } from '@/lib/utils';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  rootMargin = '50px',
}) => {
  const { elementRef, isVisible } = useFadeInOnScroll({ 
    threshold, 
    rootMargin 
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;