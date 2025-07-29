import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ProductHero } from "@/components/product/product-hero";
import { PlatformPillars } from "@/components/product/platform-pillars";
import PsychographicDna from "@/components/product/psychographic-dna";
import { UseCasesAction } from "@/components/product/use-cases-action";
import FinalCta from "@/components/home/final-cta";

const Product = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <ProductHero />
      
      <PlatformPillars />
      
      <PsychographicDna />
      
      <UseCasesAction />
      
      <FinalCta />
      
      <Footer />
    </div>
  );
};

export default Product;