
const LogoCloud = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold text-brand-black">
            Trusted by the fastest-growing brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center mb-12">
          <div className="h-16 w-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/fdb6b5c4-d2a2-4941-9ddb-e83a7a3c1405.png" 
              alt="Cookd logo" 
              className="max-h-12 max-w-28 object-contain"
            />
          </div>
          <div className="h-16 w-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/d272b1ae-7a4c-4930-bbac-a1129eb9995d.png" 
              alt="Conscious Chemist logo" 
              className="max-h-12 max-w-28 object-contain"
            />
          </div>
          <div className="h-16 w-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/8c669d46-6964-4055-8e6e-20f3bc765de7.png" 
              alt="Enphase Energy logo" 
              className="max-h-12 max-w-28 object-contain"
            />
          </div>
          <div className="h-16 w-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/a07ecbd6-7550-4580-960f-ed75258bcd48.png" 
              alt="Sure Financials logo" 
              className="max-h-12 max-w-28 object-contain"
            />
          </div>
          <div className="h-16 w-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/32b33b09-d96e-4958-84cb-ff8e964decb2.png" 
              alt="Charmacy Milano logo" 
              className="max-h-12 max-w-28 object-contain"
            />
          </div>
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
