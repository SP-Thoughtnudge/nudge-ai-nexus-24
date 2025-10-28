import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ShoppingCart, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { updateSEOTags } from "@/lib/seo";

const SolutionsD2C = () => {
  const pains = [
    "High cart abandonment rates eating into your profits",
    "Dependency on deep discounting to drive sales",
    "Low repeat purchase frequency and customer LTV",
    "Difficulty upselling or cross-selling complementary products",
    "Rising customer acquisition costs (CAC) making profitability a challenge"
  ];

  const solutions = [
    {
      title: "For Cart Abandonment",
      description: "Our AI triggers personalized, multi-channel nudges with the perfect offer to recover otherwise lost sales."
    },
    {
      title: "For Discounting",
      description: "Our engine finds the minimum effective offer, protecting your margins while still driving conversions."
    },
    {
      title: "For Repeat Purchases",
      description: "We identify the perfect moment to re-engage a customer for their next purchase, based on their individual buying cycle."
    }
  ];

  const goals = [
    "Increase Repeat Purchase Rate",
    "Recover Abandoned Carts",
    "Increase Average Order Value (AOV)",
    "Drive Upsells to Premium Products",
    "Win Back High-Value Dormant Customers"
  ];
  useEffect(() => {
    updateSEOTags({
      title: "D2C Solutions | Thoughtnudge Autonomous Growth",
      description: "Autonomous AI for D2C brands to boost repeat purchase, recover carts, and grow AOV and LTV.",
      url: "https://www.thoughtnudge.com/solutions/d2c",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-background to-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl">
              <ShoppingCart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Autonomous Growth for D2C Brands
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop burning margins on sitewide sales. Use our behavioral AI to increase repeat 
              purchase rate, drive higher AOV, and win back customers you thought were lost for good.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              The Modern D2C Brands Growth Ceiling
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pains.map((pain, index) => (
                <Card key={index} className="border-l-4 border-destructive">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-6 h-6 text-destructive mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{pain}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Your Intelligent D2C Brands Growth Engine
            </h2>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-l-4 border-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                        <p className="text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Set Goals, Not Rules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {goals.map((goal, index) => (
                <Card key={index} className="bg-primary/5 border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="font-medium text-foreground">{goal}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Proven Results for D2C Brands
            </h2>
            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <blockquote className="text-2xl font-medium text-foreground text-center mb-6 italic">
                  "Thoughtnudge helped us increase our repeat customer rate by 40% in the first quarter. 
                  Their ability to optimize our offer strategy was a game-changer."
                </blockquote>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <p className="text-muted-foreground">– Growth Leader, Leading D2C Brand</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              See How Thoughtnudge Can Grow Your Brand
            </h2>
            <Link to="/growth-audit">
              <Button size="lg" className="px-8">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SolutionsD2C;