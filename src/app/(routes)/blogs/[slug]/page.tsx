import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlogContent from '@/components/blog/BlogContent';
import { blogPosts } from '@/data/blogs';
import { generatePageMetadata, generateArticleSchema } from '@/lib/seo';
import { Clock, User, Tag, ArrowLeft, CalendarDays, Phone } from 'lucide-react';
import { PHONE_RAW, PHONE } from '@/lib/constants';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blogs/${post.slug}`,
    keywords: post.tags,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Article structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(post)),
        }}
      />
      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary-50 relative overflow-hidden">
        <div className="container-max relative z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-primary-800 font-semibold
                       hover:text-primary-600 transition-colors mb-8"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>

          <div className="max-w-3xl">
            <span className="badge-accent mb-4 block w-fit">{post.category}</span>
            <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-charcoal
                           leading-[1.1] mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#9CA3AF] font-medium">
              <span className="flex items-center gap-1.5">
                <User size={13} /> {post.author}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* Article */}
            <article>
              {/* Cover Image */}
              <div className="relative w-full h-[260px] rounded-[16px] overflow-hidden mb-10 shadow-sm">
                <Image 
                  src={post.image || "/images/blog/default.webp"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent pointer-events-none" />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 bg-primary-50 text-primary-700
                                             text-xs font-semibold px-3 py-1 rounded-full">
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>

              <div className="prose-like">
                <BlogContent content={post.content} />
              </div>

              {/* Author card */}
              <div className="mt-12 p-6 bg-primary-50 rounded-3xl border border-primary-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-800 flex items-center justify-center
                                  font-heading text-xl font-bold text-white flex-shrink-0">
                    SP
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">{post.author}</p>
                    <p className="text-xs text-[#6B7280] font-light mt-0.5">
                      MBBS, MD (Medicine), DM (Gastroenterology) · Associate Professor,
                      SCB Medical College, Cuttack
                    </p>
                    <p className="text-sm text-charcoal-light font-light mt-2 leading-relaxed">
                      Dr. Parida is a DM Gastroenterologist with 15+ years of clinical experience,
                      combining academic excellence with compassionate patient care.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              {/* CTA card */}
              <div className="bg-primary-800 rounded-3xl p-6 text-center relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center
                                  font-heading text-lg font-bold text-white mx-auto mb-3">
                    SP
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">
                    Dr. Suryakanta Parida
                  </h3>
                  <p className="text-white/60 text-xs mb-5 font-light">
                    DM Gastroenterologist · Sai Shree Polyclinic
                  </p>
                  <Link
                    href="/contact"
                    aria-label="Book a gastroenterology appointment with Dr. Parida"
                    className="w-full flex items-center justify-center gap-2 px-5 py-2.5
                               bg-accent-500 text-[#1F2937] rounded-full text-sm font-bold
                               hover:bg-accent-400 transition-colors mb-3"
                  >
                    <CalendarDays size={14} /> Book Appointment
                  </Link>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="w-full flex items-center justify-center gap-2 px-5 py-2.5
                               bg-white/15 text-white rounded-full text-sm font-semibold
                               hover:bg-white/25 transition-colors"
                  >
                    <Phone size={14} /> {PHONE}
                  </a>
                </div>
              </div>

              {/* Related articles */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-4">
                  Related Articles
                </p>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/blogs/${r.slug}`}
                      className="flex gap-3 p-3 bg-white border border-[#E5E7EB] rounded-2xl
                                 hover:border-primary-200 hover:shadow-soft transition-all"
                    >
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-slate-100">
                        <Image 
                          src={r.image || "/images/blog/default.webp"} 
                          alt={r.title} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-charcoal leading-snug
                                      hover:text-primary-800 transition-colors line-clamp-2">
                          {r.title}
                        </p>
                        <p className="text-xs text-[#9CA3AF] mt-1">{r.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
