
import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import NewHeroSection from "@/components/home/new-hero-section";
import LogoCloud from "@/components/home/logo-cloud";
import LazySection from "@/components/ui/lazy-section";
import FadeInSection from "@/components/ui/fade-in-section";

// Lazy load non-critical sections
const OutcomesSection = lazy(() => import("@/components/home/outcomes-section"));
const ProblemStatement = lazy(() => import("@/components/home/problem-statement"));
const SolutionProcess = lazy(() => import("@/components/home/solution-process"));
const TestimonialProof = lazy(() => import("@/components/home/testimonial-proof"));
const FinalCta = lazy(() => import("@/components/home/final-cta"));
import { updateSEOTags, addStructuredData, organizationSchema } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    // SEO optimization
    updateSEOTags({
      title: "Thoughtnudge | Autonomous AI Decisioning Platform",
      description: "AI-powered autonomous decisioning platform that makes 1:1 marketing decisions in real time across every channel and customer, at scale.",
      url: "https://www.thoughtnudge.com",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });

    // Add Organization structured data
    addStructuredData(organizationSchema);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      <Navbar />
      <main className="flex-grow">
        <NewHeroSection />
        
        <FadeInSection>
          <LogoCloud />
        </FadeInSection>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <FadeInSection delay={100}>
              <OutcomesSection />
            </FadeInSection>
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <FadeInSection delay={200}>
              <ProblemStatement />
            </FadeInSection>
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <FadeInSection delay={300}>
              <SolutionProcess />
            </FadeInSection>
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <FadeInSection delay={400}>
              <TestimonialProof />
            </FadeInSection>
          </LazySection>
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <LazySection>
            <FadeInSection delay={500}>
              <FinalCta />
            </FadeInSection>
          </LazySection>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
