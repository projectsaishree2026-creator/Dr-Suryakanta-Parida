export type { BlogPost } from '@/data/blogs';

export type BlogCardProps = {
  post: import('@/data/blogs').BlogPost;
  featured?: boolean;
};
