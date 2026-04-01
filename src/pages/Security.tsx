import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Eye, Users, KeyRound, Globe, Server, Lock, FileText, AlertTriangle } from "lucide-react";

const badges = [
  { label: "SOC 2 Type II", desc: "Certified controls for security, availability, and confidentiality" },
  { label: "GDPR", desc: "Full compliance with EU data protection regulation" },
  { label: "UK FCA-Ready", desc: "Audit trails and governance built for FCA supervisory expectations" },
  { label: "APRA CPS 234", desc: "Information security controls aligned to Australian prudential standards" },
  { label: "NAIC AI Governance", desc: "Aligned with US insurance regulatory AI model governance frameworks" },
];

const securityFeatures = [
  { title: "Never trains on your data", desc: "Your claims data, policy records, and customer information are never used to train our models. Your data is processed, never learned from. Period.", icon: Lock },
  { title: "Full audit trail on every action", desc: "Every agent decision — coverage verification, fraud flag, reserve estimate, document request — is logged with timestamp, rationale, and the SOP rule that triggered it. Ready for FCA, APRA, or internal audit review.", icon: Eye },
  { title: "Role-based access controls", desc: "Granular permissions aligned to your organisational structure. Claims handlers, team leads, underwriters, and compliance officers see exactly what they need — nothing more.", icon: Users },
  { title: "SSO and enterprise authentication", desc: "Integrate with your existing identity provider. SAML 2.0, OIDC, and Active Directory supported out of the box.", icon: KeyRound },
  { title: "Data residency — your choice", desc: "Choose where your data lives: United Kingdom, European Union, or Australia. Data never crosses jurisdictions without explicit consent. Sovereignty guaranteed.", icon: Globe },
  { title: "On-premise and air-gapped deployment", desc: "Full deployment within your own data centre or private cloud. Air-gapped options for carriers with the strictest data sovereignty and legacy infrastructure requirements.", icon: Server },
  { title: "Explainable AI decisions", desc: "Every agent output comes with a human-readable explanation of why the decision was made, which rules applied, and what data was used. No black boxes.", icon: FileText },
  { title: "Anomaly detection and alerting", desc: "Built-in monitoring detects unusual agent behaviour, data anomalies, or processing patterns — alerting your team before issues escalate.", icon: AlertTriangle },
];

const Security = () => {
  return (
    <>
      <Helmet>
        <title>Security & Compliance | ThoughtNudge</title>
        <meta name="description" content="Built for the most regulated workflows in financial services. SOC 2 Type II, GDPR, UK FCA-ready, APRA CPS 234 aligned." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Security & Compliance</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-4xl md:text-5xl font-extrabold text-foreground">
              Built for the most regulated workflows in financial services.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Insurance carriers trust us with their most sensitive data and critical workflows. Our security architecture reflects that responsibility.
            </motion.p>
          </div>
        </section>

        {/* Compliance Badges */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {badges.map((badge) => (
                <motion.div key={badge.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  className="px-5 py-3 rounded-lg border border-accent/20 bg-accent/5 text-center"
                >
                  <span className="text-sm font-bold text-accent">{badge.label}</span>
                  <p className="text-[11px] text-muted-foreground mt-1 max-w-[200px]">{badge.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {securityFeatures.map((feat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="p-6 rounded-lg border border-border bg-card">
                  <feat.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-base font-bold text-foreground">{feat.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground">Questions about our security posture?</h2>
            <p className="mt-2 text-muted-foreground">We'll connect you directly with our security and compliance team.</p>
            <Button asChild size="lg" className="mt-6">
              <Link to="/demo">Get in touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Security;
