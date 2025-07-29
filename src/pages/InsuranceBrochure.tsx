
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, BrainCircuit, Infinity, Network, Clock, Users, Zap, MessageSquare, TrendingUp, Check } from "lucide-react";

const InsuranceBrochure = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Business Outcome Focused */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white to-brand-yellow/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                <div className="w-full md:w-3/5 space-y-5">
                  <div className="flex space-x-3 items-center">
                    <span className="bg-brand-yellow/10 text-yellow-600 text-sm font-medium px-3 py-1 rounded-full">Insurance</span>
                    <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Agentic AI Solution</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black animate-fade-in">
                    <span className="text-yellow-600">Boost Policy Renewals. Reduce Churn. Drive Cross-Sell Revenue.</span>
                  </h1>
                  <p className="text-xl text-gray-700">
                    The agentic AI system that autonomously builds customer loyalty and drives growth across the entire insurance journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="yellow" size="lg" asChild>
                      <Link to="/demo">
                        Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-2/5 relative">
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-yellow/30 to-brand-orange/20 rounded-full blur-3xl"></div>
                  <div className="bg-white rounded-xl shadow-lg p-4 animate-scale-in">
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center p-4">
                      <div className="text-center">
                        <ShieldCheck className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">
                          From policy holders to lifelong advocates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                    The Challenge
                  </h2>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-lg text-gray-700 mb-4">
                    Insurance companies invest heavily in digital transformation but still struggle with customer engagement, retention, and cross-selling initiatives.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-yellow-600 font-bold">·</span>
                      </div>
                      <p className="text-gray-600">Generic renewal reminders and outreach lead to policy lapses and lost revenue</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-yellow-600 font-bold">·</span>
                      </div>
                      <p className="text-gray-600">Rigid, rules-based systems fail to adapt to individual customer needs and motivations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-yellow-600 font-bold">·</span>
                      </div>
                      <p className="text-gray-600">Low digital engagement leads to high service costs and missed self-service opportunities</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-yellow-600 font-bold">·</span>
                      </div>
                      <p className="text-gray-600">Cross-sell attempts often feel transactional rather than beneficial to the customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                    The Solution
                  </h2>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-lg text-gray-700 mb-6">
                    A system of goal-driven AI agents that think, act, and learn — individually for each policyholder.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center">
                          <BrainCircuit className="h-5 w-5 text-yellow-600" />
                        </div>
                        <h3 className="font-semibold">One Agent Per Customer</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Each policyholder gets a dedicated AI agent that understands their unique motivations</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center">
                          <Network className="h-5 w-5 text-brand-orange" />
                        </div>
                        <h3 className="font-semibold">Cross-Channel Learning</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Unified intelligence across all channels and touchpoints</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center">
                          <Clock className="h-5 w-5 text-brand-pink" />
                        </div>
                        <h3 className="font-semibold">Persistent Memory</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Remembers interaction history and policy preferences to build on past context</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                          <Zap className="h-5 w-5 text-green-600" />
                        </div>
                        <h3 className="font-semibold">Intelligent Automation</h3>
                      </div>
                      <p className="text-gray-600 text-sm">Optimizes all variables (message, channel, timing) to achieve business goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Impact Use Cases Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6 text-center">
                High-Impact Insurance Use Cases
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Use Case 1 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-yellow-600" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Increase Policy Renewals</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Personalized nudges with the right message, channel, timing, and incentive for each customer based on their motivation triggers.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-yellow-600">+29% renewal rate</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 2 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center shrink-0">
                        <TrendingUp className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Boost Cross-Sell & Upsell</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Intelligently cross-sell related policies by identifying interest signals and life-stage needs for personalized recommendations.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-brand-orange">+35% policy attachment</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 3 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5 text-brand-pink" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Convert Leads with Real-Time Engagement</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Maximize lead conversion by adapting approach in real-time—product pitch, tone, follow-up timing, and incentive.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-brand-pink">+43% lead-to-policy rate</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 4 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Prevent Churn with Adaptive Retention</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Retain high-value customers with personalized, contextual outreach that matches retention offers to customer concerns.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-green-600">-34% churn reduction</span></p>
                    </div>
                  </div>
                </div>

                {/* Use Case 5 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Drive App & Portal Engagement</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Increase use of digital self-service with contextual nudges tailored to individual behavioral profiles.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-blue-600">+51% digital engagement</span></p>
                    </div>
                  </div>
                </div>
                
                {/* Use Case 6 */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-black">Drive Loyalty & Referrals</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Identify the right moment to trigger personalized referral nudges with tailored incentives based on customer profiles.
                    </p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <p className="text-sm font-medium">Impact: <span className="text-purple-600">+47% referral conversion</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Condensed Version */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6 text-center">
                How Thoughtnudge Works
              </h2>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold text-brand-black mb-4">The Neuronudge Framework</h3>
                    <p className="text-gray-700 mb-4">
                      Our proprietary system combines AI with behavioral science to create agents that not only understand policyholder behavior but take autonomous action.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                          <BrainCircuit className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-bold">Goal-Driven Intelligence</h4>
                          <p className="text-sm text-gray-600">Agents optimize towards business KPIs like retention and cross-sell</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                          <Infinity className="h-5 w-5 text-brand-orange" />
                        </div>
                        <div>
                          <h4 className="font-bold">Autonomous Execution</h4>
                          <p className="text-sm text-gray-600">Agents act independently to optimize policy holder journeys</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 w-8 h-8 bg-brand-pink/20 rounded-full flex items-center justify-center">
                          <Network className="h-5 w-5 text-brand-pink" />
                        </div>
                        <div>
                          <h4 className="font-bold">Cross-Channel Intelligence</h4>
                          <p className="text-sm text-gray-600">Unified learning across all customer touchpoints</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-gray-50 p-4 rounded-lg h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="relative inline-block">
                          <div className="w-16 h-16 bg-yellow-500/20 rounded-full absolute -top-3 -left-3 animate-pulse"></div>
                          <div className="w-16 h-16 bg-brand-orange/20 rounded-full absolute -bottom-3 -right-3 animate-pulse delay-500"></div>
                          <BrainCircuit className="h-20 w-20 text-yellow-600 relative z-10" />
                        </div>
                        <p className="mt-4 font-medium">Reinforcement Learning + Behavioral Science</p>
                        <p className="text-sm text-gray-600 mt-2">Continuous optimization for every individual policyholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Thoughtnudge + CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                    Why Thoughtnudge
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">AI That Understands Human Behavior</p>
                        <p className="text-sm text-gray-600">Beyond traditional segmentation to individual understanding</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">Enterprise Security & Compliance</p>
                        <p className="text-sm text-gray-600">Built for the regulatory requirements of insurance</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">Rapid Time-to-Value</p>
                        <p className="text-sm text-gray-600">First results in 30-60 days with minimal IT resources</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium">Proven with Major Insurers</p>
                        <p className="text-sm text-gray-600">Deployed with leading carriers across P&C, health, and life</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="bg-gradient-to-br from-brand-black to-gray-800 text-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-3">Ready to Transform Your Insurance Growth?</h3>
                    <p className="mb-6">
                      Join forward-thinking insurers using Thoughtnudge's autonomous growth agents to build deeper relationships with policyholders and drive measurable business outcomes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="yellow" size="lg" className="group" asChild>
                        <Link to="/demo">
                          Book a Demo
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InsuranceBrochure;
