import Link from 'next/link';
import { Home, Phone } from 'lucide-react';
import { PHONE, PHONE_RAW } from '@/lib/constants';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary-50 pt-16">
      <div className="container-max text-center py-20">
        <div className="text-[7rem] font-heading font-bold text-primary-100 leading-none mb-4">
          404
        </div>
        <h1 className="font-heading text-3xl font-bold text-charcoal mb-3">
          Page Not Found
        </h1>
        <p className="text-[#6B7280] font-light max-w-md mx-auto mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Return to the homepage or contact us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Go Home
          </Link>
          <a href={`tel:${PHONE_RAW}`} className="btn-outline">
            <Phone size={16} /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
