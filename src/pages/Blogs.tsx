
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, User, Clock, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Updated blog data with new categories
  const blogs = [
    {
      id: "1",
      title: "Beyond A/B Testing: How AI is Transforming Customer Engagement",
      excerpt: "Traditional A/B testing is becoming obsolete as AI-driven personalization offers more nuanced, individual-level optimization in real-time.",
      author: "Sarah Johnson",
      authorImage: "/placeholder.svg",
      date: "May 1, 2025",
      readTime: "8 min read",
      category: "AI & Product",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      tags: ["AI", "Customer Experience", "Personalization"],
      featured: true
    },
    {
      id: "2",
      title: "The Psychology of Personalization: Why One-Size-Fits-All Marketing Fails",
      excerpt: "Understanding the psychological principles behind why personalized experiences dramatically outperform generic ones across all customer touchpoints.",
      author: "Michael Chen",
      authorImage: "/placeholder.svg",
      date: "April 28, 2025",
      readTime: "6 min read",
      category: "Behavioral Science",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      tags: ["Psychology", "Marketing", "Customer Behavior"]
    },
    {
      id: "3",
      title: "Building Customer Loyalty in the AI Era",
      excerpt: "How autonomous AI agents are creating deeper customer relationships through continuous learning and adaptation to individual preferences.",
      author: "Elena Rodriguez",
      authorImage: "/placeholder.svg",
      date: "April 24, 2025",
      readTime: "11 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      tags: ["Customer Loyalty", "AI", "Retention"]
    },
    {
      id: "4",
      title: "From Data Silos to Unified Intelligence: The New Marketing Tech Stack",
      excerpt: "How organizations are breaking down data silos and creating a unified customer intelligence layer that powers all engagement channels.",
      author: "James Wilson",
      authorImage: "/placeholder.svg",
      date: "April 20, 2025",
      readTime: "9 min read",
      category: "AI & Product",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      tags: ["MarTech", "Data Integration", "Customer Data"]
    },
    {
      id: "5",
      title: "The ROI of AI-Driven Customer Engagement",
      excerpt: "A deep dive into the measurable business impacts of implementing autonomous AI agents for customer engagement across industries.",
      author: "Priya Patel",
      authorImage: "/placeholder.svg",
      date: "April 15, 2025",
      readTime: "7 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      tags: ["ROI", "Business Case", "AI Implementation"]
    },
    {
      id: "6",
      title: "Ethical AI: Balancing Personalization and Privacy",
      excerpt: "How businesses can leverage AI for personalization while respecting customer privacy and maintaining ethical standards.",
      author: "Thomas Brown",
      authorImage: "/placeholder.svg",
      date: "April 10, 2025",
      readTime: "10 min read",
      category: "Behavioral Science",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      tags: ["Ethics", "Privacy", "Responsible AI"]
    }
  ];

  const categories = ["All", "Behavioral Science", "AI & Product", "Case Studies"];
  
  const featuredPost = blogs.find(blog => blog.featured) || blogs[0];
  const recentPosts = blogs.filter(blog => !blog.featured).slice(0, 2);
  
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeFilter === "All" || blog.category === activeFilter;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !blog.featured;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          {/* Section 1: Hero / Featured Content */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Featured Post - 60% width */}
              <div className="lg:col-span-3">
                <Card className="overflow-hidden h-full group cursor-pointer">
                  <Link to={`/blog/${featuredPost.id}`}>
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-pink-600 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center">
                        <img 
                          src={featuredPost.authorImage} 
                          alt={featuredPost.author}
                          className="w-10 h-10 rounded-full bg-gray-200 mr-3"
                        />
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">{featuredPost.author}</p>
                          <p className="text-gray-500">{featuredPost.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
              
              {/* Recent Posts - 40% width */}
              <div className="lg:col-span-2 space-y-6">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden group cursor-pointer">
                    <Link to={`/blog/${post.id}`}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <div className="aspect-[4/3] xl:aspect-square bg-gray-100 relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="mb-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </CardContent>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Newsletter Subscription CTA */}
          <div className="mb-20 bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                The Future of Growth, Delivered Weekly.
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of industry leaders. Get our latest insights on AI, behavioral science, and autonomous growth strategy delivered straight to your inbox. No spam, ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button variant="pink" size="lg" className="sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Section 3: Main Blog Feed */}
          <div className="mb-20">
            {/* Filter and Search */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeFilter === category
                          ? 'bg-pink-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full lg:w-64"
                  />
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <Card key={blog.id} className="overflow-hidden h-full flex flex-col group cursor-pointer">
                  <Link to={`/blog/${blog.id}`} className="h-full flex flex-col">
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          {blog.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-pink-600 transition-colors flex-grow">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <img 
                            src={blog.authorImage} 
                            alt={blog.author}
                            className="w-8 h-8 rounded-full bg-gray-200 mr-3"
                          />
                          <div className="text-sm">
                            <p className="font-medium text-gray-900">{blog.author}</p>
                            <p className="text-gray-500">{blog.date}</p>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {blog.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Section 4: Pagination */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                ← Previous
              </Button>
              <Button variant="pink" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next →
              </Button>
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
