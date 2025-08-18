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
    // Enhanced SEO optimization for search engines and LLMs
    updateSEOTags({
      title: "AI Growth Platform FAQ | Thoughtnudge Autonomous Agents - Behavioral Science & Reinforcement Learning",
      description: "Comprehensive FAQ about Thoughtnudge's Agentic AI platform. Learn how autonomous growth agents use reinforcement learning, behavioral science, and contextual memory to increase repeat purchases, reduce churn, and maximize customer lifetime value for e-commerce and digital businesses.",
      url: window.location.href,
      type: "website"
    });

    // Enhanced FAQ page structured data for better search indexing
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "Thoughtnudge AI Growth Platform - Frequently Asked Questions",
      "description": "Comprehensive FAQ covering Thoughtnudge's Agentic AI platform, autonomous growth agents, reinforcement learning capabilities, and business outcomes for e-commerce and digital applications.",
      "url": window.location.href,
      "mainEntity": faqs.map((faq, index) => ({
        "@type": "Question",
        "@id": `#faq-${index + 1}`,
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
          "author": {
            "@type": "Organization",
            "name": "Thoughtnudge"
          }
        }
      }))
    };
    addStructuredData(faqSchema, 'faq');
  }, []);

  const faqs = [
    {
      question: "What is Thoughtnudge and how does Agentic AI work?",
      answer: "Thoughtnudge is an Agentic AI platform that deploys autonomous growth agents to drive repeat purchases, win back dormant customers, and maximize customer lifetime value (CLTV) for e-commerce, D2C brands, and digital applications. Our platform combines reinforcement learning (RL), long-term agentic memory, and behavioral science models to create AI agents that continuously learn what works for each individual customer and act autonomously in real-time. Unlike rule-based automation tools, Thoughtnudge's AI agents make intelligent decisions without human intervention, delivering measurable business outcomes through personalized customer engagement strategies."
    },
    {
      question: "How do Autonomous Growth Agents differ from traditional marketing automation?",
      answer: "Autonomous Growth Agents represent a paradigm shift from traditional marketing automation. While conventional tools require humans to design segments, build customer journeys, create rules, and manually optimize campaigns, Thoughtnudge's agents operate autonomously. You simply set business goals and guardrails, and our AI agents handle the rest. They continuously learn from customer interactions, generate actionable insights, and execute personalized strategies in real-time. This eliminates the need for static customer journeys, rigid segmentation rules, and manual A/B testing, while operating with a customer-first and goal-first approach across all channels with persistent, contextual intelligence."
    },
    {
      question: "What exactly are Autonomous Growth Agents and how do they work?",
      answer: "Think of Autonomous Growth Agents as dedicated virtual growth managers for each individual customer. Each agent continuously learns about a customer's behavior patterns, preferences, purchase history, and engagement intent, then makes personalized 1:1 decisions in real-time including: what message to send, which communication tone to use, what offers or incentives to provide, optimal timing for engagement, and which channel to use for maximum impact. These aren't reactive chatbots or channel-specific assistants. They are sophisticated, long-term, memory-based AI agents that evolve and improve with every customer interaction, driving continuous engagement, retention, and repeat revenue through intelligent behavioral adaptation."
    },
    {
      question: "How does Thoughtnudge's AI learn and adapt to customer behavior?",
      answer: "Our platform employs a sophisticated blend of reinforcement learning models, long-term contextual memory systems, and behavioral science principles. Reinforcement learning enables our agents to continuously test, learn, and optimize actions at scale across thousands of customer interactions simultaneously. Our contextual memory system allows agents to remember past actions, customer preferences, purchase history, and interaction outcomes, ensuring every engagement feels natural and personalized rather than robotic or repetitive. Behavioral science frameworks enrich this data with psychographic insights and persuasion principles, so every customer nudge feels contextually appropriate, persuasive, and aligned with individual customer psychology and motivation patterns."
    },
    {
      question: "What specific business outcomes does Thoughtnudge deliver?",
      answer: "Unlike platforms that measure success through campaign execution metrics, Thoughtnudge delivers direct, measurable business outcomes: Increased conversion rates through personalized, real-time customer nudges and behavioral triggers. Higher repeat purchase rates by continuously adapting to evolving customer behavior patterns and preferences. Reduced customer churn via intelligent win-back strategies that re-engage dormant users with personalized incentives. Improved customer lifetime value (CLTV) through optimized retention and upselling strategies. Enhanced operational efficiency by automating the entire decision-to-execution loop, freeing up human resources for strategic initiatives. Most clients see double-digit improvements in these key metrics within weeks of deployment."
    },
    {
      question: "Why are traditional segmentation and A/B testing approaches insufficient for modern growth?",
      answer: "Traditional approaches like customer segmentation, static workflows, and one-off A/B tests were designed for human-led marketing teams, not AI-powered systems. These methods have critical limitations: they don't adapt in real-time to changing customer behavior, fail to capture individual intent and micro-moments, require constant manual analysis and intervention, and only scratch the surface of true personalization possibilities. Thoughtnudge eliminates these inefficiencies through AI agents that learn continuously at the individual customer level, enabling context-driven personalization that scales far beyond what static, human-led processes can achieve. Our approach moves from broad segments to true 1:1 personalization, from periodic testing to continuous optimization, and from reactive responses to proactive customer engagement."
    },
    {
      question: "Does Thoughtnudge replace existing marketing tools and technology stack?",
      answer: "No, Thoughtnudge is designed as an intelligent AI brain layer that enhances your existing technology stack rather than replacing it. We integrate seamlessly with popular e-commerce and marketing platforms including Shopify, Klaviyo, SendGrid, WhatsApp Business APIs, Firebase, Snowflake, Mixpanel, Google Analytics, and 50+ other systems through pre-built connectors. Your existing infrastructure continues to function normally while our autonomous agents sit on top, adding decision intelligence, contextual understanding, and automated execution capabilities. This approach maximizes your current technology investments while dramatically improving their effectiveness through AI-powered optimization."
    },
    {
      question: "How is Thoughtnudge different from LLM-based chatbots and virtual assistants?",
      answer: "While many new AI tools rely primarily on Large Language Models (LLMs), most are reactive and channel-bound, designed to answer customer questions but not proactively guide users toward specific business outcomes. Thoughtnudge is fundamentally different, built on three core technologies: Reinforcement learning for continuous optimization and autonomous decision-making, Agentic contextual memory for persistent intelligence that spans across all customer touchpoints and channels, and Outcome-first design that focuses specifically on achieving growth goals rather than just message delivery or customer service. This makes our agents proactive rather than reactive, adaptive rather than static, and goal-driven rather than conversational, representing a fundamentally different approach to AI-powered customer engagement."
    },
    {
      question: "How quickly can businesses start seeing results with Thoughtnudge?",
      answer: "Integration with Thoughtnudge typically takes days rather than months, thanks to our extensive library of pre-built connectors for popular e-commerce platforms, marketing tools, and digital systems. Our streamlined onboarding process includes data integration, agent configuration, and goal setting. Most brands begin seeing measurable improvements in key metrics within 2–3 weeks of deployment, as our AI agents start learning from customer interactions immediately. The system's performance continues to improve over time as agents accumulate more interaction data and refine their understanding of individual customer preferences and behaviors."
    },
    {
      question: "How secure is Thoughtnudge and what about data privacy compliance?",
      answer: "Security and data privacy are fundamental to our platform design. We implement enterprise-grade security measures including: AES-256 encryption for all data at rest and in motion, Two-factor authentication and role-based access controls for account security, Advanced firewall protection and intrusion detection to prevent external threats, Privacy by design architecture ensuring we work exclusively with your first-party customer data. We maintain full compliance with GDPR, CCPA, and other major data protection regulations. Our platform is designed to enhance your customer relationships while maintaining the highest standards of data security and privacy protection."
    },
    {
      question: "Which industries and business types benefit most from Thoughtnudge?",
      answer: "Thoughtnudge is particularly effective for businesses where repeat purchases and customer retention are critical to success. Our primary focus areas include: E-commerce and D2C brands looking to increase repeat purchase rates, reduce cart abandonment, and maximize customer lifetime value. Digital applications including subscription services, loyalty programs, gaming platforms, and travel companies seeking to improve user engagement and retention. SaaS businesses wanting to reduce churn and increase product adoption. Any business model that depends on driving specific, measurable customer actions and long-term customer relationships can benefit from our autonomous growth agents."
    },
    {
      question: "What ROI and performance improvements can businesses expect?",
      answer: "Our autonomous AI agents continuously optimize for measurable business outcomes, with most clients experiencing significant improvements across key metrics. Typical results include: Double-digit increases in repeat purchase rates and customer retention, Substantial improvements in win-back conversion rates for dormant customers, Enhanced customer lifetime value through optimized engagement strategies, Significant reduction in manual marketing operations and associated labor costs. The exact ROI varies based on your baseline performance, industry, and specific business goals, but our outcome-focused approach ensures that improvements are directly tied to revenue growth and operational efficiency gains."
    },
    {
      question: "How does Thoughtnudge pricing work and what are the investment options?",
      answer: "We offer flexible pricing models designed to align our success with yours. Options include: Pilot programs for testing and validation, Usage-based pricing that scales with your business growth, Performance-linked contracts where our fees are tied to achieved outcomes and ROI. Pricing is typically based on customer scale, desired outcomes, and level of integration complexity. We believe in transparent, value-based pricing with no hidden fees, and all costs are clearly outlined in your custom proposal following our comprehensive growth audit and strategy session."
    },
    {
      question: "Why does Thoughtnudge represent the future of customer growth and engagement?",
      answer: "Modern customer growth can no longer rely on human-built rules, static customer segments, and predetermined journeys. Customer behavior, preferences, and market conditions evolve continuously, requiring systems that can adapt in real-time. Thoughtnudge represents a new paradigm of Autonomous Growth Agents that are: Customer-first in their approach, focusing on individual needs and preferences rather than broad segments, Goal-first in their execution, optimizing directly for business outcomes rather than activity metrics, Intelligence-first in their operation, using advanced AI to make decisions that humans simply cannot make at scale. Our agents are always learning from new data, always optimizing their strategies, and always delivering measurable outcomes, representing the evolution from reactive marketing to proactive, autonomous growth."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Growth Platform FAQ | Thoughtnudge Autonomous Agents - Behavioral Science & Reinforcement Learning</title>
        <meta 
          name="description" 
          content="Comprehensive FAQ about Thoughtnudge's Agentic AI platform. Learn how autonomous growth agents use reinforcement learning, behavioral science, and contextual memory to increase repeat purchases, reduce churn, and maximize customer lifetime value for e-commerce and digital businesses." 
        />
        <meta name="keywords" content="agentic ai faq, autonomous growth agents, reinforcement learning marketing, behavioral science ai, customer lifetime value optimization, ai personalization platform, contextual memory ai, intelligent customer engagement, ai growth platform, autonomous ai agents, machine learning customer retention" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="AI Growth Platform FAQ | Thoughtnudge Autonomous Agents" />
        <meta property="og:description" content="Comprehensive FAQ about Thoughtnudge's Agentic AI platform. Learn how autonomous growth agents use reinforcement learning and behavioral science to maximize customer lifetime value." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Growth Platform FAQ | Thoughtnudge Autonomous Agents" />
        <meta name="twitter:description" content="Learn how autonomous growth agents use reinforcement learning and behavioral science to increase repeat purchases and maximize CLTV." />
        <link rel="canonical" href={`${window.location.origin}/faq`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "Thoughtnudge AI Growth Platform - Frequently Asked Questions",
            "description": "Comprehensive FAQ covering Thoughtnudge's Agentic AI platform, autonomous growth agents, reinforcement learning capabilities, and business outcomes.",
            "url": window.location.href,
            "publisher": {
              "@type": "Organization",
              "name": "Thoughtnudge",
              "url": "https://thoughtnudge.com"
            },
            "mainEntity": faqs.map((faq, index) => ({
              "@type": "Question",
              "@id": `#faq-${index + 1}`,
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
                "author": {
                  "@type": "Organization",
                  "name": "Thoughtnudge"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  AI Growth Platform FAQ: Autonomous Agents & Behavioral Science
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Everything you need to know about Thoughtnudge's Autonomous Growth Agents, 
                  Agentic AI platform, reinforcement learning capabilities, and how we help businesses 
                  increase repeat purchases, reduce churn, and maximize customer lifetime value through 
                  behavioral science and contextual intelligence.
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
                          <h3 id={`faq-${index + 1}`}>{faq.question}</h3>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                          <div className="whitespace-pre-line prose prose-gray max-w-none">
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