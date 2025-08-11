import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Brain, Mail, MessageCircle } from "lucide-react";
import { updateSEOTags } from "@/lib/seo";

const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    updateSEOTags({
      title: "Integrations | Thoughtnudge Ecosystem & Connectors",
      description: "Connect Thoughtnudge with Shopify, Segment, Braze, Zendesk and more. Turn your stack into an autonomous growth engine.",
      url: "https://www.thoughtnudge.com/integrations",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });
  }, []);

  const integrations = [
    // E-commerce
    { name: "Shopify", category: "E-commerce" },
    { name: "WooCommerce", category: "E-commerce" },
    
    // Marketing & CDP
    { name: "Salesforce", category: "Marketing & CDP" },
    { name: "Segment", category: "Marketing & CDP" },
    { name: "Klaviyo", category: "Marketing & CDP" },
    { name: "CleverTap", category: "Marketing & CDP" },
    { name: "MoEngage", category: "Marketing & CDP" },
    { name: "Braze", category: "Marketing & CDP" },
    { name: "Iterable", category: "Marketing & CDP" },
    { name: "Mixpanel", category: "Marketing & CDP" },
    
    // Communication
    { name: "SendGrid", category: "Communication" },
    { name: "Gupshup", category: "Communication" },
    { name: "Firebase", category: "Communication" },
    { name: "Salesforce Marketing Cloud", category: "Communication" },
    { name: "Mailchimp", category: "Communication" },
    
    // Support
    { name: "Zendesk", category: "Support" },
    { name: "Freshdesk", category: "Support" }
  ];

  const categories = ["All", "E-commerce", "Marketing & CDP", "Communication", "Support"];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || integration.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 page-with-navbar">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 animate-fade-in">
                Connect Your Stack. Amplify Your Intelligence.
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in [animation-delay:200ms]">
                Thoughtnudge seamlessly integrates with the tools you already use. We handle the heavy lifting, turning your existing stack into an autonomous growth engine without creating new data silos.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Ecosystem */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Explore Our Ecosystem
              </h2>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for a tool (e.g., Shopify)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Integration Logos Grid */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {filteredIntegrations.map((integration, index) => (
                  <div
                    key={index}
                    className="h-20 w-full bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-center">
                      <div className="font-medium text-sm">{integration.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{integration.category}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredIntegrations.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No integrations found matching your search.</p>
                  <p className="text-gray-400 mt-2">Try adjusting your search term or category filter.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Integration Philosophy Visual */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                An Intelligence Layer, Not Another Silo
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gray-50 p-8 md:p-12 rounded-xl">
                {/* Visual Diagram */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-8">
                  {/* Left Side - Data Sources */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-black text-center mb-4">Data Sources</h3>
                    <div className="space-y-3">
                      {["Shopify", "Salesforce", "Segment", "Zendesk"].map((platform) => (
                        <div key={platform} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                          {platform}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center lg:justify-end">
                      <ArrowRight className="h-6 w-6 text-brand-orange hidden lg:block" />
                    </div>
                  </div>

                  {/* Center - AI Brain */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-brand-orange to-brand-pink p-8 rounded-full mx-auto w-32 h-32 flex items-center justify-center mb-4">
                      <Brain className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-black">Thoughtnudge AI Brain</h3>
                    <p className="text-sm text-gray-600 mt-2">Central Intelligence Layer</p>
                  </div>

                  {/* Right Side - Channels */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-black text-center mb-4">Channels</h3>
                    <div className="flex justify-center lg:justify-start">
                      <ArrowRight className="h-6 w-6 text-brand-orange hidden lg:block" />
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Email", icon: Mail },
                        { name: "WhatsApp", icon: MessageCircle },
                        { name: "Push", icon: MessageCircle }
                      ].map((channel) => (
                        <div key={channel.name} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center flex items-center justify-center gap-2">
                          <channel.icon className="h-4 w-4" />
                          {channel.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our platform acts as the central brain for your customer engagement. We ingest contextual data from your entire stack and use that intelligence to orchestrate actions through your existing communication channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Request Integration CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Our Ecosystem is Growing Every Day
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We are constantly adding new integrations. If you don't see a tool you rely on, let us know. Our flexible API is designed to connect with a wide range of modern platforms.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:hello@thoughtnudge.com">
                  Suggest an Integration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;