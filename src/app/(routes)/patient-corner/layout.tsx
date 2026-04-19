import type { Metadata } from 'next';
import { generatePageMetadata, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Patient Corner – FAQs & Digestive Health Tips',
  description:
    'Frequently asked questions about gastroenterology, digestive health tips, and warning signs explained by Dr. Suryakanta Parida, DM Gastroenterologist in Cuttack & Bhubaneswar, Odisha.',
  path: '/patient-corner',
  keywords: [
    'Gastroenterology FAQ Cuttack',
    'Digestive health tips Bhubaneswar',
    'Endoscopy FAQ',
    'Colonoscopy FAQ',
    'GI doctor questions Odisha',
  ],
});

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

export default function PatientCornerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      {children}
    </>
  );
}
