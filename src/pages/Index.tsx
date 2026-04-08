
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { HeroSectionNew } from "@/components/home/hero-section-new";
import { ProblemStatement } from "@/components/home/problem-statement";
import { HowItWorksSimple } from "@/components/home/how-it-works-simple";
import { EngineSection } from "@/components/home/engine-section";
import { OutcomesSection } from "@/components/home/outcomes-section";
import { EnterpriseSection } from "@/components/home/enterprise-section";
import { FinalCtaNew } from "@/components/home/final-cta-new";
import FadeInSection from "@/components/ui/fade-in-section";
import { updateSEOTags, addStructuredData, organizationSchema } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    updateSEOTags({
      title: "Thoughtnudge | Every Customer Gets Their Own Journey",
      description: "Thoughtnudge is the AI-native system behind every customer interaction — deciding what to do next, constantly learning, and optimizing performance across your entire lifecycle.",
      url: "https://www.thoughtnudge.com",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
    addStructuredData(organizationSchema, 'org');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSectionNew />
        <FadeInSection delay={100}><ProblemStatement /></FadeInSection>
        <FadeInSection delay={100}><HowItWorksSimple /></FadeInSection>
        <FadeInSection delay={100}><EngineSection /></FadeInSection>
        <FadeInSection delay={100}><OutcomesSection /></FadeInSection>
        <FadeInSection delay={100}><EnterpriseSection /></FadeInSection>
        <FinalCtaNew />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
