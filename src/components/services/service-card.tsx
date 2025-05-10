import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const ServiceCard = ({
  title,
  description,
  image,
  href,
  className,
  orientation = 'vertical',
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'bg-white shadow-md rounded-lg overflow-hidden group transition-standard hover:shadow-xl',
        orientation === 'horizontal'
          ? 'flex flex-col md:flex-row'
          : 'flex flex-col',
        className
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden',
          orientation === 'horizontal'
            ? 'h-64 md:h-auto md:w-1/2 lg:w-5/12'
            : 'h-64'
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-standard"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50 transition-standard group-hover:opacity-40"></div>
      </div>
      <div
        className={cn(
          'flex flex-col p-6 h-full',
          orientation === 'horizontal'
            ? 'md:w-1/2 lg:w-7/12'
            : 'flex-grow'
        )}
      >
        <div className="flex-grow">
          <h3 className="text-xl md:text-2xl font-semibold text-dark-dark mb-3">{title}</h3>
          <p className="text-dark-dark/80 line-clamp-5">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center text-gold font-medium hover:text-gold-dark transition-standard mt-4 self-start group"
        >
          <span>Contact opnemen</span>
          <FaChevronRight className="ml-1 text-xs group-hover:translate-x-1 transition-standard" />
        </Link>
      </div>
    </div>
  );
};
