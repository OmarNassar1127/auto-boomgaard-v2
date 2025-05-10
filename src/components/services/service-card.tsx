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
        'bg-white shadow-md rounded-lg overflow-hidden group transition-standard hover:shadow-xl flex flex-col h-full',
        orientation === 'horizontal'
          ? 'md:flex-row'
          : '',
        className
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden shrink-0',
          orientation === 'horizontal'
            ? 'h-72 md:h-auto md:w-1/2 lg:w-5/12'
            : 'h-72'
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
          'flex flex-col p-7 md:p-8 flex-grow justify-between',
          orientation === 'horizontal'
            ? 'md:w-1/2 lg:w-7/12'
            : ''
        )}
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-dark-dark mb-4">{title}</h3>
          <p className="text-dark-dark/80 line-clamp-5 text-base md:text-lg">{description}</p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center text-gold font-medium hover:text-gold-dark transition-standard mt-5 self-start group text-base md:text-lg"
        >
          <span>Contact opnemen</span>
          <FaChevronRight className="ml-2 text-sm group-hover:translate-x-1 transition-standard" />
        </Link>
      </div>
    </div>
  );
};
