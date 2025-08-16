// Blog-specific SEO utilities for handling dynamic meta tags
import { contentfulService } from './contentful';
import { updateSEOTags, addStructuredData, createArticleSchema } from './seo';

// Pre-populate meta tags for blog posts based on URL
export const preloadBlogSEO = async (slug: string) => {
  try {
    console.log('🔄 Preloading SEO for blog slug:', slug);
    
    // Clear conflicting homepage tags first
    clearHomepageMetaTags();
    
    // Fetch blog post data
    const post = await contentfulService.getBlogPostBySlug(slug);
    
    if (post) {
      // Generate proper slug and URL
      const generatedSlug = post.fields.slug || contentfulService.generateSlug(post.fields.title);
      const postUrl = `https://www.thoughtnudge.com/blog/${generatedSlug}`;
      
      // Ensure image URL is absolute and optimized
      let imageUrl = undefined;
      if (post.fields.featuredImage?.fields?.file?.url) {
        const baseImageUrl = post.fields.featuredImage.fields.file.url.startsWith('//') 
          ? `https:${post.fields.featuredImage.fields.file.url}` 
          : post.fields.featuredImage.fields.file.url;
        imageUrl = `${baseImageUrl}?w=1200&h=630&fit=fill&f=center`;
      }
      
      const seoData = {
        title: `${post.fields.title} | Thoughtnudge Blog`,
        description: post.fields.metaDescription || post.fields.excerpt || `${post.fields.title} - Read the latest insights from Thoughtnudge on AI, behavioral science, and autonomous marketing.`,
        url: postUrl,
        image: imageUrl,
        type: "article" as const,
        author: post.fields.author?.fields?.name || 'Thoughtnudge Team',
        publishedTime: post.fields.publishedAt || post.sys.publishedAt || post.sys.createdAt,
        modifiedTime: post.sys.createdAt
      };
      
      // Update SEO tags immediately
      updateSEOTags(seoData);

      // Add Article structured data
      addStructuredData(createArticleSchema(post), 'article');
      
      // Force update head title immediately for crawlers
      document.title = seoData.title;
      
      console.log('✅ Blog SEO preloaded successfully');
      console.log('📝 Title:', seoData.title);
      console.log('🔗 URL:', seoData.url);
      console.log('🖼️ Image:', seoData.image);
      console.log('📄 Description:', seoData.description);
      
      // Log current meta tags for debugging
      logCurrentMetaTags();
      
      return post;
    } else {
      console.warn('⚠️ No blog post found for slug:', slug);
    }
  } catch (error) {
    console.error('❌ Failed to preload blog SEO for slug:', slug, error);
  }
  
  return null;
};

// Clear homepage meta tags that might conflict
export const clearHomepageMetaTags = () => {
  console.log('🧹 Clearing conflicting homepage meta tags...');
  
  // Remove homepage specific meta tags
  const tagsToRemove = [
    'meta[property="og:title"][content*="Autonomous AI Decisioning Platform"]',
    'meta[property="og:description"][content*="AI teammate"]',
    'meta[property="og:image"][content*="lovable.dev"]',
    'meta[name="twitter:image"][content*="lovable.dev"]',
    'meta[name="twitter:site"][content="@lovable_dev"]',
    'meta[name="description"][content*="AI teammate"]'
  ];
  
  tagsToRemove.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.remove();
      console.log('🗑️ Removed conflicting meta tag:', element.getAttribute('content'));
    });
  });
};

// Log current meta tags for debugging
const logCurrentMetaTags = () => {
  console.group('🔍 Current Meta Tags');
  
  const ogTags = document.querySelectorAll('meta[property^="og:"]');
  const twitterTags = document.querySelectorAll('meta[name^="twitter:"]');
  const basicTags = document.querySelectorAll('meta[name="description"], meta[name="author"]');
  
  console.log('📋 Open Graph Tags:');
  ogTags.forEach(tag => {
    console.log(`  ${tag.getAttribute('property')}: ${tag.getAttribute('content')}`);
  });
  
  console.log('🐦 Twitter Tags:');
  twitterTags.forEach(tag => {
    console.log(`  ${tag.getAttribute('name')}: ${tag.getAttribute('content')}`);
  });
  
  console.log('📄 Basic Tags:');
  basicTags.forEach(tag => {
    console.log(`  ${tag.getAttribute('name')}: ${tag.getAttribute('content')}`);
  });
  
  console.log('📖 Title:', document.title);
  console.groupEnd();
};