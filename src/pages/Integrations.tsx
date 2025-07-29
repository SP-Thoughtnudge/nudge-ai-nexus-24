
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Check, Database, MessageSquare, Layers, ArrowRight } from "lucide-react";
import IntegrationsCloud from "@/components/product/integrations-cloud";

const Integrations = () => {
  const categories = [
    {
      title: "Customer Data Platforms",
      platforms: ["Segment", "mParticle", "RudderStack", "Tealium"]
    },
    {
      title: "Marketing Automation",
      platforms: ["Braze", "Iterable", "Klaviyo", "Customer.io"]
    },
    {
      title: "CRM & ESP",
      platforms: ["Salesforce Marketing Cloud", "HubSpot", "Mailchimp", "SendGrid"]
    },
    {
      title: "Messaging & Channels",
      platforms: ["Twilio", "OneSignal", "Sendbird", "Firebase"]
    },
    {
      title: "E-Commerce",
      platforms: ["Shopify", "BigCommerce", "Magento", "WooCommerce"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 animate-fade-in">
                Connect With Your Existing Tech Stack
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in [animation-delay:200ms]">
                Thoughtnudge integrates seamlessly with 50+ platforms, enhancing your current tools with autonomous intelligence rather than replacing them.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Cloud */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <IntegrationsCloud />
          </div>
        </section>

        {/* How Integration Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                How Integration Works
              </h2>
              <p className="text-xl text-gray-600">
                Get up and running in days, not weeks or months.
              </p>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">            
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-brand-orange/20 text-brand-orange rounded-full text-lg font-bold">
                    <Database className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-brand-black">Connect Your Data</h4>
                  <p className="text-gray-600">
                    Integrate with your CDP, data warehouse, or directly with your website/app to gather customer signals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span>Simple API connections</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span>Pre-built connectors</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-brand-orange/20 text-brand-orange rounded-full text-lg font-bold">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-brand-black">AI Processing Layer</h4>
                  <p className="text-gray-600">
                    Our AI analyzes signals and makes autonomous decisions for each customer in real-time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span>No code required</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span>Secure data processing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-brand-orange/20 text-brand-orange rounded-full text-lg font-bold">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-brand-black">Activation Through Your Stack</h4>
                  <p className="text-gray-600">
                    Decisions flow to your existing execution channels—email, SMS, push, on-site—through our API.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span>Unified channel management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" />
                      <span>Consistent customer experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Our Integration Partners
              </h2>
              <p className="text-xl text-gray-600">
                Compatible with the tools you already use and love.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-brand-black mb-4">
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.platforms.map((platform, pIndex) => (
                      <li key={pIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
                        <span>{platform}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 p-6 rounded-lg flex flex-col justify-center items-center text-center">
                <h4 className="text-lg font-semibold text-brand-black mb-2">
                  Don't see your platform?
                </h4>
                <p className="text-gray-600 mb-4">
                  Our flexible API means we can integrate with almost any system.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact us to discuss</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Benefits of Our Integration Approach
              </h2>
              <p className="text-xl text-gray-600">
                Enhance what you have without the pain of ripping and replacing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-brand-black mb-4">Fast Implementation</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Quick Setup</p>
                      <p className="text-sm text-gray-600">Most customers are up and running within days</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">No Migration Required</p>
                      <p className="text-sm text-gray-600">Keep your existing tools and infrastructure</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Minimal IT Resources</p>
                      <p className="text-sm text-gray-600">Our team handles the technical heavy lifting</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold text-brand-black mb-4">Business Impact</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Maximize Existing Investments</p>
                      <p className="text-sm text-gray-600">Get more ROI from your current tech stack</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Single Customer View</p>
                      <p className="text-sm text-gray-600">Unify data across all systems for true 1:1 personalization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-orange mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Future-Proof</p>
                      <p className="text-sm text-gray-600">Easily add new channels and tools as your needs evolve</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Ready to Integrate Thoughtnudge?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team will guide you through the integration process and ensure a smooth setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="orange" size="lg" asChild>
                  <Link to="/demo">
                    Request Integration Consultation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <Link to="/product">
                    <span>Learn More About Our Technology</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;
