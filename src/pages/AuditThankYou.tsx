import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import founderHeadshot from "@/assets/founder-headshot.jpg";
import { contentfulService } from "@/lib/contentful";
import LazyImage from "@/components/ui/lazy-image";

const AuditThankYou = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const posts = await contentfulService.getBlogPosts();
        setBlogPosts(posts.slice(0, 3)); // Get first 3 posts
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Logo in top-left corner */}
      <div className="absolute top-6 left-6 z-10">
        <Link to="/" className="block">
          <img 
            src="/lovable-uploads/30f61a0f-8f24-4631-90a5-4de19741aa8c.png" 
            alt="Thoughtnudge" 
            className="h-12 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
      
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Section 1: Confirmation Header */}
        <div className="text-center mb-16 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
            Thank You! We're on it.
          </h1>
          <p className="text-lg text-brand-gray">
            Your request for a Growth Audit has been received.
          </p>
        </div>

        {/* Section 2: Personal Note from Founder */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Headshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={founderHeadshot}
                  alt="Himanshu Chauhan, Co-founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right Column: Note */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-brand-black">
                A Note from Our Co-founder
              </h3>
              <blockquote className="text-lg text-brand-gray leading-relaxed italic">
                "Thank you for your interest in a Growth Audit. My team and I are personally reviewing your submission and are genuinely excited to explore how we can unlock your hidden growth potential. We will be in touch very shortly with the next steps."
              </blockquote>
              <p className="text-brand-gray font-medium">
                – Himanshu Chauhan, Co-founder & CEO
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: What to Expect Next */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-brand-black mb-8">
              What Happens Now?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black mb-1">Personal Review</h4>
                  <p className="text-brand-gray">
                    Our team will review your company details to prepare for a valuable, data-driven conversation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black mb-1">Booking Email</h4>
                  <p className="text-brand-gray">
                    You will receive a personal email from our team <strong>within 24 business hours</strong> with a link to schedule your audit.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 text-left">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black mb-1">Preparation</h4>
                  <p className="text-brand-gray">
                    We'll include a couple of questions in our email to help you prepare for our session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: While You Wait */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">
              Explore Our Thinking
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.sys?.id || post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <LazyImage 
                    src={post.fields?.featuredImage?.fields?.file?.url ? `https:${post.fields.featuredImage.fields.file.url}?w=400&h=225&fit=fill&f=center` : post.image}
                    alt={post.fields?.featuredImage?.fields?.title || post.fields?.title || post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brand-black mb-4 line-clamp-2">
                    {post.fields?.title || post.title}
                  </h3>
                  <Link 
                    to={`/blog/${post.fields?.slug || contentfulService.generateSlug(post.fields?.title || post.title) || post.slug}`}
                    className="inline-flex items-center text-brand-pink hover:text-brand-pink/80 font-medium transition-colors"
                  >
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditThankYou;