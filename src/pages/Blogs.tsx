
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
import LazyImage from "@/components/ui/lazy-image";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination";

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState<string[]>(["All"]);

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
    addStructuredData(blogSchema, 'blog');

    // Fetch dynamic categories
    const fetchCategories = async () => {
      try {
        console.log('Fetching categories from Contentful...');
        const uniqueCategories = await contentfulService.getUniqueCategories();
        console.log('Raw categories from API:', uniqueCategories);
        const normalized = Array.from(new Set((uniqueCategories || []).filter(Boolean))).sort();
        if (normalized.length === 0) {
          const fallbackCategories = ["All", "Behavioral Science", "AI & Product", "Case Studies", "E-commerce Strategies"];
          console.log('Using fallback categories:', fallbackCategories);
          setCategories(fallbackCategories);
        } else {
          const finalCategories = ["All", ...normalized];
          console.log('Final categories to render:', finalCategories);
          setCategories(finalCategories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Fallback to default categories
        const fallbackCategories = ["All", "Behavioral Science", "AI & Product", "Case Studies"];
        console.log('Using fallback categories:', fallbackCategories);
        setCategories(fallbackCategories);
      }
    };

    fetchCategories();
  }, []);

useEffect(() => {
    // Reset to first page when filters or search change
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        console.log('=== DEBUGGING BLOG FETCH ===');
        console.log('Fetching blogs with params:', { category: activeFilter, searchQuery, limit: perPage, page: currentPage });
        
        // Clear cache for debugging
        console.log('Clearing cache for debugging...');
        
        const [{ posts, total, totalPages: pages }, featured, recent] = await Promise.all([
          contentfulService.getBlogPostsPage({ category: activeFilter, searchQuery, limit: perPage, page: currentPage }),
          contentfulService.getFeaturedBlogPost(),
          contentfulService.getFeaturedBlogPosts(3)
        ]);
        
        console.log('=== API RESPONSE SUMMARY ===');
        console.log('Posts returned:', posts.length);
        console.log('Total from API:', total);
        console.log('Total pages calculated:', pages);
        console.log('Featured post:', featured?.fields?.title || 'None');
        console.log('Current page:', currentPage);
        console.log('Posts per page:', perPage);
        
        console.log('=== INDIVIDUAL POSTS ===');
        posts.forEach((post, idx) => {
          console.log(`${idx + 1}. ${post.fields.title} (ID: ${post.sys.id}, Featured: ${post.fields.isFeatured})`);
        });
        
        setBlogs(posts);
        setTotalPosts(total);
        setTotalPages(pages);
        setFeaturedPost(featured);
        setRecentPosts(recent);
        
        console.log('=== STATE UPDATED ===');
        console.log('Blogs in state:', posts.length);
        console.log('Total posts in state:', total);
        console.log('Total pages in state:', pages);
        
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, [activeFilter, searchQuery, currentPage]);

  const formatDate = (post: BlogPost) => {
    const dateToUse = post.fields.publishedAt || post.sys.publishedAt || post.sys.createdAt;
    return new Date(dateToUse).toLocaleDateString('en-US', {
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
      <main className="flex-grow pt-32 pb-20 md:pt-40">
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
                         {featuredPost.fields.featuredImage?.fields?.file?.url ? (
                           <LazyImage 
                             src={`https:${featuredPost.fields.featuredImage.fields.file.url}?w=800&h=600&fit=fill&f=center`}
                             alt={featuredPost.fields.featuredImage?.fields?.title || featuredPost.fields.title}
                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                             priority
                           />
                         ) : (
                           <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                             <span className="text-gray-400 text-sm">No image available</span>
                           </div>
                         )}
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
                          {featuredPost.fields.author?.fields?.photo?.fields?.file?.url && (
                             <LazyImage 
                               src={`https:${featuredPost.fields.author.fields.photo.fields.file.url}?w=80&h=80&fit=fill&f=face`}
                               alt={featuredPost.fields.author?.fields?.name || 'Author'}
                               className="w-10 h-10 rounded-full bg-gray-200 mr-3"
                             />
                          )}
                           <div className="text-sm">
                             <p className="font-medium text-gray-900">by {featuredPost.fields.author?.fields?.name || 'Unknown'} • {formatDate(featuredPost)}</p>
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
                             {post.fields.featuredImage?.fields?.file?.url ? (
                               <LazyImage 
                                 src={`https:${post.fields.featuredImage.fields.file.url}?w=400&h=300&fit=fill&f=center`}
                                 alt={post.fields.featuredImage.fields.title || post.fields.title}
                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                               />
                             ) : (
                               <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                 <span className="text-gray-400 text-sm">No image available</span>
                               </div>
                             )}
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
                               <span>by {post.fields.author?.fields?.name || 'Unknown'} • {formatDate(post)}</span>
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
                <Button variant="default" size="lg" className="sm:w-auto">
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
                    <Button
                      key={category}
                      variant={activeFilter === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter(category)}
                      className="transition-all duration-200"
                    >
                      {category}
                    </Button>
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
            {!loading && blogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No blog posts found matching your criteria.</p>
                {(activeFilter !== 'All' || searchQuery) && (
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setActiveFilter('All');
                      setSearchQuery('');
                    }}
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            ) : loading ? (
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
                         {blog.fields.featuredImage?.fields?.file?.url ? (
                           <LazyImage 
                             src={`https:${blog.fields.featuredImage.fields.file.url}?w=400&h=300&fit=fill&f=center`}
                             alt={blog.fields.featuredImage.fields.title || blog.fields.title}
                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                           />
                         ) : (
                           <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                             <span className="text-gray-400 text-sm">No image available</span>
                           </div>
                         )}
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
                            {blog.fields.author?.fields?.photo?.fields?.file?.url && (
                               <LazyImage 
                                 src={`https:${blog.fields.author.fields.photo.fields.file.url}?w=64&h=64&fit=fill&f=face`}
                                 alt={blog.fields.author?.fields?.name || 'Author'}
                                 className="w-8 h-8 rounded-full bg-gray-200 mr-3"
                               />
                            )}
                             <div className="text-sm">
                               <p className="font-medium text-gray-900">by {blog.fields.author?.fields?.name || 'Unknown'} • {formatDate(blog)}</p>
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
          {!loading && totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>

                {(() => {
                  const items: React.ReactNode[] = [];
                  const maxToShow = 5;
                  let start = Math.max(1, currentPage - 2);
                  let end = Math.min(totalPages, start + maxToShow - 1);
                  if (end - start < maxToShow - 1) {
                    start = Math.max(1, end - maxToShow + 1);
                  }

                  if (start > 1) {
                    items.push(
                      <PaginationItem key={1}>
                        <PaginationLink 
                          href="#" 
                          isActive={currentPage === 1} 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setCurrentPage(1); 
                          }}
                          className="cursor-pointer"
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                    );
                    if (start > 2) items.push(<PaginationEllipsis key="start-ellipsis" />);
                  }

                  for (let p = start; p <= end; p++) {
                    items.push(
                      <PaginationItem key={p}>
                        <PaginationLink 
                          href="#" 
                          isActive={p === currentPage} 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setCurrentPage(p); 
                          }}
                          className="cursor-pointer"
                        >
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }

                   if (end < totalPages) {
                     if (end < totalPages - 1) items.push(<PaginationEllipsis key="end-ellipsis" />);
                     items.push(
                       <PaginationItem key={totalPages}>
                         <PaginationLink 
                           href="#" 
                           isActive={currentPage === totalPages} 
                           onClick={(e) => { 
                             e.preventDefault(); 
                             setCurrentPage(totalPages); 
                           }}
                           className="cursor-pointer"
                         >
                           {totalPages}
                         </PaginationLink>
                       </PaginationItem>
                     );
                   }

                   return items;
                 })()}

                 <PaginationItem>
                   <PaginationNext
                     href="#"
                     onClick={(e) => {
                       e.preventDefault();
                       if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                     }}
                     className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                   />
                 </PaginationItem>
               </PaginationContent>
             </Pagination>
           )}
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
