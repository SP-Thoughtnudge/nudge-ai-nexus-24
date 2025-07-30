import { lazy, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import SolutionsHero from "@/components/solutions/solutions-hero";
import LazySection from "@/components/ui/lazy-section";

// Lazy load non-critical sections
const SolutionCards = lazy(() => import("@/components/solutions/solution-cards"));
const SolutionsCta = lazy(() => import("@/components/solutions/solutions-cta"));

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <SolutionsHero />
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <LazySection>
          <SolutionCards />
        </LazySection>
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <LazySection>
          <SolutionsCta />
        </LazySection>
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default Solutions;