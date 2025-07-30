import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PricingHero from "@/components/pricing/pricing-hero";
import LazySection from "@/components/ui/lazy-section";
import { updateSEOTags } from "@/lib/seo";

// Lazy load non-critical sections
const PricingPhilosophy = lazy(() => import("@/components/pricing/pricing-philosophy"));
const PricingProcess = lazy(() => import("@/components/pricing/pricing-process"));
const PricingIncludes = lazy(() => import("@/components/pricing/pricing-includes"));
const PricingFaq = lazy(() => import("@/components/pricing/pricing-faq"));
const PricingCta = lazy(() => import("@/components/pricing/pricing-cta"));

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO optimization
    updateSEOTags({
      title: "Thoughtnudge Pricing | Custom AI Solutions for Enterprise Growth",
      description: "Discover Thoughtnudge's pricing philosophy and process. Get custom AI-powered marketing automation solutions tailored to your business needs.",
      url: "https://www.thoughtnudge.com/pricing",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PricingHero />
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <PricingPhilosophy />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <PricingProcess />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <PricingIncludes />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <PricingFaq />
          </LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <PricingCta />
          </LazySection>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;