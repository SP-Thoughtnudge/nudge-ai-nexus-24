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
  };
}

export const contentfulService = {
  // Get all blog posts
  async getBlogPosts(category?: string, searchQuery?: string): Promise<BlogPost[]> {
    try {
      const query: any = {
        content_type: 'blogPost',
        include: 2,
        order: ['-sys.createdAt'],
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

  // Get a single blog post by slug
  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      console.log('Fetching blog post with slug:', slug);
      const response = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        include: 2,
      });

      console.log('Contentful response:', response);
      console.log('Items found:', response.items.length);

      if (response.items.length > 0) {
        const post = response.items[0] as unknown as BlogPost;
        console.log('Found blog post:', post);
        return post;
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