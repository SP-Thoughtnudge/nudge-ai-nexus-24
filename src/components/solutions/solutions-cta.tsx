import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionsCta = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our goal-driven AI is versatile. If your business depends on driving specific 
            customer actions, we can help. Let's explore your unique growth challenges together.
          </p>
          <Link to="/growth-audit">
            <Button size="lg" className="px-8">
              Book a Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCta;