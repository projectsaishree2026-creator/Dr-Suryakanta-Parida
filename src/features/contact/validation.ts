import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name (min 2 characters)'),
  phone: z
    .string()
    .min(10, 'Please enter a valid 10-digit phone number')
    .regex(/^[+\d\s\-()]+$/, 'Invalid phone number format'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  concern: z.string().min(1, 'Please select a primary concern'),
  message: z.string().max(500, 'Message cannot exceed 500 characters').optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
