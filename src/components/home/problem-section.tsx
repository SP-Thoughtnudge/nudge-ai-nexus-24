
const ProblemSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Your Biggest Revenue Opportunity is Right Under Your Nose
          </h2>
          <p className="text-xl text-gray-600">
            E-commerce D2C and Digital App Services are losing millions in untapped revenue from existing and dormant customers. Here's why your current approach is failing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">Manual Segmentation = Revenue Loss</h3>
              <p className="text-gray-600">
                You spend countless hours creating customer segments manually, only to find they don't convert because they're based on outdated behavioral data, not real-time psychographic insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">One-Size-Fits-All Offers</h3>
              <p className="text-gray-600">
                Your discount strategy is hemorrhaging money. You give 20% off to customers who would've bought at 5% off, while others need emotional nudges, not just price cuts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-black mb-3">Dormant Customers Stay Dormant</h3>
              <p className="text-gray-600">
                Your winback campaigns are generic blasts that feel spammy. You lack the behavioral science to understand why customers left and what emotional triggers will bring them back.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-yellow/30 to-brand-pink/20 rounded-full blur-3xl"></div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                What if AI could maximize revenue from every customer relationship?
              </h3>
              <p className="text-gray-600 mb-6">
                ThoughtNudge deploys autonomous growth agents that marry AI with behavioral science to understand each customer's psychographic profile, then delivers the perfect nudge (emotion, tone, copy, offer) at the perfect moment to drive upsells, cross-sells, and winbacks.
              </p>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
                  alt="AI decision making"
                  className="rounded-lg shadow-md max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
