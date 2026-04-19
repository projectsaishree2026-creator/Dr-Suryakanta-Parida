import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { generatePageMetadata } from '@/lib/seo';
import { servicesData } from '@/data/services';
import ServiceCard from '@/components/services/ServiceCard';
import { PHONE_RAW, PHONE } from '@/lib/constants';
import { CalendarDays, Phone, ArrowRight } from 'lucide-react';

const CTASection = dynamic(() => import('@/components/home/CTASection'));

export const metadata: Metadata = generatePageMetadata({
  title: 'Gastroenterology Services in Cuttack & Bhubaneswar',
  description:
    'Expert GI services by Dr. Suryakanta Parida: Endoscopy, Colonoscopy, Liver Disease Care, GERD, IBS, Pancreatic Disorders at Sai Shree Polyclinic Cuttack. Serving patients from Bhubaneswar & Odisha.',
  path: '/services',
  keywords: [
    'Upper GI Endoscopy in Cuttack',
    'Endoscopy test Bhubaneswar',
    'Colonoscopy in Bhubaneswar',
    'Colon cancer screening Odisha',
    'GERD treatment Cuttack',
    'IBS specialist Bhubaneswar',
    'Fatty liver treatment Cuttack',
    'Hepatitis specialist Bhubaneswar',
    'Pancreatitis treatment Odisha',
    'CT scan GI diagnosis Cuttack',
    'Liver Disease Doctor Odisha',
  ],
});

const steps = [
  {
    num: '01',
    h: 'Consultation',
    p: 'Detailed discussion of your symptoms, medical history, and thorough clinical examination to determine the right path.',
  },
  {
    num: '02',
    h: 'Procedure Planning',
    p: 'Clear explanation of the recommended procedure, preparation instructions, risks, and what to expect on the day.',
  },
  {
    num: '03',
    h: 'Report & Follow-up',
    p: 'Thorough explanation of results, accurate diagnosis, and a structured treatment plan with ongoing follow-up care.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero — left-aligned, no center bias */}
      <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none
                     bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)]"
        />
        <div className="container-max relative z-10">
          <p className="section-label">Our Specializations</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal tracking-tight
                         leading-[1.08] mb-5 max-w-2xl">
            Comprehensive{' '}
            <span className="text-primary-700">GI Services</span>
          </h1>
          <p className="text-charcoal-light text-[1rem] leading-relaxed font-light max-w-[520px] mb-8">
            Advanced gastroenterology procedures and treatment by a DM-qualified
            super-specialist at SCB Medical College, Cuttack. Serving patients from Bhubaneswar and across Odisha.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" aria-label="Book a gastroenterology appointment with Dr. Parida" className="btn-primary">
              <CalendarDays size={16} strokeWidth={2} />
              Book Appointment
            </Link>
            <a href={`tel:${PHONE_RAW}`} className="btn-outline">
              <Phone size={16} strokeWidth={2} />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Service cards — asymmetric 2-col grid, no equal 3-col */}
      <section className="py-20 bg-white">
        <div className="container-max">
          {/* Featured service — wide */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 mb-5">
            <ServiceCard service={servicesData[0]} variant="detailed" />
            <ServiceCard service={servicesData[1]} variant="detailed" />
          </div>

          {/* Supporting services — 2-col then 3-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {servicesData.slice(2, 4).map((s) => (
              <ServiceCard key={s.id} service={s} variant="detailed" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {servicesData.slice(4).map((s) => (
              <ServiceCard key={s.id} service={s} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      {/* Patient journey — left-aligned, zig-zag layout, not 3-col equal */}
      <section className="py-20 lg:py-28 bg-[#F8F5F2]">
        <div className="container-max">
          <p className="section-label">Your Journey</p>
          <h2 className="section-title mb-12">
            What to <span className="text-primary-700">Expect</span>
          </h2>

          <div className="space-y-5">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="grid grid-cols-1 lg:grid-cols-[auto_1fr_2fr] gap-6 items-start
                           bg-white rounded-2xl p-7 border border-slate-100
                           shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary-100
                                flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xl font-bold text-primary-700">{s.num}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[0.65rem] font-bold uppercase tracking-widest text-charcoal-muted mb-1">
                    Step {i + 1}
                  </p>
                  <h3 className="font-heading text-lg font-bold text-charcoal">{s.h}</h3>
                </div>
                <p className="text-sm text-charcoal-muted leading-relaxed font-light lg:pt-0 pt-0">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA — left-aligned */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-1 tracking-tight">
                Need a GI Consultation?
              </h2>
              <p className="text-charcoal-muted font-light text-sm">
                Contact Sai Shree Polyclinic, Cuttack for expert gastroenterology care. Serving Cuttack, Bhubaneswar & Odisha.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" aria-label="Book a gastroenterology appointment with Dr. Parida" className="btn-primary">
                <CalendarDays size={16} strokeWidth={2} />
                Book Appointment
              </Link>
              <a href={`tel:${PHONE_RAW}`} className="btn-outline">
                <Phone size={16} strokeWidth={2} />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
