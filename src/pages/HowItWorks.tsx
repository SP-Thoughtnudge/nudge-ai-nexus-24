
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import NewHeroSection from "@/components/how-it-works/new-hero-section";
import EvolutionComparison from "@/components/how-it-works/evolution-comparison";
import JourneyDivergence from "@/components/how-it-works/journey-divergence";
import ThreeStepProcess from "@/components/how-it-works/three-step-process";
import TechnologyCore from "@/components/how-it-works/technology-core";
import FinalCta from "@/components/home/final-cta";
import { updateSEOTags } from "@/lib/seo";

const HowItWorks = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // SEO optimization
    updateSEOTags({
      title: "How Thoughtnudge Works | AI-Powered Customer Journey Automation",
      description: "Learn how Thoughtnudge's AI platform automates customer journey decisioning, provides real-time personalization, and optimizes marketing performance.",
      url: "https://www.thoughtnudge.com/how-it-works",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <NewHeroSection />
        <EvolutionComparison />
        <JourneyDivergence />
        <ThreeStepProcess />
        <TechnologyCore />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
