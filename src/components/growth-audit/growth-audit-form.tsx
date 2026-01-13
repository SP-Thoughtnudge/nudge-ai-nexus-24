import React, { useEffect } from "react";

// Extend window type for Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const GrowthAuditForm = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // Initialize Tally embeds after script loads
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full" id="form">
      <div 
        className="p-6 border border-gray-200 rounded-xl shadow-sm"
        style={{
          padding: '24px',
          border: '1px solid #E2E8F0',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get Your Free Growth Audit</h3>
        <iframe
          data-tally-src="https://tally.so/embed/mOMq2M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Growth Audit Form"
          className="rounded-lg"
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
        ></iframe>
      </div>
    </div>
  );
};

export default GrowthAuditForm;