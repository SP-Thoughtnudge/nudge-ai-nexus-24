import { useEffect } from "react";
import { updateSEOTags } from "@/lib/seo";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/solutions/digital-services/hero-section";
import GrowthLevers from "@/components/solutions/digital-services/growth-levers";
import WhyChoose from "@/components/solutions/digital-services/why-choose";
import ResultsMetrics from "@/components/solutions/digital-services/results-metrics";
import TestimonialsSection from "@/components/solutions/digital-services/testimonials-section";
import FinalCta from "@/components/solutions/digital-services/final-cta";
import BackToTopButton from "@/components/ui/back-to-top-button";

const SolutionsDigitalServices = () => {
  useEffect(() => {
    updateSEOTags({
      title: "AI for Health, Wellness & Consumer Platforms – Hyper-Personalized Journeys | Thoughtnudge",
      description: "Thoughtnudge helps health and wellness platforms deliver 1:1 adaptive journeys that increase retention, adherence, repeat purchases, and lifetime value using real-time AI decisioning.",
      url: "https://thoughtnudge.com/solutions/digital-services"
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <GrowthLevers />
        <WhyChoose />
        <ResultsMetrics />
        <TestimonialsSection />
        <FinalCta />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default SolutionsDigitalServices;