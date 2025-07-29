
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Presentation, BrainCircuit, MessageCircle, Zap, Layers, Check } from "lucide-react";

const DemoDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 9;
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      goToNextSlide();
    } else if (e.key === "ArrowLeft") {
      goToPreviousSlide();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Presentation className="h-6 w-6 text-brand-orange" />
              <h1 className="text-2xl font-bold text-brand-black">ThoughtNudge Demo Deck</h1>
            </div>
            <div className="text-sm text-gray-500">
              Slide {currentSlide} of {totalSlides}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden min-h-[70vh] relative">
            {/* Slide 1 */}
            {currentSlide === 1 && (
              <div className="p-10 md:p-16 h-full">
                <div className="flex flex-col md:flex-row h-full gap-8 md:gap-12">
                  <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
                    <div className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full w-fit">
                      The Problem
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                      Growth Today Is a Game of Constant Decisions
                    </h2>
                    <p className="text-lg text-gray-700">
                      Growth and marketing teams are under pressure to make hundreds of decisions every day. 
                      Each choice impacts conversions, revenue, and customer retention. 
                      Yet, most decisions are made with guesswork, gut feeling, and rigid tools.
                    </p>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                      {/* Split-screen visual of growth manager juggling tasks */}
                      <div className="bg-white rounded-xl shadow-lg p-4">
                        <div className="relative bg-gray-100 rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                          <div className="grid grid-cols-2 grid-rows-2 gap-2 absolute inset-0 p-3">
                            <div className="bg-white rounded shadow-sm p-2 text-xs text-center flex flex-col items-center justify-center">
                              <Layers className="h-6 w-6 text-brand-orange mb-1" />
                              <span>CDP Dashboard</span>
                            </div>
                            <div className="bg-white rounded shadow-sm p-2 text-xs text-center flex flex-col items-center justify-center">
                              <MessageCircle className="h-6 w-6 text-brand-pink mb-1" />
                              <span>ESP Campaign</span>
                            </div>
                            <div className="bg-white rounded shadow-sm p-2 text-xs text-center flex flex-col items-center justify-center">
                              <Zap className="h-6 w-6 text-yellow-500 mb-1" />
                              <span>WhatsApp Templates</span>
                            </div>
                            <div className="bg-white rounded shadow-sm p-2 text-xs text-center flex flex-col items-center justify-center">
                              <BrainCircuit className="h-6 w-6 text-blue-500 mb-1" />
                              <span>Analysis Spreadsheets</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 space-y-2">
                          {/* Notifications */}
                          <div className="bg-red-50 text-red-700 text-sm p-2 rounded flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                            Campaign review pending
                          </div>
                          <div className="bg-yellow-50 text-yellow-700 text-sm p-2 rounded flex items-center">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                            Offer budget exceeded
                          </div>
                          <div className="bg-blue-50 text-blue-700 text-sm p-2 rounded flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Customer churn spike
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 2 */}
            {currentSlide === 2 && (
              <div className="p-10 md:p-16 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-8 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="bg-brand-pink/10 text-brand-pink text-sm font-medium px-3 py-1 rounded-full w-fit mx-auto">
                      How It's Done Today
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                      Complex Tools. Siloed Systems. Manual Campaigns.
                    </h2>
                    <p className="text-lg text-gray-700">
                      In large organizations, running a single personalized campaign means coordinating across 
                      data teams, compliance, and activation platforms. Even then, insights are delayed, 
                      personalization is shallow, and the best decision often comes too late.
                    </p>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center">
                    <div className="w-full max-w-3xl">
                      {/* Campaign approval workflow */}
                      <div className="relative">
                        <div className="space-y-6">
                          {/* Step 1 */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="font-bold text-brand-orange">1</span>
                            </div>
                            <div className="flex-grow">
                              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm relative">
                                <h3 className="font-bold text-gray-800">Data analyst pulls segments from a CDP</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                  Manual process requiring technical SQL knowledge and coordination with data team
                                </p>
                                {/* Error indicator */}
                                <div className="absolute -right-2 -top-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full border border-red-200">
                                  Segment outdated
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Step 2 */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="font-bold text-brand-orange">2</span>
                            </div>
                            <div className="flex-grow">
                              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                                <h3 className="font-bold text-gray-800">Marketer builds rules in ESP</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                  Complex rule-building process with limited personalization options
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Step 3 */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="font-bold text-brand-orange">3</span>
                            </div>
                            <div className="flex-grow">
                              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm relative">
                                <h3 className="font-bold text-gray-800">Legal/Compliance approval</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                  Multi-day approval process with potential for revisions and delays
                                </p>
                                {/* Error indicator */}
                                <div className="absolute -right-2 -top-2 bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full border border-yellow-200">
                                  Offer not approved
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Step 4 */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="font-bold text-brand-orange">4</span>
                            </div>
                            <div className="flex-grow">
                              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm relative">
                                <h3 className="font-bold text-gray-800">Message variations A/B tested manually</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                  Limited testing capacity with coarse-grained segments
                                </p>
                                {/* Error indicator */}
                                <div className="absolute -right-2 -top-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full border border-blue-200">
                                  Channel limits exceeded
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Step 5 */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="font-bold text-brand-orange">5</span>
                            </div>
                            <div className="flex-grow">
                              <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                                <h3 className="font-bold text-gray-800">Launch + Wait 2 weeks for analysis</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                  Long feedback loops prevent rapid optimization
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Vertical line connecting steps */}
                        <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 3 */}
            {currentSlide === 3 && (
              <div className="p-10 md:p-16 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-8 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full w-fit mx-auto">
                      Solution
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                      Meet Your AI Teammate That Never Sleeps
                    </h2>
                    <p className="text-lg text-gray-700">
                      Thoughtnudge eliminates guesswork by giving you AI agents that learn and optimize in real time. 
                      It doesn't just automate—it thinks, experiments, and adapts to each user.
                    </p>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center">
                    <div className="max-w-2xl w-full">
                      {/* AI brain connected to platforms visual */}
                      <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
                        {/* Brain in center */}
                        <div className="flex justify-center mb-8 relative">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-pink/20 flex items-center justify-center z-10">
                            <BrainCircuit className="h-16 w-16 text-brand-orange" />
                          </div>
                          {/* Glowing effect */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-orange/10 rounded-full animate-pulse"></div>
                        </div>
                        
                        {/* Connected systems */}
                        <div className="grid grid-cols-3 gap-4">
                          {/* CDP */}
                          <div className="bg-gray-50 rounded p-3 text-center">
                            <div className="bg-white rounded-lg h-10 flex items-center justify-center shadow-sm mb-2">
                              <span className="text-sm font-medium">CDPs</span>
                            </div>
                            <div className="h-20 flex items-center justify-center">
                              <div className="w-full h-0.5 bg-brand-orange"></div>
                            </div>
                          </div>
                          
                          {/* CRM */}
                          <div className="bg-gray-50 rounded p-3 text-center">
                            <div className="bg-white rounded-lg h-10 flex items-center justify-center shadow-sm mb-2">
                              <span className="text-sm font-medium">CRMs</span>
                            </div>
                            <div className="h-20 flex items-center justify-center">
                              <div className="w-full h-0.5 bg-brand-pink"></div>
                            </div>
                          </div>
                          
                          {/* Email */}
                          <div className="bg-gray-50 rounded p-3 text-center">
                            <div className="bg-white rounded-lg h-10 flex items-center justify-center shadow-sm mb-2">
                              <span className="text-sm font-medium">Email</span>
                            </div>
                            <div className="h-20 flex items-center justify-center">
                              <div className="w-full h-0.5 bg-yellow-500"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Arrows flowing */}
                        <div className="mt-4 grid grid-cols-3 gap-4">
                          <div className="flex flex-col items-center">
                            <ArrowRight className="h-5 w-5 text-brand-orange mb-1" />
                            <div className="bg-white rounded-lg w-full p-2 shadow-sm">
                              <span className="text-xs block text-center">WhatsApp</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <ArrowRight className="h-5 w-5 text-brand-pink mb-1" />
                            <div className="bg-white rounded-lg w-full p-2 shadow-sm">
                              <span className="text-xs block text-center">SMS</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <ArrowRight className="h-5 w-5 text-yellow-500 mb-1" />
                            <div className="bg-white rounded-lg w-full p-2 shadow-sm">
                              <span className="text-xs block text-center">App Notifications</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Personalized actions output */}
                        <div className="mt-6 bg-gradient-to-r from-brand-orange/10 to-brand-pink/10 p-4 rounded-lg">
                          <h3 className="text-center font-medium mb-2">Personalized Actions</h3>
                          <div className="grid grid-cols-3 gap-3 text-sm">
                            <div className="bg-white p-2 rounded shadow-sm text-center">
                              <span className="text-xs font-medium">Perfect Timing</span>
                            </div>
                            <div className="bg-white p-2 rounded shadow-sm text-center">
                              <span className="text-xs font-medium">Right Message</span>
                            </div>
                            <div className="bg-white p-2 rounded shadow-sm text-center">
                              <span className="text-xs font-medium">Best Channel</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 4 */}
            {currentSlide === 4 && (
              <div className="p-10 md:p-16 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-8 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full w-fit mx-auto">
                      How It Works
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                      One Setup. Millions of Smart Nudges.
                    </h2>
                    <p className="text-lg text-gray-700">
                      In a few clicks, Thoughtnudge connects to your stack, understands your goals, 
                      and launches AI agents that experiment and personalize like a human would—only 
                      faster and more precisely.
                    </p>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center">
                    <div className="max-w-3xl w-full">
                      {/* 5-step flow */}
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {/* Step 1 */}
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 relative">
                          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold">1</div>
                          <div className="h-12 flex items-center justify-center mb-2">
                            <Layers className="h-8 w-8 text-brand-orange" />
                          </div>
                          <h3 className="font-medium text-center mb-1">Connect Your Tools</h3>
                          <p className="text-xs text-center text-gray-600">CDPs, ESPs, SMS providers</p>
                        </div>
                        
                        {/* Step 2 */}
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 relative">
                          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold">2</div>
                          <div className="h-12 flex items-center justify-center mb-2">
                            <BrainCircuit className="h-8 w-8 text-brand-orange" />
                          </div>
                          <h3 className="font-medium text-center mb-1">Create AI Agent</h3>
                          <p className="text-xs text-center text-gray-600">Define business goals</p>
                        </div>
                        
                        {/* Step 3 */}
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 relative">
                          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold">3</div>
                          <div className="h-12 flex items-center justify-center mb-2">
                            <Zap className="h-8 w-8 text-brand-orange" />
                          </div>
                          <h3 className="font-medium text-center mb-1">Configure Space</h3>
                          <p className="text-xs text-center text-gray-600">Actions, rules, content</p>
                        </div>
                        
                        {/* Step 4 */}
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 relative">
                          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold">4</div>
                          <div className="h-12 flex items-center justify-center mb-2">
                            <MessageCircle className="h-8 w-8 text-brand-orange" />
                          </div>
                          <h3 className="font-medium text-center mb-1">Launch Agent</h3>
                          <p className="text-xs text-center text-gray-600">Start optimization</p>
                        </div>
                        
                        {/* Step 5 */}
                        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 relative">
                          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold">5</div>
                          <div className="h-12 flex items-center justify-center mb-2">
                            <Check className="h-8 w-8 text-green-500" />
                          </div>
                          <h3 className="font-medium text-center mb-1">Watch Results</h3>
                          <p className="text-xs text-center text-gray-600">Real-time optimization</p>
                        </div>
                      </div>
                      
                      {/* Animation */}
                      <div className="mt-8 bg-gradient-to-r from-gray-50 to-white rounded-lg p-6">
                        <div className="flex items-center justify-center">
                          <div className="text-center">
                            <div className="inline-flex items-center justify-center mb-4">
                              <div className="h-3 w-3 bg-red-400 rounded-full mr-2 animate-ping"></div>
                              <p className="text-sm font-medium">AI Agent Learning in Real Time</p>
                            </div>
                            <div className="h-20 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-4">
                              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-gradient-to-r from-brand-orange to-brand-pink h-full rounded-full animate-[progress_3s_ease-in-out_infinite]" style={{width: '60%'}}></div>
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                              Agent is continuously optimizing for your business goals
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 5 */}
            {currentSlide === 5 && (
              <div className="p-10 md:p-16 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-8 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full w-fit mx-auto">
                      The Demo
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                      Watch an AI Agent in Action
                    </h2>
                    <p className="text-lg text-gray-700">
                      See how the ThoughtNudge AI autonomously makes decisions for each individual customer.
                    </p>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center">
                    <div className="max-w-3xl w-full">
                      {/* Demo video placeholder */}
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gray-100 h-64 md:h-96 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-brand-orange/90 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-brand-orange transition-colors">
                              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                            </div>
                            <p className="text-gray-500 font-medium">
                              Click to play product demo
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                              (Replace with actual product footage)
                            </p>
                          </div>
                        </div>
                        <div className="p-4 border-t border-gray-100">
                          <h3 className="font-medium text-gray-800">Demo Highlights:</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                              <span className="text-sm text-gray-600">Setting up an AI agent in under 5 minutes</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                              <span className="text-sm text-gray-600">Real-time decisioning for individual customers</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                              <span className="text-sm text-gray-600">Performance metrics and insights dashboard</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 6 */}
            {currentSlide === 6 && (
              <div className="p-10 md:p-16 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-8 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full w-fit mx-auto">
                      Analytics & Learning
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                      Transparency. Insights. Confidence.
                    </h2>
                    <p className="text-lg text-gray-700">
                      Get visibility into what the AI is doing, why it's doing it, and how it's improving outcomes. 
                      Thoughtnudge builds trust through explainability.
                    </p>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center">
                    <div className="max-w-4xl w-full">
                      {/* Dashboard mockup */}
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                        {/* Dashboard header */}
                        <div className="bg-gray-50 border-b border-gray-200 p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
                                <BrainCircuit className="h-4 w-4 text-brand-orange" />
                              </div>
                              <h3 className="font-medium">Agent Performance Dashboard</h3>
                            </div>
                            <div className="text-sm bg-white px-3 py-1 rounded border border-gray-200">
                              Last 30 Days
                            </div>
                          </div>
                        </div>
                        
                        {/* Dashboard content */}
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left column */}
                            <div className="space-y-6">
                              {/* Performance metrics */}
                              <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-3">Agent Performance</h4>
                                <div className="grid grid-cols-3 gap-3">
                                  <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-xs text-gray-500">Conversion Rate</p>
                                    <p className="text-lg font-bold text-brand-black">24.8%</p>
                                    <p className="text-xs text-green-600 flex items-center">
                                      <ArrowRight className="h-3 w-3 rotate-45 mr-1" />
                                      +42% vs control
                                    </p>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-xs text-gray-500">Avg. Order Value</p>
                                    <p className="text-lg font-bold text-brand-black">$87.60</p>
                                    <p className="text-xs text-green-600 flex items-center">
                                      <ArrowRight className="h-3 w-3 rotate-45 mr-1" />
                                      +18% vs control
                                    </p>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-xs text-gray-500">Retention</p>
                                    <p className="text-lg font-bold text-brand-black">72.4%</p>
                                    <p className="text-xs text-green-600 flex items-center">
                                      <ArrowRight className="h-3 w-3 rotate-45 mr-1" />
                                      +31% vs control
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Learning graph */}
                              <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-3">Learning Curve</h4>
                                <div className="bg-gray-50 p-4 rounded-lg h-32 flex items-center justify-center">
                                  <div className="w-full h-20 relative">
                                    {/* Graph */}
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200"></div>
                                    <div className="absolute bottom-0 left-0 h-full w-full">
                                      <svg viewBox="0 0 100 40" className="w-full h-full">
                                        <path
                                          d="M0,40 C10,35 20,25 30,20 C40,15 50,15 60,10 C70,5 80,2 100,0"
                                          fill="none"
                                          stroke="#F97316"
                                          strokeWidth="2"
                                        />
                                      </svg>
                                    </div>
                                    <div className="absolute -bottom-6 left-0 text-xs text-gray-400">Day 1</div>
                                    <div className="absolute -bottom-6 right-0 text-xs text-gray-400">Day 30</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Right column */}
                            <div className="space-y-6">
                              {/* Customer insights */}
                              <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-3">Psychographic Insights</h4>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                      <span>Value-conscious</span>
                                      <div className="w-1/2 bg-gray-200 h-2 rounded-full self-center overflow-hidden">
                                        <div className="bg-brand-orange h-full rounded-full" style={{width: '75%'}}></div>
                                      </div>
                                      <span className="text-xs text-gray-500">75%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                      <span>Feature-oriented</span>
                                      <div className="w-1/2 bg-gray-200 h-2 rounded-full self-center overflow-hidden">
                                        <div className="bg-brand-orange h-full rounded-full" style={{width: '45%'}}></div>
                                      </div>
                                      <span className="text-xs text-gray-500">45%</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                      <span>Brand-loyal</span>
                                      <div className="w-1/2 bg-gray-200 h-2 rounded-full self-center overflow-hidden">
                                        <div className="bg-brand-orange h-full rounded-full" style={{width: '30%'}}></div>
                                      </div>
                                      <span className="text-xs text-gray-500">30%</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Channel effectiveness */}
                              <div>
                                <h4 className="text-sm font-medium text-gray-500 mb-3">Channel Performance</h4>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-white p-2 rounded shadow-sm flex items-center justify-between">
                                      <span className="text-sm">Email</span>
                                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Highly effective</span>
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm flex items-center justify-between">
                                      <span className="text-sm">SMS</span>
                                      <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">Moderate</span>
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm flex items-center justify-between">
                                      <span className="text-sm">Push</span>
                                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Highly effective</span>
                                    </div>
                                    <div className="bg-white p-2 rounded shadow-sm flex items-center justify-between">
                                      <span className="text-sm">WhatsApp</span>
                                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Highly effective</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 7 */}
            {currentSlide === 7 && (
              <div className="p-10 md:p-16 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-8 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full w-fit mx-auto">
                      Integrations
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                      Designed for Enterprise. Ready in Days.
                    </h2>
                    <p className="text-lg text-gray-700">
                      Thoughtnudge integrates seamlessly with your existing data, content, and messaging systems. 
                      No need to rip and replace.
                    </p>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center">
                    <div className="max-w-3xl w-full">
                      {/* Integration logos grid */}
                      <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                          {/* Categories */}
                          <div className="space-y-8">
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-2">Data Platforms</h3>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Segment</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Snowflake</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">BigQuery</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Redshift</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-2">ESPs</h3>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Braze</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Iterable</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-8">
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-2">CRMs</h3>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Salesforce</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">HubSpot</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-2">Messaging</h3>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Twilio</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">OneSignal</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Sendgrid</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">WhatsApp</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-8">
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-2">E-commerce</h3>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Shopify</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Magento</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 mb-2">Analytics</h3>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Mixpanel</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">Amplitude</div>
                                </div>
                                <div className="bg-gray-50 h-12 rounded flex items-center justify-center">
                                  <div className="text-center text-sm font-medium">GA4</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* API-first message */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
                          <p className="text-sm text-gray-600">
                            API-first architecture enables quick integration with any custom systems
                          </p>
                        </div>
                      </div>
                      
                      {/* Enterprise ready features */}
                      <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                          <h4 className="font-medium text-sm">Enterprise Security</h4>
                          <p className="text-xs text-gray-500 mt-1">SOC 2, GDPR, CCPA compliant</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                          <h4 className="font-medium text-sm">Single Sign-On</h4>
                          <p className="text-xs text-gray-500 mt-1">SAML, OAuth 2.0 support</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                          <h4 className="font-medium text-sm">Role-based Access</h4>
                          <p className="text-xs text-gray-500 mt-1">Custom permissions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 8 */}
            {currentSlide === 8 && (
              <div className="p-10 md:p-16 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-8 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full w-fit mx-auto">
                      Results
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                      From Campaign Fatigue to Always-On Optimization
                    </h2>
                    <p className="text-lg text-gray-700">
                      Move beyond static campaigns. Let AI agents handle experimentation, timing, 
                      and delivery while your team focuses on strategy.
                    </p>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center">
                    <div className="max-w-3xl w-full">
                      {/* Before vs After screens */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Before */}
                        <div>
                          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                            <div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center">
                              <span className="font-medium text-gray-800">Before: Manual Campaigns</span>
                            </div>
                            <div className="p-4">
                              <div className="bg-gray-100 p-3 rounded mb-4">
                                <h4 className="text-sm font-medium mb-2">Campaign Calendar</h4>
                                <div className="space-y-2">
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <span>Welcome Series</span>
                                    <span className="text-xs text-gray-500">Manual setup</span>
                                  </div>
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <span>Discount Campaign</span>
                                    <span className="text-xs text-gray-500">A/B test</span>
                                  </div>
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <span>Churn Prevention</span>
                                    <span className="text-xs text-gray-500">Rules-based</span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-gray-100 p-3 rounded">
                                <h4 className="text-sm font-medium mb-2">Manual Reporting</h4>
                                <div className="space-y-2">
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <span>Campaign Analysis</span>
                                    <span className="text-xs text-yellow-500">Due next week</span>
                                  </div>
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <span>Segment Performance</span>
                                    <span className="text-xs text-red-500">Overdue</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-3 border-t border-gray-200">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Results:</span>
                                <div className="space-x-2">
                                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">12.4% CVR</span>
                                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">High effort</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 space-y-3">
                            <div className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5">
                                <span className="text-red-500 text-xs">✕</span>
                              </div>
                              <p className="text-sm text-gray-600">Manual work for each campaign</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5">
                                <span className="text-red-500 text-xs">✕</span>
                              </div>
                              <p className="text-sm text-gray-600">Coarse-grained personalization</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 mt-0.5">
                                <span className="text-red-500 text-xs">✕</span>
                              </div>
                              <p className="text-sm text-gray-600">Slow feedback loops</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* After */}
                        <div>
                          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                            <div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center">
                              <span className="font-medium text-gray-800">After: AI Agent Dashboard</span>
                            </div>
                            <div className="p-4">
                              <div className="bg-brand-orange/5 p-3 rounded mb-4 border border-brand-orange/20">
                                <h4 className="text-sm font-medium mb-2">AI Agent Status</h4>
                                <div className="space-y-2">
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <span>Growth Agent</span>
                                    <span className="text-xs text-green-500 flex items-center">
                                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                                      Active
                                    </span>
                                  </div>
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <div className="flex items-center">
                                      <span>Learning Rate</span>
                                    </div>
                                    <div className="w-24 bg-gray-100 h-2 rounded-full overflow-hidden">
                                      <div className="bg-green-500 h-full" style={{width: '80%'}}></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-brand-pink/5 p-3 rounded border border-brand-pink/20">
                                <h4 className="text-sm font-medium mb-2">Real-time Performance</h4>
                                <div className="space-y-2">
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <span>Conversion Rate</span>
                                    <span className="text-xs text-green-500 font-medium">+43.2%</span>
                                  </div>
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <span>Revenue Impact</span>
                                    <span className="text-xs text-green-500 font-medium">+37.5%</span>
                                  </div>
                                  <div className="bg-white p-2 rounded text-sm flex justify-between">
                                    <span>Customer Retention</span>
                                    <span className="text-xs text-green-500 font-medium">+28.4%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 p-3 border-t border-gray-200">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Results:</span>
                                <div className="space-x-2">
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">24.8% CVR</span>
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Autonomous</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 space-y-3">
                            <div className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                                <Check className="h-3 w-3 text-green-500" />
                              </div>
                              <p className="text-sm text-gray-600">Autonomous optimization 24/7</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                                <Check className="h-3 w-3 text-green-500" />
                              </div>
                              <p className="text-sm text-gray-600">Individual-level personalization</p>
                            </div>
                            <div className="flex items-start">
                              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                                <Check className="h-3 w-3 text-green-500" />
                              </div>
                              <p className="text-sm text-gray-600">Real-time insight generation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide 9 */}
            {currentSlide === 9 && (
              <div className="p-10 md:p-16 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-8 space-y-4 text-center max-w-3xl mx-auto">
                    <div className="bg-brand-orange/10 text-brand-orange text-sm font-medium px-3 py-1 rounded-full w-fit mx-auto">
                      Next Steps
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                      Let's Build Smarter Together
                    </h2>
                    <p className="text-lg text-gray-700">
                      Schedule a call with our team to see how Thoughtnudge can drive measurable growth 
                      for your business in weeks, not months.
                    </p>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center">
                    <div className="max-w-2xl w-full">
                      <div className="bg-gradient-to-br from-brand-orange/5 to-brand-pink/5 rounded-xl shadow-lg p-8 text-center">
                        {/* Team image placeholder */}
                        <div className="bg-white rounded-lg mb-6 p-8">
                          <div className="flex justify-center gap-4">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="w-16 h-16 bg-gray-200 rounded-full"></div>
                            ))}
                          </div>
                          <p className="text-gray-500 mt-4 text-sm">
                            Our team of AI experts is ready to help you implement ThoughtNudge
                          </p>
                        </div>
                        
                        {/* Call to action */}
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h3 className="font-medium mb-2">Product Demo</h3>
                              <p className="text-sm text-gray-600 mb-4">See ThoughtNudge in action with your data</p>
                              <Button variant="orange" size="sm" className="w-full">
                                Book Demo
                              </Button>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h3 className="font-medium mb-2">Starter Package</h3>
                              <p className="text-sm text-gray-600 mb-4">Launch your first AI agent in 2 weeks</p>
                              <Button variant="outline" size="sm" className="w-full">
                                Learn More
                              </Button>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h3 className="font-medium mb-2">Enterprise Plan</h3>
                              <p className="text-sm text-gray-600 mb-4">Custom integration with your tech stack</p>
                              <Button variant="outline" size="sm" className="w-full">
                                Contact Sales
                              </Button>
                            </div>
                          </div>
                          
                          <div className="pt-4">
                            <Button variant="orange" size="lg" className="mx-auto">
                              Start Your ThoughtNudge Journey Today
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation controls */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPreviousSlide}
                disabled={currentSlide === 1}
                className="opacity-80 hover:opacity-100"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={goToNextSlide}
                disabled={currentSlide === totalSlides}
                className="opacity-80 hover:opacity-100"
              >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>

          {/* Slide navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index + 1)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index + 1 ? "bg-brand-orange" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DemoDeck;
