import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const FinalCta = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Ready to Unlock the Next Stage of{" "}
            <span className="text-primary">BFSI Growth</span>?
          </h2>

          {/* Subheader */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            See how Thoughtnudge turns your first-party data into intelligent, adaptive 1:1 journeys — and delivers measurable outcomes in weeks.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="text-base">
              <Link to="/growth-audit">
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/growth-audit">
                <Phone className="mr-2 w-5 h-5" />
                Talk to Sales
              </Link>
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-sm text-muted-foreground pt-6">
            Trusted by leading BFSI companies • Deployed in weeks, not quarters • Enterprise-grade security
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
