// SEO utilities for meta tags and structured data

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const updateSEOTags = (seo: SEOProps) => {
  // Update title
  document.title = seo.title;

  // Default robots directive
  updateOrCreateMeta('name', 'robots', 'index,follow');

  // Update or create meta description
  updateOrCreateMeta('name', 'description', seo.description);

  // Update or create Open Graph tags
  updateOrCreateMeta('property', 'og:title', seo.title);
  updateOrCreateMeta('property', 'og:description', seo.description);
  updateOrCreateMeta('property', 'og:type', seo.type || 'website');
  updateOrCreateMeta('property', 'og:site_name', 'Thoughtnudge');
  
  if (seo.image) {
    // Ensure the image URL is absolute and optimized for social sharing
    const imageUrl = seo.image.startsWith('//') ? `https:${seo.image}` : seo.image;
    const optimizedImageUrl = `${imageUrl}?w=1200&h=630&fit=fill&f=center`;
    updateOrCreateMeta('property', 'og:image', optimizedImageUrl);
    updateOrCreateMeta('property', 'og:image:width', '1200');
    updateOrCreateMeta('property', 'og:image:height', '630');
    updateOrCreateMeta('property', 'og:image:type', 'image/jpeg');
    updateOrCreateMeta('name', 'twitter:image', optimizedImageUrl);
  }
  
  if (seo.url) {
    updateOrCreateMeta('property', 'og:url', seo.url);
    // Canonical link
    updateOrCreateLink('canonical', seo.url);
  }

  // Update or create Twitter Card tags
  updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
  updateOrCreateMeta('name', 'twitter:title', seo.title);
  updateOrCreateMeta('name', 'twitter:description', seo.description);
  updateOrCreateMeta('name', 'twitter:site', '@thoughtnudge');
  
  // Article-specific tags
  if (seo.type === 'article') {
    if (seo.author) {
      updateOrCreateMeta('name', 'author', seo.author);
      updateOrCreateMeta('property', 'article:author', seo.author);
    }
    if (seo.publishedTime) {
      updateOrCreateMeta('property', 'article:published_time', seo.publishedTime);
    }
    if (seo.modifiedTime) {
      updateOrCreateMeta('property', 'article:modified_time', seo.modifiedTime);
    }
    updateOrCreateMeta('property', 'article:section', 'Blog');
    updateOrCreateMeta('property', 'article:tag', 'AI, Marketing, Behavioral Science');
  }

  // Remove any default homepage meta tags that might conflict
  removeDefaultMetaTags();
};

const updateOrCreateMeta = (attributeName: string, attributeValue: string, content: string) => {
  let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  
  if (meta) {
    meta.setAttribute('content', content);
  } else {
    meta = document.createElement('meta');
    meta.setAttribute(attributeName, attributeValue);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
};

// Link tag upsert helper (e.g., canonical)
const updateOrCreateLink = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (link) {
    link.setAttribute('href', href);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    link.setAttribute('href', href);
    document.head.appendChild(link);
  }
};

// Remove conflicting homepage meta tags for blog posts
const removeDefaultMetaTags = () => {
  // Remove homepage specific og tags that might conflict
  const homeOgImage = document.querySelector('meta[property="og:image"][content*="lovable.dev"]');
  if (homeOgImage) homeOgImage.remove();
  
  const twitterImage = document.querySelector('meta[name="twitter:image"][content*="lovable.dev"]');
  if (twitterImage) twitterImage.remove();
  
  const twitterSite = document.querySelector('meta[name="twitter:site"][content="@lovable_dev"]');
  if (twitterSite) twitterSite.remove();
};

// Structured Data (JSON-LD) utilities
export const addStructuredData = (data: any, key?: string) => {
  // If a key is provided, upsert by ID to allow multiple schema blocks
  const id = key ? `ldjson-${key}` : undefined;

  if (id) {
    const existingById = document.getElementById(id);
    if (existingById) existingById.remove();
  } else {
    // If no key provided, remove only the first anonymous ld+json to avoid duplicates on re-mount
    const existing = document.querySelector('script[type="application/ld+json"]:not([id])');
    if (existing) existing.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  if (id) script.id = id;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Thoughtnudge",
  "url": "https://www.thoughtnudge.com",
  "logo": "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png",
  "description": "AI-powered autonomous decisioning platform that makes 1:1 marketing decisions in real time across every channel and customer, at scale.",
  "sameAs": [
    "https://www.linkedin.com/company/thoughtnudge"
  ],
  "foundingDate": "2023",
  "founders": [
    {
      "@type": "Person",
      "name": "Shashank Sharma",
      "jobTitle": "Co-Founder & CEO"
    },
    {
      "@type": "Person", 
      "name": "Aditya Srivastava",
      "jobTitle": "Co-Founder & CTO"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://www.thoughtnudge.com"
  }
};

// Software Application Schema
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Thoughtnudge",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Marketing Automation",
  "description": "AI-powered autonomous decisioning platform that makes 1:1 marketing decisions in real time across every channel and customer, at scale.",
  "url": "https://www.thoughtnudge.com",
  "author": {
    "@type": "Organization",
    "name": "Thoughtnudge"
  },
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "USD",
    "availability": "InStock"
  },
  "featureList": [
    "Autonomous AI Decision Making",
    "Real-time Customer Journey Optimization", 
    "Cross-channel Marketing Intelligence",
    "Psychographic Customer Profiling",
    "1:1 Personalization at Scale"
  ]
};

// Blog Schema
export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Thoughtnudge Blog",
  "description": "Insights on AI, behavioral science, and autonomous marketing technology",
  "url": "https://www.thoughtnudge.com/blogs",
  "author": {
    "@type": "Organization",
    "name": "Thoughtnudge"
  }
};

// Article Schema Generator
export const createArticleSchema = (post: any) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.fields.title,
  "description": post.fields.excerpt || post.fields.metaDescription,
  "image": post.fields.featuredImage?.fields?.file?.url ? `https:${post.fields.featuredImage.fields.file.url}` : undefined,
  "author": {
    "@type": "Person",
    "name": post.fields.author?.fields?.name || "Thoughtnudge Team",
    "jobTitle": post.fields.author?.fields?.role || "Content Team",
    "url": post.fields.author?.fields?.linkedinUrl
  },
  "publisher": {
    "@type": "Organization",
    "name": "Thoughtnudge",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.thoughtnudge.com/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png"
    }
  },
  "datePublished": post.sys.createdAt,
  "dateModified": post.sys.createdAt,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.thoughtnudge.com/blog/${post.fields.slug || post.fields.title.toLowerCase().replace(/\s+/g, '-')}`
  },
  "articleSection": post.fields.category,
  "keywords": [post.fields.category, "AI", "Marketing", "Behavioral Science"]
});

// Person Schema Generator
export const createPersonSchema = (person: any) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": person.name,
  "jobTitle": person.role,
  "description": person.bio,
  "worksFor": {
    "@type": "Organization",
    "name": "Thoughtnudge"
  },
  "sameAs": person.linkedinUrl ? [person.linkedinUrl] : undefined,
  "url": "https://www.thoughtnudge.com/about"
});