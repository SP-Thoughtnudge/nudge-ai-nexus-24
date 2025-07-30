
const LogoCloud = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-brand-black">
            Trusted by innovative growth teams
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">
          {['Cookd', 'Chalo', 'Enphase Energy', 'Conscious Chemist', 'Charmacy Milano', 'Sure Financials'].map((company) => (
            <div key={company} className="h-12 w-32 bg-gray-50 rounded flex items-center justify-center border border-gray-100">
              <span className="text-sm font-medium text-brand-gray">{company}</span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-8 border-t border-gray-100 pt-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-3xl font-bold text-brand-pink mb-2">93%</p>
            <p className="text-brand-gray">increase in customer engagement</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-3xl font-bold text-brand-orange mb-2">2.4x</p>
            <p className="text-brand-gray">higher conversion rates</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-3xl font-bold text-brand-yellow mb-2">60%</p>
            <p className="text-brand-gray">reduction in campaign setup time</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-3xl font-bold text-brand-pink mb-2">85%</p>
            <p className="text-brand-gray">of users report higher ROI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
