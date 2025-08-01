import { TrendingUp, Target, Heart, DollarSign, Brain } from "lucide-react";

const SolutionsHero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-b from-background to-gray-50/50 pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Solutions Built for Your Growth Model
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're a high-growth D2C brand or a category-defining digital app/service, 
              our autonomous platform is designed to solve your most critical revenue challenges.
            </p>
          </div>

          {/* Autonomous Orchestration Engine Visual */}
          <div className="relative h-80 flex items-center justify-between animate-fade-in [animation-delay:400ms]">
            
            {/* Left Side: The Chaos (Complex Data) */}
            <div className="w-1/3 h-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Tangled lines and scattered data points */}
                  <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 200">
                    {/* Chaotic connecting lines */}
                    <path d="M20,30 Q60,80 120,40 T180,90" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none" opacity="0.4" className="animate-pulse"/>
                    <path d="M40,160 Q80,60 140,120 T190,70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none" opacity="0.3" className="animate-pulse [animation-delay:200ms]"/>
                    <path d="M10,100 Q90,140 160,80 T200,150" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none" opacity="0.5" className="animate-pulse [animation-delay:400ms]"/>
                    
                    {/* Scattered data points */}
                    <circle cx="30" cy="50" r="2" fill="hsl(var(--muted-foreground))" opacity="0.6" className="animate-pulse"/>
                    <circle cx="80" cy="90" r="2" fill="hsl(var(--muted-foreground))" opacity="0.4" className="animate-pulse [animation-delay:100ms]"/>
                    <circle cx="140" cy="60" r="2" fill="hsl(var(--muted-foreground))" opacity="0.7" className="animate-pulse [animation-delay:300ms]"/>
                    <circle cx="170" cy="120" r="2" fill="hsl(var(--muted-foreground))" opacity="0.5" className="animate-pulse [animation-delay:500ms]"/>
                    <circle cx="60" cy="140" r="2" fill="hsl(var(--muted-foreground))" opacity="0.6" className="animate-pulse [animation-delay:200ms]"/>
                    <circle cx="120" cy="170" r="2" fill="hsl(var(--muted-foreground))" opacity="0.4" className="animate-pulse [animation-delay:400ms]"/>
                  </svg>
                  
                  {/* Faint overlapping graphs */}
                  <div className="absolute top-4 left-4 w-16 h-12 opacity-30">
                    <svg viewBox="0 0 40 30" className="w-full h-full">
                      <path d="M2,25 L8,20 L14,22 L20,15 L26,18 L32,12 L38,8" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-8 right-6 w-20 h-14 opacity-25">
                    <svg viewBox="0 0 50 35" className="w-full h-full">
                      <path d="M3,30 L10,25 L17,28 L24,20 L31,23 L38,15 L45,10" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <p className="text-sm font-medium text-muted-foreground">Complex Data</p>
              </div>
            </div>

            {/* Center: The Brain (Autonomous Engine) */}
            <div className="w-1/3 h-full relative flex items-center justify-center">
              <div className="relative">
                {/* Learning loop orbit */}
                <div className="absolute inset-0 w-32 h-32">
                  <div className="absolute inset-0 border border-primary/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1 animate-spin" style={{animationDuration: '8s'}}></div>
                </div>
                
                {/* AI Brain Icon */}
                <div className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/25 animate-pulse">
                  <Brain className="w-10 h-10 text-primary-foreground"/>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <p className="text-sm font-medium text-foreground">Autonomous Engine</p>
              </div>
            </div>

            {/* Right Side: The Orchestra (Effortless Growth) */}
            <div className="w-1/3 h-full relative">
              <div className="absolute inset-0 flex flex-col justify-center space-y-8 pl-8">
                
                {/* Revenue Stream */}
                <div className="flex items-center space-x-4 animate-fade-in [animation-delay:800ms]">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">Revenue</p>
                    <svg className="w-20 h-8" viewBox="0 0 40 16">
                      <path d="M2,14 L8,12 L14,9 L20,6 L26,4 L32,2 L38,1" stroke="hsl(var(--chart-1))" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>

                {/* Retention Stream */}
                <div className="flex items-center space-x-4 animate-fade-in [animation-delay:1000ms]">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-red-600"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">Retention</p>
                    <svg className="w-20 h-8" viewBox="0 0 40 16">
                      <path d="M2,8 L8,6 L14,7 L20,5 L26,6 L32,4 L38,5" stroke="hsl(var(--chart-2))" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>

                {/* Conversion Stream */}
                <div className="flex items-center space-x-4 animate-fade-in [animation-delay:1200ms]">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">Conversion</p>
                    <svg className="w-20 h-8" viewBox="0 0 40 16">
                      <path d="M2,12 L8,10 L14,8 L20,5 L26,3 L32,2 L38,1" stroke="hsl(var(--chart-3))" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-8">
                <p className="text-sm font-medium text-muted-foreground">Effortless Growth</p>
              </div>
            </div>

            {/* Data flow lines from brain to outcomes */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Flow line to revenue */}
              <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-primary/60 to-transparent transform -translate-y-12 translate-x-8 animate-pulse [animation-delay:800ms]"></div>
              
              {/* Flow line to retention */}
              <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-primary/60 to-transparent transform translate-x-8 animate-pulse [animation-delay:1000ms]"></div>
              
              {/* Flow line to conversion */}
              <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-primary/60 to-transparent transform translate-y-12 translate-x-8 animate-pulse [animation-delay:1200ms]"></div>
            </div>
          </div>

          {/* Status indicator */}
          <div className="text-center mt-12 animate-fade-in [animation-delay:1400ms]">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-sm font-medium text-foreground">AI Agent Armed & Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;