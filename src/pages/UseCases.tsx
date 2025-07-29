
import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { 
  ShoppingCart, 
  TrendingUp, 
  RefreshCw, 
  Users,
  Award,
  ArrowRight,
  Star,
  User,
  Rocket 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const UseCases = () => {
  // Define all use cases
  const useCases = [
    {
      id: "new-customer-activation",
      title: "New Customer Activation",
      description: "Convert signups to first purchases with personalized engagement.",
      icon: User,
      agent: "ActivateAI",
      currentApproach: "Batch-and-blast emails with generic offers to all new signups, regardless of behavior or interests.",
      thoughtnudgeApproach: "Analyze signup data, browse behavior, and engagement patterns to personalize the first interaction across channels.",
      outcome: "32% higher first purchase conversion rate and 28% faster time-to-first-purchase.",
      industry: "E-commerce",
      example: "A luxury fashion retailer was struggling with high signup rates but low first-purchase conversions. ActivateAI analyzed browse behavior to detect product category interests, email open patterns to determine optimal send times, and matched messaging tone to customer engagement signals, resulting in a 47% lift in first 30-day purchases."
    },
    {
      id: "upsell-cross-sell",
      title: "Upsell & Cross-sell",
      description: "Increase average order value by intelligently recommending complementary or premium products.",
      icon: ShoppingCart,
      agent: "UpsellGenius",
      currentApproach: "Rule-based product recommendations based on simple category associations, manually configured and rarely updated.",
      thoughtnudgeApproach: "Continuously analyze purchase patterns, price sensitivity, and response to different messaging tones to create personalized upsell strategies for each customer.",
      outcome: "24% increase in average order value and 18% higher cross-sell acceptance.",
      industry: "Travel",
      example: "An international airline used UpsellGenius to transform their seat upgrade program. Instead of offering the same upgrade messages to all travelers, the AI agent customized the timing, tone, and offer based on trip purpose, loyalty tier, and past upgrade behavior. This resulted in a 36% increase in premium seat conversions."
    },
    {
      id: "renewal-retention",
      title: "Renewal & Retention",
      description: "Prevent churn by engaging customers with perfectly timed, relevant interactions.",
      icon: RefreshCw,
      agent: "RetainPro",
      currentApproach: "Generic renewal reminders sent on a fixed schedule, with the same messaging for all customers regardless of usage patterns.",
      thoughtnudgeApproach: "Predict churn risk through usage patterns and engagement signals, then deploy personalized retention strategies before cancellation occurs.",
      outcome: "42% reduction in voluntary churn and 27% higher renewal rates.",
      industry: "Health & Wellness Subscription",
      example: "A fitness subscription service was experiencing high churn rates despite positive initial engagement. RetainPro identified usage drop-off patterns weeks before cancellations, then deployed personalized content recommendations and community features that aligned with each member's fitness goals, cutting churn by 39%."
    },
    {
      id: "repeat-purchase",
      title: "Repeat Purchase",
      description: "Drive consistent repurchase behavior through timely, relevant engagement.",
      icon: TrendingUp,
      agent: "RepeatRevenue",
      currentApproach: "Calendar-based promotional emails sent to all customers regardless of their purchase cycles or preferences.",
      thoughtnudgeApproach: "Learn individual purchase cycles and preferences to time perfect repurchase suggestions with the right incentive.",
      outcome: "37% higher repurchase rates and 22% reduction in time between purchases.",
      industry: "E-commerce",
      example: "A premium skincare brand struggled with inconsistent repurchase patterns. RepeatRevenue learned each customer's product usage rate, analyzed response to different value propositions (sustainability vs. results vs. luxury positioning), and triggered perfectly timed replenishment reminders, increasing 90-day repurchase rate by 43%."
    },
    {
      id: "winback",
      title: "Customer Winback",
      description: "Re-engage lapsed customers with personalized comeback incentives.",
      icon: Award,
      agent: "WinbackWizard",
      currentApproach: "One-size-fits-all discount campaigns to all inactive customers after a fixed time period.",
      thoughtnudgeApproach: "Analyze past purchase history, reason for churn, and price sensitivity to craft individualized winback campaigns.",
      outcome: "53% higher reactivation rate with 18% higher profit margin on returning customers.",
      industry: "Hotel Loyalty",
      example: "A luxury hotel chain sought to re-engage loyalty members who hadn't booked in 18+ months. WinbackWizard analyzed past stay data, loyalty tier value, and competitive booking patterns to create personalized offers—ranging from room upgrades for status-conscious travelers to experience packages for value-seekers—recapturing 31% of dormant accounts."
    },
    {
      id: "referral",
      title: "Customer Referral",
      description: "Maximize advocacy by targeting your most influential customers with personalized referral programs.",
      icon: Users,
      agent: "ReferralEngine",
      currentApproach: "Generic referral incentives promoted equally to all customers regardless of influence or satisfaction.",
      thoughtnudgeApproach: "Identify high-value advocates based on purchase patterns, social engagement, and satisfaction signals, then target with optimized referral programs.",
      outcome: "63% higher referral conversion and 41% lower cost per acquisition.",
      industry: "Travel",
      example: "A boutique travel agency wanted to grow through word-of-mouth. ReferralEngine identified their most influential clients based on social signals and booking patterns, then created tailored referral programs—offering exclusive experiences to high-value networkers and traditional incentives to others—resulting in a 72% increase in qualified referrals."
    },
    {
      id: "free-to-paid",
      title: "Free to Paid Conversion",
      description: "Transform free users into paying customers with precision-timed upgrade nudges.",
      icon: Rocket,
      agent: "ConversionCatalyst",
      currentApproach: "Standard upgrade prompts based on time in the product, ignoring usage patterns and value realization.",
      thoughtnudgeApproach: "Monitor feature usage and value signals to identify perfect conversion moments unique to each user, then deliver tailored upgrade messaging.",
      outcome: "47% higher free-to-paid conversion rate and 33% shorter conversion cycle.",
      industry: "SaaS",
      example: "A productivity SaaS platform struggled with freemium conversion despite high engagement. ConversionCatalyst analyzed feature usage patterns and identified when users reached value thresholds, then delivered personalized messaging highlighting specific benefits each user had experienced, boosting conversion by 56% while maintaining retention."
    },
    {
      id: "lead-nurturing",
      title: "Lead Nurturing & Conversion",
      description: "Convert more leads with personalized nurture journeys that adapt to each prospect's signals.",
      icon: Star,
      agent: "NurtureNavigator",
      currentApproach: "Linear nurture sequences with the same content, cadence and call-to-actions for all leads.",
      thoughtnudgeApproach: "Adapt content, pacing, and messaging based on engagement signals and buying intent markers to create dynamic, personalized nurture journeys.",
      outcome: "58% higher lead-to-opportunity conversion and 29% faster sales cycle.",
      industry: "B2B Technology",
      example: "An enterprise software company was losing leads in their long sales cycle. NurtureNavigator analyzed content engagement, website behavior, and competitor research signals to deliver personalized content journeys—adjusting between technical deep dives for technical evaluators and ROI-focused content for decision makers—reducing their average sales cycle by 34%."
    },
    {
      id: "lifetime-value",
      title: "Increasing Customer Lifetime Value",
      description: "Maximize long-term customer value through personalized engagement strategies.",
      icon: TrendingUp,
      agent: "ValueMaximizer",
      currentApproach: "Siloed marketing campaigns optimized for short-term metrics with little coordination across customer lifecycle.",
      thoughtnudgeApproach: "Create holistic customer engagement strategies that balance short-term revenue with long-term relationship building based on each customer's value trajectory.",
      outcome: "43% increase in 3-year customer value and 37% improvement in retention metrics.",
      industry: "Subscription Services",
      example: "A meal subscription service was optimizing for immediate metrics like weekly order value but experiencing long-term value decay. ValueMaximizer balanced immediate revenue opportunities with long-term engagement strategies—varying communication frequency, offer intensity, and content mix based on each customer's value profile, resulting in 46% higher retention at the 1-year mark."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6">
              Solving Real Business Challenges with AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Thoughtnudge transforms complex marketing challenges into simple, autonomous AI-driven solutions that deliver measurable business outcomes.
            </p>
          </div>
          
          {/* Value proposition section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gray-50 border-none">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-brand-orange flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4">1:1 Personalization</h3>
                </div>
                <p className="text-gray-700">
                  Replace mass marketing with true 1:1 personalized experiences that consider each customer's unique preferences, behaviors, and context—resulting in dramatically higher engagement and conversion.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-none">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-brand-pink flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4">Autonomous Execution</h3>
                </div>
                <p className="text-gray-700">
                  Eliminate manual campaign management, A/B testing, and rule creation—our AI agents autonomously execute, learn, and optimize while your team focuses on strategy and creative.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Use cases section */}
          <div className="space-y-12 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Real-World Use Cases</h2>
            
            {useCases.map((useCase, index) => (
              <div key={useCase.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <useCase.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-brand-black">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                  
                  {/* Agent intro */}
                  <div className="bg-brand-yellow/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-brand-orange flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Meet <span className="text-brand-orange">{useCase.agent}</span></p>
                        <p className="text-sm">Your autonomous AI agent specialized in this use case</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-100 rounded-lg p-5">
                      <h4 className="font-bold mb-2 text-gray-700">Current Approach</h4>
                      <p className="text-gray-600">{useCase.currentApproach}</p>
                    </div>
                    
                    <div className="bg-brand-orange/10 rounded-lg p-5">
                      <h4 className="font-bold mb-2 text-brand-orange">Thoughtnudge Approach</h4>
                      <p className="text-gray-600">{useCase.thoughtnudgeApproach}</p>
                    </div>
                  </div>
                  
                  {/* Outcome */}
                  <div className="bg-gray-50 rounded-lg p-5 mb-6">
                    <h4 className="font-bold mb-2">Business Outcome</h4>
                    <p className="text-green-600 font-medium">{useCase.outcome}</p>
                  </div>
                  
                  {/* Example */}
                  <div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="example">
                        <AccordionTrigger className="text-brand-black">
                          <div className="flex items-center">
                            <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                              <span className="text-xs">{index+1}</span>
                            </div>
                            <span>{useCase.industry} Example</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {useCase.example}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA section */}
          <div className="bg-brand-orange/10 rounded-xl p-8 mb-16">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to transform your customer engagement?</h3>
              <p className="text-gray-700 mb-6">
                Let's discuss how Thoughtnudge can help you achieve your specific business goals with autonomous AI agents.
              </p>
              <a 
                href="/brochure" 
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Further reading */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Further Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((blog) => (
                <Card key={blog} className="overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2">How AI is Transforming Customer Engagement</h3>
                    <p className="text-gray-600 line-clamp-2">
                      Learn how autonomous AI agents are changing the customer engagement landscape.
                    </p>
                    <div className="mt-4">
                      <a href="/blogs" className="text-brand-orange flex items-center hover:underline">
                        Read more
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
