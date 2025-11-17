import { useEffect } from "react";
import { updateSEOTags } from "@/lib/seo";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import BfsiHero from "@/components/solutions/bfsi/bfsi-hero";
import GrowthPillars from "@/components/solutions/bfsi/growth-pillars";
import WhyChoose from "@/components/solutions/bfsi/why-choose";
import EnterpriseSecurity from "@/components/solutions/bfsi/enterprise-security";
import UseCasesGrid from "@/components/solutions/bfsi/use-cases-grid";
import ResultsMetrics from "@/components/solutions/bfsi/results-metrics";
import Testimonials from "@/components/solutions/bfsi/testimonials";
import FinalCta from "@/components/solutions/bfsi/final-cta";
import BackToTopButton from "@/components/ui/back-to-top-button";

const SolutionsBFSI = () => {
  useEffect(() => {
    updateSEOTags({
      title: "AI Decisioning for BFSI – Hyper-Personalized 1:1 Customer Journeys | Thoughtnudge",
      description: "Thoughtnudge helps BFSI companies deliver 1:1 adaptive journeys across onboarding, activation, cross-sell, and churn prevention using secure, real-time AI decisioning.",
      url: "https://thoughtnudge.com/solutions/bfsi"
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <BfsiHero />
        <GrowthPillars />
        <WhyChoose />
        <EnterpriseSecurity />
        <UseCasesGrid />
        <ResultsMetrics />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default SolutionsBFSI;
