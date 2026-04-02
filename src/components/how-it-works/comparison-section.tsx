
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      traditional: "Static segments based on limited data points",
      thoughtnudge: "Individual-level understanding that adapts in real-time"
    },
    {
      traditional: "Manual A/B testing with slow iteration cycles",
      thoughtnudge: "Continuous experimentation across all variables simultaneously"
    },
    {
      traditional: "Rule-based journeys that become quickly outdated",
      thoughtnudge: "Dynamic experiences that evolve with each customer"
    },
    {
      traditional: "Campaign setup requiring significant manual effort",
      thoughtnudge: "Autonomous execution with minimal human intervention"
    },
    {
      traditional: "Surface-level personalization based on transactions",
      thoughtnudge: "Deep personalization based on psychographic insights"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Beyond Traditional Methods
          </h2>
          <p className="text-xl text-gray-600">
            See how Thoughtnudge's approach fundamentally changes what's possible in customer engagement.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px]">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-50 text-left text-lg font-medium text-gray-500">
                  Traditional Approach
                </th>
                <th className="py-4 px-6 bg-brand-orange/10 text-left text-lg font-medium text-brand-orange">
                  Thoughtnudge Approach
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((comparison, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-4 px-6 flex items-start">
                    <X className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{comparison.traditional}</span>
                  </td>
                  <td className="py-4 px-6 flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{comparison.thoughtnudge}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-black mb-4">
              Why This Matters
            </h3>
            <p className="text-gray-600 mb-8">
              Traditional approaches are fundamentally limited by their static nature and the human bandwidth required to manage them. Thoughtnudge removes these constraints, enabling true 1:1 personalization while reducing manual effort.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-brand-black">2-3x</p>
                <p className="text-gray-600">higher conversion rates</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-black">70%</p>
                <p className="text-gray-600">reduction in campaign setup time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-black">40%</p>
                <p className="text-gray-600">increase in customer retention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
