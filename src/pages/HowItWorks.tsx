
import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import NewHeroSection from "@/components/how-it-works/new-hero-section";
import LazySection from "@/components/ui/lazy-section";
import { updateSEOTags } from "@/lib/seo";

const WhyGrowthPlateaus = lazy(() => import("@/components/how-it-works/why-growth-plateaus"));
const ThoughtnudgeEngine = lazy(() => import("@/components/how-it-works/thoughtnudge-engine"));
const BehavioralInsights = lazy(() => import("@/components/how-it-works/behavioral-insights"));
const AgenticLoop = lazy(() => import("@/components/how-it-works/agentic-loop"));
const EnterpriseValue = lazy(() => import("@/components/how-it-works/enterprise-value"));
const FinalCta = lazy(() => import("@/components/home/final-cta"));

const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEOTags({
      title: "How Thoughtnudge Works | AI Retention Engine for B2C Apps",
      description: "Learn how Thoughtnudge's autonomous AI agents predict churn, optimize renewals, and drive subscriber retention with per-user behavioral intelligence.",
      url: "https://www.thoughtnudge.com/how-it-works",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <NewHeroSection />
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><WhyGrowthPlateaus /></LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><ThoughtnudgeEngine /></LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><BehavioralInsights /></LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><AgenticLoop /></LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><EnterpriseValue /></LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><FinalCta /></LazySection>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
