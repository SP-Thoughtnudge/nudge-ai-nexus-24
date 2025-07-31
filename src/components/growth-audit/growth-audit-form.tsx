import React from "react";

const GrowthAuditForm = () => {
  return (
    <div className="w-full">
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
      ></iframe>
      <script>
        {`var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.head.appendChild(s);}`}
      </script>
    </div>
  );
};

export default GrowthAuditForm;