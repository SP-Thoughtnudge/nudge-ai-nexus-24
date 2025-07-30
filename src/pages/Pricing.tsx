import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PricingHero from "@/components/pricing/pricing-hero";
import PricingPhilosophy from "@/components/pricing/pricing-philosophy";
import PricingProcess from "@/components/pricing/pricing-process";
import PricingIncludes from "@/components/pricing/pricing-includes";
import PricingFaq from "@/components/pricing/pricing-faq";
import PricingCta from "@/components/pricing/pricing-cta";
import { updateSEOTags } from "@/lib/seo";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO optimization
    updateSEOTags({
      title: "Thoughtnudge Pricing | Custom AI Solutions for Enterprise Growth",
      description: "Discover Thoughtnudge's pricing philosophy and process. Get custom AI-powered marketing automation solutions tailored to your business needs.",
      url: "https://www.thoughtnudge.com/pricing",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PricingHero />
        <PricingPhilosophy />
        <PricingProcess />
        <PricingIncludes />
        <PricingFaq />
        <PricingCta />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;