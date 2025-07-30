import { createClient } from 'contentful';

const client = createClient({
  space: 'koqn61rwp9mc',
  accessToken: 'gHbRDyIX68GkcwXvUXw7WCY_aq-Oa22645E1ChdjyPk',
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
  };
}

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

  // Get all blog posts (excluding featured posts)
  async getBlogPosts(category?: string, searchQuery?: string): Promise<BlogPost[]> {
    try {
      const query: any = {
        content_type: 'blogPost',
        include: 2,
        order: ['-sys.createdAt'],
        'fields.isFeatured[ne]': true, // Exclude featured posts
      };

      if (category && category !== 'All') {
        query['fields.category'] = category;
      }

      if (searchQuery) {
        query.query = searchQuery;
      }

      const response = await client.getEntries(query);
      return response.items as unknown as BlogPost[];
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  },

  // Get the latest featured blog post
  async getFeaturedBlogPost(): Promise<BlogPost | null> {
    try {
      const response = await client.getEntries({
        content_type: 'blogPost',
        include: 2,
        order: ['-sys.createdAt'],
        'fields.isFeatured': true,
        limit: 1,
      });

      if (response.items.length > 0) {
        return response.items[0] as unknown as BlogPost;
      }
      return null;
    } catch (error) {
      console.error('Error fetching featured blog post:', error);
      return null;
    }
  },

  // Get a single blog post by slug
  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
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
        return directResponse.items[0] as unknown as BlogPost;
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
        return matchingPost as unknown as BlogPost;
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
    try {
      const response = await client.getEntries({
        content_type: 'blogPost',
        include: 2,
        order: ['-sys.createdAt'],
        limit,
      });

      return response.items as unknown as BlogPost[];
    } catch (error) {
      console.error('Error fetching featured blog posts:', error);
      return [];
    }
  },

  // Get all authors
  async getAuthors(): Promise<Author[]> {
    try {
      const response = await client.getEntries({
        content_type: 'author',
      });

      return response.items as unknown as Author[];
    } catch (error) {
      console.error('Error fetching authors:', error);
      return [];
    }
  },
};