import { Shield, Lock, FileCheck } from "lucide-react";

const EnterpriseSecurity = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Security Visual */}
            <div className="relative animate-fade-in">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Central Shield */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-20 h-20 text-primary" strokeWidth={1.5} />
                </div>
                
                {/* Orbiting Security Icons */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center shadow-lg animate-float">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Enterprise Security
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thoughtnudge deploys as a secure, one-time integration that sits between your data infrastructure and activation channels — enabling hyper-personalized, privacy-by-design experiences without moving sensitive data outside your environment.
              </p>

              {/* Compliance Badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-background border border-border rounded-lg shadow-sm">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-foreground">SOC 2</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-background border border-border rounded-lg shadow-sm">
                  <Lock className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-foreground">GDPR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSecurity;
