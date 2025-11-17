import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PlayCircle } from "lucide-react";

const BfsiHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
              <span>→</span>
              <span className="text-foreground font-medium">BFSI</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Hyper-Personalized 1:1 Journeys That Drive{" "}
              <span className="text-primary">BFSI Growth</span>
            </h1>

            {/* Subheader */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Your first-party data already knows your customer. Thoughtnudge uses it to autonomously learn, decide, and act — creating adaptive journeys for every individual, in real time.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link to="/growth-audit">
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/use-cases">
                  <PlayCircle className="mr-2 w-5 h-5" />
                  See BFSI Use Cases
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/50 z-10">
                <div className="text-primary-foreground text-center">
                  <div className="text-3xl font-bold">1:1</div>
                  <div className="text-xs">AI Agent</div>
                </div>
              </div>

              {/* Orbiting Customer Nodes */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-160px)`,
                    animation: `orbit-${(i % 3) + 1} ${15 + i * 2}s linear infinite`
                  }}
                >
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                </div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full -z-10" style={{ opacity: 0.3 }}>
                {[...Array(8)].map((_, i) => (
                  <line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + 40 * Math.cos((i * 45 * Math.PI) / 180)}%`}
                    y2={`${50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}%`}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BfsiHero;
