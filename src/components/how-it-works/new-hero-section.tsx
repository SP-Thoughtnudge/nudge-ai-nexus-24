import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Brain, ArrowRight, MessageCircle, Tag, Package, Smartphone, Check, X, TrendingUp } from 'lucide-react';
import OptimizedImage from '@/components/ui/optimized-image';

const NewHeroSection = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isIntersecting) {
      // Phase 1: Goal Introduction (1 second)
      setTimeout(() => setAnimationStep(1), 0);     // Goal to AI arrow
      
      // Phase 2: AI Processing (2 seconds)
      setTimeout(() => setAnimationStep(2), 1000);  // AI Brain starts pulsing
      setTimeout(() => setAnimationStep(3), 1200);  // Decision arrows (sequential)
      
      // Phase 3: Personalized Decisions (2.5 seconds)
      setTimeout(() => setAnimationStep(4), 3500);  // Decision icons appear
      setTimeout(() => setAnimationStep(5), 4000);  // Dashed lines to customers
      
      // Phase 4: Customer Actions & Feedback (3 seconds)
      setTimeout(() => setAnimationStep(6), 6000);  // Dots move & customer responses
      setTimeout(() => setAnimationStep(7), 7500);  // Feedback arrows to AI
      
      // Phase 5: Continuous Learning & Growth (2.5 seconds)
      setTimeout(() => setAnimationStep(8), 9000);  // AI Brain pulses brighter
      setTimeout(() => setAnimationStep(9), 9500);  // Growth graph animates
    }
  }, [isIntersecting]);

  const decisions = [
    { icon: MessageCircle, label: 'Messaging' },
    { icon: Tag, label: 'Offers' },
    { icon: Package, label: 'Products' },
    { icon: Smartphone, label: 'Timing' }
  ];

  const customerResponses = [
    { success: true },   // Customer 1: Pink checkmark
    { success: false },  // Customer 2: Gray x
    { success: true },   // Customer 3: Pink checkmark
    { success: true }    // Customer 4: Pink checkmark
  ];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background to-muted/30 page-with-navbar">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            From Complex Data to Effortless Growth
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in [animation-delay:200ms] max-w-3xl mx-auto leading-relaxed">
            See how one simple goal triggers autonomous AI decisions, personalized customer actions, continuous learning, and measurable growth.
          </p>
          
          {/* Hero Illustration */}
          <div className="mt-16">
            <div className="relative mx-auto max-w-5xl bg-transparent">
              <OptimizedImage
                src="/lovable-uploads/24528e8c-ec1a-4b9d-bb81-42f16229fc3d.png?v=20250810"
                alt="Thoughtnudge how it works hero showing AI turning goals into decisions and growth"
                className="w-full h-[240px] md:h-[300px] object-contain"
                lazy={false}
                priority={true}
                sizes="100vw"
              />
            </div>
          </div>
          
          {/* Description text */}
          <div className="mt-12 animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-foreground">One simple goal</span> triggers autonomous AI decisions for each customer, learns from their responses, and continuously optimizes to drive measurable growth.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;