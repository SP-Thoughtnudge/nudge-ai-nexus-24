export const ProofGrowthSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            The Proof is in the{" "}
            <span className="text-primary">Growth</span>
          </h2>
          
          {/* Compact Testimonial Card */}
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 border border-slate-700/40 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-6">
                "Thoughtnudge didn't just lift our conversions by 80%; it fundamentally changed how we approach growth. We're more strategic, efficient, and profitable."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white text-sm">Head of Growth</div>
                  <div className="text-slate-400 text-sm">Cookd</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                +210%
              </div>
              <div className="text-lg font-medium text-white mb-2">
                Dormant User Reactivation
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                -45%
              </div>
              <div className="text-lg font-medium text-white mb-2">
                Offer Cost
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                +180%
              </div>
              <div className="text-lg font-medium text-white mb-2">
                Revenue per Customer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};