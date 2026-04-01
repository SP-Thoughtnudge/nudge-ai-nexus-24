import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ArrowRight, Clock, Shield, AlertTriangle, Users, FileText,
  Brain, Blocks, CheckCircle2, XCircle, Zap, BarChart3
} from "lucide-react";

/* ── FNOL Data ────────────────────────────────────────────────── */
const fnolWorkflow = [
  { step: "Loss reported", before: "Handler manually enters data into claims system", after: "Agent captures from any channel and auto-populates claim" },
  { step: "Policy lookup", before: "Handler searches PAS, cross-references endorsements", after: "Agent verifies coverage, checks exclusions and sub-limits instantly" },
  { step: "Fraud check", before: "Referred to SIU days later — if flagged at all", after: "Agent scores fraud risk in real time using pattern + network analysis" },
  { step: "Complexity assessment", before: "Senior handler manually reviews and assigns", after: "Agent classifies severity, sets initial reserve, routes to correct tier" },
  { step: "Documents requested", before: "Handler sends manual chase letters", after: "Agent identifies required docs, sends requests, tracks and chases" },
  { step: "Customer notified", before: "Customer calls in to ask for status", after: "Agent sends proactive updates via claimant's preferred channel" },
];

const fnolMetrics = [
  { value: "80%", label: "reduction in FNOL processing time", icon: Clock },
  { value: "Real-time", label: "fraud scoring at point of intake", icon: AlertTriangle },
  { value: "Seconds", label: "to verify coverage against policy terms", icon: Shield },
  { value: "Automatic", label: "adjuster assignment based on severity + expertise", icon: Users },
];

/* ── UW Data ──────────────────────────────────────────────────── */
const uwCapabilities = [
  { title: "Submission Intake & Structuring", desc: "Broker submissions arrive as unstructured emails with attachments. Our agent extracts risk details, loss history, exposure data, and policy requirements — creating a structured submission record.", icon: FileText },
  { title: "Automated Risk Data Assembly", desc: "The agent pulls supplementary data from loss runs, CAT models, industry databases, and public records — assembling the complete risk picture in minutes, not hours.", icon: BarChart3 },
  { title: "Pre-Populated Underwriting Memo", desc: "Underwriters receive a complete brief: risk summary, comparable loss experience, pricing benchmarks, and flagged concerns. Ready for judgment, not data gathering.", icon: Brain },
  { title: "Decline & Referral Triage", desc: "Submissions that fall outside appetite are flagged early. Borderline risks are routed to senior underwriters with full context. No submission gets lost.", icon: Zap },
];

/* ── Policy Servicing Data ────────────────────────────────────── */
const policyCapabilities = [
  { title: "Endorsement Processing", desc: "Mid-term changes — address updates, vehicle additions, coverage modifications — are captured, validated against policy terms, and written back to your PAS automatically." },
  { title: "Renewal Data Validation", desc: "Renewal data is checked, exposure re-assessed, and documentation prepared. Underwriters review a pre-populated renewal brief, not a blank file." },
  { title: "Audit Workflow Completion", desc: "Premium audits are processed end-to-end: data collected, calculations verified, adjustments applied, and documentation filed — with full compliance trail." },
];

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Solutions | ThoughtNudge AI for Insurance Operations</title>
        <meta name="description" content="FNOL automation, underwriting workbench, and policy servicing — purpose-built agentic AI for insurance carriers, MGAs, and Lloyd's syndicates." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Solutions</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground">
              AI agents for every stage of the insurance lifecycle.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Each solution deploys as composable AI agents pre-trained on insurance workflows — FNOL, underwriting, and policy servicing. Integrated with your systems. Configured to your SOPs.
            </motion.p>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="fnol" className="w-full">
              <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12">
                <TabsTrigger value="fnol">FNOL Automation</TabsTrigger>
                <TabsTrigger value="uw">Underwriting</TabsTrigger>
                <TabsTrigger value="policy">Policy Servicing</TabsTrigger>
              </TabsList>

              {/* ═══ FNOL ═══ */}
              <TabsContent value="fnol">
                <div className="max-w-5xl mx-auto space-y-16">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">From first call to adjuster assignment — in minutes.</h2>
                    <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                      The average FNOL process touches 5 systems, takes 45 minutes of manual effort, and loses data at every handoff. Adjusters spend their day on admin. Fraud goes undetected until it's too late.
                    </p>
                  </div>

                  {/* Step-by-step Before/After */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground text-center mb-6">The FNOL workflow — before and after ThoughtNudge</h3>
                    <div className="space-y-3">
                      {fnolWorkflow.map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                          className="grid md:grid-cols-[180px_1fr_1fr] gap-3 p-4 rounded-lg border border-border bg-card"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-primary/60">{String(i + 1).padStart(2, "0")}</span>
                            <span className="text-sm font-semibold text-foreground">{item.step}</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm text-muted-foreground">
                            <XCircle className="w-4 h-4 text-destructive/50 mt-0.5 shrink-0" />
                            {item.before}
                          </div>
                          <div className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            {item.after}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {fnolMetrics.map((m, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-5 rounded-lg border border-border bg-card text-center">
                        <m.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                        <span className="text-2xl font-bold text-primary">{m.value}</span>
                        <p className="mt-1.5 text-xs text-muted-foreground">{m.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button asChild size="lg">
                      <Link to="/demo">See the FNOL agent in action <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* ═══ Underwriting ═══ */}
              <TabsContent value="uw">
                <div className="max-w-5xl mx-auto space-y-12">
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary mb-4">
                      In pilot with select carriers
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Give underwriters their time back.</h2>
                    <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                      60% of underwriter time goes to data gathering and document review — not risk judgment. Submissions are lost in inboxes, delayed by manual processing, or declined not on risk grounds but on capacity. ThoughtNudge automates the intake, leaving underwriters to do what they're good at: assessing risk.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {uwCapabilities.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                        <item.icon className="w-6 h-6 text-primary mb-3" />
                        <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button asChild size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
                      <Link to="/demo">Join the pilot waitlist <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* ═══ Policy Servicing ═══ */}
              <TabsContent value="policy">
                <div className="max-w-5xl mx-auto space-y-12">
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-secondary/30 text-xs font-medium text-muted-foreground mb-4">
                      Coming Q3 2026
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Endorsements, renewals, and audits — handled at scale.</h2>
                    <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                      Policy servicing is high-volume, low-complexity work that consumes your most experienced people. Endorsements that should take minutes take days. Renewals that should be pre-populated are manually assembled from scratch. ThoughtNudge automates the routine so your team can focus on exceptions.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    {policyCapabilities.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                        <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to see it running on your workflow?</h2>
            <p className="mt-4 text-muted-foreground">Book a demo and we'll walk through a live FNOL workflow — not a slideshow.</p>
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

export default Solutions;
