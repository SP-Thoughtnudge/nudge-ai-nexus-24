import { Button } from "@/components/ui/button";

const SolutionsHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-b from-background to-gray-50/50 pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Solutions Built for Your Growth Model
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you're a high-growth D2C brand or a category-defining digital app/service, 
            our autonomous platform is designed to solve your most critical revenue challenges. 
            Find your vertical below to see how.
          </p>
          
          {/* Visual Element */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                <div className="text-primary-foreground font-bold text-lg">TN</div>
              </div>
              {/* Branching paths */}
              <div className="absolute top-16 -left-20 w-16 h-0.5 bg-primary/30 transform -rotate-45"></div>
              <div className="absolute top-16 -right-20 w-16 h-0.5 bg-primary/30 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;