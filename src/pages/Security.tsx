import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Eye, Users, KeyRound, Globe, Server } from "lucide-react";

const badges = ["SOC 2 Type II", "GDPR", "UK FCA-Ready", "NAIC AI Governance"];

const securityFeatures = [
  { title: "Never trains on your data", desc: "Your claims and policy data is never used to train our models. Period.", icon: Shield },
  { title: "Full audit trail", desc: "Every agent action is logged, timestamped, and attributable — ready for regulatory review.", icon: Eye },
  { title: "Role-based access controls", desc: "Granular permissions aligned to your organisational structure.", icon: Users },
  { title: "SSO and enterprise auth", desc: "Integrate with your existing identity provider. SAML, OIDC, and Active Directory supported.", icon: KeyRound },
  { title: "Data residency options", desc: "Choose where your data lives: UK, EU, or Australia. We never move data across jurisdictions without consent.", icon: Globe },
  { title: "Self-hosted deployment", desc: "Full on-premise deployment available for carriers with strict data sovereignty requirements.", icon: Server },
];

const Security = () => {
  return (
    <>
      <Helmet>
        <title>Security & Compliance | ThoughtNudge</title>
        <meta name="description" content="Built for the most regulated workflows in financial services. SOC 2, GDPR, FCA-ready." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-foreground">
              Built for the most regulated workflows in financial services.
            </motion.h1>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {badges.map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-md border border-accent/30 bg-accent/5 text-sm font-medium text-accent">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {securityFeatures.map((feat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-lg border border-border bg-card">
                  <feat.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-base font-bold text-foreground">{feat.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 text-center bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground">Questions about our security posture?</h2>
            <p className="mt-2 text-muted-foreground">We'll connect you directly with our security team.</p>
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
