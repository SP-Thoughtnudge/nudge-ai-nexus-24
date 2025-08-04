export const ProofGrowthSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">
            The Proof is in the{" "}
            <span className="text-primary">Growth</span>
          </h2>
          
          {/* Testimonial Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 border border-gray-700/50">
            <div className="max-w-4xl mx-auto text-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                "Thoughtnudge didn't just lift our conversions by 80%; it fundamentally changed how we approach growth. We're more strategic, efficient, and profitable."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">Head of Growth</div>
                  <div className="text-gray-400">Cookd</div>
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