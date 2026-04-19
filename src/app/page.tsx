import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { siteConfig } from '@/config/site.config';
import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesHighlight from '@/components/home/ServicesHighlight';

const WhyChoose = dynamic(() => import('@/components/home/WhyChoose'));
const Testimonials = dynamic(() => import('@/components/home/Testimonials'));
const CTASection = dynamic(() => import('@/components/home/CTASection'));

export const metadata: Metadata = {
  title: siteConfig.title,
  description: 'Dr. Suryakanta Parida is the best gastroenterologist in Cuttack & Bhubaneswar, Odisha. Expert in Endoscopy, Colonoscopy, Liver Disease, GERD & GI disorders at Sai Shree Polyclinic. Book appointment now.',
  keywords: siteConfig.keywords.join(', '),
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesHighlight />
      <WhyChoose />
      <Testimonials />
      <CTASection />
    </>
  );
}

