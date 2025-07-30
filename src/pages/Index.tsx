
import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import NewHeroSection from "@/components/home/new-hero-section";
import OutcomesSection from "@/components/home/outcomes-section";
import ProblemStatement from "@/components/home/problem-statement";
import SolutionProcess from "@/components/home/solution-process";
import TestimonialProof from "@/components/home/testimonial-proof";
import FinalCta from "@/components/home/final-cta";
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
        <OutcomesSection />
        <ProblemStatement />
        <SolutionProcess />
        <TestimonialProof />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
