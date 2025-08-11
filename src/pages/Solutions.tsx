import { lazy, Suspense, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import SolutionsHero from "@/components/solutions/solutions-hero";
import LazySection from "@/components/ui/lazy-section";
import FadeInSection from "@/components/ui/fade-in-section";
import { updateSEOTags } from "@/lib/seo";

// Lazy load non-critical sections
const SolutionCards = lazy(() => import("@/components/solutions/solution-cards"));
const SolutionsCta = lazy(() => import("@/components/solutions/solutions-cta"));

const Solutions = () => {
  useEffect(() => {
    updateSEOTags({
      title: "AI Solutions | Thoughtnudge Autonomous Growth Solutions",
      description: "Explore Thoughtnudge solutions for D2C and digital services: autonomous AI that boosts retention, ARPU, and LTV.",
      url: "https://www.thoughtnudge.com/solutions",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <SolutionsHero />
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <LazySection>
          <FadeInSection delay={100}>
            <SolutionCards />
          </FadeInSection>
        </LazySection>
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <LazySection>
          <FadeInSection delay={200}>
            <SolutionsCta />
          </FadeInSection>
        </LazySection>
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default Solutions;