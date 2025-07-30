import React, { ReactNode } from 'react';
import { useLazyLoad } from '@/hooks/use-lazy-load';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  rootMargin?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  fallback = null,
  rootMargin = '100px',
}) => {
  const { targetRef, isInView } = useLazyLoad({ rootMargin });

  return (
    <div ref={targetRef as React.RefObject<HTMLDivElement>} className={className}>
      {isInView ? children : (fallback || <div className="h-96 bg-gray-50 animate-pulse" />)}
    </div>
  );
};

export default LazySection;