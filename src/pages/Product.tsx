import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FileText, Shield, AlertTriangle, Users, Bell, Brain, Blocks, Server,
  Eye, Mail, Phone, Globe, Upload, Database, ArrowRight, Check, Clock
} from "lucide-react";

const agents = [
  { name: "FNOL Intake Agent", desc: "Captures and structures first notice of loss from any channel.", input: "Call / email / form", output: "Structured claim record", status: "Live" as const, icon: FileText },
  { name: "Coverage Verification Agent", desc: "Checks claim against policy terms, endorsements, and exclusions.", input: "Claim + Policy", output: "Coverage decision + rationale", status: "Live" as const, icon: Shield },
  { name: "Fraud Triage Agent", desc: "Scores fraud risk at point of intake using network graph and pattern analysis.", input: "Claim data", output: "Fraud score + SIU flag", status: "Live" as const, icon: AlertTriangle },
  { name: "Complexity & Routing Agent", desc: "Classifies claim severity and routes to correct adjuster tier or STP path.", input: "Structured claim", output: "Routing decision + reserve estimate", status: "Live" as const, icon: Users },
  { name: "Document Orchestration Agent", desc: "Requests, chases, and indexes all required third-party documents.", input: "Claim file", output: "Complete document set", status: "Live" as const, icon: FileText },
  { name: "Customer Comms Agent", desc: "Sends proactive status updates and handles routine inbound queries.", input: "Claim milestones", output: "Outbound comms + query resolution", status: "Live" as const, icon: Bell },
  { name: "UW Intake Agent", desc: "Structures and enriches broker submissions for underwriter review.", input: "Submission email / form", output: "Enriched risk summary", status: "Coming Soon" as const, icon: Brain },
  { name: "Policy Servicing Agent", desc: "Handles endorsements, renewals, audits, and mid-term changes.", input: "Service request", output: "Updated policy + documentation", status: "Coming Soon" as const, icon: Blocks },
  { name: "Compliance & Audit Agent", desc: "Generates AI decision audit trails and regulatory reporting.", input: "Agent actions log", output: "Compliance report", status: "Coming Soon" as const, icon: Eye },
];

const onboardingSteps = [
  { num: "01", title: "Discovery Sprint", time: "2–4 weeks", desc: "We audit your current workflow, identify the top automation candidates, and size the ROI." },
  { num: "02", title: "SOP Conversion", time: "", desc: "Your existing Standard Operating Procedures become Agent Operating Instructions. No workflow redesign required." },
  { num: "03", title: "Integration & Configuration", time: "", desc: "We connect to your systems via API or direct access. Agents are configured to your guidelines, not generic defaults." },
  { num: "04", title: "90-Day Live Pilot", time: "", desc: "One workflow, live in production, with KPIs tracked daily. You see results before you sign a full contract." },
];

const deployOptions = [
  { title: "Cloud (SaaS)", desc: "Fastest deployment. Hosted on secure cloud infrastructure. SOC 2 Type II certified. GDPR compliant.", best: "Carriers with cloud-ready systems", icon: Globe },
  { title: "Hybrid", desc: "Core agents run in the cloud. Data stays in your environment. Ideal for mixed on-prem/cloud infrastructure.", best: "Mixed infrastructure carriers", icon: Server },
  { title: "On-Premise", desc: "Full deployment within your data centre. Air-gapped options available.", best: "Strict data residency requirements", icon: Database },
];

type Filter = "All" | "Live" | "Coming Soon";

const Product = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? agents : agents.filter(a => a.status === filter);

  return (
    <>
      <Helmet>
        <title>Product | ThoughtNudge Agentic Operations Platform</title>
        <meta name="description" content="A modular layer of AI agents that sits above your existing insurance systems, executes your workflows, and improves with every task." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground">
              The Agentic Operations Platform for Insurance
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              A modular layer of AI agents that sits above your existing systems, executes your workflows, and improves with every task.
            </motion.p>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Three layers. One coherent system.</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { title: "Layer 1 — Intake", items: ["Email", "Phone", "Web Portal", "Mobile", "Document Upload", "API"], icons: [Mail, Phone, Globe, Upload, FileText, Database] },
                { title: "Layer 2 — Agent Orchestration", items: ["FNOL Agent", "Coverage Agent", "Fraud Agent", "Routing Agent", "Document Agent", "Comms Agent"], icons: [FileText, Shield, AlertTriangle, Users, FileText, Bell] },
                { title: "Layer 3 — Systems of Record", items: ["Guidewire", "Duck Creek", "Salesforce", "Custom PAS", "Payment Systems", "SIU Tools"], icons: [Database, Server, Globe, Blocks, Database, Eye] },
              ].map((layer, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="text-lg font-bold text-foreground mb-4">{layer.title}</h3>
                  <div className="space-y-2.5">
                    {layer.items.map((item, j) => {
                      const Icon = layer.icons[j];
                      return (
                        <div key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Icon className="w-4 h-4 text-primary/60 shrink-0" />
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Library */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Pre-built agents, ready to deploy.</h2>
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
                  <p className="mt-1.5 text-sm text-muted-foreground">{agent.desc}</p>
                  <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                    <div><span className="font-medium text-foreground/70">In:</span> {agent.input}</div>
                    <div><span className="font-medium text-foreground/70">Out:</span> {agent.output}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Bring your SOPs. We handle the rest.</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {onboardingSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                  <span className="text-sm font-mono text-primary/60">{step.num}</span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
                  {step.time && <p className="text-xs text-primary mt-1">{step.time}</p>}
                  <p className="mt-3 text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Deploy the way your security team needs.</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {deployOptions.map((opt, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                  <opt.icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground">{opt.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{opt.desc}</p>
                  <p className="mt-4 text-xs text-primary/70 font-medium">Best for: {opt.best}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">See the platform in action.</h2>
            <p className="mt-4 text-muted-foreground">30 minutes. Live agents. Real insurance workflow.</p>
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
