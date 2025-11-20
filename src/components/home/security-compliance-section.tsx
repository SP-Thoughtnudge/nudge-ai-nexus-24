import { Shield, Lock, Eye, Database } from "lucide-react";

export const SecurityComplianceSection = () => {
  return (
    <section className="py-16 bg-secondary/10 border-y border-border/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            Security, Privacy &{" "}
            <span className="text-primary">Compliance by Design</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">SOC 2 Compliant</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">GDPR-Ready</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Privacy-First Architecture</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Strict Data Isolation & Secure Processing</span>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            Your data stays within your environment. Thoughtnudge activates it — without compromising privacy or control.
          </p>
        </div>
      </div>
    </section>
  );
};
