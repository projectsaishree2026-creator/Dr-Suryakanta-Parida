import { cn } from '@/lib/helpers';
import type { ReactNode } from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
  className?: string;
}

export default function Heading({ level = 2, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const sizeMap: Record<number, string> = {
    1: 'text-[clamp(2.6rem,5vw,4rem)]',
    2: 'text-[clamp(2rem,3.5vw,2.75rem)]',
    3: 'text-xl',
    4: 'text-lg',
    5: 'text-base',
  };

  return (
    <Tag
      className={cn(
        'font-heading font-bold text-charcoal leading-[1.12]',
        sizeMap[level],
        className
      )}
    >
      {children}
    </Tag>
  );
}
