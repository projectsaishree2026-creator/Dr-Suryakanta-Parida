'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Phone,
  CalendarDays,
  BadgeCheck,
  Building2,
  MapPin,
  ArrowRight,
  Stethoscope,
  GraduationCap,
} from 'lucide-react';
import { PHONE, PHONE_RAW, CLINIC, HOSPITAL } from '@/lib/constants';
import { doctorData } from '@/data/doctor';

/* ─── Animation variants ─────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 20 },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 22 },
  },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

/* ─── Stat pill ──────────────────────────────────────── */
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-heading text-[2rem] font-bold text-primary-700 leading-none tracking-tight">
        {value}
      </span>
      <span className="text-[0.72rem] text-charcoal-muted font-medium mt-0.5 tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

/* ─── Info row inside card (Updated for Dark BG) ───────────────────────────── */
function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3 relative z-10">
      <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5 backdrop-blur-sm">
        <Icon size={13} strokeWidth={2} className="text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-[0.6rem] font-semibold uppercase tracking-widest text-white/70 mb-0.5">
          {label}
        </p>
        {href ? (
          <a href={href} className="text-[0.82rem] font-semibold text-white hover:text-accent-300 transition-colors leading-snug">
            {value}
          </a>
        ) : (
          <p className="text-[0.82rem] font-semibold text-white leading-snug">{value}</p>
        )}
      </div>
    </div>
  );
}

/* ─── Main Hero ──────────────────────────────────────── */
export default function Hero() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex items-start lg:items-center bg-primary-50 overflow-x-hidden w-full pt-16">

      {/* ── Background geometry – pointer-none, clipped to section ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Right soft wash */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-primary-100/60 via-primary-50/40 to-transparent" />
        {/* Thin top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 via-primary-400 to-transparent" />
        {/* Corner orb — capped at 60vw so it never overflows on narrow screens */}
        <div className="absolute -bottom-32 -right-32 w-[min(480px,60vw)] h-[min(480px,60vw)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-1/3 left-[38%] w-[min(320px,50vw)] h-[min(320px,50vw)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(3,105,161,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="container-max relative z-10 pt-6 pb-14 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center lg:min-h-[calc(100dvh-4rem)]">

          {/* ══════════════ LEFT — Content ══════════════ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Availability badge */}
            <motion.div variants={slideUp} className="mb-7">
              <span className="inline-flex items-center gap-2 bg-primary-100 border border-primary-200 px-4 py-2 rounded-full text-[0.78rem] font-semibold text-primary-700">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Available for consultations · Cuttack, Odisha
              </span>
            </motion.div>

            {/* Overline label */}
            <motion.p
              variants={slideUp}
              className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-accent-700 mb-3"
            >
              DM Gastroenterologist &amp; Associate Professor
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={slideUp}
              className="font-heading text-4xl md:text-5xl xl:text-[3.4rem] font-bold text-charcoal leading-[1.07] tracking-tight mb-6"
            >
              Expert GI Care<br />
              <span className="relative inline-block">
                Built on{' '}
                <span className="text-primary-700">15 Years</span> of
              </span>
              <br />
              Clinical Trust
            </motion.h1>

            {/* Body copy */}
            <motion.p
              variants={slideUp}
              className="text-[1rem] text-charcoal-light leading-[1.8] font-light mb-8 max-w-[520px]"
            >
              Precision diagnosis and evidence-based treatment for digestive,
              liver, and pancreatic conditions — by{' '}
              <strong className="font-semibold text-charcoal">{doctorData.name}</strong>,
              a senior gastroenterologist at{' '}
              <strong className="font-semibold text-charcoal">SCB Medical College, Cuttack</strong>.
            </motion.p>

            {/* CTA group */}
            <motion.div variants={slideUp} className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5
                           bg-primary-700 text-white rounded-full font-semibold text-[0.9rem]
                           transition-all duration-200
                           hover:bg-primary-600 hover:-translate-y-0.5
                           shadow-primary active:scale-[0.98]"
              >
                <CalendarDays size={16} strokeWidth={2} />
                Book Appointment
              </Link>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center gap-2 px-6 py-3.5
                           bg-white text-primary-700 border-[1.5px] border-primary-200
                           rounded-full font-semibold text-[0.9rem]
                           transition-all duration-200
                           hover:border-primary-400 hover:bg-primary-50 hover:-translate-y-0.5
                           active:scale-[0.98]"
              >
                <Phone size={16} strokeWidth={2} />
                {PHONE}
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3.5
                           bg-transparent text-charcoal-muted rounded-full font-medium text-[0.9rem]
                           transition-all duration-200 hover:text-charcoal group"
              >
                Learn more
                <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={slideUp}>
              <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-primary-100 pt-8">
                {doctorData.highlights.map((h) => (
                  <StatPill key={h.label} value={h.value} label={h.label} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ══════════════ RIGHT — Floating Doctor Card ══════════════ */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end items-center mt-8 lg:mt-0"
          >
            <motion.div
              animate={float.animate}
              className="w-full max-w-[440px] group"
            >
              {/* Card */}
              <div className="relative rounded-[28px] border border-primary-100/30
                              shadow-[0_24px_56px_-12px_rgba(7,89,133,0.3)]
                              overflow-hidden transition-all duration-300 lg:hover:scale-[1.02] group/card cursor-default">

                {/* ── NON-DESTRUCTIVE BACKGROUND LAYER ── */}
                <Image
                  src="/images/doctor/img-2.webp"
                  alt={doctorData.name}
                  fill
                  className={`object-cover object-top transition-transform duration-700 ease-out lg:group-hover/card:scale-105 ${isMobileOpen ? 'scale-105 opacity-100' : 'opacity-100'}`}
                  sizes="(max-width: 1024px) 100vw, 440px"
                  priority
                />

                {/* ── SAFE OVERLAY (Base + Hover) ── */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 transition-opacity duration-300 ${isMobileOpen ? 'opacity-100' : 'opacity-80'} lg:opacity-60 lg:group-hover/card:opacity-100`} />
                
                {/* Specific hover overlay */}
                <div className={`absolute inset-0 bg-[rgba(0,60,90,0.75)] transition-opacity duration-300 ease-in-out z-10 ${isMobileOpen ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover/card:opacity-100`} />

                {/* Top accent strip */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary-500 via-primary-400 to-accent-400 z-20" />

                <div className="relative p-8 z-20">
                  {/* Layer 1: Avatar + specialization */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-[72px] h-[72px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 ease-out ${isMobileOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} lg:opacity-0 lg:scale-95 lg:group-hover/card:opacity-100 lg:group-hover/card:scale-100`}>
                      <Stethoscope size={32} strokeWidth={1.5} className="text-white" />
                    </div>
                    <div>
                      <h2 className="font-heading text-[1.25rem] font-bold text-white leading-tight drop-shadow-md">
                        {doctorData.name}
                      </h2>
                      <p className={`text-[0.72rem] text-white/90 font-medium mt-0.5 transition-all duration-300 ease-out ${isMobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'} lg:opacity-0 lg:-translate-y-1 lg:group-hover/card:opacity-100 lg:group-hover/card:translate-y-0`}>
                        {doctorData.qualifications}
                      </p>
                    </div>
                  </div>

                  {/* Layer 2: HOVER DETAILS */}
                  <div className={`transition-all duration-300 ease-out ${isMobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'} lg:opacity-0 lg:translate-y-3 lg:pointer-events-none lg:group-hover/card:opacity-100 lg:group-hover/card:translate-y-0 lg:group-hover/card:pointer-events-auto`}>
                    {/* Specialty badge */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[0.72rem] font-bold px-3 py-1.5 rounded-full tracking-wide">
                        <GraduationCap size={12} strokeWidth={2} />
                        DM Gastroenterologist
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-accent-500/80 backdrop-blur-sm border border-accent-400/50 text-white text-[0.72rem] font-semibold px-3 py-1.5 rounded-full tracking-wide">
                        <BadgeCheck size={12} strokeWidth={2} />
                        Verified
                      </span>
                    </div>

                    {/* Info rows */}
                    <div className="divide-y divide-white/15">
                      <InfoRow icon={Building2} label="Hospital" value={HOSPITAL} />
                      <InfoRow icon={BadgeCheck} label="Designation" value={doctorData.designation} />
                      <InfoRow icon={MapPin} label="Clinic" value={CLINIC} />
                      <InfoRow icon={Phone} label="Phone" value={PHONE} href={`tel:${PHONE_RAW}`} />
                    </div>
                  </div>

                  {/* Layer 1: Bottom Actions */}
                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      onClick={() => setIsMobileOpen(!isMobileOpen)}
                      type="button"
                      className="lg:hidden flex items-center justify-center w-full py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.85rem] font-semibold tracking-wide active:scale-[0.99] transition-all"
                    >
                      {isMobileOpen ? 'Hide Details' : 'View Details'}
                    </button>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl
                                 bg-primary-500 text-white font-semibold text-[0.9rem]
                                 transition-all duration-200 hover:bg-primary-400 hover:shadow-[0_8px_16px_-4px_rgba(3,105,161,0.5)] active:scale-[0.99] border border-primary-400/50 shadow-md"
                    >
                      <CalendarDays size={16} strokeWidth={2} />
                      Book a Consultation
                    </Link>
                  </div>
                </div>
              </div>


            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
