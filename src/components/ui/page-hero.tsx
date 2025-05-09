import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
}

export const PageHero = ({
  title,
  subtitle,
  backgroundImage = '/images/rr-velar.JPG',
  className,
}: PageHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center h-[35vh] min-h-[200px] text-white',
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-dark bg-opacity-50"
        style={{ backdropFilter: 'blur(2px)' }}
      />

      {/* Content */}
      <div className="relative text-center z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
