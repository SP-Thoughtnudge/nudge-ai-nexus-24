import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import PricingHero from "@/components/pricing/pricing-hero";
import PricingPhilosophy from "@/components/pricing/pricing-philosophy";
import PricingProcess from "@/components/pricing/pricing-process";
import PricingIncludes from "@/components/pricing/pricing-includes";
import PricingFaq from "@/components/pricing/pricing-faq";
import PricingCta from "@/components/pricing/pricing-cta";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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