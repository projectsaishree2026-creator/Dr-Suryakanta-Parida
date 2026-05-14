import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { generatePageMetadata } from '@/lib/seo';
import { PHONE, PHONE_RAW, CLINIC, HOSPITAL, LOCATION } from '@/lib/constants';
import { Phone, MapPin, Building2, GraduationCap, Clock } from 'lucide-react';

const ContactForm = dynamic(() => import('@/components/contact/ContactForm'), { ssr: false });
const Map = dynamic(() => import('@/components/contact/Map'), { ssr: false });

export const metadata: Metadata = generatePageMetadata({
  title: 'Book Appointment – Gastroenterologist Cuttack & Bhubaneswar',
  description:
    'Book an appointment with Dr. Suryakanta Parida – DM Gastroenterologist at Sai Shree Polyclinic, Cuttack. Serving Bhubaneswar & Odisha. Call +91 7008512773 or book via WhatsApp.',
  path: '/contact',
  keywords: ['Book gastroenterologist Cuttack', 'Book gastroenterologist Bhubaneswar', 'Contact Dr Parida', 'Sai Shree Polyclinic appointment', 'GI doctor appointment Odisha'],
});

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE,
    href: `tel:${PHONE_RAW}`,
    highlight: true,
  },
  { icon: Building2, label: 'Clinic', value: CLINIC, href: undefined, highlight: false },
  { icon: GraduationCap, label: 'Hospital', value: HOSPITAL, href: undefined, highlight: false },
  { icon: MapPin, label: 'Location', value: 'Kathagola Rd, near shreema Hospital, Mangalabag, Cuttack, Odisha 753001, Sai Shree Poly Clinic', href: undefined, highlight: false },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Mon – Sat · By Appointment',
    href: undefined,
    highlight: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero — left-aligned, no center bias */}
      <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none
                     bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)]"
        />
        <div className="container-max relative z-10">
          <p className="section-label">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal tracking-tight
                         leading-[1.08] mb-5 max-w-2xl">
            Book a <span className="text-primary-700">Consultation</span>
          </h1>
          <p className="text-charcoal-light text-[1rem] leading-relaxed font-light max-w-[520px]">
            Reach out to Sai Shree Polyclinic or fill in the appointment request
            form below — Dr. Parida&apos;s team will contact you promptly.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 items-start">

            {/* Left — Contact info + map */}
            <div className="space-y-6">
              {/* Info card */}
              <div className="bg-primary-700 rounded-3xl p-7 relative overflow-hidden
                           shadow-[0_20px_40px_-15px_rgba(3,105,161,0.40)]">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
                <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/5" />

                <div className="relative z-10">
                  <h2 className="font-heading text-xl font-bold text-white mb-1">
                    Contact Information
                  </h2>
                  <p className="text-white/60 text-sm font-light mb-7">
                    Reach Dr. Parida at Sai Shree Polyclinic, Cuttack
                  </p>

                  <div className="space-y-4">
                    {contactDetails.map(({ icon: Icon, label, value, href, highlight }) => (
                      <div key={label} className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                          <Icon size={15} className="text-white" />
                        </div>
                        <div>
                          <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/45">
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              className={`text-sm font-semibold mt-0.5 block transition-colors
                                          ${highlight ? 'text-accent-300 hover:text-accent-200' : 'text-white'}`}
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-white/80 mt-0.5 leading-snug">
                              {value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick call CTA */}
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="mt-7 w-full flex items-center justify-center gap-2
                               py-3 bg-accent-500 text-[#1F2937] rounded-xl
                               font-bold text-sm hover:bg-accent-400 transition-colors"
                  >
                    <Phone size={15} />
                    Call Now — {PHONE}
                  </a>
                </div>
              </div>

              {/* Map */}
              <Map />
            </div>

            {/* Right — Form */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100
                            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]">
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-1">
                Appointment Request
              </h2>
              <p className="text-sm text-[#6B7280] font-light mb-7 leading-relaxed">
                Fill in your details and Dr. Parida&apos;s team will get in touch
                within 24 hours.
              </p>

              <ContactForm />

              {/* Direct call nudge */}
              <div className="mt-6 p-4 bg-primary-50 rounded-2xl flex items-center gap-3 border border-primary-100">
                <div className="w-8 h-8 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-primary-800" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-wider text-primary-800">
                    Prefer to call directly?
                  </p>
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="text-sm font-bold text-charcoal hover:text-primary-800 transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
