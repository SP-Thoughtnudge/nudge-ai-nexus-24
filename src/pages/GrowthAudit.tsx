import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GrowthAuditHero from "@/components/growth-audit/growth-audit-hero";
import GrowthAuditForm from "@/components/growth-audit/growth-audit-form";
import { updateSEOTags } from "@/lib/seo";

const GrowthAudit = () => {
  useEffect(() => {
    updateSEOTags({
      title: "Free Growth Audit | Thoughtnudge AI Customer Insights",
      description: "Request a personalized growth audit to uncover opportunities for AI-driven activation, retention, and LTV.",
      url: "https://www.thoughtnudge.com/growth-audit",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Logo in top-left corner */}
      <div className="absolute top-6 left-6 z-10">
        <Link to="/" className="block">
          <img 
            src="/lovable-uploads/30f61a0f-8f24-4631-90a5-4de19741aa8c.png" 
            alt="Thoughtnudge" 
            className="h-12 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
      
      {/* No navigation or footer for distraction-free experience */}
      <div className="container mx-auto px-4 py-8 md:py-16 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Persuasive Content */}
          <GrowthAuditHero />
          
          {/* Right Column: Form */}
          <GrowthAuditForm />
        </div>
      </div>
    </div>
  );
};

export default GrowthAudit;