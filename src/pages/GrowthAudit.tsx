import React from "react";
import GrowthAuditHero from "@/components/growth-audit/growth-audit-hero";
import GrowthAuditForm from "@/components/growth-audit/growth-audit-form";

const GrowthAudit = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* No navigation or footer for distraction-free experience */}
      <div className="container mx-auto px-4 py-8 md:py-16">
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