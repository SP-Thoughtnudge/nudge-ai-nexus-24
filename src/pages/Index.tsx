
import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { HeroSectionNew } from "@/components/home/hero-section-new";

import { ParadigmShiftComparison } from "@/components/home/paradigm-shift-comparison";
import { UnifiedIntelligence } from "@/components/home/unified-intelligence";
import { PowerfulAiControl } from "@/components/home/powerful-ai-control";
import { LiveInDays } from "@/components/home/live-in-days";
import { ProofGrowthSection } from "@/components/home/proof-growth-section";
import { AutonomousAdvantageSection } from "@/components/home/autonomous-advantage-section";
import { FinalCtaNew } from "@/components/home/final-cta-new";

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
    addStructuredData(organizationSchema, 'org');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-inter">
      <Navbar />
      <main className="flex-grow">
        <HeroSectionNew />
        
        <FadeInSection delay={100}>
          <ParadigmShiftComparison />
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <UnifiedIntelligence />
        </FadeInSection>
        
        <FadeInSection delay={300}>
          <PowerfulAiControl />
        </FadeInSection>
        
        <FadeInSection delay={400}>
          <LiveInDays />
        </FadeInSection>
        
        <FadeInSection delay={500}>
          <ProofGrowthSection />
        </FadeInSection>
        
        <FadeInSection delay={600}>
          <AutonomousAdvantageSection />
        </FadeInSection>
        
        <FadeInSection delay={700}>
          <FinalCtaNew />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
