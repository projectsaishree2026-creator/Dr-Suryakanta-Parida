import { servicesData } from '@/data/services';
import ServiceCard from './ServiceCard';
import { cn } from '@/lib/helpers';

interface ServicesGridProps {
  limit?: number;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

export default function ServicesGrid({
  limit,
  variant = 'default',
  className,
}: ServicesGridProps) {
  const services = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5',
        variant === 'detailed' && 'xl:grid-cols-3',
        className
      )}
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} variant={variant} />
      ))}
    </div>
  );
}
