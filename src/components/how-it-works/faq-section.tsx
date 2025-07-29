
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium text-brand-black">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-brand-orange flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 prose">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question: "How does Thoughtnudge differ from traditional personalization tools?",
      answer: "Traditional personalization tools require marketers to create rules, segments, and manually optimize campaigns. Thoughtnudge's agentic AI makes autonomous decisions for each individual customer in real-time, continuously learning and adapting without manual intervention. We move beyond segmentation to true 1:1 personalization."
    },
    {
      question: "Do I need a lot of data to get started with Thoughtnudge?",
      answer: "No. While Thoughtnudge can leverage your existing customer data, our platform is designed to learn by doing. It starts with basic information and quickly builds up its understanding through continuous experimentation and learning from each interaction. The more interactions, the smarter it gets."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients see meaningful improvements within the first 30 days. The system begins learning immediately upon implementation, and performance continues to improve over time as the AI gathers more data and refines its understanding of your customers."
    },
    {
      question: "Will I need to change my existing marketing tech stack?",
      answer: "No. Thoughtnudge is designed to integrate with your existing tech stack, enhancing rather than replacing your current tools. We have 50+ pre-built integrations with common marketing platforms, CDPs, and data systems, plus a flexible API for custom integrations."
    },
    {
      question: "How much control do I have over what the AI decides?",
      answer: "You maintain full control through goal-setting and guardrails. You define what success looks like (e.g., increase repeat purchases, boost retention) and set parameters for the AI to work within. You can also override decisions or adjust the balance between exploration and exploitation at any time."
    },
    {
      question: "Is Thoughtnudge a 'black box' AI system?",
      answer: "Not at all. Transparency is core to our platform. Thoughtnudge provides clear explanations for why specific decisions were made for each customer, giving you insights into the patterns and factors driving success. Our analytics dashboard shows you exactly how and why the AI is working."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about Thoughtnudge's autonomous AI platform.
            </p>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Have more questions? We're here to help.
            </p>
            <button className="text-brand-orange font-medium hover:underline">
              Contact our team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
