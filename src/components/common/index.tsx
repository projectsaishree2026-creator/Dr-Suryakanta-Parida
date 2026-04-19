'use client';

import { cn } from '@/lib/helpers';
import type { ReactNode } from 'react';

/* ── Button ─────────────────────────────────────────── */
type ButtonVariant = 'primary' | 'outline' | 'accent' | 'white' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-700 text-white hover:bg-primary-600 hover:shadow-primary',
  outline:
    'bg-white text-primary-700 border-[1.5px] border-primary-200 hover:bg-primary-50 hover:border-primary-400',
  accent:
    'bg-accent-500 text-white hover:bg-accent-600 hover:shadow-accent',
  white:
    'bg-white text-primary-700 hover:bg-primary-50',
  ghost:
    'text-primary-700 hover:bg-primary-50',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-[0.9375rem]',
  lg: 'px-9 py-3.5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold font-body',
        'transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none',
        'focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/* ── Container ──────────────────────────────────────── */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('container-max', className)}>{children}</div>
  );
}

/* ── Section ────────────────────────────────────────── */
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'beige' | 'primary-soft' | 'primary';
}

const bgMap: Record<string, string> = {
  white: 'bg-white',
  beige: 'bg-beige',
  'primary-soft': 'bg-primary-50',
  primary: 'bg-primary-800',
};

export function Section({
  children,
  className,
  id,
  bg = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 lg:py-28', bgMap[bg], className)}
    >
      {children}
    </section>
  );
}

/* ── SectionHead ─────────────────────────────────────── */
export function SectionHead({
  label,
  title,
  subtitle,
  center = false,
  titleHtml,
}: {
  label?: string;
  title?: string;
  titleHtml?: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn('mb-12', center && 'text-center')}>
      {label && <p className="section-label">{label}</p>}
      {titleHtml ? (
        <h2 className="section-title">{titleHtml}</h2>
      ) : (
        title && <h2 className="section-title">{title}</h2>
      )}
      {subtitle && (
        <p className={cn('section-sub mt-3', center && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
