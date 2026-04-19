import Image from 'next/image';
import { useId } from 'react';
import { doctorData } from '@/data/doctor';
import { PHONE_RAW, PHONE, HOSPITAL, CLINIC, LOCATION } from '@/lib/constants';
import { GraduationCap, Building2, MapPin, Phone, BadgeCheck, Award } from 'lucide-react';

interface AboutDoctorCardProps {
  className?: string;
}

export default function AboutDoctorCard({ className = "" }: AboutDoctorCardProps) {
  const toggleId = useId();

  return (
    <div className={`group relative w-full h-[520px] lg:h-[540px] rounded-3xl overflow-hidden shadow-[0_24px_56px_-12px_rgba(7,89,133,0.22)] bg-primary-900 transition-all duration-500 lg:hover:-translate-y-2 lg:hover:shadow-[0_32px_80px_-16px_rgba(7,89,133,0.3)] ${className}`}>
      
      {/* ── BASE IMAGE ── */}
      <Image
        src="/images/doctor/img-1.webp"
        alt={`${doctorData.name} — DM Gastroenterologist`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-700 ease-out lg:group-hover:scale-105"
        priority
      />

      {/* ── DEFAULT OVERLAY GRADIENT ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/20 to-transparent 
                      transition-opacity duration-500 lg:group-hover:opacity-0" />

      {/* Top Accent Bar */}
      <div className="absolute inset-x-0 top-0 h-[4px] z-30 bg-gradient-to-r from-primary-500 via-primary-300 to-accent-400" />

      {/* ── DEFAULT CONTENT (Visible initially) ── */}
      <div className="absolute z-10 inset-x-0 bottom-0 p-8 transition-all duration-500 lg:group-hover:opacity-0 lg:group-hover:translate-y-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-md text-white text-[0.65rem] font-bold px-3 py-1.5 rounded-full tracking-wide">
            <GraduationCap size={11} strokeWidth={2.5} />
            DM Gastroenterologist
          </span>
        </div>
        <h1 className="font-heading text-[1.65rem] font-bold text-white leading-tight mb-1">
          {doctorData.name}
        </h1>
        <p className="text-white/80 text-[0.8rem] font-medium leading-snug">
          {doctorData.qualifications}
        </p>
      </div>

      {/* MOBILE TOGGLE (Hidden Checkbox) */}
      <input type="checkbox" id={toggleId} className="peer hidden" />

      {/* ── HOVER OVERLAY LAYER (Hidden initially) ── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8
                      bg-primary-900/90 backdrop-blur-md
                      transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                      opacity-0 translate-y-8 pointer-events-none
                      peer-checked:opacity-100 peer-checked:translate-y-0 peer-checked:pointer-events-auto
                      lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto">
        
        {/* Overlay Header */}
        <div className="mb-6 pb-6 border-b border-white/15">
          <h2 className="font-heading text-2xl font-bold text-white mb-2">{doctorData.name}</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 text-[0.65rem] font-bold px-3 py-1.5 rounded-full">
              <Award size={10} strokeWidth={2.5} />
              Associate Professor
            </span>
          </div>
        </div>

        {/* Details List */}
        <div className="space-y-4">
          {[
            { icon: Building2,  label: 'Hospital',    value: HOSPITAL },
            { icon: BadgeCheck, label: 'Department',  value: doctorData.department },
            { icon: Building2,  label: 'Clinic',      value: CLINIC },
            { icon: MapPin,     label: 'Location',    value: LOCATION },
            { icon: Phone,      label: 'Phone',       value: PHONE, href: `tel:${PHONE_RAW}` },
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center flex-shrink-0">
                <Icon size={16} strokeWidth={2} className="text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-white/60 mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a href={href} className="text-[0.9rem] font-semibold text-white hover:text-accent-300 transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-[0.9rem] font-semibold text-white">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE TOGGLE BUTTON */}
      <label htmlFor={toggleId} 
             className="lg:hidden absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 
                        flex items-center justify-center cursor-pointer text-white transition-all active:scale-95
                        peer-checked:[&_.menu-dots]:hidden peer-checked:[&_.close-icon]:block">
        <div className="menu-dots flex gap-1">
           <span className="w-1 h-1 bg-white rounded-full"></span>
           <span className="w-1 h-1 bg-white rounded-full"></span>
           <span className="w-1 h-1 bg-white rounded-full"></span>
        </div>
        <div className="close-icon hidden">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </label>

    </div>
  );
}
