import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FileText, Shield, AlertTriangle, Users, Bell, Brain, Blocks, Server,
  Eye, Mail, Phone, Globe, Upload, Database, ArrowRight, Workflow,
  CheckCircle2, Clock, Lock
} from "lucide-react";

/* ── Architecture Layers ──────────────────────────────────────── */
const intakeChannels = [
  { label: "Email (FNOL / broker submissions)", icon: Mail },
  { label: "Phone (call transcripts via ASR)", icon: Phone },
  { label: "Web Portal & Mobile", icon: Globe },
  { label: "Document Upload (PDF, ACORD, images)", icon: Upload },
  { label: "API (system-to-system feeds)", icon: Database },
];

const coreAgents = [
  { label: "FNOL Intake Agent", detail: "Multi-channel loss capture" },
  { label: "Coverage Verification Agent", detail: "Policy terms + exclusions" },
  { label: "Fraud Triage Agent", detail: "Pattern + network scoring" },
  { label: "Complexity & Routing Agent", detail: "Severity + adjuster tier" },
  { label: "Document Orchestration Agent", detail: "Request, chase, index" },
  { label: "Customer Comms Agent", detail: "Status updates + queries" },
  { label: "UW Intake Agent", detail: "Submission enrichment" },
];

const systemsOfRecord = [
  "Guidewire ClaimCenter / PolicyCenter",
  "Duck Creek Claims / Policy",
  "Salesforce Financial Services Cloud",
  "Custom Policy Admin Systems",
  "Payment & Billing Platforms",
  "Imaging & Document Management",
  "SIU / Fraud Investigation Tools",
];

/* ── Agent Library ────────────────────────────────────────────── */
const agents = [
  { name: "FNOL Intake Agent", desc: "Captures and structures first notice of loss from any channel — email, phone, portal, or API. Extracts claimant details, loss circumstances, peril type, and policy reference.", input: "Call transcript / email / web form", output: "Structured claim record in your claims system", status: "Live" as const, icon: FileText },
  { name: "Coverage Verification Agent", desc: "Checks the claim against active policy terms, endorsements, exclusions, and sub-limits in real time. Flags coverage gaps and generates rationale.", input: "Claim details + policy schedule", output: "Coverage decision with cited clause references", status: "Live" as const, icon: Shield },
  { name: "Fraud Triage Agent", desc: "Scores fraud risk at point of intake using pattern matching, network graph analysis, and anomaly detection across historical claims.", input: "Claim data + claims history", output: "Fraud score + SIU referral recommendation", status: "Live" as const, icon: AlertTriangle },
  { name: "Complexity & Routing Agent", desc: "Classifies claim by severity, complexity, and line of business. Routes to the correct adjuster tier, desk, or straight-through processing path.", input: "Structured claim + coverage result", output: "Routing decision + initial reserve estimate", status: "Live" as const, icon: Users },
  { name: "Document Orchestration Agent", desc: "Identifies required documents (police reports, medical records, surveyor notes), requests them from third parties, chases outstanding items, and indexes on receipt.", input: "Claim file + document requirements", output: "Complete, indexed document set", status: "Live" as const, icon: FileText },
  { name: "Customer Comms Agent", desc: "Generates and sends proactive claim status updates. Handles routine inbound queries — 'where is my claim?' — via the claimant's preferred channel.", input: "Claim milestones + inbound messages", output: "Outbound comms + query resolution", status: "Live" as const, icon: Bell },
  { name: "UW Intake Agent", desc: "Structures and enriches incoming broker submissions. Extracts risk details, loss history, and exposure data. Pre-populates the underwriting memo.", input: "Broker submission email / slip", output: "Enriched risk summary + UW brief", status: "Coming Soon" as const, icon: Brain },
  { name: "Policy Servicing Agent", desc: "Handles endorsements, mid-term adjustments, renewal data validation, and audit workflow completion — at scale.", input: "Service request / renewal trigger", output: "Updated policy + documentation", status: "Coming Soon" as const, icon: Blocks },
  { name: "Compliance & Audit Agent", desc: "Generates AI decision audit trails, regulatory reporting packages, and compliance documentation for FCA, APRA, and NAIC frameworks.", input: "Agent actions log", output: "Compliance report + audit trail", status: "Coming Soon" as const, icon: Lock },
];

/* ── Onboarding ───────────────────────────────────────────────── */
const onboardingSteps = [
  { num: "01", title: "Discovery Sprint", time: "2–4 weeks", desc: "We audit your current claims or underwriting workflow. We map every handoff, system interaction, and decision point. We identify the top automation candidates and size the ROI.", icon: Eye },
  { num: "02", title: "SOP-to-Agent Conversion", time: "2–3 weeks", desc: "Your existing Standard Operating Procedures become Agent Operating Instructions. We encode your guidelines, your thresholds, your escalation rules. No workflow redesign required.", icon: Workflow },
  { num: "03", title: "Integration & Configuration", time: "2–4 weeks", desc: "We connect to your systems — Guidewire, Duck Creek, legacy PAS, imaging, payments — via API or direct access. Agents are configured to your rules, not generic defaults.", icon: Database },
  { num: "04", title: "90-Day Live Pilot", time: "90 days", desc: "One workflow, live in production, with KPIs tracked daily. Cycle time. STP rate. Fraud detection accuracy. You see measurable results before signing a full contract.", icon: CheckCircle2 },
];

/* ── Deployment ───────────────────────────────────────────────── */
const deployOptions = [
  { title: "Cloud (SaaS)", desc: "Fastest deployment. Hosted on secure cloud infrastructure. SOC 2 Type II certified. GDPR and APRA compliant. Best for carriers with cloud-ready claims platforms.", icon: Globe },
  { title: "Hybrid", desc: "Core agents run in the cloud. Claims data stays in your environment. Ideal for carriers with mixed on-prem/cloud infrastructure or data residency constraints.", icon: Server },
  { title: "On-Premise", desc: "Full deployment within your data centre or private cloud. Air-gapped options available. Best for carriers with strict data sovereignty, legacy mainframes, or regulatory mandates.", icon: Database },
];

type Filter = "All" | "Live" | "Coming Soon";

const Product = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? agents : agents.filter(a => a.status === filter);

  return (
    <>
      <Helmet>
        <title>Product | ThoughtNudge Agentic Operations Platform</title>
        <meta name="description" content="A modular platform of insurance-native AI agents. FNOL, coverage verification, fraud triage, underwriting intake — pre-built, configurable, and integrated with your systems." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">The Platform</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground">
              The Agentic Operations Platform for Insurance
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              A modular layer of insurance-native AI agents that sits above your existing systems of record, executes your workflows according to your SOPs, and improves with every task.
            </motion.p>
          </div>
        </section>

        {/* ═══ Architecture ═══ */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Architecture</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Three layers. One coherent system.</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Every claim, submission, or service request flows through three layers — intake, agent orchestration, and your systems of record.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Layer 1 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono text-primary/60">01</span>
                  <h3 className="text-lg font-bold text-foreground">Intake Channels</h3>
                </div>
                <div className="space-y-2.5">
                  {intakeChannels.map((ch, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <ch.icon className="w-4 h-4 text-primary/60 shrink-0" />
                      {ch.label}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Layer 2 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 rounded-lg border border-primary/20 bg-primary/5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono text-primary/60">02</span>
                  <h3 className="text-lg font-bold text-foreground">Agent Orchestration</h3>
                </div>
                <div className="space-y-2.5">
                  {coreAgents.map((agent, j) => (
                    <div key={j} className="flex items-center justify-between text-sm">
                      <span className="text-foreground font-medium">{agent.label}</span>
                      <span className="text-[10px] text-muted-foreground">{agent.detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Layer 3 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono text-primary/60">03</span>
                  <h3 className="text-lg font-bold text-foreground">Systems of Record</h3>
                </div>
                <div className="space-y-2.5">
                  {systemsOfRecord.map((sys, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Database className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                      {sys}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ Agent Library ═══ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Agent library</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Pre-built agents. Insurance-trained. Ready to deploy.</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Each agent has defined inputs, outputs, and decision boundaries. Assemble the ones your operation needs.</p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2">
              {(["All", "Live", "Coming Soon"] as Filter[]).map(f => (
                <button key={f} onClick={() => setFilter(f)} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-muted-foreground hover:text-foreground"}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((agent, i) => (
                <motion.div key={agent.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <agent.icon className="w-5 h-5 text-primary" />
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${agent.status === "Live" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
                      {agent.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">{agent.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{agent.desc}</p>
                  <div className="mt-4 space-y-1 text-xs text-muted-foreground border-t border-border pt-3">
                    <div><span className="font-medium text-foreground/70">In:</span> {agent.input}</div>
                    <div><span className="font-medium text-foreground/70">Out:</span> {agent.output}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Onboarding ═══ */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">SOP-to-Agent</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Bring your SOPs. We turn them into running agents.</h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">We don't ask you to redesign your workflows. We encode the ones you already have.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {onboardingSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-mono text-primary/60">{step.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  {step.time && <p className="text-xs text-primary mt-1 font-medium">{step.time}</p>}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Deployment ═══ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Deployment</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Deploy the way your security team needs.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {deployOptions.map((opt, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                  <opt.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground">{opt.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{opt.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">See the platform running on your workflow.</h2>
            <p className="mt-4 text-muted-foreground">30 minutes. Live agents. A real insurance workflow — not a slideshow.</p>
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

export default Product;
