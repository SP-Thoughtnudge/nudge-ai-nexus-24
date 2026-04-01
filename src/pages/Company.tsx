import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Brain, Blocks } from "lucide-react";

const beliefs = [
  "We believe the protection gap is an operations problem — not a product problem.",
  "We believe AI should augment the judgment of experienced adjusters and underwriters — not replace it.",
  "We believe insurance-native AI outperforms generic models on every meaningful metric.",
  "We believe outcomes matter more than demos. If we don't deliver measurable results, we don't deserve the contract.",
];

const teamCredentials = [
  { icon: Shield, years: "25+", area: "Insurance Operations", desc: "Claims leadership, underwriting management, and product development at major UK and Australian carriers. We've sat in the desks we're automating." },
  { icon: Brain, years: "12+", area: "AI/ML Engineering", desc: "Production machine learning and NLP systems at scale — document understanding, decision automation, and fraud detection in regulated industries." },
  { icon: Blocks, years: "15+", area: "Enterprise Product & GTM", desc: "Taking complex technology to market in insurance, financial services, and other regulated verticals. Enterprise sales, implementation, and long-term carrier partnerships." },
];

const Company = () => {
  return (
    <>
      <Helmet>
        <title>Company | ThoughtNudge</title>
        <meta name="description" content="ThoughtNudge is building the operating system for insurance operations. Founded by insurance operators and AI engineers." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">About us</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-4xl md:text-5xl font-extrabold text-foreground">
              We're building the operating system for insurance claims.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Insurance exists to do something remarkable — turn uncertainty into security. Too often, operational friction gets in the way. Carriers spend more time on admin than on protecting policyholders. ThoughtNudge exists to remove that friction, so carriers can protect more people, faster, and at lower cost.
            </motion.p>
          </div>
        </section>

        {/* Team Depth */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Our team</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Built by people who've lived through it.
              </h2>
              <p className="mt-4 text-muted-foreground">
                ThoughtNudge was founded by operators who've managed claims floors, built underwriting books, and deployed production AI systems inside carriers. We automate what we've done ourselves.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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

        {/* Beliefs */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <span className="text-xs font-mono text-primary uppercase tracking-wider">What we believe</span>
            <div className="mt-8 space-y-6">
              {beliefs.map((belief, i) => (
                <motion.p key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed"
                >
                  {belief}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/demo">Request a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10">
                <Link to="/product">See the Platform</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Company;
