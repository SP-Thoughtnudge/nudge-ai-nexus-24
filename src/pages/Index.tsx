
import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { HeroSectionNew } from "@/components/home/hero-section-new";
import { RazorSharpFocus } from "@/components/home/razor-sharp-focus";
import { ParadigmShiftComparison } from "@/components/home/paradigm-shift-comparison";
import { UnifiedIntelligence } from "@/components/home/unified-intelligence";
import { ProofGrowthSection } from "@/components/home/proof-growth-section";
import { MoreRevenueSection } from "@/components/home/more-revenue-section";
import { FinalCtaNew } from "@/components/home/final-cta-new";
import LogoCloud from "@/components/home/logo-cloud";
import LazySection from "@/components/ui/lazy-section";
import FadeInSection from "@/components/ui/fade-in-section";
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
        <HeroSectionNew />
        
        <FadeInSection>
          <LogoCloud />
        </FadeInSection>
        
        <FadeInSection delay={100}>
          <RazorSharpFocus />
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <ParadigmShiftComparison />
        </FadeInSection>
        
        <FadeInSection delay={300}>
          <UnifiedIntelligence />
        </FadeInSection>
        
        <FadeInSection delay={400}>
          <ProofGrowthSection />
        </FadeInSection>
        
        <FadeInSection delay={500}>
          <MoreRevenueSection />
        </FadeInSection>
        
        <FadeInSection delay={600}>
          <FinalCtaNew />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
