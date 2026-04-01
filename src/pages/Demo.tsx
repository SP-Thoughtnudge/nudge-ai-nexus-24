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
import { CheckCircle2 } from "lucide-react";

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
        <meta name="description" content="See ThoughtNudge running on a real insurance workflow. 30 minutes. Live agents. Your questions answered by insurance operations experts." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
              {/* Left — Value prop */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Request a demo</span>
                <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-foreground">
                  See ThoughtNudge running on a real insurance workflow.
                </h1>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  30 minutes. Live agents processing a real FNOL claim. Your questions answered by insurance operations experts — not a sales team.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Live demo on a real claims workflow",
                    "Personalised to your line of business",
                    "Architecture review with your tech team",
                    "ROI sizing for your specific operation",
                    "No commitment — just clarity",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right — Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                onSubmit={handleSubmit}
                className="space-y-5 p-6 rounded-lg border border-border bg-card"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" required placeholder="Carrier / MGA name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" required placeholder="Your title" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Line of Business</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pc">P&C / General Insurance</SelectItem>
                      <SelectItem value="motor">Motor</SelectItem>
                      <SelectItem value="commercial">Commercial Lines</SelectItem>
                      <SelectItem value="specialty">Specialty / Lloyd's</SelectItem>
                      <SelectItem value="mga">MGA / MGU</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Primary Interest</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fnol">FNOL Automation</SelectItem>
                      <SelectItem value="underwriting">Underwriting Intake</SelectItem>
                      <SelectItem value="policy">Policy Servicing</SelectItem>
                      <SelectItem value="general">General Platform Overview</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                  {submitting ? "Submitting..." : "Request a Demo"}
                </Button>
                <p className="text-center text-xs text-muted-foreground">Most demos are scheduled within 48 hours.</p>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Demo;
