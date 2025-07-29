
import React from "react";

const IntegrationsCloud = () => {
  // Extended integration logos with categories
  const integrations = [
    { name: "Salesforce", category: "CRM" },
    { name: "Braze", category: "Marketing" },
    { name: "Segment", category: "CDP" },
    { name: "Twilio", category: "Messaging" },
    { name: "HubSpot", category: "Marketing" },
    { name: "Klaviyo", category: "Email" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Iterable", category: "Marketing" },
    { name: "Customer.io", category: "Marketing" },
    { name: "SendGrid", category: "Email" },
    { name: "OneSignal", category: "Push" },
    { name: "BigCommerce", category: "E-commerce" },
    { name: "Mailchimp", category: "Email" },
    { name: "Zendesk", category: "Support" },
    { name: "Stripe", category: "Payments" },
    { name: "Snowflake", category: "Data" },
    { name: "AWS", category: "Infrastructure" },
    { name: "Mixpanel", category: "Analytics" }
  ];
  
  // Group integrations by category
  const categories = {
    "CRM & Data": ["Salesforce", "Segment", "Snowflake", "AWS"],
    "Marketing & Engagement": ["Braze", "HubSpot", "Iterable", "Customer.io", "Klaviyo", "Mailchimp"],
    "Channels": ["Twilio", "SendGrid", "OneSignal"],
    "Commerce & Payments": ["Shopify", "BigCommerce", "Stripe"],
    "Analytics & Support": ["Mixpanel", "Zendesk"]
  };
  
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-brand-black mb-2">Our Integration Ecosystem</h3>
        <p className="text-gray-600">Thoughtnudge works seamlessly with your existing tech stack</p>
      </div>
      
      {/* Category-based layout for larger screens */}
      <div className="hidden md:block">
        {Object.entries(categories).map(([category, brandNames]) => (
          <div key={category} className="mb-8">
            <h4 className="text-sm font-medium text-gray-500 mb-3">{category}</h4>
            <div className="flex flex-wrap gap-4">
              {brandNames.map((name) => {
                const integration = integrations.find(i => i.name === name);
                return integration ? (
                  <div 
                    key={name} 
                    className="h-16 w-32 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
                  >
                    <div className="text-center">
                      <div className="font-medium text-sm">{integration.name}</div>
                      <div className="text-xs text-gray-500">{integration.category}</div>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* Simplified view for mobile */}
      <div className="md:hidden">
        <div className="flex flex-wrap justify-center gap-4">
          {integrations.slice(0, 9).map((integration, index) => (
            <div 
              key={index} 
              className="h-16 w-32 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm"
              style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
            >
              <div className="text-center">
                <div className="font-medium text-sm">{integration.name}</div>
                <div className="text-xs text-gray-500">{integration.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>And 50+ more platforms supported through our flexible API</p>
      </div>
      
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-brand-black mb-2">Unified Intelligence Layer</h4>
        <p className="text-sm text-gray-600">
          Thoughtnudge sits on top of your existing stack as a decision engine, connecting your data sources with your execution channels through a centralized AI brain.
        </p>
      </div>
    </div>
  );
};

export default IntegrationsCloud;
