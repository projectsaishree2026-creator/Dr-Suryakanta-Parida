'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { testimonialsData } from '@/data/testimonials';
import { Container } from '@/components/common';

const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 88, damping: 20 } },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={13} className="fill-accent-500 text-accent-500" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [featured, ...rest] = testimonialsData;

  return (
    <section className="py-20 lg:py-28 bg-primary-50">
      <Container>
        {/* Left-aligned header */}
        <div className="mb-12">
          <p className="section-label">Patient Stories</p>
          <h2 className="section-title">
            What Our <span className="text-primary-700">Patients</span> Say
          </h2>
          <p className="section-sub mt-3">
            Real experiences from patients across Odisha who received specialist gastroenterology care.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Featured testimonial — full width asymmetric */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-0 rounded-3xl overflow-hidden
                       border border-primary-100 mb-5
                       shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
          >
            {/* Left — quote content */}
            <div className="bg-white p-8 lg:p-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100
                                flex items-center justify-center flex-shrink-0">
                  <Quote size={16} strokeWidth={2} className="text-primary-700" />
                </div>
                <StarRating rating={featured.rating} />
              </div>
              <p className="text-charcoal-light text-[1.05rem] leading-[1.82] font-light italic mb-8 max-w-[520px]">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-primary-700 flex items-center justify-center
                                text-sm font-bold text-white flex-shrink-0">
                  {featured.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{featured.name}</p>
                  <p className="text-xs text-charcoal-muted font-light mt-0.5">
                    {featured.location} · {featured.procedure}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — stat highlight panel */}
            <div className="bg-primary-700 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-white/50 text-[0.65rem] font-bold uppercase tracking-widest mb-6">
                  Trust at a glance
                </p>
                <div className="space-y-5">
                  {[
                    { val: '5000+', label: 'Patients treated' },
                    { val: '15+', label: 'Years of expertise' },
                    { val: '6/6', label: 'Perfect rating average' },
                  ].map(({ val, label }) => (
                    <div key={label}>
                      <p className="font-heading text-3xl font-bold text-white leading-none">{val}</p>
                      <p className="text-white/55 text-xs mt-1 font-light">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-[0.6rem] uppercase tracking-widest font-semibold mb-1">Verified</p>
                <p className="text-white text-sm font-semibold">Real Patient Reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Supporting testimonials — asymmetric 2-col + 1-col */}
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr_1fr] gap-5">
            {rest.slice(0, 3).map((t) => (
              <motion.div
                key={t.id}
                variants={slideUp}
                className="bg-white rounded-2xl p-6 border border-slate-100
                           hover:-translate-y-1 transition-all duration-300
                           shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100
                                  flex items-center justify-center">
                    <Quote size={12} strokeWidth={2} className="text-primary-700" />
                  </div>
                  <StarRating rating={t.rating} />
                </div>
                <p className="text-[0.85rem] text-charcoal-light leading-[1.75] font-light italic mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-2.5 pt-4 border-t border-slate-50">
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center
                                  text-xs font-bold text-primary-700 flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                    <p className="text-xs text-charcoal-muted font-light">
                      {t.location} · {t.procedure}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
