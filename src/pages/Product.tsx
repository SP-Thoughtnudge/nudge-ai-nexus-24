import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ProductHero } from "@/components/product/product-hero";
import LazySection from "@/components/ui/lazy-section";
import FadeInSection from "@/components/ui/fade-in-section";
import { updateSEOTags, addStructuredData, softwareApplicationSchema } from "@/lib/seo";

const PlatformPillars = lazy(() => import("@/components/product/platform-pillars"));
const PsychographicDna = lazy(() => import("@/components/product/psychographic-dna"));
const UseCasesAction = lazy(() => import("@/components/product/use-cases-action"));
const FinalCta = lazy(() => import("@/components/home/final-cta"));

const Product = () => {
  useEffect(() => {
    updateSEOTags({
      title: "Thoughtnudge Product | AI-Powered Retention Platform for B2C Apps",
      description: "Discover how Thoughtnudge's AI agents reduce churn, boost renewals, and maximize subscriber lifetime value with autonomous per-user retention intelligence.",
      url: "https://www.thoughtnudge.com/product",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
    addStructuredData(softwareApplicationSchema, 'software');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ProductHero />
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><FadeInSection delay={100}><PlatformPillars /></FadeInSection></LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><FadeInSection delay={200}><PsychographicDna /></FadeInSection></LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><FadeInSection delay={300}><UseCasesAction /></FadeInSection></LazySection>
        </Suspense>
        <Suspense fallback={<div className="h-96 bg-muted animate-pulse" />}>
          <LazySection><FadeInSection delay={400}><FinalCta /></FadeInSection></LazySection>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
