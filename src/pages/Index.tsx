
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import NewHeroSection from "@/components/home/new-hero-section";
import OutcomesSection from "@/components/home/outcomes-section";
import ProblemStatement from "@/components/home/problem-statement";
import SolutionProcess from "@/components/home/solution-process";
import TestimonialProof from "@/components/home/testimonial-proof";
import FinalCta from "@/components/home/final-cta";

const Index = () => {
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
