export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  location: string;
  rating: number;
  procedure: string;
  text: string;
};

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh Nayak',
    initials: 'RN',
    location: 'Cuttack',
    rating: 5,
    procedure: 'Endoscopy',
    text: "Dr. Parida diagnosed my chronic digestive issue in a single consultation after years of uncertainty. His expertise and genuine patience are truly exceptional. I'm grateful for the clear explanation and the structured follow-up plan.",
  },
  {
    id: '2',
    name: 'Sunita Pradhan',
    initials: 'SP',
    location: 'Bhubaneswar',
    rating: 5,
    procedure: 'Colonoscopy',
    text: "I underwent colonoscopy at SCB and the entire experience was professional and reassuring. Dr. Parida explained every step clearly and made me feel completely comfortable. The diagnosis was accurate and the treatment plan precise.",
  },
  {
    id: '3',
    name: 'Abhijit Dash',
    initials: 'AD',
    location: 'Cuttack',
    rating: 5,
    procedure: 'Liver Disease Care',
    text: "My father was diagnosed with liver cirrhosis complications. Under Dr. Parida's meticulous care his condition has stabilised significantly. Highly recommended for anyone seeking expert gastroenterology care in Odisha.",
  },
  {
    id: '4',
    name: 'Priya Mohanty',
    initials: 'PM',
    location: 'Puri',
    rating: 5,
    procedure: 'GERD Treatment',
    text: "Suffered from severe acid reflux for years. Dr. Parida's thorough evaluation and the customised treatment protocol he designed has given me my life back. The relief has been remarkable.",
  },
  {
    id: '5',
    name: 'Debasish Kar',
    initials: 'DK',
    location: 'Sambalpur',
    rating: 5,
    procedure: 'Pancreatitis Care',
    text: "Travelled from Sambalpur specifically for Dr. Parida's expertise with pancreatitis. The level of clinical knowledge combined with his caring approach is unlike anything I've experienced elsewhere in Odisha.",
  },
  {
    id: '6',
    name: 'Mamata Jena',
    initials: 'MJ',
    location: 'Bhubaneswar',
    rating: 5,
    procedure: 'IBS Management',
    text: "After years of misdiagnosis, Dr. Parida correctly identified my condition and gave me a clear management plan. His explanations are so thorough that I finally understood my own health. Truly outstanding doctor.",
  },
];
