import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, Clock, Shield, AlertTriangle, Users, FileText, Brain, Blocks } from "lucide-react";

const fnolMetrics = [
  { value: "80%", label: "reduction in FNOL logging time" },
  { value: "Real-time", label: "fraud scoring at intake" },
  { value: "Seconds", label: "to verify coverage" },
  { value: "Automatic", label: "adjuster assignment" },
];

const fnolBefore = [
  "Manual data entry across 5 systems",
  "45 minutes average processing time",
  "Fraud detected days later — if at all",
  "Customer left waiting with no updates",
];

const fnolAfter = [
  "Single intake, auto-structured across systems",
  "Under 5 minutes end-to-end",
  "Fraud scored instantly at point of intake",
  "Proactive status updates via preferred channel",
];

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Solutions | ThoughtNudge AI for Insurance</title>
        <meta name="description" content="FNOL automation, underwriting workbench, and policy servicing — purpose-built agentic AI solutions for insurance carriers." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground">
              Solutions Built for Insurance Operations
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Each solution deploys as a set of composable AI agents, pre-trained on insurance workflows and integrated with your systems.
            </motion.p>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="fnol" className="w-full">
              <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12">
                <TabsTrigger value="fnol">FNOL Automation</TabsTrigger>
                <TabsTrigger value="uw">Underwriting</TabsTrigger>
                <TabsTrigger value="policy">Policy Servicing</TabsTrigger>
              </TabsList>

              {/* FNOL */}
              <TabsContent value="fnol">
                <div className="max-w-5xl mx-auto space-y-16">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">From first call to adjuster assignment — in minutes, not hours.</h2>
                    <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                      The average FNOL process touches 5 systems, takes 45 minutes of manual effort, and loses data at every handoff. Customers are waiting. Fraud is going undetected. Adjusters are doing admin.
                    </p>
                  </div>

                  {/* Before / After */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-lg border border-destructive/20 bg-destructive/5">
                      <h3 className="text-lg font-bold text-foreground mb-4">Before ThoughtNudge</h3>
                      <ul className="space-y-3">
                        {fnolBefore.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 text-destructive/60 mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-lg border border-accent/20 bg-accent/5">
                      <h3 className="text-lg font-bold text-foreground mb-4">After ThoughtNudge</h3>
                      <ul className="space-y-3">
                        {fnolAfter.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {fnolMetrics.map((m, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-5 rounded-lg border border-border bg-card text-center">
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

              {/* Underwriting */}
              <TabsContent value="uw">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Give underwriters their time back.</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    60% of underwriter time goes to data gathering and document review — not risk judgment. Submissions are lost, delayed, or declined not on risk grounds but on capacity.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6 mt-8">
                    {[
                      { title: "AI-Enriched Intake", desc: "Broker submissions automatically structured, enriched, and prioritised.", icon: Brain },
                      { title: "Automated Data Assembly", desc: "Risk data gathered from multiple sources in seconds, not hours.", icon: FileText },
                      { title: "Pre-Populated UW Memo", desc: "Underwriters receive a complete brief — ready for judgment, not admin.", icon: Blocks },
                    ].map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                        <item.icon className="w-6 h-6 text-primary mb-3" />
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-6 rounded-lg border border-primary/20 bg-primary/5 inline-block">
                    <p className="text-sm text-muted-foreground">Now in pilot with select carriers.</p>
                    <Button asChild variant="outline" className="mt-3">
                      <Link to="/demo">Join the waitlist <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Policy Servicing */}
              <TabsContent value="policy">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Endorsements, renewals, and audits — handled at scale.</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Policy servicing is high-volume, low-value work that consumes your best people. Endorsements that should take minutes take days.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-6 mt-8">
                    {[
                      { title: "Endorsement Processing", desc: "Automated intake, validation, and system update for mid-term changes." },
                      { title: "Renewal Validation", desc: "Data checks, risk re-assessment, and documentation — prepared automatically." },
                      { title: "Audit Completion", desc: "Workflow-driven audit processing with full compliance trail." },
                    ].map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-6 rounded-lg border border-border bg-muted/30 inline-block">
                    <p className="text-sm text-muted-foreground">Coming Q3 2026.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to see it work?</h2>
            <p className="mt-4 text-muted-foreground">Book a demo and we'll walk through a live FNOL workflow.</p>
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
