export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  metaDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'symptoms-of-digestive-disorders',
    title: 'Symptoms of Digestive Disorders You Should Never Ignore',
    excerpt:
      'Learn about the warning signs that indicate it\'s time to seek professional gastroenterological care before symptoms escalate.',
    category: 'Awareness',
    image: '/images/blog/Digestive Disorders.webp',
    author: 'Dr. Suryakanta Parida',
    date: 'January 15, 2025',
    readTime: '5 min read',
    tags: ['Digestive Health', 'Symptoms', 'GI Disorders', 'Gastroenterologist Cuttack', 'Digestive problems Bhubaneswar'],
    metaDescription:
      'Warning signs of digestive disorders — expert guide by Dr. Suryakanta Parida, best gastroenterologist in Cuttack & Bhubaneswar, Odisha.',
    content: `Digestive disorders are among the most common health conditions affecting people in India, yet many patients delay seeking care until symptoms become severe. Early recognition of warning signs can make a significant difference in outcomes.

**Key warning signs to watch for:**

**1. Persistent abdominal pain** lasting more than two weeks, particularly if accompanied by fever or weight loss, requires immediate evaluation.

**2. Blood in stool or vomiting** — any amount of rectal bleeding or haematemesis is a red flag that warrants urgent gastroenterological assessment.

**3. Unexplained weight loss** of more than 5% of body weight over 3–6 months without dietary changes can indicate malabsorption or, in some cases, malignancy.

**4. Chronic heartburn** occurring more than twice a week for several weeks may indicate GERD, which, if untreated, can lead to esophageal damage.

**5. Difficulty swallowing (dysphagia)** is never a normal symptom and always requires endoscopic evaluation.

**6. Persistent changes in bowel habits** — whether chronic diarrhoea, constipation, or alternating between the two — should be investigated, especially in individuals over 45.

**7. Jaundice** (yellowing of skin or eyes) indicates liver or bile duct pathology and requires urgent attention.

When in doubt, consult a gastroenterologist. Early diagnosis almost always leads to better outcomes and often simpler treatment. At Sai Shree Polyclinic, Dr. Parida offers thorough evaluations for all digestive concerns.`,
  },
  {
    id: '2',
    slug: 'when-to-see-a-gastroenterologist',
    title: 'When to See a Gastroenterologist: A Complete Guide',
    excerpt:
      'Understanding when your digestive symptoms go beyond what a general physician can address — and why specialist care matters.',
    category: 'Preventive Care',
    image: '/images/blog/Gastroenterologist.webp',
    author: 'Dr. Suryakanta Parida',
    date: 'February 20, 2025',
    readTime: '6 min read',
    tags: ['Specialist Care', 'Gastroenterology', 'Patient Guide', 'GI doctor Cuttack', 'Stomach specialist Bhubaneswar'],
    metaDescription:
      'When to see a gastroenterologist in Cuttack or Bhubaneswar — complete patient guide by DM specialist Dr. Suryakanta Parida, Odisha.',
    content: `Many patients wonder whether their digestive symptoms warrant a specialist consultation or whether a visit to their general physician is sufficient. This guide helps you make that decision.

**See a gastroenterologist if you have:**

- Symptoms persisting despite standard treatment from your GP
- Rectal bleeding or blood in vomit at any time
- Unexplained significant weight loss
- Family history of colorectal cancer or IBD
- Chronic liver disease or abnormal liver function tests
- Jaundice or suspected hepatitis
- Swallowing difficulties
- Chronic diarrhoea lasting more than 4 weeks
- Suspected celiac disease or malabsorption
- Any concern about gastrointestinal cancer

**The difference a specialist makes:**

A DM Gastroenterologist brings subspecialty training that a general practitioner cannot replicate. This means more accurate diagnosis of complex conditions, access to advanced procedures (endoscopy, colonoscopy), and treatment protocols based on the latest evidence.

At SCB Medical College and Sai Shree Polyclinic, Dr. Parida sees patients with a wide range of digestive concerns. No concern is too small — early consultation prevents complications.`,
  },
  {
    id: '3',
    slug: 'importance-of-colonoscopy',
    title: 'The Importance of Colonoscopy for Colorectal Health',
    excerpt:
      'Why colonoscopy remains the gold standard for colorectal cancer screening and effective polyp prevention.',
    category: 'Procedures',
    image: '/images/blog/Colonoscopy.webp',
    author: 'Dr. Suryakanta Parida',
    date: 'March 10, 2025',
    readTime: '7 min read',
    tags: ['Colonoscopy', 'Cancer Screening', 'Preventive Care', 'Colonoscopy Cuttack', 'Colon screening Bhubaneswar'],
    metaDescription:
      'Importance of colonoscopy for colorectal health — by Dr. Suryakanta Parida, colonoscopy specialist Cuttack & Bhubaneswar, Odisha.',
    content: `Colorectal cancer is one of the most preventable cancers, yet it remains a leading cause of cancer-related mortality. Colonoscopy is the single most effective tool for its prevention and early detection.

**What is colonoscopy?**

Colonoscopy is a procedure where a flexible camera is used to visualise the entire colon. It allows the physician to detect polyps (pre-cancerous growths), remove them during the same procedure, and diagnose conditions like IBD, diverticulosis, and colorectal cancer at an early, treatable stage.

**Who should get screened?**

- Everyone aged 45 and above, even without symptoms
- Individuals with a family history of colorectal cancer — screening should begin 10 years before the age of diagnosis in a first-degree relative
- Patients with IBD (Crohn's disease or ulcerative colitis)
- Anyone with rectal bleeding, change in bowel habits, or unexplained anaemia

**Is it painful?**

The procedure is performed under sedation. Most patients feel no discomfort during the procedure and experience only mild bloating afterward, which resolves within hours.

**How often?**

For average-risk individuals with a normal result: every 10 years. Higher-risk patients may need more frequent surveillance, as determined by Dr. Parida.

Don't delay screening. A 30-minute procedure can prevent a cancer that takes years to develop.`,
  },
  {
    id: '4',
    slug: 'fatty-liver-disease-causes-and-prevention',
    title: 'Fatty Liver Disease: Causes, Risks & Prevention',
    excerpt:
      'Understanding NAFLD in the Indian context and the lifestyle changes that make a lasting difference.',
    category: 'Liver Health',
    image: '/images/blog/Fatty Liver.webp',
    author: 'Dr. Suryakanta Parida',
    date: 'April 5, 2025',
    readTime: '6 min read',
    tags: ['Liver Health', 'NAFLD', 'Lifestyle', 'Fatty liver Cuttack', 'Liver specialist Bhubaneswar'],
    metaDescription:
      'Fatty liver disease causes, risks & prevention in India — expert advice from liver specialist Dr. Suryakanta Parida, Cuttack & Bhubaneswar, Odisha.',
    content: `Non-alcoholic fatty liver disease (NAFLD) has become an epidemic in India, affecting an estimated 25–30% of the urban population. It is now the leading cause of chronic liver disease in our country.

**What is NAFLD?**

NAFLD refers to fat accumulation in the liver in the absence of significant alcohol intake. It ranges from simple steatosis (fat alone) to NASH (non-alcoholic steatohepatitis, fat with inflammation), which can progress to cirrhosis and liver failure if untreated.

**Risk factors specific to India:**

- High carbohydrate and refined sugar intake
- Sedentary lifestyle
- Central obesity (belly fat)
- Type 2 diabetes and insulin resistance
- Polycystic ovarian syndrome (PCOS)
- Hypothyroidism

**Prevention and reversal:**

The good news is that early NAFLD is reversible with lifestyle modification. A 7–10% reduction in body weight through diet and exercise has been shown to significantly reduce liver fat. Dr. Parida works with patients to create sustainable plans combining dietary guidance, physical activity targets, and regular monitoring with liver function tests and ultrasound.

Early detection through screening is key. If you have diabetes, obesity, or metabolic syndrome, discuss a liver health check with Dr. Parida.`,
  },
  {
    id: '5',
    slug: 'managing-gerd-beyond-antacids',
    title: 'Managing GERD: Beyond Antacids',
    excerpt:
      'A gastroenterologist\'s guide to long-term acid reflux management without relying solely on medication.',
    category: 'Digestive Health',
    image: '/images/blog/Managing GERD.webp',
    author: 'Dr. Suryakanta Parida',
    date: 'May 18, 2025',
    readTime: '5 min read',
    tags: ['GERD', 'Acid Reflux', 'Treatment', 'GERD treatment Cuttack', 'Acid reflux doctor Bhubaneswar'],
    metaDescription:
      'Managing GERD beyond antacids — acid reflux treatment by Dr. Suryakanta Parida, gastroenterologist Cuttack & Bhubaneswar, Odisha.',
    content: `Gastro-oesophageal reflux disease (GERD) affects millions of Indians. While antacids provide immediate relief, long-term management requires a more comprehensive approach.

**What is GERD?**

GERD occurs when stomach acid regularly flows back into the oesophagus, causing heartburn, regurgitation, chest pain, and in chronic cases, oesophageal damage (erosive esophagitis or Barrett's oesophagus).

**Lifestyle modifications (equally important as medication):**

- Elevate the head of the bed by 6–8 inches
- Avoid meals within 3 hours of bedtime
- Reduce fatty foods, citrus, caffeine, alcohol and spicy food
- Maintain healthy body weight — even modest weight loss reduces symptoms significantly
- Quit smoking (smoking weakens the lower oesophageal sphincter)

**When is endoscopy needed?**

Dr. Parida recommends endoscopy for patients with: symptoms lasting more than 5 years, swallowing difficulties, weight loss, anaemia, or poor response to medication. Endoscopy can diagnose Barrett's oesophagus, a precancerous change requiring surveillance.

**Long-term medication safety:**

Proton pump inhibitors (PPIs) are safe for most patients when used as prescribed. Dr. Parida takes a careful approach to PPI therapy — prescribing the lowest effective dose and reassessing regularly to avoid unnecessary long-term use.`,
  },
  {
    id: '6',
    slug: 'what-to-expect-during-endoscopy',
    title: 'What to Expect During Your First Endoscopy',
    excerpt:
      'A step-by-step walkthrough that takes the anxiety out of your first upper GI endoscopy procedure.',
    category: 'Patient Education',
    image: '/images/blog/Endoscopy.webp',
    author: 'Dr. Suryakanta Parida',
    date: 'June 12, 2025',
    readTime: '5 min read',
    tags: ['Endoscopy', 'Patient Guide', 'Procedures', 'Endoscopy Cuttack', 'Upper GI endoscopy Bhubaneswar'],
    metaDescription:
      'What to expect during endoscopy — patient guide by Dr. Suryakanta Parida, endoscopy specialist Cuttack & Bhubaneswar, Odisha.',
    content: `Endoscopy is one of the most commonly performed gastroenterological procedures, yet many patients approach it with anxiety. Understanding what to expect makes the experience far less daunting.

**Before the procedure:**

You will be asked to fast for 6–8 hours. Avoid food and water after midnight. Inform Dr. Parida about all medications you take — blood thinners in particular may need to be paused. Arrange transport home, as sedation is used.

**On the day:**

You will be given a sedative (usually midazolam) through an IV line. This does not put you fully to sleep but induces a relaxed, drowsy state where most patients feel no discomfort. A local anaesthetic spray is applied to the throat.

**During the procedure:**

The endoscope (a thin, flexible tube with a camera) is passed through the mouth into the stomach and duodenum. Dr. Parida examines the lining of the oesophagus, stomach and duodenum. If needed, biopsies are taken painlessly. The procedure typically takes 10–15 minutes.

**After the procedure:**

You will rest for 30–60 minutes while the sedation wears off. A report is provided, and Dr. Parida will discuss findings with you. You may have a mild sore throat for 24 hours. Avoid driving on the day of the procedure.

If you have questions about endoscopy at Sai Shree Polyclinic, please call +91 7008512773.`,
  },
];
