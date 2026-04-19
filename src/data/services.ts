export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  tag: string;
  description: string;
  benefits: string[];
  longDescription: string;
};

export const servicesData: Service[] = [
  {
    id: 'endoscopy',
    title: 'Endoscopy',
    shortTitle: 'Endoscopy',
    icon: '🔬',
    tag: 'Diagnostic',
    description:
      'Advanced upper GI endoscopy for precise diagnosis of esophageal, stomach, and duodenal conditions.',
    longDescription:
      'Upper GI endoscopy (OGD scopy) allows direct visualisation of the esophagus, stomach and duodenum. Dr. Parida performs both diagnostic and therapeutic endoscopic procedures using state-of-the-art equipment at SCB Medical College.',
    benefits: [
      'Accurate real-time diagnosis',
      'Biopsy collection during procedure',
      'Therapeutic intervention possible',
      'Minimally invasive & safe',
    ],
  },
  {
    id: 'colonoscopy',
    title: 'Colonoscopy',
    shortTitle: 'Colonoscopy',
    icon: '🩺',
    tag: 'Diagnostic & Therapeutic',
    description:
      'Gold-standard colonoscopic examination for colorectal cancer screening, polyp removal and bowel disorder diagnosis.',
    longDescription:
      'Colonoscopy is the most effective tool for colorectal cancer screening and diagnosis of lower bowel disorders including IBD. The procedure allows polyp detection, removal, and biopsy in a single session.',
    benefits: [
      'Colorectal cancer screening',
      'Polyp detection & removal',
      'IBD diagnosis & monitoring',
      'Same-day therapeutic intervention',
    ],
  },
  {
    id: 'gi-disease-treatment',
    title: 'GI Disease Treatment',
    shortTitle: 'GI Treatment',
    icon: '💊',
    tag: 'Treatment',
    description:
      'Comprehensive medical management of GERD, IBS, IBD, peptic ulcer disease and other complex GI conditions.',
    longDescription:
      'Dr. Parida provides evidence-based management of the full spectrum of gastrointestinal diseases — from acid reflux and peptic ulcers to complex inflammatory bowel disease — with personalised treatment plans for each patient.',
    benefits: [
      'Personalised treatment protocols',
      'Evidence-based medicine',
      'Long-term disease management',
      'Structured follow-up care',
    ],
  },
  {
    id: 'digestive-disorder-management',
    title: 'Digestive Disorder Management',
    shortTitle: 'Digestive Disorders',
    icon: '🧬',
    tag: 'Management',
    description:
      'Expert management of chronic and acute digestive disorders tailored to each patient\'s clinical profile.',
    longDescription:
      'From functional bowel disorders to complex malabsorption syndromes, Dr. Parida offers thorough evaluation and structured, long-term management plans designed around each patient\'s specific needs and lifestyle.',
    benefits: [
      'Comprehensive evaluation',
      'Functional & organic disorders',
      'Nutritional guidance included',
      'Chronic condition management',
    ],
  },
  {
    id: 'liver-disease-care',
    title: 'Liver Disease Care',
    shortTitle: 'Liver Care',
    icon: '🫀',
    tag: 'Liver Health',
    description:
      'Expert care for hepatitis, cirrhosis, fatty liver disease (NAFLD), liver tumours and portal hypertension.',
    longDescription:
      'Liver disease management is a core subspecialty at Dr. Parida\'s practice. From viral hepatitis and NAFLD to advanced cirrhosis and its complications, patients receive comprehensive hepatology care with regular monitoring.',
    benefits: [
      'Viral hepatitis management',
      'NAFLD & NASH treatment',
      'Cirrhosis complication care',
      'Regular liver function monitoring',
    ],
  },
  {
    id: 'pancreatic-disorders',
    title: 'Pancreatic Disorders',
    shortTitle: 'Pancreatic Care',
    icon: '🔍',
    tag: 'Specialist Care',
    description:
      'Specialised evaluation and treatment of acute/chronic pancreatitis, pancreatic cysts and tumours.',
    longDescription:
      'Pancreatic diseases require highly specialised expertise. Dr. Parida offers thorough workup and management of pancreatitis, pancreatic cysts, and other complex pancreatic pathologies, coordinating with radiology and surgery as needed.',
    benefits: [
      'Pancreatitis management',
      'Pancreatic cyst evaluation',
      'Multi-disciplinary approach',
      'CT scan analysis & guidance',
    ],
  },
  {
    id: 'imaging-support',
    title: 'Imaging Support',
    shortTitle: 'Imaging',
    icon: '📡',
    tag: 'Radiology',
    description:
      'CT scan guidance and detailed radiological analysis for GI, hepatic and pancreatic conditions.',
    longDescription:
      'Accurate interpretation of CT scans, ultrasounds and other imaging is essential for GI diagnosis. Dr. Parida provides expert image analysis and guidance, ensuring the right diagnosis at the right time.',
    benefits: [
      'CT scan interpretation',
      'Ultrasound guidance',
      'Accurate staging & diagnosis',
      'Correlation with clinical findings',
    ],
  },
];
