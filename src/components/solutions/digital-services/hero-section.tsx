import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Smartphone, Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {/* Visual illustration */}
            <div className="mb-8 flex justify-center items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20 animate-pulse">
                  <Smartphone className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Activity className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg border border-primary/20 animate-fade-in">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">Push</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-lg border border-secondary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-foreground">WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg border border-accent/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm text-foreground">Email</span>
                </div>
              </div>
              
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <div className="text-2xl font-bold text-primary">AI</div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hyper-Personalized Journeys for Health, Wellness & Consumer Platforms
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Your first-party data already knows your customer. Thoughtnudge converts it into adaptive, real-time, 1:1 experiences that increase retention, adherence, repeat purchase, and lifetime value.
            </p>
            
            <Link to="/growth-audit">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                See Thoughtnudge for Health & Wellness →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
