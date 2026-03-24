import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const teamTiles = [
  { initials: "IO", text: "25 years of insurance operations leadership — across claims, underwriting, and product at major carriers." },
  { initials: "AI", text: "12 years of AI/ML engineering — building production data science systems at scale." },
  { initials: "PS", text: "15 years of product and enterprise sales — taking complex technology to regulated markets." },
];

const beliefs = [
  "We believe the protection gap is an operations problem.",
  "We believe AI should augment the judgment of experienced adjusters and underwriters — not replace it.",
  "We believe insurance-native AI outperforms generic models on every meaningful metric.",
  "We believe outcomes matter more than demos.",
];

const WhyThoughtNudge = () => {
  return (
    <>
      <Helmet>
        <title>Why ThoughtNudge | Agentic AI for Insurance</title>
        <meta name="description" content="Built by people who've run insurance operations — not just AI labs." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-foreground">
              Built by people who've run insurance operations — not just AI labs.
            </motion.h1>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {teamTiles.map((tile, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-lg border border-border bg-card">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-primary">{tile.initials}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tile.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-sm font-mono text-primary mb-8">Our Beliefs</h2>
            <div className="space-y-6">
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

        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <Button asChild size="lg">
              <Link to="/demo">Work with us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WhyThoughtNudge;
