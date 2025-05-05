import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  alignment?: 'left' | 'center';
  subtitleColor?: string;
  titleColor?: string;
  className?: string;
}

export const SectionHeader = ({
  subtitle,
  title,
  alignment = 'left',
  subtitleColor = 'text-gold',
  titleColor = 'text-dark-dark',
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'mb-8',
        alignment === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {subtitle && (
        <h3 className={cn('text-sm uppercase tracking-wide font-medium mb-1', subtitleColor)}>
          {subtitle}
        </h3>
      )}
      <h2 className={cn('text-3xl md:text-4xl font-semibold', titleColor)}>
        {title}
      </h2>
    </div>
  );
};
