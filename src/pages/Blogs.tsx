
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, User, Clock, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { contentfulService, BlogPost } from "@/lib/contentful";
import { updateSEOTags, addStructuredData, blogSchema } from "@/lib/seo";

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Behavioral Science", "AI & Product", "Case Studies"];

  useEffect(() => {
    // SEO optimization
    updateSEOTags({
      title: "Thoughtnudge Blog | AI, Behavioral Science & Marketing Insights",
      description: "Explore insights on AI-powered marketing, behavioral science, and autonomous customer decisioning. Stay updated with the latest in marketing technology.",
      url: "https://www.thoughtnudge.com/blogs",
      image: "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
      type: "website"
    });

    // Add Blog structured data
    addStructuredData(blogSchema);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const [allBlogs, featured, recent] = await Promise.all([
          contentfulService.getBlogPosts(activeFilter, searchQuery),
          contentfulService.getFeaturedBlogPost(),
          contentfulService.getFeaturedBlogPosts(3)
        ]);
        setBlogs(allBlogs);
        setFeaturedPost(featured);
        setRecentPosts(recent);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, [activeFilter, searchQuery]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (content: any) => {
    // Simple read time calculation based on content length
    const words = JSON.stringify(content).split(' ').length;
    const readTime = Math.ceil(words / 200); // Average reading speed
    return `${readTime} min read`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Insights & Perspectives
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the latest thinking on AI-driven customer engagement, behavioral science, and the future of autonomous growth.
            </p>
          </div>

          {/* Section 1: Featured Content */}
          {!loading && featuredPost && (
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Featured Post - 60% width */}
                <div className="lg:col-span-3">
                  <Card className="overflow-hidden h-full group cursor-pointer">
                    <Link to={`/blog/${featuredPost.fields.slug || contentfulService.generateSlug(featuredPost.fields.title)}`}>
                      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                        <img 
                          src={`https:${featuredPost.fields.featuredImage.fields.file.url}`}
                          alt={featuredPost.fields.featuredImage.fields.title || featuredPost.fields.title}
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
                            {featuredPost.fields.category}
                          </span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-pink-600 transition-colors">
                          {featuredPost.fields.title}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {featuredPost.fields.excerpt}
                        </p>
                        <div className="flex items-center">
                          {featuredPost.fields.author.fields.photo && (
                            <img 
                              src={`https:${featuredPost.fields.author.fields.photo.fields.file.url}`}
                              alt={featuredPost.fields.author.fields.name}
                              className="w-10 h-10 rounded-full bg-gray-200 mr-3"
                            />
                          )}
                          <div className="text-sm">
                            <p className="font-medium text-gray-900">{featuredPost.fields.author.fields.name}</p>
                            <p className="text-gray-500">{formatDate(featuredPost.sys.createdAt)}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </div>
                
                {/* Recent Posts - 40% width */}
                <div className="lg:col-span-2 space-y-6">
                  {recentPosts.map((post) => (
                    <Card key={post.sys.id} className="overflow-hidden group cursor-pointer">
                      <Link to={`/blog/${post.fields.slug || contentfulService.generateSlug(post.fields.title)}`}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                          <div className="aspect-[4/3] xl:aspect-square bg-gray-100 relative overflow-hidden">
                            <img 
                              src={`https:${post.fields.featuredImage.fields.file.url}`}
                              alt={post.fields.featuredImage.fields.title || post.fields.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <CardContent className="p-6">
                            <div className="mb-2">
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                {post.fields.category}
                              </span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                              {post.fields.title}
                            </h3>
                            <div className="flex items-center text-xs text-gray-500">
                              <span>{post.fields.author.fields.name}</span>
                              <span className="mx-2">•</span>
                              <span>{calculateReadTime(post.fields.content)}</span>
                            </div>
                          </CardContent>
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

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
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="overflow-hidden h-full flex flex-col">
                    <div className="aspect-[4/3] bg-gray-200 animate-pulse"></div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded mb-6 animate-pulse w-3/4"></div>
                      <div className="flex items-center mt-auto">
                        <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 animate-pulse"></div>
                        <div className="space-y-1 flex-1">
                          <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <Card key={blog.sys.id} className="overflow-hidden h-full flex flex-col group cursor-pointer">
                    <Link to={`/blog/${blog.fields.slug || contentfulService.generateSlug(blog.fields.title)}`} className="h-full flex flex-col">
                      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                        <img 
                          src={`https:${blog.fields.featuredImage.fields.file.url}`}
                          alt={blog.fields.featuredImage.fields.title || blog.fields.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <div className="mb-3">
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                            {blog.fields.category}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-pink-600 transition-colors flex-grow">
                          {blog.fields.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                          {blog.fields.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center">
                            {blog.fields.author.fields.photo && (
                              <img 
                                src={`https:${blog.fields.author.fields.photo.fields.file.url}`}
                                alt={blog.fields.author.fields.name}
                                className="w-8 h-8 rounded-full bg-gray-200 mr-3"
                              />
                            )}
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">{blog.fields.author.fields.name}</p>
                              <p className="text-gray-500">{formatDate(blog.sys.createdAt)}</p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {calculateReadTime(blog.fields.content)}
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            )}
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
