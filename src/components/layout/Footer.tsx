import Link from 'next/link';
import { Phone, MapPin, Building2, GraduationCap } from 'lucide-react';
import { NAV_ITEMS, PHONE, PHONE_RAW, CLINIC, HOSPITAL, LOCATION } from '@/lib/constants';

const services = [
  'Endoscopy',
  'Colonoscopy',
  'Liver Disease Care',
  'GI Disease Treatment',
  'Pancreatic Disorders',
  'Imaging Support',
];

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 bg-white/10 rounded-full p-1 border border-white/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 shadow-[0_0_15px_rgba(3,105,161,0.3)] flex items-center justify-center text-white">
                  <span className="font-heading font-extrabold text-[1.3rem] tracking-wider leading-none ml-0.5" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>SP</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading text-xl font-bold text-white mb-1 leading-tight">
                  Dr. Suryakanta Parida
                </h3>
                <p className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase text-accent-400">
                  {CLINIC}
                </p>
              </div>
            </div>
            <p className="text-[0.85rem] text-white/50 leading-relaxed font-light">
              MBBS, MD (Medicine), DM (Gastroenterology)<br />
              Associate Professor, Dept. of Gastroenterology<br />
              S.C.B Medical College &amp; Hospital, Cuttack, Odisha
            </p>
            <a
              href={`tel:${PHONE_RAW}`}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-primary-800
                         text-white rounded-full text-sm font-semibold font-body
                         hover:bg-primary-600 transition-colors"
            >
              <Phone size={13} />
              {PHONE}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.11em] uppercase text-white/35 mb-4 font-body">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.875rem] text-white/60 hover:text-white transition-colors font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.11em] uppercase text-white/35 mb-4 font-body">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[0.875rem] text-white/60 hover:text-white transition-colors font-light"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.11em] uppercase text-white/35 mb-4 font-body">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="flex items-start gap-3 text-[0.875rem] text-accent-300 hover:text-accent-200 transition-colors"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[0.875rem] text-white/60 font-light">
                <Building2 size={14} className="mt-0.5 flex-shrink-0 text-white/40" />
                {CLINIC}
              </li>
              <li className="flex items-start gap-3 text-[0.875rem] text-white/60 font-light">
                <GraduationCap size={14} className="mt-0.5 flex-shrink-0 text-white/40" />
                {HOSPITAL}
              </li>
              <li className="flex items-start gap-3 text-[0.875rem] text-white/60 font-light">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-white/40" />
                {LOCATION}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[0.78rem] text-white/30">
            © 2025 Dr. Suryakanta Parida · All rights reserved
          </p>
          <p className="text-[0.78rem] text-white/30">
            Best Gastroenterologist in Cuttack, Odisha
          </p>
        </div>
      </div>
    </footer>
  );
}
