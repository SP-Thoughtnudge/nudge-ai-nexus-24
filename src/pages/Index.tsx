import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { ChevronRight, FileText, Shield, AlertTriangle, Users, Bell, Brain, Blocks, Server, Eye, ArrowRight } from "lucide-react";

const flowSteps = [
  { num: "01", label: "FNOL Intake", sub: "Capture", icon: FileText },
  { num: "02", label: "Coverage Check", sub: "Verify", icon: Shield },
  { num: "03", label: "Fraud Triage", sub: "Score", icon: AlertTriangle },
  { num: "04", label: "Adjuster Routing", sub: "Assign", icon: Users },
  { num: "05", label: "Notification", sub: "Update", icon: Bell },
];

const problemCards = [
  { stat: "45 min", title: "FNOL takes hours, not minutes", desc: "Rekeying data across 5 systems while the customer waits." },
  { stat: "60%", title: "Underwriters buried in admin", desc: "Spending most of their time on data gathering, not risk judgment." },
  { stat: "£Bn", title: "Preventable losses compound", desc: "Claims leakage, fraud, and manual errors cost carriers billions annually." },
];

const approachCards = [
  { title: "Read", desc: "Our agents parse emails, documents, PDFs, phone transcripts, and portal data across thousands of pages instantly.", icon: FileText },
  { title: "Reason", desc: "Powered by insurance-native language models trained on policy language, claims patterns, and regulatory frameworks.", icon: Brain },
  { title: "Act", desc: "Agents write back to your systems via API, navigate web portals, update records, trigger payments, and escalate to humans — exactly as your SOPs define.", icon: ArrowRight },
];

const modules = [
  { label: "FNOL", live: true },
  { label: "Fraud Triage", live: true },
  { label: "Coverage Verification", live: true },
  { label: "Adjuster Routing", live: true },
  { label: "Document Orchestration", live: true },
  { label: "Customer Comms", live: true },
  { label: "UW Intake", live: false },
  { label: "Policy Servicing", live: false },
];

const outcomeMetrics = [
  { value: "50%", label: "reduction in FNOL processing time" },
  { value: "30%+", label: "improvement in straight-through processing" },
  { value: "28%", label: "better fraud detection at intake" },
];

const featureTiles = [
  { title: "Insurance-Native LLMs", desc: "Our language models are trained on claims data, policy documents, ACORD forms, and regulatory frameworks. They understand coverage, exclusions, and jurisdiction — not just keywords.", icon: Brain },
  { title: "Component-Based Architecture", desc: "Assemble the agents your operation needs. Each component is pre-built, pre-trained, and interoperable. No custom development required to get started.", icon: Blocks },
  { title: "Flexible Deployment", desc: "Cloud, hybrid, or on-premise. ThoughtNudge integrates with Guidewire, Duck Creek, legacy policy admin systems, and custom stacks via APIs or direct system access.", icon: Server },
  { title: "Human-in-the-Loop", desc: "Sensitive decisions are never made unilaterally. Agents flag, verify, and escalate — with full audit trails for every action, built for FCA, GDPR, and NAIC compliance.", icon: Eye },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ThoughtNudge | Agentic AI for Insurance Operations</title>
        <meta name="description" content="ThoughtNudge deploys purpose-built agentic AI workflows across FNOL, underwriting, and policy servicing — integrated with your existing systems, live in 90 days." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight"
              >
                Your Insurance Operations.{" "}
                <span className="text-gradient">Run by AI.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                ThoughtNudge deploys purpose-built agentic AI workflows across FNOL, underwriting, and policy servicing — integrated with your existing systems, live in 90 days.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button asChild size="lg">
                  <Link to="/demo">Request a Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10">
                  <Link to="/product">See How It Works</Link>
                </Button>
              </motion.div>
            </div>

            {/* Flow Diagram */}
            <div className="mt-16 overflow-x-auto pb-4">
              <div className="flex items-center justify-center gap-2 md:gap-4 min-w-[700px] px-4">
                {flowSteps.map((step, i) => (
                  <Fragment key={i}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-1 rounded-lg bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative px-4 py-4 rounded-lg border border-border bg-card text-center min-w-[110px]">
                        <span className="block text-[10px] font-mono text-primary/70 mb-1.5">{step.num}</span>
                        <step.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                        <span className="block text-xs font-semibold text-foreground">{step.label}</span>
                        <span className="block text-[10px] text-muted-foreground mt-0.5">{step.sub}</span>
                      </div>
                    </motion.div>
                    {i < flowSteps.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                        className="flex items-center origin-left"
                      >
                        <div className="w-6 md:w-10 h-px bg-primary/30" />
                        <ChevronRight className="w-3 h-3 text-primary/40 -ml-1" />
                      </motion.div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-10 border-y border-border/50">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6">Trusted by carriers, MGAs, and Lloyd's syndicates</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {["Leading UK P&C Carrier", "Lloyd's Syndicate", "Regional MGA", "Specialty Lines Carrier"].map((name) => (
                <div key={name} className="px-6 py-3 rounded-md border border-border/50 bg-secondary/30 text-xs font-medium text-muted-foreground">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground text-center max-w-3xl mx-auto">
              Insurance operations weren't built for the pace of modern risk.
            </motion.h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {problemCards.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                  <span className="text-3xl font-bold text-primary">{card.stat}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Agents that think, act, and learn — inside your existing stack.
            </motion.h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {approachCards.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modular Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Start with FNOL. Expand from there.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                ThoughtNudge is modular. Deploy the FNOL agent first — see measurable results in 90 days. Then activate underwriting intake, policy servicing, fraud triage, or compliance reporting as your operations evolve.
              </p>
            </motion.div>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {modules.map((mod, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className={`px-4 py-2.5 rounded-md border text-sm font-medium ${mod.live ? "border-accent/30 bg-accent/5 text-accent" : "border-border bg-secondary/30 text-muted-foreground"}`}
                >
                  {mod.label}
                  <span className={`ml-2 text-[10px] font-mono uppercase ${mod.live ? "text-accent/70" : "text-muted-foreground/60"}`}>
                    {mod.live ? "Live" : "Soon"}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground">
              We don't sell licenses. We guarantee outcomes.
            </motion.h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {outcomeMetrics.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-lg border border-border bg-card">
                  <span className="text-4xl md:text-5xl font-extrabold text-gradient">{m.value}</span>
                  <p className="mt-3 text-sm text-muted-foreground">{m.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-muted-foreground max-w-2xl mx-auto">
              Every ThoughtNudge engagement starts with a 90-day pilot built around KPIs you define. If we don't hit them, you don't pay.
            </motion.p>
            <Button asChild variant="link" className="mt-4">
              <Link to="/product">See how the pilot works <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Built for insurance. Not retrofitted to it.
            </motion.h2>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {featureTiles.map((tile, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card group hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <tile.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{tile.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tile.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-foreground">
              See ThoughtNudge in action.
            </motion.h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Book a 30-minute demo. We'll show you live agents running on an insurance workflow — not slides.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/demo">Request a Demo</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
