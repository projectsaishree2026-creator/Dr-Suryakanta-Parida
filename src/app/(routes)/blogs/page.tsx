import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { generatePageMetadata } from '@/lib/seo';
import { blogPosts } from '@/data/blogs';
import { Clock, User, ArrowRight } from 'lucide-react';

const CTASection = dynamic(() => import('@/components/home/CTASection'));

export const metadata: Metadata = generatePageMetadata({
  title: 'Gastroenterology Health Blog – Digestive Care Tips Cuttack & Bhubaneswar',
  description:
    'Expert articles on digestive health, endoscopy, colonoscopy, liver disease and GI disorders by Dr. Suryakanta Parida, DM Gastroenterologist in Cuttack & Bhubaneswar, Odisha.',
  path: '/blogs',
  keywords: ['Gastro health blog', 'Digestive health tips Odisha', 'GI health articles Cuttack', 'Endoscopy guide Bhubaneswar', 'Colonoscopy information Odisha'],
});

export default function BlogsPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full
                        bg-[radial-gradient(ellipse_at_center,rgba(91,33,182,0.07)_0%,transparent_70%)]
                        pointer-events-none" />
        <div className="container-max relative z-10 text-center">
          <p className="section-label">Health Education</p>
          <h1 className="section-title max-w-2xl mx-auto">
            GI Health <span className="text-primary-800">Blog</span>
          </h1>
          <p className="section-sub mx-auto">
            Expert insights on digestive health, procedures, and preventive care
            by Dr. Suryakanta Parida.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <p className="section-label mb-6">Featured Article</p>
          <Link
            href={`/blogs/${featured.slug}`}
            aria-label={`Read featured article: ${featured.title}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl
                       border border-[#E5E7EB] shadow-card overflow-hidden
                       hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            {/* Thumb */}
            <div className="relative h-[260px] lg:h-auto w-full flex-shrink-0">
              <Image 
                src={featured.image || "/images/blog/default.webp"}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="badge-accent mb-4 w-fit">{featured.category}</span>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-charcoal leading-tight mb-4
                             group-hover:text-primary-800 transition-colors">
                {featured.title}
              </h2>
              <p className="text-[0.9rem] text-[#6B7280] leading-relaxed font-light mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#9CA3AF] font-medium mb-6">
                <span className="flex items-center gap-1.5">
                  <User size={13} /> {featured.author}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> {featured.readTime}
                </span>
                <span>·</span>
                <span>{featured.date}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-primary-800 font-semibold text-sm
                               group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All posts grid */}
      <section className="py-8 pb-24 bg-white">
        <div className="container-max">
          <p className="section-label mb-8">All Articles</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group bg-white rounded-3xl border border-[#E5E7EB] shadow-soft
                           overflow-hidden hover:shadow-card hover:-translate-y-1
                           hover:border-primary-200 transition-all duration-300"
              >
                {/* Thumb */}
                <div className="relative w-full h-[180px] overflow-hidden rounded-t-3xl">
                  <Image 
                    src={post.image || "/images/blog/default.webp"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent pointer-events-none transition-opacity group-hover:opacity-60" />
                </div>
                <div className="p-6">
                  <span className="badge-accent text-[0.68rem] mb-3 block w-fit">{post.category}</span>
                  <h2 className="font-heading text-[1.1rem] font-bold text-charcoal leading-snug mb-3
                                 group-hover:text-primary-800 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[0.84rem] text-[#6B7280] leading-relaxed font-light mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-[0.72rem] text-[#9CA3AF] font-medium
                                  pt-4 border-t border-[#F3F4F6]">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
