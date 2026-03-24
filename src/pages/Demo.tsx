import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Request received", description: "We'll be in touch within 48 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Request a Demo | ThoughtNudge</title>
        <meta name="description" content="See ThoughtNudge running on a real insurance workflow. 30 minutes. Live agents. Your questions answered." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container mx-auto px-4 max-w-xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">See ThoughtNudge running on a real insurance workflow.</h1>
              <p className="mt-4 text-muted-foreground">
                30 minutes. Live agents. Your questions answered by insurance operations experts — not a sales team.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              onSubmit={handleSubmit}
              className="space-y-5 p-6 rounded-lg border border-border bg-card"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" required placeholder="Your company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" required placeholder="Your role" />
              </div>
              <div className="space-y-2">
                <Label>Line of Business</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pc">P&C</SelectItem>
                    <SelectItem value="motor">Motor</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="specialty">Specialty</SelectItem>
                    <SelectItem value="mga">MGA</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Primary Interest</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fnol">FNOL</SelectItem>
                    <SelectItem value="underwriting">Underwriting</SelectItem>
                    <SelectItem value="policy">Policy Servicing</SelectItem>
                    <SelectItem value="general">General Overview</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                {submitting ? "Submitting..." : "Request a Demo"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">Most demos are scheduled within 48 hours.</p>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Demo;
