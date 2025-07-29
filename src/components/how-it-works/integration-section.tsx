
const IntegrationSection = () => {
  const integrationCategories = [
    {
      title: "Customer Data Platforms",
      platforms: ["Segment", "mParticle", "RudderStack", "Tealium"]
    },
    {
      title: "Marketing Automation",
      platforms: ["Braze", "Iterable", "Klaviyo", "Customer.io"]
    },
    {
      title: "CRM & ESP",
      platforms: ["Salesforce Marketing Cloud", "HubSpot", "Mailchimp", "SendGrid"]
    },
    {
      title: "Messaging & Channels",
      platforms: ["Twilio", "OneSignal", "Sendbird", "Firebase"]
    },
    {
      title: "E-Commerce",
      platforms: ["Shopify", "BigCommerce", "Magento", "WooCommerce"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Seamless Integration
          </h2>
          <p className="text-xl text-gray-600">
            Thoughtnudge works with your existing tech stack, enhancing your current tools with autonomous intelligence rather than replacing them.
          </p>
        </div>

        <div className="mb-12 relative">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-black mb-6">How Integration Works</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="h-12 w-12 flex items-center justify-center bg-brand-orange/20 text-brand-orange rounded-full text-lg font-bold">1</div>
                <h4 className="text-xl font-semibold text-brand-black">Connect Your Data</h4>
                <p className="text-gray-600">
                  Integrate with your CDP, data warehouse, or directly with your website/app to gather customer signals.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="h-12 w-12 flex items-center justify-center bg-brand-orange/20 text-brand-orange rounded-full text-lg font-bold">2</div>
                <h4 className="text-xl font-semibold text-brand-black">AI Processing Layer</h4>
                <p className="text-gray-600">
                  Our AI analyzes signals and makes autonomous decisions for each customer in real-time.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="h-12 w-12 flex items-center justify-center bg-brand-orange/20 text-brand-orange rounded-full text-lg font-bold">3</div>
                <h4 className="text-xl font-semibold text-brand-black">Activation Through Your Stack</h4>
                <p className="text-gray-600">
                  Decisions flow to your existing execution channels—email, SMS, push, on-site—through our API.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <div className="text-center">
                <p className="text-lg font-medium text-brand-black mb-4">Thoughtnudge integrates with 50+ platforms</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  {/* Placeholder for integration logos */}
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-12 bg-gray-200 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrationCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-brand-black mb-4">
                {category.title}
              </h4>
              <ul className="space-y-2">
                {category.platforms.map((platform, pIndex) => (
                  <li key={pIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                    <span>{platform}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 p-6 rounded-lg flex flex-col justify-center items-center text-center">
            <h4 className="text-lg font-semibold text-brand-black mb-2">
              Don't see your platform?
            </h4>
            <p className="text-gray-600 mb-4">
              Our flexible API means we can integrate with almost any system.
            </p>
            <button className="text-brand-orange font-medium hover:underline">
              Contact us to discuss
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
