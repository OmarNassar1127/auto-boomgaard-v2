"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { SectionHeader } from '@/components/ui/section-header';
import { CarCard } from '@/components/cars/car-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

// Sample car data
const featuredCars = [
  {
    id: 'audi-q2-35-tfsi-s-line-4',
    brand: 'Audi',
    model: 'Q2',
    variant: '35 TFSI S-Line',
    price: 31990,
    kilometers: 55000,
    year: 2020,
    color: 'Grijs',
    includingVAT: false,
    isPromo: true,
    image: 'https://ext.same-assets.com/2181762223/2581911691.jpeg',
  },
  {
    id: 'audi-a3-sportback-45-tfsi-e-s-line-6',
    brand: 'Audi',
    model: 'A3',
    variant: 'Sportback 45 TFSI E S-Line',
    price: 39990,
    kilometers: 32000,
    year: 2022,
    color: 'Grijs',
    includingVAT: true,
    isPromo: false,
    image: 'https://ext.same-assets.com/2181762223/14744376.jpeg',
  },
  {
    id: 'audi-q8-60-tfsi-e-quattro-s-line',
    brand: 'Audi',
    model: 'Q8',
    variant: '60 TFSI E Quattro S-Line',
    price: 89990,
    kilometers: 65000,
    year: 2021,
    color: 'Zwart',
    includingVAT: true,
    isPromo: true,
    image: 'https://ext.same-assets.com/2181762223/2644181784.jpeg',
  },
  {
    id: 'audi-q3-sportback-45-tfsi-e-s-line-8',
    brand: 'Audi',
    model: 'Q3 Sportback',
    variant: '45 TFSI e S-Line',
    price: 48990,
    kilometers: 31000,
    year: 2022,
    color: 'Blauw',
    includingVAT: true,
    isPromo: false,
    image: 'https://ext.same-assets.com/2181762223/1411991356.jpeg',
  },
  {
    id: 'audi-a3-sportback-30-tfsi-3x-s-line',
    brand: 'Audi',
    model: 'A3',
    variant: 'Sportback 30 TFSI 3x S-Line',
    price: 23990,
    kilometers: 113000,
    year: 2019,
    color: 'Grijs',
    includingVAT: true,
    isPromo: false,
    image: 'https://ext.same-assets.com/2181762223/2369327271.jpeg',
  },
  {
    id: 'audi-a6-avant-55-tfsi-e-quattro-s-line',
    brand: 'Audi',
    model: 'A6',
    variant: 'Avant 55 TFSI E Quattro S-Line',
    price: 59990,
    kilometers: 39000,
    year: 2021,
    color: 'Blauw',
    includingVAT: true,
    isPromo: true,
    image: 'https://ext.same-assets.com/2181762223/611611391.jpeg',
  },
];

export const FeaturedCars = () => {
  // Using simple variables instead of state where possible
  const apiRef = React.useRef(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  function updateButtonStates() {
    if (!apiRef.current) return;
    
    // @ts-ignore - ignore TypeScript errors since we know this works
    setCanScrollPrev(apiRef.current.canScrollPrev());
    // @ts-ignore
    setCanScrollNext(apiRef.current.canScrollNext());
  }

  // Handle API setup
  const handleApiChange = (api: any) => {
    if (!api) return;
    
    apiRef.current = api;
    
    // @ts-ignore - we know the API has these methods even if TypeScript doesn't
    api.on('select', updateButtonStates);
    updateButtonStates();
  };

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <SectionHeader
            subtitle="Nieuw binnen"
            title="Onze nieuwste auto's"
          />

          <Link
            href="/aanbod"
            className="inline-flex items-center text-gold hover:text-gold-dark transition-standard mt-2 md:mt-0"
          >
            <span className="mr-2">Bekijk volledig aanbod</span>
            <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            // @ts-ignore - TypeScript will complain but we know it works
            setApi={handleApiChange}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredCars.map((car) => (
                <CarouselItem key={car.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <CarCard
                      id={car.id}
                      brand={car.brand}
                      model={car.model}
                      variant={car.variant}
                      price={car.price}
                      image={car.image}
                      kilometers={car.kilometers}
                      year={car.year}
                      color={car.color}
                      includingVAT={car.includingVAT}
                      isPromo={car.isPromo}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Custom navigation buttons */}
          <button
            // @ts-ignore - TypeScript will complain but we know it works
            onClick={() => apiRef.current?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute -left-4 sm:-left-6 md:-left-8 lg:-left-16 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-[#BEAA8A] hover:text-[#D6C6A6] border-0 shadow-none text-[1.675rem] md:text-[2.175rem] lg:text-[2.675rem] font-extrabold cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Previous slide"
            type="button"
          >
            ❮
          </button>
          
          <button
            // @ts-ignore - TypeScript will complain but we know it works
            onClick={() => apiRef.current?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute -right-4 sm:-right-6 md:-right-8 lg:-right-16 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent text-[#BEAA8A] hover:text-[#D6C6A6] border-0 shadow-none text-[1.675rem] md:text-[2.175rem] lg:text-[2.675rem] font-extrabold cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Next slide"
            type="button"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};