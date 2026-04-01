import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fragment } from "react";
import {
  ChevronRight, FileText, Shield, AlertTriangle, Users, Bell, Brain,
  Blocks, Server, Eye, ArrowRight, Zap, BarChart3, Clock, CheckCircle2,
  Workflow, Database, Lock, TrendingUp
} from "lucide-react";

/* ── Hero Flow Steps ─────────────────────────────────────────── */
const flowSteps = [
  { num: "01", label: "FNOL Intake", sub: "Multi-channel capture", icon: FileText },
  { num: "02", label: "Coverage Check", sub: "Policy terms & exclusions", icon: Shield },
  { num: "03", label: "Fraud Triage", sub: "Pattern & network scoring", icon: AlertTriangle },
  { num: "04", label: "Reserve & Routing", sub: "Severity + adjuster tier", icon: Users },
  { num: "05", label: "Customer Comms", sub: "Proactive status updates", icon: Bell },
];

/* ── Problem Cards ────────────────────────────────────────────── */
const problemCards = [
  {
    stat: "45 min",
    title: "FNOL is still a manual process",
    desc: "Handlers rekey data across claims admin, policy systems, fraud tools, and imaging platforms — while the claimant waits on the line.",
    icon: Clock,
  },
  {
    stat: "60%",
    title: "Underwriters spend time on admin, not risk",
    desc: "Broker submissions arrive as unstructured emails and attachments. Underwriters spend hours assembling data before they can begin assessing risk.",
    icon: BarChart3,
  },
  {
    stat: "£4.6Bn",
    title: "Leakage, fraud, and rework compound",
    desc: "Manual errors in coverage verification, inconsistent reserving, and delayed fraud detection cost the UK P&C market billions every year.",
    icon: TrendingUp,
  },
];

/* ── Read-Reason-Act ──────────────────────────────────────────── */
const approachCards = [
  {
    title: "Read",
    desc: "Agents ingest loss reports, broker submissions, policy schedules, medical reports, surveyor notes, and ACORD forms — extracting structured data from thousands of pages in seconds.",
    icon: FileText,
    detail: "Email, phone transcript, portal, PDF, handwritten notes"
  },
  {
    title: "Reason",
    desc: "Insurance-native language models trained on policy wordings, claims patterns, coverage law, and regulatory frameworks. They understand peril codes, exclusion clauses, and jurisdictional nuance — not just keywords.",
    icon: Brain,
    detail: "Coverage logic, fraud indicators, reserve methodology"
  },
  {
    title: "Act",
    desc: "Agents write back to Guidewire, Duck Creek, or your legacy PAS via API or direct system navigation. They trigger payments, update reserves, generate correspondence, and escalate to humans — exactly as your SOPs define.",
    icon: ArrowRight,
    detail: "System updates, payments, escalations, audit logs"
  },
];

/* ── Modules ──────────────────────────────────────────────────── */
const modules = [
  { label: "FNOL Intake", live: true, desc: "Multi-channel first notice capture and structuring" },
  { label: "Coverage Verification", live: true, desc: "Policy terms, endorsements, exclusions check" },
  { label: "Fraud Triage", live: true, desc: "Real-time fraud scoring at point of intake" },
  { label: "Adjuster Routing", live: true, desc: "Severity classification and tier assignment" },
  { label: "Document Orchestration", live: true, desc: "Third-party document request, chase, and indexing" },
  { label: "Customer Comms", live: true, desc: "Proactive updates and inbound query handling" },
  { label: "UW Intake", live: false, desc: "Broker submission structuring and enrichment" },
  { label: "Policy Servicing", live: false, desc: "Endorsements, renewals, mid-term changes" },
  { label: "Compliance & Audit", live: false, desc: "AI decision trails and regulatory reporting" },
];

/* ── Outcome Metrics ──────────────────────────────────────────── */
const outcomeMetrics = [
  { value: "50%", label: "reduction in FNOL cycle time", context: "From intake to adjuster assignment" },
  { value: "30%+", label: "improvement in straight-through processing", context: "Low-complexity claims auto-resolved" },
  { value: "28%", label: "better fraud detection at intake", context: "Identified before claim enters workflow" },
];

/* ── Feature Tiles ────────────────────────────────────────────── */
const featureTiles = [
  {
    title: "Insurance-Native Language Models",
    desc: "Trained on claims data, policy documents, ACORD forms, Lloyd's market wordings, and regulatory frameworks. They parse coverage schedules, understand excess layers, and interpret jurisdiction-specific exclusion clauses.",
    icon: Brain,
  },
  {
    title: "Component-Based Agent Architecture",
    desc: "Each agent is a self-contained unit with defined inputs, outputs, and decision boundaries. Assemble the agents your operation needs — FNOL today, underwriting next quarter. No monolithic deployment.",
    icon: Blocks,
  },
  {
    title: "Deploy on Your Terms",
    desc: "Cloud, hybrid, or fully on-premise. ThoughtNudge connects to Guidewire ClaimCenter, Duck Creek, custom policy admin systems, and legacy mainframes via API, direct DB access, or UI automation.",
    icon: Server,
  },
  {
    title: "Human-in-the-Loop, Always",
    desc: "Every coverage decision, every fraud flag, every reserve recommendation is presented to your team for verification. Full audit trail on every agent action — built for FCA, APRA, GDPR, and NAIC compliance.",
    icon: Eye,
  },
];

/* ── Team Tiles (from Why TN) ──────────────────────────────────── */
const teamCredentials = [
  { icon: Shield, years: "25+", area: "Insurance Operations", desc: "Claims leadership, underwriting management, and product at major UK and Australian carriers. We've run the workflows we're automating." },
  { icon: Brain, years: "12+", area: "AI/ML Engineering", desc: "Production machine learning systems at scale — NLP, document understanding, and decision automation in regulated industries." },
  { icon: Blocks, years: "15+", area: "Enterprise Product & GTM", desc: "Taking complex technology into regulated markets. Enterprise sales, implementation, and carrier onboarding." },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ThoughtNudge | Agentic AI for Insurance Operations</title>
        <meta name="description" content="Purpose-built agentic AI workflows for FNOL, underwriting, and policy servicing. Integrated with your existing systems. Live in 90 days. Outcome-guaranteed." />
      </Helmet>
      <Navbar />
      <main>
        {/* ═══ Hero ═══ */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary mb-6">
                  <Zap className="w-3 h-3" /> Agentic AI for Insurance Operations
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.08]"
              >
                Your claims workflow.{" "}
                <span className="text-gradient">Run by AI agents.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                ThoughtNudge deploys insurance-native AI agents across FNOL, coverage verification, fraud triage, and adjuster routing — integrated with Guidewire, Duck Creek, or your legacy stack. Live in 90 days. Outcomes guaranteed.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
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
              <div className="flex items-center justify-center gap-2 md:gap-3 min-w-[750px] px-4">
                {flowSteps.map((step, i) => (
                  <Fragment key={i}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-1 rounded-lg bg-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative px-3 py-4 rounded-lg border border-border bg-card text-center min-w-[120px]">
                        <span className="block text-[10px] font-mono text-primary/70 mb-1.5">{step.num}</span>
                        <step.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                        <span className="block text-xs font-semibold text-foreground">{step.label}</span>
                        <span className="block text-[10px] text-muted-foreground mt-0.5 leading-tight">{step.sub}</span>
                      </div>
                    </motion.div>
                    {i < flowSteps.length - 1 && (
                      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }} className="flex items-center origin-left">
                        <div className="w-6 md:w-8 h-px bg-primary/30" />
                        <ChevronRight className="w-3 h-3 text-primary/40 -ml-1" />
                      </motion.div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ Social Proof ═══ */}
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

        {/* ═══ The Problem ═══ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">The problem</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Insurance operations weren't designed for the pace of modern risk.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Claims handlers, underwriters, and operations teams are buried in manual processes that haven't fundamentally changed in two decades.
              </p>
            </motion.div>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {problemCards.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{card.stat}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Read → Reason → Act ═══ */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">How it works</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Agents that read, reason, and act — inside your existing stack.
              </h2>
            </motion.div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {approachCards.map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center">{card.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center">{card.desc}</p>
                  <p className="mt-3 text-[11px] font-mono text-primary/60 text-center">{card.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Modular Expansion ═══ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Modular platform</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Start with FNOL. Expand across the operation.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Deploy the FNOL agent first — see measurable results in 90 days. Then activate underwriting intake, policy servicing, fraud triage, or compliance reporting. Each agent is pre-trained on insurance workflows and connects to the ones before and after it.
              </p>
            </motion.div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {modules.map((mod, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className={`px-4 py-3 rounded-lg border text-left ${mod.live ? "border-accent/20 bg-accent/5" : "border-border bg-secondary/20"}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-semibold ${mod.live ? "text-foreground" : "text-muted-foreground"}`}>{mod.label}</span>
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${mod.live ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground/60"}`}>
                      {mod.live ? "Live" : "Soon"}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{mod.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Outcomes ═══ */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Outcome-based model</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">We guarantee outcomes. Not software licenses.</h2>
            </motion.div>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {outcomeMetrics.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-lg border border-border bg-card">
                  <span className="text-4xl md:text-5xl font-extrabold text-gradient">{m.value}</span>
                  <p className="mt-3 text-base font-semibold text-foreground">{m.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.context}</p>
                </motion.div>
              ))}
            </div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-muted-foreground max-w-2xl mx-auto">
              Every engagement starts with a 90-day pilot built around KPIs you define — cycle time, STP rate, fraud detection accuracy. If we don't hit them, you don't pay.
            </motion.p>
            <Button asChild variant="link" className="mt-4 text-primary">
              <Link to="/product">See how the pilot works <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>

        {/* ═══ Built for Insurance ═══ */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Platform depth</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Built for insurance. Not retrofitted to it.</h2>
            </motion.div>
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

        {/* ═══ Built by Insurance Operators ═══ */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Our team</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Built by people who've lived through insurance operations — not just studied them.
              </h2>
              <p className="mt-4 text-muted-foreground">
                ThoughtNudge was founded by operators who've run claims floors, managed underwriting books, and built production AI systems inside carriers. We automate what we've done ourselves.
              </p>
            </motion.div>
            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {teamCredentials.map((cred, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <cred.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-foreground">{cred.years}</span>
                      <span className="block text-xs text-primary font-medium">{cred.area}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cred.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Footer CTA ═══ */}
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
