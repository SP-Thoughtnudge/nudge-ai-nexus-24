
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudyPreview = () => {
  const caseStudies = [
    {
      industry: "E-Commerce",
      title: "How Brand X Increased Repeat Purchase Rate by 40%",
      metrics: [
        { label: "Increase in repeat purchases", value: "40%" },
        { label: "Reduction in campaign setup time", value: "70%" }
      ],
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=900"
    },
    {
      industry: "Travel",
      title: "Airline Boosts Ancillary Revenue with Personalized Recommendations",
      metrics: [
        { label: "Increase in ancillary bookings", value: "32%" },
        { label: "Higher customer satisfaction score", value: "+27 pts" }
      ],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=900"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Real-World Results
          </h2>
          <p className="text-xl text-gray-600">
            See how innovative companies are achieving breakthrough results with Thoughtnudge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((casestudy, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={casestudy.image} 
                  alt={casestudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-brand-orange">
                  {casestudy.industry}
                </span>
                <h3 className="text-xl font-bold text-brand-black mt-2 mb-4">
                  {casestudy.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {casestudy.metrics.map((metric, mIndex) => (
                    <div key={mIndex}>
                      <p className="text-2xl font-bold text-brand-black">
                        {metric.value}
                      </p>
                      <p className="text-sm text-gray-600">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center text-brand-orange font-medium hover:underline"
                >
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-lg text-brand-orange font-medium hover:underline"
          >
            View all case studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
