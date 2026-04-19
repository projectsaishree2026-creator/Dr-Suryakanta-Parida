'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[+\d\s-]+$/, 'Invalid phone number format'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  concern: z.string().min(1, 'Please select a concern'),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const concerns = [
  'Endoscopy',
  'Colonoscopy',
  'Liver Disease',
  'Digestive Disorders',
  'Pancreatic Issues',
  'General GI Consultation',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const whatsappMessage = `Hello Dr. Suryakanta Parida,

I would like to book an appointment with Dr. Suryakanta Parida..

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email || 'Not provided'}
🩺 Concern: ${data.concern}
📝 Message: ${data.message || 'N/A'}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const url = `https://wa.me/917008512773?text=${encodedMessage}`;

      // Short loading state for UX
      await new Promise((resolve) => setTimeout(resolve, 300));
      window.open(url, '_blank');

      setSubmitted(true);
      reset();
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <CheckCircle2 size={30} className="text-green-600" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">
          Request Submitted!
        </h3>
        <p className="text-[#6B7280] font-light text-sm leading-relaxed max-w-xs">
          Thank you. Dr. Parida&apos;s team will contact you at the number provided within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary-800 text-sm font-semibold hover:text-primary-600 transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[0.72rem] font-semibold uppercase tracking-wider
                             text-charcoal mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            placeholder="Your full name"
            className={`w-full px-4 py-3 rounded-xl border text-sm font-body
                        bg-[#F8F5F2] text-charcoal placeholder-[#9CA3AF]
                        focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800
                        transition-all duration-200
                        ${errors.name ? 'border-red-400 bg-red-50' : 'border-[#E5E7EB]'}`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-[0.72rem] font-semibold uppercase tracking-wider
                             text-charcoal mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={`w-full px-4 py-3 rounded-xl border text-sm font-body
                        bg-[#F8F5F2] text-charcoal placeholder-[#9CA3AF]
                        focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800
                        transition-all duration-200
                        ${errors.phone ? 'border-red-400 bg-red-50' : 'border-[#E5E7EB]'}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-[0.72rem] font-semibold uppercase tracking-wider
                           text-charcoal mb-1.5">
          Email <span className="text-[#9CA3AF] font-normal">(optional)</span>
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="your@email.com"
          className={`w-full px-4 py-3 rounded-xl border text-sm font-body
                      bg-[#F8F5F2] text-charcoal placeholder-[#9CA3AF]
                      focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800
                      transition-all duration-200
                      ${errors.email ? 'border-red-400 bg-red-50' : 'border-[#E5E7EB]'}`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Concern */}
      <div>
        <label className="block text-[0.72rem] font-semibold uppercase tracking-wider
                           text-charcoal mb-1.5">
          Primary Concern <span className="text-red-500">*</span>
        </label>
        <select
          {...register('concern')}
          className={`w-full px-4 py-3 rounded-xl border text-sm font-body
                      bg-[#F8F5F2] text-charcoal
                      focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800
                      transition-all duration-200 appearance-none
                      ${errors.concern ? 'border-red-400 bg-red-50' : 'border-[#E5E7EB]'}`}
        >
          <option value="">Select your concern</option>
          {concerns.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.concern && (
          <p className="text-red-500 text-xs mt-1">{errors.concern.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-[0.72rem] font-semibold uppercase tracking-wider
                           text-charcoal mb-1.5">
          Message <span className="text-[#9CA3AF] font-normal">(optional)</span>
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Briefly describe your symptoms or concern..."
          className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm font-body
                     bg-[#F8F5F2] text-charcoal placeholder-[#9CA3AF] resize-none
                     focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800
                     transition-all duration-200"
        />
      </div>

      <div className="pt-2">
        <p className="text-[0.75rem] text-[#6B7280] text-center mb-3 font-medium">
          👉 You&apos;ll be redirected to WhatsApp to confirm your appointment
        </p>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary-800 text-white
                     rounded-xl font-semibold font-body text-[0.9375rem]
                     hover:bg-primary-600 transition-all duration-300 disabled:opacity-60
                     disabled:cursor-not-allowed"
        >
          {loading ? (
            <><Loader2 size={17} className="animate-spin" /> Submitting...</>
          ) : (
            <><Send size={17} /> Submit Appointment Request</>
          )}
        </button>
      </div>
    </form>
  );
}
