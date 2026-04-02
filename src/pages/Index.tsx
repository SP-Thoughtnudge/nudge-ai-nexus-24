
import { useEffect } from "react";
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
import FadeInSection from "@/components/ui/fade-in-section";
import { updateSEOTags, addStructuredData, organizationSchema } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    updateSEOTags({
      title: "Thoughtnudge | AI-Powered Retention for B2C Apps",
      description: "Reduce churn, drive renewals, and maximize CLTV with autonomous AI that learns what keeps each user engaged. Built for subscription and repeat-purchase apps.",
      url: "https://www.thoughtnudge.com",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
    addStructuredData(organizationSchema, 'org');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-inter">
      <Navbar />
      <main className="flex-grow">
        <HeroSectionNew />
        <FadeInSection delay={100}><ParadigmShiftComparison /></FadeInSection>
        <FadeInSection delay={200}><UnifiedIntelligence /></FadeInSection>
        <FadeInSection delay={300}><PowerfulAiControl /></FadeInSection>
        <FadeInSection delay={400}><LiveInDays /></FadeInSection>
        <FadeInSection delay={500}><ProofGrowthSection /></FadeInSection>
        <FadeInSection delay={600}><AutonomousAdvantageSection /></FadeInSection>
        <FadeInSection delay={700}><FinalCtaNew /></FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
