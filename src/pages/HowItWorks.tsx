
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import NewHeroSection from "@/components/how-it-works/new-hero-section";
import EvolutionComparison from "@/components/how-it-works/evolution-comparison";
import JourneyDivergence from "@/components/how-it-works/journey-divergence";
import ThreeStepProcess from "@/components/how-it-works/three-step-process";
import TechnologyCore from "@/components/how-it-works/technology-core";
import FinalCta from "@/components/home/final-cta";

const HowItWorks = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
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
