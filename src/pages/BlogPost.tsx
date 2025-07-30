import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { contentfulService, BlogPost } from "@/lib/contentful";
import { renderRichText } from "@/lib/contentful-rich-text";
import { updateSEOTags, addStructuredData, createArticleSchema } from "@/lib/seo";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setLoading(true);
      const fetchedPost = await contentfulService.getBlogPostBySlug(slug);
      setPost(fetchedPost);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post) {
      // Update SEO tags
      updateSEOTags({
        title: `${post.fields.title} | Thoughtnudge Blog`,
        description: post.fields.metaDescription || post.fields.excerpt,
        url: `https://www.thoughtnudge.com/blog/${post.fields.slug || contentfulService.generateSlug(post.fields.title)}`,
        image: post.fields.featuredImage?.fields?.file?.url ? `https:${post.fields.featuredImage.fields.file.url}` : undefined,
        type: "article",
        author: post.fields.author?.fields?.name,
        publishedTime: post.sys.createdAt,
        modifiedTime: post.sys.createdAt
      });

      // Add Article structured data
      addStructuredData(createArticleSchema(post));
    }
  }, [post]);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
                        <img
                          src={`https:${post.fields.author.fields.photo.fields.file.url}`}
                          alt={post.fields.author.fields.name}
                          className="w-12 h-12 rounded-full mr-3"
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
                            LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{formatDate(post.sys.createdAt)}</span>
                    </div>
                  </div>
                  
                  {/* Featured Image */}
                  <div className="mb-8">
                    <img
                      src={`https:${post.fields.featuredImage.fields.file.url}`}
                      alt={post.fields.featuredImage.fields.title || post.fields.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  {renderRichText(post.fields.content)}
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
                        <img
                          src={`https:${post.fields.author.fields.photo.fields.file.url}`}
                          alt={post.fields.author.fields.name}
                          className="w-16 h-16 rounded-full mr-4"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;