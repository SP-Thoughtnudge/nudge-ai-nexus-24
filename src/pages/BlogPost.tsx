import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import LazyImage from '@/components/ui/lazy-image';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { contentfulService, BlogPost } from "@/lib/contentful";
import { renderRichText } from "@/lib/contentful-rich-text";
import { updateSEOTags, addStructuredData, createArticleSchema } from "@/lib/seo";
import { preloadBlogSEO, clearHomepageMetaTags } from "@/lib/blog-seo";
import OptimizedImage from "@/components/ui/optimized-image";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Clear homepage meta tags and preload SEO immediately
  useEffect(() => {
    console.log('🚀 BlogPost component mounted for slug:', slug);
    clearHomepageMetaTags();
    
    // Set a temporary title while loading
    if (slug) {
      document.title = `Loading... | Thoughtnudge Blog`;
    }
  }, [slug]);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setLoading(true);
      
      // Preload SEO data and get post
      const fetchedPost = await preloadBlogSEO(slug);
      setPost(fetchedPost);
      
      // Fetch related posts if we have a post
      if (fetchedPost) {
        const related = await contentfulService.getRelatedPosts(
          fetchedPost.sys.id,
          fetchedPost.fields.category,
          3
        );
        setRelatedPosts(related);
      }
      
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  // Additional SEO update when post data is available (backup)
  useEffect(() => {
    if (post) {
      console.log('🔄 Additional SEO update for loaded post:', post.fields.title);
    }
  }, [post]);

  const formatDate = (post: BlogPost) => {
    const dateToUse = post.fields.publishedAt || post.sys.publishedAt || post.sys.createdAt;
    return new Date(dateToUse).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow pt-24 pb-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-64 bg-gray-200 rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow pt-24 pb-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center py-20">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blogs">
              <Button variant="pink">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/blogs">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article>
                
                {/* Header */}
                <header className="mb-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm font-medium">
                      {post.fields.category}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    {post.fields.title}
                  </h1>
                  
                  {/* Author & Meta */}
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center">
                      {post.fields.author.fields.photo && (
                        <OptimizedImage
                          src={`https:${post.fields.author.fields.photo.fields.file.url}`}
                          alt={post.fields.author.fields.name}
                          className="w-12 h-12 rounded-full mr-3"
                          priority
                        />
                      )}
                       <div>
                         <p className="font-semibold text-gray-900">by {post.fields.author.fields.name} • {formatDate(post)}</p>
                         {post.fields.author.fields.linkedinUrl && (
                           <a
                             href={post.fields.author.fields.linkedinUrl}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-sm text-pink-600 hover:text-pink-700 flex items-center"
                           >
                             LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                           </a>
                         )}
                       </div>
                    </div>
                  </div>
                  
                  {/* Featured Image */}
                  <div className="mb-8">
                    <OptimizedImage
                      src={`https:${post.fields.featuredImage.fields.file.url}`}
                      alt={post.fields.featuredImage.fields.title || post.fields.title}
                      className="w-full rounded-lg shadow-lg"
                      priority
                    />
                  </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  {renderRichText(post.fields.content)}
                </div>

                {/* Social Sharing */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-medium">Share this post:</span>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
                          window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Share on LinkedIn
                      </button>
                      <button
                        onClick={() => {
                          const text = `${post.fields.title} ${window.location.href}`;
                          const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                          window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        Share on X
                      </button>
                    </div>
                  </div>
                </div>

              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                
                {/* Author Bio Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4 text-gray-900">About the Author</h3>
                    <div className="flex items-center mb-4">
                      {post.fields.author.fields.photo && (
                        <OptimizedImage
                          src={`https:${post.fields.author.fields.photo.fields.file.url}`}
                          alt={post.fields.author.fields.name}
                          className="w-16 h-16 rounded-full mr-4"
                          lazy
                        />
                      )}
                      <div>
                        <p className="font-semibold text-gray-900">{post.fields.author.fields.name}</p>
                        {post.fields.author.fields.linkedinUrl && (
                          <a
                            href={post.fields.author.fields.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-pink-600 hover:text-pink-700 flex items-center"
                          >
                            Connect on LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-3 text-gray-900">Ready to Transform Your Growth?</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Get a personalized growth audit and discover how our AI can accelerate your customer engagement.
                    </p>
                    <Link to="/growth-audit">
                      <Button variant="pink" size="sm" className="w-full">
                        Request Growth Audit
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

              </div>
            </div>

          </div>

          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 mb-20">
              <div className="border-t border-gray-200 pt-20">
                <h3 className="text-3xl font-bold mb-8 text-gray-900">Continue Reading</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.sys.id} className="overflow-hidden h-full flex flex-col group cursor-pointer">
                      <Link to={`/blog/${relatedPost.fields.slug || contentfulService.generateSlug(relatedPost.fields.title)}`} className="h-full flex flex-col">
                        <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                          <LazyImage 
                            src={`https:${relatedPost.fields.featuredImage.fields.file.url}?w=400&h=300&fit=fill&f=center`}
                            alt={relatedPost.fields.featuredImage.fields.title || relatedPost.fields.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6 flex-grow flex flex-col">
                          <div className="mb-3">
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                              {relatedPost.fields.category}
                            </span>
                          </div>
                          <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-pink-600 transition-colors flex-grow line-clamp-2">
                            {relatedPost.fields.title}
                          </h4>
                          <div className="flex items-center mt-auto">
                            {relatedPost.fields.author.fields.photo && (
                              <LazyImage 
                                src={`https:${relatedPost.fields.author.fields.photo.fields.file.url}?w=64&h=64&fit=fill&f=face`}
                                alt={relatedPost.fields.author.fields.name}
                                className="w-8 h-8 rounded-full bg-gray-200 mr-3"
                              />
                            )}
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">
                                by {relatedPost.fields.author.fields.name} • {formatDate(relatedPost)}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;