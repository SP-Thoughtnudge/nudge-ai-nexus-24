
const LogoCloud = () => {
  const companies = [
    { name: 'Cookd', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&auto=format' },
    { name: 'Chalo', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop&auto=format' },
    { name: 'Enphase Energy', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&auto=format' },
    { name: 'Conscious Chemist', image: 'https://images.unsplash.com/photo-1498050108023-0fd70327578a?w=200&h=100&fit=crop&auto=format' },
    { name: 'Charmacy Milano', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format' },
    { name: 'Sure Financials', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop&auto=format' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  const metrics = [
    { value: '2X', label: 'Revenue Lift' },
    { value: '80%', label: 'Higher Conversion' },
    { value: '-45%', label: 'Offer Cost' }
  ];

  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-foreground">
            Trusted by innovative growth teams
          </p>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-8">
          {/* Scrolling Logo Ticker */}
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center">
              <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
                {duplicatedCompanies.map((company, index) => (
                  <div 
                    key={`${company.name}-${index}`}
                    className="flex-shrink-0 mx-8 group"
                  >
                    <img
                      src={company.image}
                      alt={`${company.name} logo`}
                      className="h-12 w-auto object-contain filter grayscale group-hover:filter-none transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="h-16 w-px bg-border"></div>

          {/* Key Metrics */}
          <div className="flex gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Scrolling Logo Ticker */}
          <div className="overflow-hidden mb-8">
            <div className="flex animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]">
              {duplicatedCompanies.map((company, index) => (
                <div 
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 mx-6 group"
                >
                  <img
                    src={company.image}
                    alt={`${company.name} logo`}
                    className="h-10 w-auto object-contain filter grayscale group-hover:filter-none transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {metrics.map((metric, index) => (
              <div key={index} className="py-4">
                <p className="text-xl font-bold text-primary mb-1">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
