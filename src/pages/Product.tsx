import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ProductHero } from "@/components/product/product-hero";
import { PlatformPillars } from "@/components/product/platform-pillars";
import PsychographicDna from "@/components/product/psychographic-dna";
import { UseCasesAction } from "@/components/product/use-cases-action";
import FinalCta from "@/components/home/final-cta";
import { updateSEOTags, addStructuredData, softwareApplicationSchema } from "@/lib/seo";

const Product = () => {
  useEffect(() => {
    // SEO optimization
    updateSEOTags({
      title: "Thoughtnudge Product | AI-Powered Marketing Automation Platform",
      description: "Discover how Thoughtnudge's AI platform delivers autonomous 1:1 customer decisioning, real-time personalization, and cross-channel intelligence at scale.",
      url: "https://www.thoughtnudge.com/product",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });

    // Add Software Application structured data
    addStructuredData(softwareApplicationSchema);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <ProductHero />
        
        <PlatformPillars />
        
        <PsychographicDna />
        
        <UseCasesAction />
        
        <FinalCta />
      </main>
      
      <Footer />
    </div>
  );
};

export default Product;