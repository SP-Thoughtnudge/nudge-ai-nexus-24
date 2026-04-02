
const LogoCloud = () => {
  const companies = ['Cookd', 'Chalo', 'Enphase Energy', 'Conscious Chemist', 'Charmacy Milano', 'Sure Financials'];
  
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-brand-black">
            Trusted by innovative growth teams
          </p>
        </div>
        
        {/* Scrolling Logo Ticker */}
        <div className="flex items-center justify-between gap-8 mb-12">
          {/* Scrolling Company Names */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
              {/* Duplicate the array for seamless loop */}
              {[...companies, ...companies].map((company, index) => (
                <div 
                  key={`${company}-${index}`} 
                  className="flex-shrink-0 mx-6 h-12 px-6 bg-gray-50 rounded flex items-center justify-center border border-gray-100 grayscale hover:grayscale-0 transition-all duration-300 whitespace-nowrap"
                >
                  <span className="text-sm font-medium text-brand-gray">{company}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Metrics - Static on the right */}
          <div className="hidden lg:flex items-center space-x-8 pl-8 border-l border-gray-200">
            <div className="text-center">
              <p className="text-2xl font-bold text-brand-pink">2X</p>
              <p className="text-sm text-brand-gray">Revenue Lift</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-brand-orange">80%</p>
              <p className="text-sm text-brand-gray">Higher Conversion</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-brand-yellow">-45%</p>
              <p className="text-sm text-brand-gray">Offer Cost</p>
            </div>
          </div>
        </div>
        
        {/* Mobile Metrics */}
        <div className="grid grid-cols-3 gap-4 lg:hidden">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-xl font-bold text-brand-pink">2X</p>
            <p className="text-xs text-brand-gray">Revenue Lift</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-xl font-bold text-brand-orange">80%</p>
            <p className="text-xs text-brand-gray">Higher Conversion</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-xl font-bold text-brand-yellow">-45%</p>
            <p className="text-xs text-brand-gray">Offer Cost</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
