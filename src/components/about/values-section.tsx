
import React from "react";
import { Brain, Target, Heart, Shield, Globe, BookOpen } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: <Target className="h-7 w-7 text-brand-pink" />,
      title: "Outcome-Obsessed",
      description: "Our success is measured only by the real-world results we drive for our clients. We are relentlessly focused on delivering measurable revenue impact."
    },
    {
      icon: <Brain className="h-7 w-7 text-brand-pink" />,
      title: "First-Principles Thinking",
      description: "We challenge industry assumptions. Instead of incremental improvements, we break down problems to their core and build fundamentally better solutions."
    },
    {
      icon: <Heart className="h-7 w-7 text-brand-pink" />,
      title: "Build with Empathy",
      description: "We build for the end customer. Our technology aims to create more relevant, respectful, and valuable interactions—transforming noise into meaningful communication."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            The Principles That Drive Our Innovation
          </h2>
          <p className="text-xl text-gray-600">
            The core values that define the company's innovation theme
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-black">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
