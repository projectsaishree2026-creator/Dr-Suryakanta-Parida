import { CheckCircle2, Microscope, Stethoscope, Pill, Dna, Heart, Search, Radio } from 'lucide-react';
import type { Service } from '@/data/services';
import { cn } from '@/lib/helpers';

/* Map service IDs to lucide icons — ANTI-EMOJI POLICY */
const iconMap: Record<string, React.ElementType> = {
  endoscopy: Microscope,
  colonoscopy: Stethoscope,
  'gi-disease-treatment': Pill,
  'digestive-disorder-management': Dna,
  'liver-disease-care': Heart,
  'pancreatic-disorders': Search,
  'imaging-support': Radio,
};

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

export default function ServiceCard({
  service,
  variant = 'default',
  className,
}: ServiceCardProps) {
  const Icon = iconMap[service.id] ?? Stethoscope;

  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'group relative overflow-hidden rounded-2xl p-6 border border-white/10',
          'hover:border-white/20 hover:-translate-y-[6px]',
          'transition-all duration-300 cursor-default',
          'shadow-[0_10px_30px_rgba(0,0,0,0.1)]',
          className
        )}
      >
        {/* Background Image & Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-500 group-hover:scale-110"
           style={{ backgroundImage: `url('/images/services/${service.id}.png')` }} 
        />
        <div className="absolute inset-0 bg-[#0a283c]/65 z-0 transition-colors duration-300 group-hover:bg-[#0a283c]/75" />

        <div className="relative z-10">
          <div
            className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md
                        flex items-center justify-center mb-5
                        group-hover:bg-white/20
                        transition-all duration-300"
          >
            <Icon size={20} strokeWidth={1.75} className="text-white" />
          </div>
          <h3 className="font-heading text-[1.05rem] font-bold text-white mb-2 leading-snug">
            {service.title}
          </h3>
          <p className="text-[0.84rem] text-white/85 leading-relaxed font-light mb-4">
            {service.description}
          </p>
          <span
            className="inline-block bg-white/15 backdrop-blur-md text-white border border-white/20 text-[0.66rem]
                        font-bold px-3 py-1 rounded-full tracking-wide"
          >
            {service.tag}
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div
        className={cn(
          'group relative overflow-hidden rounded-2xl p-7 border border-white/10',
          'hover:-translate-y-[6px] hover:border-white/20',
          'transition-all duration-300',
          'shadow-[0_10px_30px_rgba(0,0,0,0.1)]',
          className
        )}
      >
        {/* Background Image & Overlay */}
        <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-500 group-hover:scale-110"
           style={{ backgroundImage: `url('/images/services/${service.id}.png')` }} 
        />
        <div className="absolute inset-0 bg-[#0a283c]/65 z-0 transition-colors duration-300 group-hover:bg-[#0a283c]/75" />

        <div className="relative z-10">
          <div className="w-13 h-13 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md
                          flex items-center justify-center mb-5 w-fit p-3">
            <Icon size={24} strokeWidth={1.75} className="text-white" />
          </div>
          <span className="inline-block bg-white/15 border border-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {service.tag}
          </span>
          <h2 className="font-heading text-xl font-bold text-white mb-3 leading-snug">
            {service.title}
          </h2>
          <p className="text-[0.875rem] text-white/85 leading-relaxed font-light mb-5">
            {service.longDescription}
          </p>
          <div className="border-t border-white/15 pt-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-white/70 mb-3">
              Benefits
            </p>
            <ul className="space-y-1.5">
              {service.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-white/85 font-light"
                >
                  <CheckCircle2
                    size={13}
                    strokeWidth={2}
                    className="text-white mt-0.5 flex-shrink-0 opacity-80"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // default
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl p-6 border border-white/10',
        'hover:border-white/20 hover:-translate-y-[6px]',
        'transition-all duration-300',
        'shadow-[0_10px_30px_rgba(0,0,0,0.1)]',
        className
      )}
    >
      {/* Background Image & Overlay */}
      <div 
         className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-500 group-hover:scale-110"
         style={{ backgroundImage: `url('/images/services/${service.id}.png')` }} 
      />
      <div className="absolute inset-0 bg-[#0a283c]/65 z-0 transition-colors duration-300 group-hover:bg-[#0a283c]/75" />

      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md
                        flex items-center justify-center mb-5
                        group-hover:bg-white/20
                        transition-all duration-300">
          <Icon size={20} strokeWidth={1.75}
                className="text-white transition-colors duration-300" />
        </div>
        <h3 className="font-heading text-[1.05rem] font-bold text-white mb-2">{service.title}</h3>
        <p className="text-[0.875rem] text-white/85 leading-relaxed font-light">{service.description}</p>
      </div>
    </div>
  );
}
