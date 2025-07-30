
import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import NewHeroSection from "@/components/how-it-works/new-hero-section";
import LazySection from "@/components/ui/lazy-section";
import { updateSEOTags } from "@/lib/seo";

// Lazy load non-critical sections
const EvolutionComparison = lazy(() => import("@/components/how-it-works/evolution-comparison"));
const JourneyDivergence = lazy(() => import("@/components/how-it-works/journey-divergence"));
const ThreeStepProcess = lazy(() => import("@/components/how-it-works/three-step-process"));
const TechnologyCore = lazy(() => import("@/components/how-it-works/technology-core"));
const FinalCta = lazy(() => import("@/components/home/final-cta"));

const HowItWorks = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // SEO optimization
    updateSEOTags({
      title: "How Thoughtnudge Works | AI-Powered Customer Journey Automation",
      description: "Learn how Thoughtnudge's AI platform automates customer journey decisioning, provides real-time personalization, and optimizes marketing performance.",
      url: "https://www.thoughtnudge.com/how-it-works",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <NewHeroSection />
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <EvolutionComparison />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <JourneyDivergence />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <ThreeStepProcess />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <TechnologyCore />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <FinalCta />
          </LazySection>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
