import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Company = () => {
  return (
    <>
      <Helmet>
        <title>Company | ThoughtNudge</title>
        <meta name="description" content="We're building the operating system for insurance claims." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-foreground">
              We're building the operating system for insurance claims.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Insurance exists to do something remarkable — turn uncertainty into security. Too often, operational friction gets in the way. ThoughtNudge exists to remove that friction, so carriers can protect more people, faster, and at lower cost.
            </motion.p>
          </div>
        </section>

        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/demo">Request a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10">
                <Link to="/why">Why ThoughtNudge</Link>
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
