import React from "react";
import { BarChart3, DollarSign, Cpu, Map } from "lucide-react";

const GrowthAuditHero = () => {
  return (
    <div className="space-y-8">
      {/* Headline */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight">
          Discover Your Untapped Revenue Potential
        </h1>
        <p className="text-lg text-brand-gray leading-relaxed">
          Our complimentary Growth Audit is a data-driven analysis designed to identify the specific opportunities your business is missing with your current customer engagement strategy. This is a no-obligation, strategic overview, not a sales pitch.
        </p>
      </div>

      {/* What You'll Receive */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-brand-black">
          In Your Personalized Audit, We Will Reveal:
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-pink/10 rounded-full flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-brand-pink" />
            </div>
            <p className="text-brand-gray">
              A data-driven analysis of your key engagement and retention gaps.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-pink/10 rounded-full flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-brand-pink" />
            </div>
            <p className="text-brand-gray">
              An estimate of the potential revenue lift and offer cost savings you could achieve.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-pink/10 rounded-full flex items-center justify-center">
              <Cpu className="w-4 h-4 text-brand-pink" />
            </div>
            <p className="text-brand-gray">
              A clear introduction to how our autonomous AI can solve your specific challenges.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-pink/10 rounded-full flex items-center justify-center">
              <Map className="w-4 h-4 text-brand-pink" />
            </div>
            <p className="text-brand-gray">
              A high-level roadmap for transitioning from manual journeys to autonomous growth.
            </p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="space-y-6 pt-8 border-t border-gray-100">
        <blockquote className="text-lg italic text-brand-gray leading-relaxed">
          "The Growth Audit alone gave us more clarity on our retention problems than our last three months of A/B testing. The Thoughtnudge team delivered immense value from day one."
        </blockquote>
        <div className="text-sm text-brand-gray">
          – Head of Growth, Client Company
        </div>
        
        {/* Client Logos */}
        <div className="flex items-center space-x-8 pt-4">
          <div className="text-xs text-brand-gray uppercase tracking-wide">Trusted by:</div>
          <div className="flex items-center space-x-6">
            <div className="text-sm font-medium text-brand-gray">Chalo</div>
            <div className="text-sm font-medium text-brand-gray">Enphase Energy</div>
            <div className="text-sm font-medium text-brand-gray">Conscious Chemist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthAuditHero;