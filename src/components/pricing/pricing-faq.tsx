import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingFaq = () => {
  const faqs = [
    {
      question: "What is the typical ROI our clients see?",
      answer: "Our clients typically see a 15-40% increase in key revenue metrics within the first 3 months. The exact ROI depends on your baseline performance, industry, and specific goals. During our growth audit, we'll provide a realistic projection based on your current data."
    },
    {
      question: "Is there a one-time setup fee?",
      answer: "Setup and onboarding are included in your partnership investment. We believe in transparent pricing with no hidden fees. All costs are clearly outlined in your custom proposal following the growth audit."
    },
    {
      question: "What does the 'Growth Audit' involve?",
      answer: "Our growth audit is a comprehensive analysis of your current customer engagement strategy, data infrastructure, and growth opportunities. It typically takes 1-2 weeks and results in a detailed report with actionable recommendations and a custom implementation plan."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients begin seeing meaningful improvements within 2-4 weeks of launch. Our AI agents start learning immediately, but we typically see significant performance gains as the system accumulates more interaction data and optimizes its approach."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-black hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;