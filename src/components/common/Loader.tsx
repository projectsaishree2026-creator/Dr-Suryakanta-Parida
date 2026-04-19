import { cn } from '@/lib/helpers';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

const sizeMap = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-[3px]',
  lg: 'w-12 h-12 border-4',
};

export default function Loader({ size = 'md', className, label }: LoaderProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center gap-3', className)}
      role="status"
      aria-label={label ?? 'Loading…'}
    >
      <span
        className={cn(
          'rounded-full border-primary-200 border-t-primary-800 animate-spin',
          sizeMap[size]
        )}
      />
      {label && (
        <span className="text-sm text-[#6B7280] font-light">{label}</span>
      )}
    </div>
  );
}
