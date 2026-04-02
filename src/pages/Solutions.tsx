import { lazy, Suspense, useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import SolutionsHeroNew from "@/components/solutions/solutions-hero-new";
import ProblemContext from "@/components/solutions/problem-context";
import ApproachSection from "@/components/solutions/approach-section";
import LazySection from "@/components/ui/lazy-section";
import FadeInSection from "@/components/ui/fade-in-section";
import { updateSEOTags } from "@/lib/seo";

// Lazy load non-critical sections
const IndustrySolutions = lazy(() => import("@/components/solutions/industry-solutions"));
const IntegrationEcosystem = lazy(() => import("@/components/solutions/integration-ecosystem"));
const ResultsImpact = lazy(() => import("@/components/solutions/results-impact"));
const FinalIndustryCta = lazy(() => import("@/components/solutions/final-industry-cta"));

const Solutions = () => {
  useEffect(() => {
    updateSEOTags({
      title: "Enterprise AI Solutions | Thoughtnudge Autonomous Decisioning Platform",
      description: "Transform your first-party data into adaptive intelligence. AI decisioning for Financial Services, Healthtech, and Digital Apps that drives measurable LTV and retention.",
      url: "https://www.thoughtnudge.com/solutions",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <SolutionsHeroNew />
      
      {/* Problem Context Section */}
      <ProblemContext />
      
      {/* Approach Section */}
      <ApproachSection />
      
      {/* Industry Solutions */}
      <Suspense fallback={<div className="h-96 bg-muted/30 animate-pulse" />}>
        <LazySection>
          <FadeInSection delay={100}>
            <IndustrySolutions />
          </FadeInSection>
        </LazySection>
      </Suspense>
      
      {/* Integration Ecosystem */}
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <LazySection>
          <FadeInSection delay={200}>
            <IntegrationEcosystem />
          </FadeInSection>
        </LazySection>
      </Suspense>
      
      {/* Results & Impact */}
      <Suspense fallback={<div className="h-96 bg-muted/30 animate-pulse" />}>
        <LazySection>
          <FadeInSection delay={300}>
            <ResultsImpact />
          </FadeInSection>
        </LazySection>
      </Suspense>
      
      {/* Final CTA */}
      <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
        <LazySection>
          <FadeInSection delay={400}>
            <FinalIndustryCta />
          </FadeInSection>
        </LazySection>
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default Solutions;