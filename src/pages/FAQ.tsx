import React, { lazy, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LazySection from "@/components/ui/lazy-section";
import { updateSEOTags, addStructuredData } from "@/lib/seo";

const FAQ = () => {
  useEffect(() => {
    // SEO optimization
    updateSEOTags({
      title: "Frequently Asked Questions | Thoughtnudge AI Platform",
      description: "Get answers to common questions about Thoughtnudge's Autonomous Growth Agents, Agentic AI platform, reinforcement learning, and how we help businesses increase repeat purchases and customer lifetime value.",
      url: window.location.href,
      type: "website"
    });

    // Add FAQ page structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    addStructuredData(faqSchema, 'faq');
  }, []);

  const faqs = [
    {
      question: "What is Thoughtnudge?",
      answer: "Thoughtnudge is an Agentic AI platform for growth that deploys autonomous AI agents to drive repeat purchases, win back dormant customers, and maximize customer lifetime value (CLTV) for e-commerce, D2C brands, and digital apps. Unlike rule-based automation tools, Thoughtnudge is powered by reinforcement learning (RL), long-term agentic memory, and behavioral science models, allowing it to continuously learn what works for each customer and act in real time to deliver measurable business outcomes."
    },
    {
      question: "How is Thoughtnudge different from marketing automation platforms like Clevertap, MoEngage, or Braze?",
      answer: "Marketing automation platforms are toolkits for human teams—you design segments, build journeys, test rules, and optimize campaigns. The outcome is only as good as your team's time, skillset, and manual effort.\n\nThoughtnudge is outcome-driven AI:\n• You set the goal and guardrails, our agents do the rest autonomously.\n• The AI continuously learns, generates insights, and acts on them—removing the need for static journeys, rigid rules, and manual A/B tests.\n• Unlike channel-centric tools, Thoughtnudge agents operate customer-first and goal-first, coordinating across channels with persistent, contextual intelligence."
    },
    {
      question: "What exactly are Autonomous Growth Agents?",
      answer: "Think of them as virtual growth managers for each customer. Each agent continuously learns about an individual's behavior, preferences, and intent, then makes 1:1 decisions in real time:\n• What message to send\n• Which tone to use\n• What offer to give\n• When to engage\n• On which channel\n\nThey're not reactive bots or channel-specific assistants. They are long-term, memory-based agents that evolve with every interaction—driving continuous engagement, retention, and repeat revenue."
    },
    {
      question: "How does Thoughtnudge learn about customers?",
      answer: "Our platform blends reinforcement learning models, long-term contextual memory, and behavioral science principles.\n• Reinforcement learning ensures agents test, learn, and optimize actions at scale.\n• Contextual memory allows them to remember past actions, preferences, and outcomes, avoiding robotic, repetitive experiences.\n• Behavioral science enriches this with psychographic insights, so every nudge feels natural, persuasive, and context-aware."
    },
    {
      question: "What outcomes does Thoughtnudge deliver?",
      answer: "Unlike platforms that measure success in terms of campaign execution, Thoughtnudge delivers direct business outcomes:\n• Higher conversions through personalized, real-time nudges.\n• Increased repeat purchases by adapting to customer behavior over time.\n• Lower churn via intelligent win-back strategies for dormant users.\n• Greater operational efficiency by automating the entire decision-to-execution loop."
    },
    {
      question: "Why are existing approaches (segmentation, A/B testing, static journeys) insufficient?",
      answer: "Because they're built for humans, not machines. Segments, static workflows, and one-off A/B tests only scratch the surface of personalization. They:\n• Don't adapt in real time.\n• Fail to capture individual intent.\n• Require constant manual analysis and intervention.\n\nThoughtnudge eliminates this inefficiency. Its AI agents learn continuously at the individual level, enabling context-driven personalization that scales far beyond what static human-led processes can achieve."
    },
    {
      question: "Does Thoughtnudge replace existing tools?",
      answer: "No. Thoughtnudge is not a replacement—it's an AI brain layer that makes your stack smarter. We integrate seamlessly with systems like Shopify, Klaviyo, SendGrid, WhatsApp BSPs, Firebase, Snowflake, and Mixpanel. Your existing infrastructure continues working; our agents sit on top, adding decision intelligence, context, and autonomous execution."
    },
    {
      question: "Is Thoughtnudge just another LLM-based chatbot or virtual assistant?",
      answer: "No. While many new tools rely on LLMs, most are reactive and channel-bound. They answer questions but don't guide users toward business outcomes.\n\nThoughtnudge is built on:\n• Reinforcement learning for continuous optimization.\n• Agentic contextual memory for persistent intelligence across channels.\n• Outcome-first design that focuses on growth goals, not message delivery.\n\nThis makes our agents proactive, adaptive, and goal-driven—fundamentally different from reactive chatbots."
    },
    {
      question: "How fast can Thoughtnudge start delivering results?",
      answer: "Integration typically takes days, not months, thanks to our pre-built connectors for e-commerce and digital platforms. Most brands begin seeing measurable uplift in 2–3 weeks of deployment."
    },
    {
      question: "Is Thoughtnudge secure?",
      answer: "Yes. Security and trust are non-negotiable:\n• AES-256 encryption for data at rest and in motion.\n• Two-factor authentication for account security.\n• Advanced firewalls to prevent external threats.\n• Privacy by design—we work with your first-party data, ensuring compliance with GDPR, CCPA, and other standards."
    },
    {
      question: "What industries can Thoughtnudge serve best?",
      answer: "Our current focus is E-commerce and D2C brands where repeat purchase and retention are critical. We are also extending use cases for digital apps (subscriptions, loyalty, gaming, and travel)."
    },
    {
      question: "What kind of ROI can brands expect?",
      answer: "Our AI agents continuously optimize for higher conversions, improved retention, and reduced manual effort. Brands typically see double-digit uplift in repeat purchase rates and win-back conversions, along with significant savings in operational hours."
    },
    {
      question: "How does pricing work?",
      answer: "We offer flexible pricing models, typically based on customer scale and outcomes. Options include pilots, usage-based pricing, and performance-linked contracts—aligning our success with yours."
    },
    {
      question: "Why is Thoughtnudge the future of growth?",
      answer: "Because growth can no longer rely on human-built rules, segments, and static journeys. Customer behavior evolves every moment. Systems must evolve too.\n\nThoughtnudge represents a new paradigm—Autonomous Growth Agents:\n• Customer-first.\n• Goal-first.\n• Intelligence-first.\n• Always learning, always optimizing, always delivering outcomes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Thoughtnudge AI Platform</title>
        <meta 
          name="description" 
          content="Get answers to common questions about Thoughtnudge's Autonomous Growth Agents, Agentic AI platform, reinforcement learning, and how we help businesses increase repeat purchases and customer lifetime value." 
        />
        <meta name="keywords" content="thoughtnudge faq, agentic ai questions, autonomous growth agents, reinforcement learning marketing, customer lifetime value optimization" />
        <link rel="canonical" href={`${window.location.origin}/faq`} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Everything you need to know about Thoughtnudge's Autonomous Growth Agents, 
                  Agentic AI platform, and how we help businesses maximize customer lifetime value.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <LazySection>
            <section className="py-16 bg-gray-50/50">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="bg-white rounded-lg border border-gray-200 px-6"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline hover:text-brand-pink transition-colors py-6">
                          <h2>{faq.question}</h2>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                          <div className="whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </section>
          </LazySection>

          {/* CTA Section */}
          <LazySection>
            <section className="py-20 bg-gradient-to-br from-brand-pink/5 to-brand-orange/5">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Ready to Experience Autonomous Growth?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    See how Thoughtnudge's AI Growth Agents can increase repeat purchases, 
                    win back dormant customers, and maximize CLTV.
                  </p>
                  <Link to="/demo">
                    <Button size="lg" className="px-8 py-3 text-lg">
                      Request a Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </LazySection>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;