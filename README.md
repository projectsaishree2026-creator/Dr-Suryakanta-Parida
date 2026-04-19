# Dr. Suryakanta Parida — Portfolio Website

**DM Gastroenterologist | Associate Professor, SCB Medical College, Cuttack**
**Sai Shree Polyclinic · +91 7008512773**

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 14.2.5 | App Router, SSG, SSR, API Routes |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4.x | Utility-first styling |
| **Framer Motion** | 11.x | Page & scroll animations |
| **Lucide React** | 0.414 | Icons |
| **React Hook Form** | 7.x | Form management |
| **Zod** | 3.x | Schema validation |

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, schema.org, navbar, footer)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design system + Tailwind layers
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   ├── robots.ts           # robots.txt
│   ├── not-found.tsx       # 404 page
│   ├── (routes)/
│   │   ├── about/          # /about
│   │   ├── services/       # /services
│   │   ├── blogs/          # /blogs + /blogs/[slug]
│   │   ├── patient-corner/ # /patient-corner
│   │   └── contact/        # /contact
│   └── api/
│       ├── contact/        # POST /api/contact
│       └── appointment/    # POST /api/appointment
├── components/
│   ├── layout/             # Navbar, Footer, ScrollToTop
│   ├── common/             # Button, Container, Section, SectionHead
│   ├── home/               # Hero, AboutPreview, ServicesHighlight, Testimonials, CTASection
│   ├── services/           # ServiceCard (extendable)
│   ├── contact/            # ContactForm, Map
│   └── blog/               # BlogCard (extendable)
├── data/                   # Static content (doctor, services, testimonials, blogs)
├── lib/                    # seo.ts, animations.ts, helpers.ts, constants.ts
├── hooks/                  # useScroll, useMediaQuery
├── features/               # Business logic modules
├── types/                  # TypeScript types
├── context/                # AppContext
└── config/                 # site.config.ts, theme.config.ts
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.local.example .env.local
# Edit .env.local with your values

# 3. Start development server
npm run dev
# → http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

### Vercel (Recommended — Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel Dashboard
```

Or drag-and-drop to [vercel.com](https://vercel.com) — zero config needed.

### Netlify
```bash
npm run build
# Deploy the `.next` folder via Netlify CLI or dashboard
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Primary | `#5B21B6` (Deep Royal Purple) | Buttons, links, accents |
| Accent | `#F59E0B` (Golden Amber) | CTAs, highlights, labels |
| Background | `#F8F5F2` (Warm Beige) | Section backgrounds |
| Charcoal | `#1F2937` | Headings, body text |
| Heading font | Cormorant Garamond (serif) | All h1–h5 |
| Body font | DM Sans | All body text, UI elements |

---

## 📄 Pages

| Route | Page | SEO Title |
|---|---|---|
| `/` | Home | Dr. Suryakanta Parida – DM Gastroenterologist |
| `/about` | About | About Dr. Suryakanta Parida |
| `/services` | Services | Gastroenterology Services |
| `/patient-corner` | Patient Corner | Patient Resources & FAQs |
| `/blogs` | Blog Listing | Gastroenterology Health Blog |
| `/blogs/[slug]` | Blog Post | Dynamic per article |
| `/contact` | Contact | Book Appointment |

---

## 📈 SEO Features

- ✅ Unique `<title>` and `<meta description>` per page
- ✅ JSON-LD `Physician` schema markup
- ✅ Open Graph + Twitter Card tags
- ✅ Auto-generated `sitemap.xml`
- ✅ Auto-generated `robots.txt`
- ✅ Canonical URLs
- ✅ Local SEO keywords (Gastroenterologist Cuttack, Odisha)
- ✅ `generateStaticParams` for blog slugs (SSG)
- ✅ Google Maps embed for local SEO signals

---

## 📞 Contact Details in Site

- **Phone:** [+91 7008512773](tel:+917008512773) *(clickable tel: link throughout)*
- **Clinic:** Sai Shree Polyclinic
- **Hospital:** S.C.B Medical College, Cuttack
- **Location:** Cuttack, Odisha, India

---

## 📧 Contact Form Setup (Production)

Install Resend for email delivery:

```bash
npm install resend
```

In `src/app/api/contact/route.ts`, uncomment the Resend block and add your key to `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

---

## 🔧 Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://drsuryakantaparida.com
NEXT_PUBLIC_PHONE=+917008512773
NEXT_PUBLIC_MAPS_EMBED_URL=https://www.google.com/maps/embed?...
RESEND_API_KEY=your_resend_api_key_here
```

---

*Built for Dr. Suryakanta Parida · Sai Shree Polyclinic · Cuttack, Odisha*
