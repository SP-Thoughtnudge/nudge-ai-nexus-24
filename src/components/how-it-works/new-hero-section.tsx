import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Brain, ArrowRight, RefreshCw, TrendingDown, Clock, UserCheck } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

const NewHeroSection = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background to-muted/30 page-with-navbar">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            How Thoughtnudge Drives Retention at Scale
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in [animation-delay:200ms] max-w-3xl mx-auto leading-relaxed">
            From churn prediction to per-user renewal optimization — see how autonomous AI agents learn, decide, and act to keep your subscribers engaged.
          </p>
          
          {/* Hero Visual */}
          <div className="mt-16" ref={targetRef as React.RefObject<HTMLDivElement>}>
            <div className="relative mx-auto max-w-5xl bg-transparent">
              <OptimizedImage
                src="/lovable-uploads/24528e8c-ec1a-4b9d-bb81-42f16229fc3d.png?v=20250810"
                alt="Thoughtnudge retention engine: data to decisions to retention outcomes"
                className="w-full h-[240px] md:h-[300px] object-contain"
                lazy={false}
                priority={true}
                sizes="100vw"
              />
            </div>
          </div>
          
          <div className="mt-12 animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-foreground">One retention goal</span> triggers autonomous AI decisions for each subscriber — learning from their behavior, adapting in real time, and driving measurable reduction in churn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
