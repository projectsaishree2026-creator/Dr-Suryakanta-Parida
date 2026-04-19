import { blogPosts } from '@/data/blogs';
import type { BlogPost } from '@/data/blogs';

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentId: string, limit = 3): BlogPost[] {
  return blogPosts.filter((p) => p.id !== currentId).slice(0, limit);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}
