export type { Service } from '@/data/services';
export type { Testimonial } from '@/data/testimonials';
export type { BlogPost } from '@/data/blogs';

export type PageProps = {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
};

export type NavItem = {
  label: string;
  href: string;
};
