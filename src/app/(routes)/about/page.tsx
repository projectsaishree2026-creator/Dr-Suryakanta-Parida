import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { generatePageMetadata } from '@/lib/seo';
import { doctorData } from '@/data/doctor';
import { PHONE_RAW, PHONE, HOSPITAL, CLINIC, LOCATION } from '@/lib/constants';
import AboutDoctorCard from '@/components/about/AboutDoctorCard';
import { CalendarDays, GraduationCap, Building2, MapPin, Phone, BadgeCheck, Stethoscope, Award, Heart, BookOpen, ChevronDown } from 'lucide-react';

const CTASection = dynamic(() => import('@/components/home/CTASection'));

export const metadata: Metadata = generatePageMetadata({
  title: 'About Dr. Suryakanta Parida – Best Gastroenterologist Cuttack & Bhubaneswar',
  description:
    'Learn about Dr. Suryakanta Parida – DM Gastroenterologist, Associate Professor at SCB Medical College Cuttack. MBBS, MD, DM with 15+ years experience. Serving Cuttack, Bhubaneswar & Odisha.',
  path: '/about',
  keywords: ['About Dr Parida', 'DM Gastroenterologist Cuttack', 'DM Gastroenterologist Bhubaneswar', 'GI specialist Cuttack Odisha', 'SCB Medical College Gastroenterology'],
});

const timeline = [
  { degree: 'MBBS', desc: 'Foundation of Clinical Medicine', detail: 'Comprehensive undergraduate medical training covering all branches of medicine.' },
  { degree: 'MD', desc: 'MD in Medicine — Internal Medicine', detail: 'Post-graduate specialisation in internal medicine with focus on systemic diseases.' },
  { degree: 'DM', desc: 'DM Gastroenterology — Super-Specialist', detail: 'Highest academic qualification in Gastroenterology in India, covering GI, Hepatology & Endoscopy.' },
  { degree: 'Now', desc: 'Associate Professor & Consultant', detail: 'Dept. of Gastroenterology, SCB Medical College, Cuttack · Sai Shree Polyclinic.' },
];

const trustPoints = [
  { icon: GraduationCap, h: 'DM Qualification', p: 'Highest academic degree in gastroenterology in India, ensuring super-specialist level expertise.' },
  { icon: Building2, h: 'SCB Medical College', p: "Odisha's premier teaching and referral hospital with state-of-the-art diagnostic infrastructure." },
  { icon: Stethoscope, h: 'Advanced Endoscopy', p: 'Expert in diagnostic and therapeutic endoscopic procedures, including complex interventions.' },
  { icon: Heart, h: 'Liver Specialist', p: 'Comprehensive hepatology care for hepatitis, cirrhosis, NAFLD, and liver failure management.' },
  { icon: BookOpen, h: 'Academic Expertise', p: 'Active teaching and research at SCB Medical College, staying at the forefront of GI medicine.' },
  { icon: Award, h: 'Patient-Centred Care', p: 'Compassionate, clear consultations with thorough follow-up for every single patient.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-[radial-gradient(ellipse_at_center,rgba(91,33,182,0.07)_0%,transparent_70%)]
                        pointer-events-none -translate-y-1/4 translate-x-1/4" />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ══════ LEFT — Modern Hover Reveal Card ══════ */}
            <AboutDoctorCard />

            {/* Content */}
            <div>
              <p className="section-label">About the Doctor</p>
              <h2 className="section-title">
                A Lifetime Dedicated to{' '}
                <span className="text-primary-800">Digestive Health</span>
              </h2>
              {doctorData.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-[0.95rem] text-charcoal-light leading-[1.82] font-light mb-4 last:mb-0">
                  {para}
                </p>
              ))}

              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-primary">
                  <CalendarDays size={16} />
                  Book Consultation
                </Link>
                <a href={`tel:${PHONE_RAW}`} className="btn-outline">
                  <Phone size={16} />
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <p className="section-label text-center">Academic Journey</p>
            <h2 className="section-title text-center mb-14">
              Education &amp; <span className="text-primary-800">Qualifications</span>
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-[#E5E7EB]" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex gap-6">
                    {/* Dot */}
                    <div className="relative z-10 w-11 h-11 rounded-full bg-primary-800 flex items-center
                                    justify-center text-white text-[0.65rem] font-bold font-body
                                    flex-shrink-0 shadow-primary">
                      {item.degree}
                    </div>
                    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 flex-1 shadow-soft">
                      <h3 className="font-heading text-lg font-bold text-charcoal">{item.desc}</h3>
                      <p className="text-sm text-[#6B7280] mt-1 font-light leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust grid */}
      <section className="py-24 bg-[#F8F5F2]">
        <div className="container-max">
          <p className="section-label text-center">Why Trust Us</p>
          <h2 className="section-title text-center mb-14">
            Excellence in <span className="text-primary-800">Every Aspect</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustPoints.map(({ icon: Icon, h, p }) => (
              <div key={h} className="bg-white rounded-3xl p-6 border border-[#E5E7EB] shadow-soft
                                      hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-2xl bg-primary-800 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">{h}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-light">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
