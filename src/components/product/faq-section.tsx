
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How does Thoughtnudge differ from traditional AI personalization tools?",
      answer: "Traditional AI personalization tools typically analyze customer data to make predictions or recommendations, but they don't take autonomous actions. Thoughtnudge's agentic AI not only analyzes data but makes decisions, executes actions, and learns from outcomes for each individual customer. Instead of just recommending what might work, our AI actively experiments, adapts, and optimizes the entire customer journey in real-time."
    },
    {
      question: "How long does it take to implement Thoughtnudge?",
      answer: "Most customers are up and running within 2-4 weeks. The implementation process includes integrating with your data sources, connecting to your execution channels, and setting up your first autonomous agents. Our team handles most of the technical work, and you don't need to replace any of your existing marketing technology stack."
    },
    {
      question: "Does Thoughtnudge replace our existing marketing tools?",
      answer: "No, Thoughtnudge complements your existing tools rather than replacing them. It sits as an intelligence layer on top of your current stack, connecting to your data sources (CDPs, CRMs, etc.) and execution channels (email, SMS, web, etc.). This means you can enhance your current investments rather than ripping and replacing."
    },
    {
      question: "How does the pricing model work?",
      answer: "Thoughtnudge is priced based on the number of active customers you're engaging with our AI. We offer tiered plans starting from mid-market to enterprise levels, with pricing that scales with your usage. Most customers see ROI within the first 3 months, as the increased conversion rates and reduced manual work quickly offset the investment."
    },
    {
      question: "What kind of data do I need to get started?",
      answer: "To get started, you need basic customer profile data and behavioral data (such as purchase history, website interactions, or app usage). The more data you have, the better the AI can personalize experiences, but we can start with what you have and expand over time. We support integration with all major data platforms and can work with both structured and unstructured data."
    },
    {
      question: "How do I maintain control over what the AI does?",
      answer: "Thoughtnudge gives you complete control through a system of goals and guardrails. You set the business objectives, define constraints (like messaging frequency or budget limits), and provide the content and offers the AI can use. The AI handles the complex decisions of what to send to whom, when, and through which channel—but always within your defined parameters and with full transparency."
    },
    {
      question: "Is Thoughtnudge compliant with privacy regulations like GDPR and CCPA?",
      answer: "Yes, Thoughtnudge is designed with privacy compliance as a core principle. We support all major privacy regulations including GDPR, CCPA, and others. Our platform includes features for consent management, data minimization, and the right to be forgotten. We also provide detailed audit trails for all AI decisions to ensure transparency and accountability."
    },
    {
      question: "Can I see Thoughtnudge's decision-making process?",
      answer: "Absolutely. Unlike black-box AI, Thoughtnudge provides complete transparency into why each decision was made. Our dashboard shows you what the AI is learning about each customer, what experiments it's running, and why it made specific decisions. This transparency helps you understand your customers better while maintaining control and trust in the AI's actions."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about Thoughtnudge and autonomous AI for customer engagement
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left text-brand-black hover:text-brand-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? <a href="/contact" className="text-brand-orange hover:underline">Contact our team</a> for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
