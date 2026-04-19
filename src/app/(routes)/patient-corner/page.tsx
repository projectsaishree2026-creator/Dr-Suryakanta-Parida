'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, Phone } from 'lucide-react';
import { PHONE_RAW, PHONE } from '@/lib/constants';

const faqs = [
  { q: 'What conditions does a gastroenterologist treat?', a: 'Gastroenterologists treat a wide spectrum of digestive conditions including acid reflux (GERD), irritable bowel syndrome (IBS), inflammatory bowel disease (Crohn\'s disease and ulcerative colitis), liver diseases (hepatitis, cirrhosis, NAFLD), pancreatitis, gallbladder disorders, and gastrointestinal cancers.' },
  { q: 'How should I prepare for an endoscopy?', a: 'You should fast for at least 6–8 hours before the procedure — avoid eating or drinking anything after midnight. Inform Dr. Parida about all medications you take, especially blood thinners. Arrange for someone to drive you home as sedation is used during the procedure.' },
  { q: 'Is colonoscopy painful?', a: 'Colonoscopy is performed under sedation, so most patients feel no discomfort during the procedure. You may experience mild bloating or cramping afterward, which resolves within a few hours. The vast majority of patients find it far less uncomfortable than anticipated.' },
  { q: 'How often should I get a colonoscopy?', a: 'For average-risk individuals, a colonoscopy every 10 years starting at age 45 is recommended. If you have a family history of colorectal cancer or polyps, or an existing bowel condition, Dr. Parida may recommend earlier and more frequent screening.' },
  { q: 'What are the early warning signs of liver disease?', a: 'Early signs include persistent fatigue, loss of appetite, nausea, jaundice (yellowing of skin or eyes), dark-coloured urine, pale stools, and upper right abdominal pain or discomfort. If you notice these symptoms, please consult Dr. Parida promptly.' },
  { q: 'What is the difference between IBS and IBD?', a: 'IBS (Irritable Bowel Syndrome) is a functional disorder causing abdominal pain and altered bowel habits without visible inflammation. IBD (Inflammatory Bowel Disease) includes Crohn\'s disease and ulcerative colitis — both involve chronic inflammation of the GI tract and can cause serious complications if untreated. Accurate diagnosis by a gastroenterologist is essential.' },
  { q: 'When should I see a gastroenterologist rather than a GP?', a: 'See a gastroenterologist if symptoms persist despite GP treatment, if you have rectal bleeding, unexplained weight loss, a family history of GI cancer, difficulty swallowing, jaundice, or any concern about gastrointestinal malignancy. Specialist evaluation ensures accurate diagnosis.' },
  { q: 'Can I book an appointment directly?', a: 'Yes. You can contact Sai Shree Polyclinic directly by calling +91 7008512773. You may also submit an appointment request through the Contact page on this website.' },
];

const tips = [
  { icon: '🥗', h: 'Eat a High-Fibre Diet', p: 'Include whole grains, fruits, and vegetables daily to maintain gut motility and reduce colon cancer risk.' },
  { icon: '💧', h: 'Stay Hydrated', p: 'Drink 8–10 glasses of water daily. Adequate hydration supports digestion and prevents constipation.' },
  { icon: '🚶', h: 'Exercise Regularly', p: '30 minutes of moderate exercise daily improves gut motility and reduces the risk of GI disease.' },
  { icon: '🚭', h: 'Avoid Tobacco & Alcohol', p: 'Both significantly increase risk of liver disease, esophageal cancer, and other GI conditions.' },
  { icon: '🕐', h: 'Eat at Regular Times', p: 'Irregular eating patterns disrupt your digestive rhythm and can worsen acid reflux and IBS symptoms.' },
  { icon: '🩺', h: 'Screen at 45', p: 'Begin colorectal cancer screening at age 45 even without symptoms — early detection saves lives.' },
];

const warnings = [
  { icon: '🩸', h: 'Blood in Stool or Vomiting', p: 'Any rectal bleeding or haematemesis requires immediate gastroenterological assessment.' },
  { icon: '⚖️', h: 'Unexplained Weight Loss', p: 'Rapid, unintentional weight loss can signal GI cancer, malabsorption, or serious pathology.' },
  { icon: '😣', h: 'Persistent Abdominal Pain', p: 'Chronic pain lasting more than two weeks needs prompt specialist evaluation.' },
  { icon: '🟡', h: 'Jaundice', p: 'Yellowing of the skin or eyes indicates liver or bile duct pathology requiring immediate investigation.' },
  { icon: '🔄', h: 'Chronic Bowel Habit Changes', p: 'Persistent diarrhoea or constipation could indicate IBD, IBS, or early-stage colon cancer.' },
  { icon: '😮', h: 'Difficulty Swallowing', p: 'Dysphagia can signal esophageal disorders or cancer requiring urgent endoscopic evaluation.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'border-primary-300 shadow-soft' : 'border-[#E5E7EB]'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left
                   hover:bg-primary-50/60 transition-colors"
      >
        <span className="text-[0.95rem] font-semibold text-charcoal font-body">{q}</span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200
                          ${open ? 'bg-primary-800 text-white' : 'bg-primary-100 text-primary-800'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-[0.875rem] text-charcoal-light leading-relaxed font-light border-t border-[#F3F4F6] pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function PatientCornerPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="container-max text-center">
          <p className="section-label">Patient Resources</p>
          <h1 className="section-title max-w-2xl mx-auto">
            Patient <span className="text-primary-800">Corner</span>
          </h1>
          <p className="section-sub mx-auto">
            FAQs, digestive health tips, and preventive care guidance from Dr. Parida.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <p className="section-label">Common Questions</p>
            <h2 className="section-title mb-10">
              Frequently Asked <span className="text-primary-800">Questions</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => <FAQItem key={f.q} {...f} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Health tips */}
      <section className="py-20 bg-[#F8F5F2]">
        <div className="container-max">
          <p className="section-label text-center">Preventive Care</p>
          <h2 className="section-title text-center mb-12">
            Digestive <span className="text-primary-800">Health Tips</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((t) => (
              <div key={t.h} className="bg-white rounded-3xl p-6 border border-[#E5E7EB] shadow-soft
                                        hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">{t.h}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-light">{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <p className="section-label text-center">Act Promptly</p>
          <h2 className="section-title text-center mb-12">
            Warning Signs You Should{' '}
            <span className="text-primary-800">Never Ignore</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {warnings.map((w) => (
              <div key={w.h} className="bg-red-50 border border-red-100 rounded-3xl p-6">
                <div className="text-2xl mb-3">{w.icon}</div>
                <h3 className="font-heading text-lg font-bold text-red-800 mb-2">{w.h}</h3>
                <p className="text-sm text-red-700/80 leading-relaxed font-light">{w.p}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={`tel:${PHONE_RAW}`} className="btn-primary">
              <Phone size={16} />
              Call Dr. Parida Now — {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
