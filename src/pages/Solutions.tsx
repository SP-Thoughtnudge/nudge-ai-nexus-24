import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import SolutionsHero from "@/components/solutions/solutions-hero";
import SolutionCards from "@/components/solutions/solution-cards";
import SolutionsCta from "@/components/solutions/solutions-cta";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <SolutionsHero />
      
      <SolutionCards />
      
      <SolutionsCta />
      
      <Footer />
    </div>
  );
};

export default Solutions;