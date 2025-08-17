import { createClient } from 'contentful';

// Note: These are Contentful public access tokens, not sensitive credentials
const client = createClient({
  space: 'koqn61rwp9mc',
  accessToken: 'gHbRDyIX68GkcwXvUXw7WCY_aq-Oa22645E1ChdjyPk', // This is a public read-only token
});

export interface Author {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    photo?: {
      fields: {
        file: {
          url: string;
        };
        title?: string;
      };
    };
    linkedinUrl?: string;
  };
}

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    publishedAt?: string;
  };
  fields: {
    title: string;
    slug: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
        title?: string;
      };
    };
    excerpt: string;
    content: any; // Rich text content
    author: Author;
    category: 'Behavioral Science' | 'AI & Product' | 'Case Studies';
    metaDescription?: string;
    isFeatured?: boolean;
    publishedAt?: string; // Optional field for explicit publish date
  };
}

// Simple in-memory cache for API responses
const cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

// Cache helper functions
const getCacheKey = (method: string, params: any) => {
  return `${method}_${JSON.stringify(params)}`;
};

const getFromCache = (key: string) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < cached.ttl) {
    return cached.data;
  }
  cache.delete(key);
  return null;
};

const setCache = (key: string, data: any, ttl: number = 5 * 60 * 1000) => { // 5 minutes default
  cache.set(key, { data, timestamp: Date.now(), ttl });
};

export const contentfulService = {
  // Helper function to generate slug from title
  generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  },

  // Get all blog posts (excluding featured posts if isFeatured field exists)
  async getBlogPosts(category?: string, searchQuery?: string): Promise<BlogPost[]> {
    const cacheKey = getCacheKey('getBlogPosts', { category, searchQuery });
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    try {
      const query: any = {
        content_type: 'blogPost',
        include: 2,
        order: ['-sys.createdAt'],
      };

      // Only exclude featured posts if the isFeatured field exists
      try {
        // Test if isFeatured field exists by making a simple query
        const testResponse = await client.getEntries({
          content_type: 'blogPost',
          'fields.isFeatured': true,
          limit: 1,
        });
        // If no error, the field exists, so we can exclude featured posts
        query['fields.isFeatured[ne]'] = true;
      } catch (error) {
        // If error, the field doesn't exist yet, so we'll get all posts
        console.log('isFeatured field not found, showing all posts');
      }

      if (category && category !== 'All') {
        query['fields.category'] = category;
      }

      if (searchQuery) {
        query.query = searchQuery;
      }

      const response = await client.getEntries(query);
      const data = response.items as unknown as BlogPost[];
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  },

  // Get the latest featured blog post
  async getFeaturedBlogPost(): Promise<BlogPost | null> {
    const cacheKey = getCacheKey('getFeaturedBlogPost', {});
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    try {
      const response = await client.getEntries({
        content_type: 'blogPost',
        include: 2,
        order: ['-sys.createdAt'],
        'fields.isFeatured': true,
        limit: 1,
      });

      const data = response.items.length > 0 ? response.items[0] as unknown as BlogPost : null;
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      // If isFeatured field doesn't exist, return null (no featured post)
      console.log('isFeatured field not found, no featured post available');
      return null;
    }
  },

  // Get a single blog post by slug
  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const cacheKey = getCacheKey('getBlogPostBySlug', { slug });
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    try {
      console.log('Fetching blog post with slug:', slug);
      
      // First try to fetch using the slug field directly
      const directResponse = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        include: 2,
      });

      console.log('Direct slug search response:', directResponse);

      if (directResponse.items.length > 0) {
        console.log('Found blog post via slug field:', directResponse.items[0]);
        const data = directResponse.items[0] as unknown as BlogPost;
        setCache(cacheKey, data, 15 * 60 * 1000); // 15 minutes cache for individual posts
        return data;
      }

      // Fallback: Get all posts and compare generated slugs
      const allPostsResponse = await client.getEntries({
        content_type: 'blogPost',
        include: 2,
      });

      console.log('All blog posts for fallback search:', allPostsResponse.items.map(item => ({ 
        title: item.fields.title, 
        slug: item.fields.slug,
        generatedSlug: this.generateSlug(item.fields.title)
      })));

      const matchingPost = allPostsResponse.items.find((item: any) => {
        const generatedSlug = this.generateSlug(item.fields.title);
        console.log('Comparing slugs:', generatedSlug, 'vs', slug);
        return generatedSlug === slug || item.fields.slug === slug;
      });

      if (matchingPost) {
        console.log('Found matching blog post via fallback:', matchingPost);
        const data = matchingPost as unknown as BlogPost;
        setCache(cacheKey, data, 15 * 60 * 1000); // 15 minutes cache for individual posts
        return data;
      }
      
      console.log('No blog post found with slug:', slug);
      return null;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  },

  // Get featured blog posts (most recent 3-4)
  async getFeaturedBlogPosts(limit = 4): Promise<BlogPost[]> {
    const cacheKey = getCacheKey('getFeaturedBlogPosts', { limit });
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    try {
      const response = await client.getEntries({
        content_type: 'blogPost',
        include: 2,
        order: ['-sys.createdAt'],
        limit,
      });

      const data = response.items as unknown as BlogPost[];
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      console.error('Error fetching featured blog posts:', error);
      return [];
    }
  },

  // Get related posts by category (for the related posts section)
  async getRelatedPosts(currentPostId: string, category: string, limit = 3): Promise<BlogPost[]> {
    const cacheKey = getCacheKey('getRelatedPosts', { currentPostId, category, limit });
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    try {
      // First try to get posts from the same category
      const response = await client.getEntries({
        content_type: 'blogPost',
        include: 2,
        order: ['-sys.createdAt'],
        'fields.category': category,
        'sys.id[ne]': currentPostId, // Exclude current post
        limit,
      });

      let relatedPosts = response.items as unknown as BlogPost[];

      // If we don't have enough posts from the same category, fill with recent posts
      if (relatedPosts.length < limit) {
        const recentResponse = await client.getEntries({
          content_type: 'blogPost',
          include: 2,
          order: ['-sys.createdAt'],
          'sys.id[ne]': currentPostId, // Exclude current post
          limit: limit - relatedPosts.length,
        });

        const recentPosts = recentResponse.items as unknown as BlogPost[];
        // Combine and deduplicate
        const allPosts = [...relatedPosts, ...recentPosts];
        relatedPosts = allPosts.filter((post, index, self) => 
          index === self.findIndex(p => p.sys.id === post.sys.id)
        );
      }

      setCache(cacheKey, relatedPosts);
      return relatedPosts;
    } catch (error) {
      console.error('Error fetching related posts:', error);
      return [];
    }
  },

  // Get all authors
  async getAuthors(): Promise<Author[]> {
    const cacheKey = getCacheKey('getAuthors', {});
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    try {
      const response = await client.getEntries({
        content_type: 'author',
      });

      const data = response.items as unknown as Author[];
      setCache(cacheKey, data, 30 * 60 * 1000); // 30 minutes cache for authors
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
      return [];
    }
  },

  // Get all unique categories from published blog posts
  async getUniqueCategories(): Promise<string[]> {
    const cacheKey = getCacheKey('getUniqueCategories', {});
    const cached = getFromCache(cacheKey);
    if (cached) return cached;

    try {
      const response = await client.getEntries({
        content_type: 'blogPost',
        select: ['fields.category'],
      });

      const categories = response.items
        .map((item: any) => item.fields.category)
        .filter((category: any) => category) // Remove any undefined/null categories
        .filter((category: any, index: number, self: any[]) => self.indexOf(category) === index) // Remove duplicates
        .sort(); // Sort alphabetically

      const data = categories as string[];
      setCache(cacheKey, data, 30 * 60 * 1000); // 30 minutes cache for categories
      return data;
    } catch (error) {
      console.error('Error fetching unique categories:', error);
      return [];
    }
  },

  async getBlogPostsPage({ category, searchQuery, limit = 9, page = 1 }: { category?: string; searchQuery?: string; limit?: number; page?: number; }): Promise<{ posts: BlogPost[]; total: number; totalPages: number; }> {
    const skip = (page - 1) * limit;
    const cacheKey = getCacheKey('getBlogPostsPage', { category, searchQuery, limit, page });
    const cached = getFromCache(cacheKey);
    if (cached) {
      console.log('Returning cached data for getBlogPostsPage:', cached);
      return cached;
    }

    try {
      console.log('Making Contentful API call with params:', { category, searchQuery, limit, page, skip });
      
      const query: any = {
        content_type: 'blogPost',
        include: 2,
        order: ['-sys.createdAt'],
        limit,
        skip,
      };

      // Get featured post first to exclude it from pagination
      let featuredPostId: string | null = null;
      try {
        const featuredResponse = await client.getEntries({
          content_type: 'blogPost',
          'fields.isFeatured': true,
          limit: 1,
        });
        console.log('Featured post response:', featuredResponse.items.length);
        if (featuredResponse.items.length > 0) {
          featuredPostId = featuredResponse.items[0].sys.id;
          console.log('Found featured post, excluding ID:', featuredPostId);
          // Exclude featured post from paginated results
          query['sys.id[ne]'] = featuredPostId;
        }
      } catch (error) {
        console.log('isFeatured field not found, showing all posts');
      }

      if (category && category !== 'All') {
        query['fields.category'] = category;
        console.log('Filtering by category:', category);
      }

      if (searchQuery) {
        query.query = searchQuery;
        console.log('Searching for:', searchQuery);
      }

      console.log('Final Contentful query:', query);
      const response = await client.getEntries(query);
      console.log('Raw Contentful response:', { 
        itemsCount: response.items.length, 
        total: response.total, 
        skip: response.skip, 
        limit: response.limit 
      });
      
      const posts = response.items as unknown as BlogPost[];
      const total = response.total || posts.length;
      const totalPages = Math.max(1, Math.ceil(total / limit));
      
      console.log('Processed response:', { posts: posts.length, total, totalPages, page });
      
      const data = { posts, total, totalPages };
      setCache(cacheKey, data);
      return data;
    } catch (error) {
      console.error('Error fetching paginated blog posts:', error);
      return { posts: [], total: 0, totalPages: 0 };
    }
  }
};