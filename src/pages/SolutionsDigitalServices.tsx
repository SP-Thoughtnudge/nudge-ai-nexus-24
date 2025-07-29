import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Smartphone, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionsDigitalServices = () => {
  const pains = [
    "High user churn after the first few weeks",
    "Difficulty converting users from free trials to paid subscriptions",
    "Low adoption of key, revenue-driving features",
    "Generic push notifications that get ignored",
    "Inability to proactively identify and save users at risk of churning"
  ];

  const solutions = [
    {
      title: "For Reducing Churn",
      description: "Our AI proactively identifies at-risk users and deploys personalized retention campaigns to keep them engaged."
    },
    {
      title: "For Free-to-Paid Conversion",
      description: "We nurture trial users by highlighting the specific value propositions and features most relevant to them, guiding them towards a subscription."
    },
    {
      title: "For Feature Adoption",
      description: "Nudge users to discover and use the sticky features that correlate with higher long-term retention and LTV."
    }
  ];

  const goals = [
    "Reduce Monthly/Quarterly Churn",
    "Increase Free-to-Paid Conversion Rate",
    "Drive Adoption of a Key Feature",
    "Increase Daily/Monthly Active Users (DAU/MAU)",
    "Win Back Lapsed Subscribers"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-background to-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl">
              <Smartphone className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Autonomous Growth for Digital Services & Apps
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Your app's success depends on engagement and retention. Our AI drives users to key 
              activation events, converts free trials to paid plans, and reduces customer churn.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              The Modern Digital Services & Apps Growth Ceiling
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
              Your Intelligent Digital Services & Apps Growth Engine
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
              Proven Results for Digital Services & Apps
            </h2>
            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <blockquote className="text-2xl font-medium text-foreground text-center mb-6 italic">
                  "We reduced subscription churn by 22% within 60 days of implementing Thoughtnudge. 
                  Their platform's ability to understand user context is unparalleled."
                </blockquote>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <p className="text-muted-foreground">– Product Leader, Leading Digital Service</p>
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
              See How Thoughtnudge Can Grow Your App
            </h2>
            <Link to="/growth-audit">
              <Button size="lg" className="px-8">
                Request Your Free Growth Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SolutionsDigitalServices;