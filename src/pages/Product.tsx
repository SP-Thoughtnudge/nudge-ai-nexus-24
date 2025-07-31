import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ProductHero } from "@/components/product/product-hero";
import LazySection from "@/components/ui/lazy-section";
import { updateSEOTags, addStructuredData, softwareApplicationSchema } from "@/lib/seo";

// Lazy load non-critical sections
const PlatformPillars = lazy(() => import("@/components/product/platform-pillars"));
const PsychographicDna = lazy(() => import("@/components/product/psychographic-dna"));
const UseCasesAction = lazy(() => import("@/components/product/use-cases-action"));
const FinalCta = lazy(() => import("@/components/home/final-cta"));

const Product = () => {
  useEffect(() => {
    // SEO optimization
    updateSEOTags({
      title: "Thoughtnudge Product | AI-Powered Marketing Automation Platform",
      description: "Discover how Thoughtnudge's AI platform delivers autonomous 1:1 customer decisioning, real-time personalization, and cross-channel intelligence at scale.",
      url: "https://www.thoughtnudge.com/product",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });

    // Add Software Application structured data
    addStructuredData(softwareApplicationSchema);
  }, []);

  return (
    <div className="min-h-screen bg-background page-with-navbar">
      <Navbar />
      
      <main>
        <ProductHero />
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <PlatformPillars />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <PsychographicDna />
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <UseCasesAction />
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

export default Product;