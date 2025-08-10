import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  lazy?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  lazy = true,
  className,
  priority = false,
  sizes,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Generate responsive image sources
  const generateWebPSource = (originalSrc: string, width: number) => {
    if (originalSrc.startsWith('http')) {
      return originalSrc; // External images - use as is
    }
    // For internal images, we'll use the original format for now
    // In a real implementation, you'd have WebP versions generated
    return originalSrc;
  };

  const imageSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', className)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {isInView && (
        <picture>
          {/* WebP source only when src is a WebP asset */}
          {src.toLowerCase().endsWith('.webp') && (
            <source
              srcSet={`
                ${generateWebPSource(src, 400)} 400w,
                ${generateWebPSource(src, 800)} 800w,
                ${generateWebPSource(src, 1200)} 1200w
              `}
              sizes={imageSizes}
              type="image/webp"
            />
          )}
          
          {/* Fallback to original format */}
          <img
            src={src}
            alt={alt}
            className={cn(
              'transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0',
              className
            )}
            onLoad={handleLoad}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;