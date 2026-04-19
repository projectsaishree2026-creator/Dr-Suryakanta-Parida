'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, GraduationCap, Building2, Stethoscope, Users } from 'lucide-react';
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from '@/lib/animations';
import { doctorData } from '@/data/doctor';
import AboutDoctorCard from '@/components/about/AboutDoctorCard';

const highlights = [
  { icon: GraduationCap, label: 'Super-Specialist', desc: 'DM Gastroenterology — highest GI degree' },
  { icon: Building2, label: 'SCB Medical College', desc: 'Odisha\'s premier teaching hospital' },
  { icon: Stethoscope, label: 'Advanced Procedures', desc: 'Endoscopy, colonoscopy & imaging' },
  { icon: Users, label: 'Patient-First', desc: 'Compassionate, clear, thorough care' },
];

export default function AboutPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F8F5F2]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual panel */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <AboutDoctorCard />
          </motion.div>

          {/* Right — content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={fadeUp} className="section-label">About Dr. Parida</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              Odisha&apos;s Trusted{' '}
              <span className="text-primary-800">GI Specialist</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-sub mb-8">
              Combining academic excellence as Associate Professor at SCB Medical College with
              compassionate, patient-centred care at Sai Shree Polyclinic.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex gap-3 p-4 bg-white rounded-2xl border border-slate-100
                             shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{label}</p>
                    <p className="text-xs text-[#6B7280] mt-0.5 font-light">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/about" className="btn-primary">
                Read Full Story
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
