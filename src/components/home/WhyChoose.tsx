'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  Stethoscope,
  Heart,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
import { staggerContainer, fadeUp, fadeRight } from '@/lib/animations';
import { Section, Container, SectionHead } from '@/components/common';
import { doctorData } from '@/data/doctor';

const reasons = [
  {
    icon: GraduationCap,
    title: 'DM Super-Specialist',
    desc: 'Highest academic degree in gastroenterology in India — ensuring expert-level diagnosis and evidence-based treatment.',
  },
  {
    icon: Building2,
    title: 'SCB Medical College',
    desc: "Based at Odisha's premier teaching hospital with state-of-the-art diagnostic and endoscopic infrastructure.",
  },
  {
    icon: Stethoscope,
    title: 'Advanced Procedures',
    desc: 'Expert in therapeutic endoscopy, colonoscopy, and CT-guided analysis — all under one specialist.',
  },
  {
    icon: Heart,
    title: 'Patient-First Always',
    desc: 'Clear communication, thorough explanations, and structured follow-up care for every single patient.',
  },
  {
    icon: BookOpen,
    title: 'Academic Expertise',
    desc: 'Active teaching and research at SCB keeps Dr. Parida at the forefront of GI medicine advances.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted by Odisha',
    desc: 'Thousands of patients from Cuttack, Bhubaneswar, and across Odisha trust Dr. Parida for GI care.',
  },
];

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section bg="primary-soft">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={fadeUp} className="section-label">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              Odisha&apos;s Most Trusted{' '}
              <span className="text-primary-800">GI Specialist</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="section-sub mb-10">
              Combining academic excellence at SCB Medical College with compassionate
              patient-centred care at Sai Shree Polyclinic, Cuttack.
            </motion.p>

            <motion.div
              ref={ref}
              variants={staggerContainer}
              className="space-y-4"
            >
              {reasons.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-800 flex items-center
                                  justify-center flex-shrink-0 shadow-primary/20">
                    <Icon size={17} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-charcoal text-[0.9375rem] mb-0.5">
                      {title}
                    </h4>
                    <p className="text-sm text-[#6B7280] leading-relaxed font-light">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — stat panel */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="bg-primary-700 rounded-3xl p-8 relative overflow-hidden
                           shadow-[0_20px_40px_-15px_rgba(3,105,161,0.45)]">
              {/* Orb decorations */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />

              <div className="relative z-10">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
                  At a glance
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {doctorData.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm"
                    >
                      <p className="font-heading text-3xl font-bold text-white leading-none">
                        {h.value}
                      </p>
                      <p className="text-white/55 text-xs mt-1.5 font-light">{h.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {[
                    'Endoscopy & Colonoscopy',
                    'Liver & Hepatology Care',
                    'Pancreatic Disorders',
                    'CT Scan Guidance',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 bg-white/8 rounded-xl px-4 py-2.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">
                    Clinic
                  </p>
                  <p className="text-white font-semibold text-sm">Sai Shree Polyclinic</p>
                  <p className="text-white/60 text-xs font-light mt-0.5">Cuttack, Odisha</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
