import { blogPosts } from '@/data/blogs';
import type { BlogPost } from '@/data/blogs';

// In a real CMS-backed project these would be fetch() calls.
// For this static project they read from the data layer directly.

export async function fetchAllPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export async function fetchPostsByCategory(category: string): Promise<BlogPost[]> {
  return blogPosts.filter((p) => p.category === category);
}

export async function fetchRelatedPosts(
  currentId: string,
  limit = 3
): Promise<BlogPost[]> {
  return blogPosts.filter((p) => p.id !== currentId).slice(0, limit);
}
