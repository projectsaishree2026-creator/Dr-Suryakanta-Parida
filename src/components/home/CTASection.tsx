'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarDays, Phone, ShieldCheck, Users, Clock } from 'lucide-react';
import { fadeUp, staggerContainer, fadeRight } from '@/lib/animations';
import { PHONE, PHONE_RAW } from '@/lib/constants';
import { doctorData } from '@/data/doctor';

const trustPoints = [
  { icon: ShieldCheck, label: 'DM Super-Specialist', sub: 'Highest GI qualification in India' },
  { icon: Users, label: '5000+ Patients Treated', sub: 'Across Cuttack, Odisha & beyond' },
  { icon: Clock, label: '15+ Years Experience', sub: 'Academic & clinical excellence' },
];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="py-24 bg-primary-700 relative overflow-hidden"
    >
      {/* Background geometry — pointer-none, hardware-accelerated */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-white/5" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-400/40 via-white/10 to-transparent" />
      </div>

      <div className="container-max relative z-10">
        {/* Split layout: left = message / right = trust indicators */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Left — CTA message */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={fadeUp}
              className="text-primary-300 text-[0.72rem] font-bold tracking-[0.16em] uppercase mb-4"
            >
              Take the first step
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl xl:text-[2.8rem] font-bold text-white
                         leading-[1.08] tracking-tight mb-5"
            >
              Experiencing Digestive<br />
              Symptoms? Don&apos;t Wait.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/65 text-[1rem] font-light mb-10 leading-relaxed max-w-[440px]"
            >
              Early diagnosis leads to better outcomes. Book a consultation with
              Dr. Parida at Sai Shree Polyclinic, Cuttack.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700
                           rounded-full font-bold text-[0.9rem] transition-all duration-200
                           hover:bg-primary-50 hover:-translate-y-0.5 active:scale-[0.98]
                           shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              >
                <CalendarDays size={16} strokeWidth={2} />
                Book Appointment
              </Link>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center gap-2 px-7 py-3.5
                           bg-white/10 border border-white/20 text-white
                           rounded-full font-semibold text-[0.9rem]
                           backdrop-blur-sm
                           shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
                           transition-all duration-200
                           hover:bg-white/15 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Phone size={16} strokeWidth={2} />
                {PHONE}
              </a>
            </motion.div>
          </motion.div>

          {/* Right — trust indicators */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            {trustPoints.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-white/8 border border-white/10
                           rounded-2xl px-6 py-4
                           backdrop-blur-sm
                           shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/10
                                flex items-center justify-center flex-shrink-0">
                  <Icon size={18} strokeWidth={1.75} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-white/55 text-xs font-light mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {doctorData.highlights.slice(0, 3).map((h) => (
                <div key={h.label} className="bg-white/8 border border-white/10 rounded-2xl p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-white leading-none">{h.value}</p>
                  <p className="text-white/45 text-[0.65rem] mt-1.5 font-light">{h.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
