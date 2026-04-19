'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Microscope, Stethoscope, Pill, Dna, Heart, Search } from 'lucide-react';
import { staggerContainer, fadeUp, fadeLeft } from '@/lib/animations';
import { servicesData } from '@/data/services';
import { Container } from '@/components/common';

/* Map service IDs to lucide icons — no emojis */
const iconMap: Record<string, React.ElementType> = {
  endoscopy: Microscope,
  colonoscopy: Stethoscope,
  'gi-disease-treatment': Pill,
  'digestive-disorder-management': Dna,
  'liver-disease-care': Heart,
  'pancreatic-disorders': Search,
  'imaging-support': Search,
};

const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 20 } },
};

export default function ServicesHighlight() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featured = servicesData[0];
  const supporting = servicesData.slice(1, 7);
  const FeaturedIcon = iconMap[featured.id] ?? Microscope;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        {/* Left-aligned section header — no center bias */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-end mb-12">
          <div>
            <p className="section-label">Specializations</p>
            <h2 className="section-title">
              Comprehensive{' '}
              <span className="text-primary-700">GI Care</span>
            </h2>
            <p className="section-sub mt-3 max-w-[520px]">
              From advanced diagnostic procedures to expert treatment — all under one DM-qualified super-specialist.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden lg:inline-flex items-center gap-2 text-primary-700 font-semibold text-sm
                       hover:text-primary-500 transition-colors group self-end mb-1"
          >
            View all services
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric layout: featured (2fr) + supporting grid (3fr) */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5"
        >
          {/* Featured service — large card */}
          <motion.div
            variants={fadeLeft}
            className="group relative bg-gradient-to-br from-primary-700 to-primary-900
                       rounded-3xl p-8 flex flex-col justify-between min-h-[320px]
                       overflow-hidden cursor-default
                       shadow-[0_20px_40px_-15px_rgba(3,105,161,0.40)]"
          >
            {/* Decorative orbs — hardware accelerated, pointer-none */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/10
                              flex items-center justify-center mb-6
                              shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <FeaturedIcon size={26} strokeWidth={1.5} className="text-white" />
              </div>
              <span className="inline-block bg-white/15 border border-white/10 text-white/90
                               text-[0.7rem] font-bold px-3 py-1 rounded-full tracking-wide mb-4">
                {featured.tag}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white leading-snug mb-3">
                {featured.title}
              </h3>
              <p className="text-white/70 text-[0.875rem] leading-relaxed font-light">
                {featured.description}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-5 border-t border-white/10">
              <ul className="space-y-1.5">
                {featured.benefits.slice(0, 2).map((b) => (
                  <li key={b} className="flex items-center gap-2 text-white/80 text-sm font-light">
                    <div className="w-1 h-1 rounded-full bg-primary-300 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Supporting services — 2×3 grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {supporting.map((service) => {
              const Icon = iconMap[service.id] ?? Stethoscope;
              return (
                <motion.div
                  key={service.id}
                  variants={slideUp}
                  className="group bg-white rounded-2xl p-5 border border-slate-100
                             hover:border-primary-200 hover:-translate-y-1
                             transition-all duration-300 cursor-default
                             shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100
                                  flex items-center justify-center mb-4
                                  group-hover:bg-primary-700 group-hover:border-primary-700
                                  transition-all duration-300">
                    <Icon size={18} strokeWidth={1.75}
                          className="text-primary-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="inline-block bg-primary-50 text-primary-700 text-[0.65rem]
                                   font-bold px-2.5 py-1 rounded-full tracking-wide mb-3">
                    {service.tag}
                  </span>
                  <h3 className="font-heading text-[1rem] font-bold text-charcoal mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[0.8rem] text-charcoal-muted leading-relaxed font-light">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 lg:hidden"
        >
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
