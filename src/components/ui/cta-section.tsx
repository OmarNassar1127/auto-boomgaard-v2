import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  id?: string;
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  buttons?: CTAButtonProps[];
  className?: string;
  textColor?: string;
  alignment?: 'left' | 'center';
}

export const CTASection = ({
  title,
  subtitle,
  description,
  backgroundImage = 'https://ext.same-assets.com/611734785/2812278651.jpeg',
  buttons = [],
  className,
  textColor = 'text-white',
  alignment = 'left',
}: CTASectionProps) => {
  return (
    <div
      className={cn(
        'relative py-16 md:py-24',
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark bg-opacity-60" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div
          className={cn(
            'max-w-2xl',
            alignment === 'center' ? 'mx-auto text-center' : ''
          )}
        >
          {subtitle && (
            <h3 className={cn(
              'text-sm uppercase tracking-wide font-medium mb-2',
              textColor === 'text-white' ? 'text-gold' : 'text-gold-dark'
            )}>
              {subtitle}
            </h3>
          )}
          <h2 className={cn('text-3xl md:text-4xl font-semibold mb-4', textColor)}>
            {title}
          </h2>
          {description && (
            <p className={cn('text-lg mb-8', textColor === 'text-white' ? 'text-white/80' : 'text-dark-dark/80')}>
              {description}
            </p>
          )}

          {buttons.length > 0 && (
            <div className={cn(
              'flex flex-col md:flex-row flex-wrap gap-4',
              alignment === 'center' ? 'justify-center' : 'justify-start'
            )}>
              {buttons.map((button) => {
                // Create a unique key that won't change based on array order
                const buttonKey = button.id || `cta-button-${button.label.toLowerCase().replace(/\s+/g, '-')}-${button.href.replace(/\W+/g, '-')}`;

                if (button.variant === 'primary') {
                  return (
                    <div key={buttonKey} className="w-full md:w-[220px]">
                      <Link
                        href={button.href}
                        className="elementor-button block w-full md:w-full bg-gold hover:bg-transparent hover:text-white text-white rounded-sm border-2 border-gold transition-standard py-2 px-6 text-center"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text font-medium">{button.label}</span>
                        </span>
                      </Link>
                    </div>
                  );
                }

                if (button.variant === 'secondary') {
                  return (
                    <div key={buttonKey} className="w-full md:w-[220px]">
                      <Link
                        href={button.href}
                        className="elementor-button block w-full md:w-full bg-white text-dark-dark hover:bg-transparent hover:text-white border-2 border-white rounded-sm transition-standard py-2 px-6 text-center"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text font-medium">{button.label}</span>
                        </span>
                      </Link>
                    </div>
                  );
                }

                return (
                  <div key={buttonKey} className="w-full md:w-[220px]">
                    <Link
                      href={button.href}
                      className="elementor-button block w-full md:w-full border-2 border-white bg-transparent hover:bg-white hover:text-gold text-white rounded-sm transition-standard py-2 px-6 text-center"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text font-medium">{button.label}</span>
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
