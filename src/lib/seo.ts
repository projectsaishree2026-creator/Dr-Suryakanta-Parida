import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${title} | Dr. Suryakanta Parida`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords].join(', '),
    authors: [{ name: siteConfig.name }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

/* ─── Structured Data: Physician ─────────────────────────── */
export const schemaOrg = {
  physician: {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: siteConfig.name,
    description: siteConfig.description,
    medicalSpecialty: 'Gastroenterology',
    jobTitle: 'Associate Professor & DM Gastroenterologist',
    image: `${siteConfig.url}/images/doctor/img-2.webp`,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    areaServed: [
      {
        '@type': 'City',
        name: 'Cuttack',
        containedInPlace: { '@type': 'State', name: 'Odisha' },
      },
      {
        '@type': 'City',
        name: 'Bhubaneswar',
        containedInPlace: { '@type': 'State', name: 'Odisha' },
      },
    ],
    knowsAbout: [
      'Endoscopy',
      'Colonoscopy',
      'GERD Treatment',
      'Liver Disease',
      'Inflammatory Bowel Disease',
      'Irritable Bowel Syndrome',
      'Pancreatic Disorders',
      'Hepatitis',
      'Fatty Liver Disease',
    ],
    affiliation: {
      '@type': 'Hospital',
      name: 'S.C.B Medical College',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Manglabag',
        addressLocality: 'Cuttack',
        addressRegion: 'Odisha',
        postalCode: '753007',
        addressCountry: 'IN',
      },
    },
    worksFor: {
      '@type': 'MedicalClinic',
      name: 'Sai Shree Polyclinic',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kathagola, Ring Rd, near Shree Maa',
        addressLocality: 'Cuttack',
        addressRegion: 'Odisha',
        postalCode: '753110',
        addressCountry: 'IN',
      },
      telephone: siteConfig.phoneRaw,
    },
  },

  /* ─── Structured Data: MedicalBusiness (Clinic) ──────────── */
  medicalBusiness: {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Sai Shree Polyclinic',
    description:
      'Sai Shree Polyclinic is a gastroenterology clinic in Cuttack, Odisha, run by Dr. Suryakanta Parida (DM Gastroenterologist). Serving patients from Cuttack, Bhubaneswar, and across Odisha.',
    image: `${siteConfig.url}/images/doctor/img-2.webp`,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kathagola, Ring Rd, near Shree Maa',
      addressLocality: 'Cuttack',
      addressRegion: 'Odisha',
      postalCode: '753110',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.4686,
      longitude: 85.8812,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    medicalSpecialty: 'Gastroenterology',
    areaServed: [
      { '@type': 'City', name: 'Cuttack' },
      { '@type': 'City', name: 'Bhubaneswar' },
      { '@type': 'State', name: 'Odisha' },
    ],
  },

  /* ─── Structured Data: WebSite (Sitelinks Search Box) ──── */
  webSite: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  },
};

/* ─── FAQPage Schema Generator ─────────────────────────── */
export function generateFAQSchema(
  faqs: { q: string; a: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/* ─── Article Schema Generator ─────────────────────────── */
export function generateArticleSchema(post: {
  title: string;
  metaDescription: string;
  slug: string;
  author: string;
  date: string;
  image: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `${siteConfig.url}${post.image}`,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'DM Gastroenterologist',
      affiliation: {
        '@type': 'Hospital',
        name: 'S.C.B Medical College, Cuttack',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sai Shree Polyclinic',
      url: siteConfig.url,
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blogs/${post.slug}`,
    },
  };
}

