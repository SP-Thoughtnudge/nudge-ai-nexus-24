
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Step = ({ number, title, description, imageUrl, isReversed = false }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 lg:gap-16 items-center py-12 border-b border-gray-100 last:border-0`}>
      <div className="w-full md:w-1/2 space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-yellow text-brand-black font-bold text-xl">
          {number}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-black">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
      <div className="w-full md:w-1/2">
        <div className="rounded-xl overflow-hidden shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-pink/10 mix-blend-overlay"></div>
          <img src={imageUrl} alt={title} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Input Signals",
      description: "Thoughtnudge collects and processes customer signals from behavior, clicks, journey stage, and psychographic profiles to build a comprehensive understanding of each user.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=900"
    },
    {
      number: "2",
      title: "AI Decisioning Layer",
      description: "Our reinforcement learning model analyzes these signals through our proprietary Neuronudge Framework to determine the optimal next action for each individual customer.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=900",
      isReversed: true
    },
    {
      number: "3",
      title: "Execution",
      description: "The AI autonomously sends the optimized message, offer, or content through the most effective channel at the perfect time with the right frequency for maximum impact.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=900"
    },
    {
      number: "4",
      title: "Outcomes Optimized",
      description: "The system continuously learns and improves, optimizing for your business goals—whether that's repeat purchases, upsells, cross-sells, or improved retention.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=900",
      isReversed: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            How Thoughtnudge Works
          </h2>
          <p className="text-xl text-gray-600">
            Our platform uses advanced AI to deliver the right message to the right person at the right time—without requiring endless rules or manual work.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              imageUrl={step.imageUrl}
              isReversed={step.isReversed}
            />
          ))}
        </div>

        <div className="mt-16 text-center flex justify-center space-x-8">
          <Link 
            to="/how-it-works" 
            className="inline-flex items-center text-brand-orange hover:text-brand-orange/80 font-medium"
          >
            <span>See how it works in detail</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          
          <Link 
            to="/product" 
            className="inline-flex items-center text-brand-pink hover:text-brand-pink/80 font-medium"
          >
            <span>Explore our product features</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
