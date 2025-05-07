'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const relatedCars = [
  {
    id: '45313',
    brand: 'Audi',
    model: 'Q3 Sportback',
    variant: '45 TFSI e S-Line',
    price: 48990,
    color: 'Grijs',
    year: 2021,
    kilometers: 48000,
    image: 'https://vanbruggenautomotive.nl/wp-content/uploads/2025/04/44138040-0.jpg',
    includingVAT: true
  },
  {
    id: '45439',
    brand: 'Audi',
    model: 'Q3 Sportback',
    variant: '45 TFSI e S-Line',
    price: 48990,
    color: 'Zwart',
    year: 2021,
    kilometers: 41000,
    image: 'https://vanbruggenautomotive.nl/wp-content/uploads/2025/04/44142013-0.jpg',
    includingVAT: false
  },
  {
    id: '45103',
    brand: 'Audi',
    model: 'Q3 Sportback',
    variant: '45 TFSI e S-Line',
    price: 42990,
    color: 'Blauw',
    year: 2022,
    kilometers: 52000,
    image: 'https://vanbruggenautomotive.nl/wp-content/uploads/2025/05/44020984-0.jpg',
    includingVAT: true
  },
  {
    id: '51449',
    brand: 'Audi',
    model: 'Q2',
    variant: '35 TFSI S-Line',
    price: 31990,
    color: 'Grijs',
    year: 2020,
    kilometers: 55000,
    image: 'https://vanbruggenautomotive.nl/wp-content/uploads/2025/05/44674240-0.jpg',
    includingVAT: false
  },
  {
    id: '47928',
    brand: 'Audi',
    model: 'A3',
    variant: 'Sportback 30 TFSI 3x S-Line',
    price: 22990,
    color: 'Grijs',
    year: 2019,
    kilometers: 113000,
    image: 'https://vanbruggenautomotive.nl/wp-content/uploads/2025/05/44324878-0.jpg',
    includingVAT: true
  },
];

export default function RelatedCars() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {relatedCars.map((car) => (
          <CarouselItem key={car.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <Link 
              href={`/aanbod/${car.id}`}
              className="block bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden rounded"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={car.image}
                  alt={`${car.brand} ${car.model} ${car.variant}`}
                  fill
                  className="object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-medium text-dark">{car.brand}</h3>
                  <h4 className="text-base font-medium text-dark">{car.model}</h4>
                  <p className="text-dark/80 text-sm">{car.variant}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gold text-lg font-bold">
                    {new Intl.NumberFormat('nl-NL', {
                      style: 'currency',
                      currency: 'EUR',
                      maximumFractionDigits: 0
                    }).format(car.price)}
                  </div>
                  <div className="text-dark/60 text-sm">
                    {car.includingVAT ? 'incl. BTW' : 'Marge'}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="text-dark/60">KM Stand</span>
                    <span className="font-medium text-gold">
                      {new Intl.NumberFormat('nl-NL').format(car.kilometers)}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-dark/60">Bouwjaar</span>
                    <span className="font-medium text-gold">{car.year}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-dark/60">Kleur</span>
                    <span className="font-medium text-gold">{car.color}</span>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious 
        className="absolute -left-4 top-1/2 h-8 w-8 border-gold text-gold bg-white hover:bg-gold hover:text-white"
      />
      <CarouselNext 
        className="absolute -right-4 top-1/2 h-8 w-8 border-gold text-gold bg-white hover:bg-gold hover:text-white"
      />
    </Carousel>
  );
}