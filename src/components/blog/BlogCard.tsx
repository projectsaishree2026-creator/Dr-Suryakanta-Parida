import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/data/blogs';
import { cn } from '@/lib/helpers';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

export default function BlogCard({
  post,
  featured = false,
  className,
}: BlogCardProps) {
  if (featured) {
    return (
      <Link
        href={`/blogs/${post.slug}`}
        aria-label={`Read article: ${post.title}`}
        className={cn(
          'group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl',
          'border border-[#E5E7EB] shadow-card overflow-hidden',
          'hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300',
          className
        )}
      >
        <div className="relative h-64 lg:h-auto w-full flex-shrink-0">
          <Image
            src={post.image || '/images/blog/default.webp'}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <span className="inline-block bg-accent-100 text-accent-700 text-[0.68rem] font-bold px-3 py-1 rounded-full mb-4 w-fit">
            {post.category}
          </span>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-charcoal leading-tight mb-4 group-hover:text-primary-800 transition-colors">
            {post.title}
          </h2>
          <p className="text-[0.9rem] text-[#6B7280] leading-relaxed font-light mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-[#9CA3AF] font-medium mb-6">
            <span className="flex items-center gap-1.5">
              <User size={12} /> {post.author}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} /> {post.readTime}
            </span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <span className="inline-flex items-center gap-2 text-primary-800 font-semibold text-sm group-hover:gap-3 transition-all">
            Read Article <ArrowRight size={15} />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blogs/${post.slug}`}
      aria-label={`Read article: ${post.title}`}
      className={cn(
        'group bg-white rounded-3xl border border-[#E5E7EB] shadow-soft overflow-hidden',
        'hover:shadow-card hover:-translate-y-1 hover:border-primary-200 transition-all duration-300',
        className
      )}
    >
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={post.image || '/images/blog/default.webp'}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <span className="inline-block bg-accent-100 text-accent-700 text-[0.68rem] font-bold px-3 py-1 rounded-full mb-3">
          {post.category}
        </span>
        <h2 className="font-heading text-[1.1rem] font-bold text-charcoal leading-snug mb-3 group-hover:text-primary-800 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-[0.84rem] text-[#6B7280] leading-relaxed font-light mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-[0.72rem] text-[#9CA3AF] font-medium pt-4 border-t border-[#F3F4F6]">
          <span className="flex items-center gap-1">
            <Clock size={11} /> {post.readTime}
          </span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
