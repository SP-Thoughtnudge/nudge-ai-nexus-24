
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Blogs = () => {
  // Sample blog data - in a real app, this would come from an API or CMS
  const blogs = [
    {
      id: "1",
      title: "Beyond A/B Testing: How AI is Transforming Customer Engagement",
      excerpt: "Traditional A/B testing is becoming obsolete as AI-driven personalization offers more nuanced, individual-level optimization in real-time.",
      author: "Sarah Johnson",
      date: "May 1, 2025",
      readTime: "8 min read",
      category: "AI Technology",
      image: "/placeholder.svg",
      tags: ["AI", "Customer Experience", "Personalization"]
    },
    {
      id: "2",
      title: "The Psychology of Personalization: Why One-Size-Fits-All Marketing Fails",
      excerpt: "Understanding the psychological principles behind why personalized experiences dramatically outperform generic ones across all customer touchpoints.",
      author: "Michael Chen",
      date: "April 28, 2025",
      readTime: "6 min read",
      category: "Marketing Psychology",
      image: "/placeholder.svg",
      tags: ["Psychology", "Marketing", "Customer Behavior"]
    },
    {
      id: "3",
      title: "Building Customer Loyalty in the AI Era",
      excerpt: "How autonomous AI agents are creating deeper customer relationships through continuous learning and adaptation to individual preferences.",
      author: "Elena Rodriguez",
      date: "April 24, 2025",
      readTime: "11 min read",
      category: "Customer Retention",
      image: "/placeholder.svg",
      tags: ["Customer Loyalty", "AI", "Retention"]
    },
    {
      id: "4",
      title: "From Data Silos to Unified Intelligence: The New Marketing Tech Stack",
      excerpt: "How organizations are breaking down data silos and creating a unified customer intelligence layer that powers all engagement channels.",
      author: "James Wilson",
      date: "April 20, 2025",
      readTime: "9 min read",
      category: "MarTech",
      image: "/placeholder.svg",
      tags: ["MarTech", "Data Integration", "Customer Data"]
    },
    {
      id: "5",
      title: "The ROI of AI-Driven Customer Engagement",
      excerpt: "A deep dive into the measurable business impacts of implementing autonomous AI agents for customer engagement across industries.",
      author: "Priya Patel",
      date: "April 15, 2025",
      readTime: "7 min read",
      category: "Business Impact",
      image: "/placeholder.svg",
      tags: ["ROI", "Business Case", "AI Implementation"]
    },
    {
      id: "6",
      title: "Ethical AI: Balancing Personalization and Privacy",
      excerpt: "How businesses can leverage AI for personalization while respecting customer privacy and maintaining ethical standards.",
      author: "Thomas Brown",
      date: "April 10, 2025",
      readTime: "10 min read",
      category: "Ethics",
      image: "/placeholder.svg",
      tags: ["Ethics", "Privacy", "Responsible AI"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Explore the latest thinking on AI-driven customer engagement, personalization strategies, and the future of marketing automation.
            </p>
          </div>
          
          {/* Featured blog post */}
          <div className="mb-16 bg-gray-50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-gray-200 min-h-[300px] md:min-h-full"></div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <span className="px-2 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs">Featured</span>
                  <span>{blogs[0].category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-black">
                  {blogs[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogs[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{blogs[0].author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{blogs[0].date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{blogs[0].readTime}</span>
                  </div>
                </div>
                <div>
                  <Button asChild variant="orange" className="group">
                    <Link to={`/blogs/${blogs[0].id}`}>
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog listing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-brand-black">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.slice(1).map((blog) => (
                <Card key={blog.id} className="overflow-hidden h-full flex flex-col">
                  <div className="h-48 bg-gray-200"></div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{blog.category}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-brand-black">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link 
                        to={`/blogs/${blog.id}`} 
                        className="text-brand-orange flex items-center hover:underline"
                      >
                        Read more
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Topic filters */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-4 text-brand-black">Explore by Topic</h3>
            <div className="flex flex-wrap gap-2">
              {["AI", "Customer Experience", "Personalization", "MarTech", "ROI", "Ethics", "Privacy", "Automation", "Data Science", "Marketing Psychology"].map((tag) => (
                <Link 
                  key={tag} 
                  to="#" 
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 text-sm transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-brand-orange/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-brand-black">
              Ready to Transform Your Customer Engagement?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Schedule a personalized demo to see how Thoughtnudge can automate your customer engagement with AI that learns each individual.
            </p>
            <Button variant="orange" size="lg" asChild>
              <Link to="/demo">
                Schedule a Meeting
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
