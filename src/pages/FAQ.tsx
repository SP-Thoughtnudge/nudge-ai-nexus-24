import React, { useEffect } from "react";
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
import LazySection from "@/components/ui/lazy-section";
import { updateSEOTags, addStructuredData } from "@/lib/seo";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Thoughtnudge?",
      answer: "Thoughtnudge is an AI decisioning system for FinTech activation. It learns what it takes to activate each individual user — based on their behavior, context, and responses — and then decides and executes the right next action automatically in real time. Instead of segments, static journeys, or A/B tests, Thoughtnudge operates at a 1:1 decision level, continuously learning from every user interaction."
    },
    {
      question: "What problem does Thoughtnudge solve?",
      answer: "Modern FinTechs have excellent data infrastructure — warehouses, events, dashboards — but data rarely turns into timely, individualized decisions. The real bottleneck is decisioning: What should we do for this user? Right now? To move them toward activation or revenue? Human teams cannot make these decisions in real time, at scale. So decisions get reduced to segments, rules, static onboarding flows, and delayed campaigns. Thoughtnudge closes this gap by turning data infrastructure into decision infrastructure."
    },
    {
      question: "What problems does Thoughtnudge solve for Fintech and BFSI companies?",
      answer: "Thoughtnudge addresses problems such as: low activation after onboarding or KYC, drop-offs across user journeys, ineffective personalization despite rich data, slow experimentation cycles, difficulty explaining or governing AI decisions, and fragmented experiences across channels. It turns fragmented signals into continuous, goal-driven decisioning."
    },
    {
      question: "Who is Thoughtnudge built for?",
      answer: "Thoughtnudge is built for FinTech product, growth, and lifecycle teams operating in high-stakes, digital-first environments, including: stock broking & trading platforms, neobanks & digital wallets, lending & credit platforms, wealth, mutual funds & investment apps, and insurance & embedded finance products. We focus on companies where users are identifiable, journeys are digital, feedback loops are fast, and activation and early engagement directly impact CLTV."
    },
    {
      question: "What does 'agentic AI' mean in Thoughtnudge's context?",
      answer: "Agentic AI means: the system has a goal, it can observe context and events, it can choose from approved actions, it can learn from outcomes, and it can explain its decisions. Thoughtnudge agents are goal-first, customer-first, and governance-aware."
    },
    {
      question: "What do you mean by 'Activation' in FinTech?",
      answer: "Activation means a user reaching a meaningful, value-creating milestone — not just signing up. Examples include: first trade placed, first card transaction, first investment, first loan application completed, or first meaningful feature usage. In FinTech, signup ≠ activation. 60–75% of users never reach this milestone — and once missed, lifetime value is permanently capped."
    },
    {
      question: "What business goals can Thoughtnudge optimize?",
      answer: "Initially, Thoughtnudge focuses on Fintech activation, such as: first meaningful transaction, feature adoption, and completion of onboarding steps. Over time, it expands across the full growth lifecycle, including: upsell and cross-sell, retention and engagement, reactivation, and in-app conversion optimization."
    },
    {
      question: "Does Thoughtnudge work across different Fintech sub-verticals?",
      answer: "Yes. Thoughtnudge is platform-level but supports deep vertical intelligence across: stock broking and trading, lending and BNPL, neobanks, insurance, and payments and wallets. Vertical depth is embedded in goal templates, behavioral signals, value proposition frameworks, and decision logic — not hard-coded workflows."
    },
    {
      question: "How is Thoughtnudge different from marketing automation tools?",
      answer: "Marketing automation tools execute human-defined rules, operate at segment level, depend on static journeys, and learn slowly through A/B tests. Thoughtnudge learns autonomously, decides at individual level, runs continuous micro-experiments, and adapts after every action or inaction. In simple terms: Marketing tools execute decisions. Thoughtnudge makes the decisions."
    },
    {
      question: "How is Thoughtnudge different from marketing automation or CRM platforms?",
      answer: "Traditional platforms execute predefined campaigns or rules, optimize at cohort or segment level, and require manual experimentation. Thoughtnudge optimizes explicit business goals, makes per-user decisions (not cohort rules), learns continuously using reinforcement learning, separates human approvals from AI decisions, and is built with governance and explainability by design. In short: They send messages. Thoughtnudge drives outcomes."
    },
    {
      question: "Is Thoughtnudge a CDP?",
      answer: "No. Thoughtnudge does not replace your CDP or data warehouse. We sit on top of your existing data stack (Snowflake, Databricks, event tools, CEPs) and use that data to learn and decide. CDPs answer: 'What happened?' Thoughtnudge answers: 'What should we do next — for this user?'"
    },
    {
      question: "What exactly does the AI learn?",
      answer: "Thoughtnudge learns what works for each individual, including: motivation (value-seeker, risk-averse, urgency-driven), behavioral patterns, sensitivity to incentives, response to timing and framing, channel preference, and emotional and contextual signals. This learning is continuous — every interaction, non-interaction, or context shift updates the model."
    },
    {
      question: "What decisions does Thoughtnudge make?",
      answer: "For each user and each moment, Thoughtnudge decides: what message or content to send, which value proposition to emphasize, whether to use an incentive (and how much), which channel to use (Push, Email, WhatsApp, In-app), when to act, how frequently to engage, and when not to engage. All decisions are made in service of a defined business goal (e.g., activation)."
    },
    {
      question: "Does Thoughtnudge execute actions or just recommend?",
      answer: "Thoughtnudge does both. It decides autonomously, executes via your existing channels, and learns from outcomes automatically. No dashboards to interpret. No manual journey updates. No weekly optimization cycles."
    },
    {
      question: "How does Thoughtnudge avoid hallucination or brand risk?",
      answer: "Thoughtnudge operates within explicit human-defined guardrails: approved message templates, approved offers and incentives, frequency caps, compliance constraints, and risk controls. Humans define the space of allowed strategies. The AI learns which combination works for which user. Think of it as a highly intelligent execution layer — not a free-running LLM."
    },
    {
      question: "Is the decisioning explainable?",
      answer: "Yes. Every decision can be traced back to: available options, user context and past behavior, and observed outcomes of similar decisions. Explainability dashboards are part of our roadmap, and underlying data is already available."
    },
    {
      question: "How fast does a customer see value?",
      answer: "Most customers see measurable impact within 2–4 weeks of going live. Because Thoughtnudge starts learning immediately, does not require long training cycles, and improves continuously from day one."
    },
    {
      question: "What kind of results have you seen so far?",
      answer: "Across pilots and production use cases: 32% to 120% uplift in core metrics, double-digit improvement vs rule-based systems, and faster activation and stronger early cohorts. Results depend on data quality, scale, and use case."
    },
    {
      question: "What data is required to get started?",
      answer: "Minimum requirements: ~20–25k identified users, behavioral or transactional signals, and a clear activation or growth goal. The more signals available, the faster learning improves."
    },
    {
      question: "Which tools and platforms do you integrate with?",
      answer: "Data & Events: Snowflake, Databricks, BigQuery, Redshift, Mixpanel, Appsflyer, and internal event pipelines. Execution: Braze, Clevertap, MoEngage, WhatsApp (Meta), Email, Push, and in-app surfaces."
    },
    {
      question: "Does Thoughtnudge support in-app personalization?",
      answer: "Yes. Thoughtnudge supports secure, real-time in-app experiences using: pre-approved UI surfaces (banners, cards, modals, widgets), client-side rendering for security, and parameterized content selection. The AI decides which surface to trigger, when, and for whom — never the UI itself."
    },
    {
      question: "How does learning happen inside Thoughtnudge?",
      answer: "Thoughtnudge uses deep reinforcement learning: each user interaction is a learning opportunity, the agent balances exploration and exploitation, learning happens at the individual level, and models adapt continuously as behavior changes. Learning is observable, explainable, and governed."
    },
    {
      question: "How is data handled?",
      answer: "Zero-copy integration with warehouses where possible. Encrypted data in transit and at rest. LGPD/GDPR compliant. Data residency aligned with cloud region (AWS)."
    },
    {
      question: "How does Thoughtnudge explain AI decisions?",
      answer: "Thoughtnudge provides multi-layer explainability: system-level observability (agent health), individual-level explainability showing what the AI learned about a user, why a specific action was chosen, and what alternatives were considered. Full decision timelines showing AI and user actions. This is designed for business teams, compliance teams, and regulators."
    },
    {
      question: "Is Thoughtnudge only for FinTech?",
      answer: "Today, yes — intentionally. FinTech is where decision quality matters most, margins are sensitive, and trust, risk, and timing are critical. The same decisioning system can extend to other regulated, digital-first industries — but our focus is depth, not breadth."
    },
    {
      question: "How is Thoughtnudge priced?",
      answer: "Typically priced on MAU / scale, aligned with value delivered. We also explore: pilot pricing, co-funded pilots, and outcome-aligned commercial models."
    },
    {
      question: "Is Thoughtnudge replacing human teams?",
      answer: "No. Thoughtnudge elevates human teams: Humans define strategy, constraints, and goals. AI handles continuous, real-time decision execution. Teams move from operators to strategists."
    },
    {
      question: "How is success measured?",
      answer: "Thoughtnudge measures: incremental uplift vs control, time-to-impact, risk-adjusted ROI, and outcome stability over time. Outcomes are shown separately from learning and decision logic to avoid metric pollution."
    },
    {
      question: "Why does this matter now?",
      answer: "Because: FinTech products are converging, acquisition costs are rising, margins are compressing, and personalization expectations are increasing. Decisioning — not data or channels — is now the competitive moat."
    },
    {
      question: "How does Thoughtnudge scale across multiple goals and products?",
      answer: "Thoughtnudge supports: multiple goals per organization, multiple agents per goal, shared learning surfaces, and expansion across products and journeys. The platform is designed to become the central growth intelligence layer."
    },
    {
      question: "What is Thoughtnudge's long-term vision?",
      answer: "Thoughtnudge aims to become the autonomous growth engine for BFSI — a system that understands customers deeply, makes better decisions than static rules, learns continuously, operates safely and transparently, and drives measurable business outcomes."
    },
    {
      question: "How does Thoughtnudge ensure privacy and compliance?",
      answer: "Thoughtnudge is built for regulated environments: explicit approval of learning variables, no autonomous content generation without approval, full audit trails of human and AI actions, individual-level decision explainability, and kill switches and guardrails at multiple layers. The AI operates within human-defined boundaries at all times."
    }
  ];

  useEffect(() => {
    updateSEOTags({
      title: "AI Decisioning for FinTech Activation FAQ | Thoughtnudge",
      description: "Comprehensive FAQ about Thoughtnudge's AI decisioning platform for FinTech activation. Learn how we help neobanks, trading platforms, lending apps, and BFSI enterprises activate users, drive engagement, and maximize lifetime value.",
      url: window.location.href,
      type: "website"
    });

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "Thoughtnudge AI Decisioning for FinTech - Frequently Asked Questions",
      "description": "Comprehensive FAQ covering Thoughtnudge's AI decisioning platform for FinTech activation, agentic AI, reinforcement learning, and business outcomes for BFSI enterprises.",
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

  return (
    <>
      <Helmet>
        <title>AI Decisioning for FinTech Activation FAQ | Thoughtnudge</title>
        <meta 
          name="description" 
          content="Comprehensive FAQ about Thoughtnudge's AI decisioning platform for FinTech activation. Learn how we help neobanks, trading platforms, lending apps, and BFSI enterprises activate users and maximize lifetime value." 
        />
        <meta name="keywords" content="fintech activation, ai decisioning, bfsi ai, neobank activation, trading platform engagement, reinforcement learning fintech, agentic ai, fintech personalization, user activation fintech, growth automation bfsi" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="AI Decisioning for FinTech Activation FAQ | Thoughtnudge" />
        <meta property="og:description" content="Learn how Thoughtnudge's AI decisioning platform helps FinTech and BFSI enterprises activate users, drive engagement, and maximize lifetime value." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Decisioning for FinTech Activation FAQ | Thoughtnudge" />
        <meta name="twitter:description" content="Learn how Thoughtnudge's AI decisioning platform helps FinTech and BFSI enterprises activate users and maximize lifetime value." />
        <link rel="canonical" href={`${window.location.origin}/faq`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "Thoughtnudge AI Decisioning for FinTech - Frequently Asked Questions",
            "description": "Comprehensive FAQ covering Thoughtnudge's AI decisioning platform for FinTech activation and BFSI enterprises.",
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

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  AI Decisioning for FinTech Activation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Everything you need to know about how Thoughtnudge helps FinTech and BFSI 
                  enterprises activate users, drive engagement, and maximize lifetime value 
                  through autonomous AI decisioning.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <LazySection>
            <section className="py-16 bg-muted/30">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="bg-background rounded-xl border border-border px-6 shadow-sm"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                          <h3 className="pr-4">{faq.question}</h3>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </section>
          </LazySection>

          {/* CTA Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Transform Your FinTech Activation?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  See how Thoughtnudge can help you activate more users, faster.
                </p>
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://calendly.com/thoughtnudge/30min" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
