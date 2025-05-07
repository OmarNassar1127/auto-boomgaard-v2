'use client';

import { useState } from 'react';
import CarDetailTabs from './car-detail-tabs';
import RelatedCars from './related-cars';
import Link from 'next/link';
import Image from 'next/image';

export type Car = {
  id: string;
  brand: string;
  model: string;
  variant: string;
  price: string;
  taxInfo: string;
  mileage: string;
  year: string;
  color: string;
  transmission: string;
  fuel: string;
  power: string;
  firstRegistration: string;
  seats: string;
  torque: string;
  acceleration: string;
  wheelbase: string;
  cylinders: string;
  modelYear: string;
  doors: string;
  gears: string;
  topSpeed: string;
  tankCapacity: string;
  engineCapacity: string;
  weight: string;
  images: string[];
  highlights: string;
  options: {
    exterior: string[];
    infotainment: string[];
    interior: string[];
    safety: string[];
  }
};

type CarDetailProps = {
  car: Car;
};

export default function CarDetailPage({ car }: CarDetailProps) {
  const [activeTab, setActiveTab] = useState('specificaties');
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero section with main image and info - increased top padding */}
      <div className="w-full pt-40 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Unified container with #F7F7F7 background */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#F7F7F7]">
            {/* Car Main Image - Take 7/12 of width on desktop */}
            <div className="lg:col-span-7 p-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={car.images[activeImage]}
                  alt={`${car.brand} ${car.model} hoofdafbeelding`}
                  fill
                  priority
                  className="object-cover"
                />
                
                {/* Image counter */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 text-white text-xs rounded">
                  {activeImage + 1} / {car.images.length}
                </div>
              </div>
              
              {/* Thumbnails carousel below main image */}
              <div className="p-4">
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pb-2">
                  <div className="flex space-x-2 min-w-max">
                    {car.images.slice(0, 14).map((image, index) => (
                      <div 
                        key={`thumb-${index}`}
                        className={`relative w-16 h-16 flex-shrink-0 cursor-pointer overflow-hidden ${
                          activeImage === index 
                            ? "ring-2 ring-gold" 
                            : "opacity-80 hover:opacity-100"
                        }`}
                        onClick={() => setActiveImage(index)}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Car Info - Take 5/12 of width on desktop */}
            <div className="lg:col-span-5 p-6">
              {/* Car Brand and Model */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-dark">{car.brand}</h1>
                <h2 className="text-xl font-medium text-dark">{car.model} {car.variant}</h2>
              </div>
              
              <div className="w-full h-px bg-gold mb-6"></div>
              
              {/* Price */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-gold">{car.price}</span>
                <span className="text-sm text-gray-500">{car.taxInfo}</span>
              </div>
              
              <div className="w-full h-px bg-gray-200 mb-6"></div>
              
              {/* Key Specs */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-dark">KM Stand</span>
                  <span className="text-gold">{car.mileage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark">Bouwjaar</span>
                  <span className="text-gold">{car.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark">Kleur</span>
                  <span className="text-gold">{car.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark">Transmissie</span>
                  <span className="text-gold">{car.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark">Brandstof</span>
                  <span className="text-gold">{car.fuel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark">Vermogen</span>
                  <span className="text-gold">{car.power}</span>
                </div>
              </div>
              
              {/* Contact Button */}
              <button className="w-full bg-gold hover:bg-gold/90 text-white font-medium py-3 mt-8 rounded-sm">
                Contact opnemen
              </button>
              
              {/* Trade-in Info */}
              <div className="text-center text-sm text-gray-600 mt-4">
                <p>
                  Uw auto inruilen? Stuur eenvoudig uw foto's{' '}
                  <Link
                    href="https://wa.me/31619201375?text=Beste,%20ik%20ben%20geïnteresseerd%20in%20deze%20auto."
                    className="text-gold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    via WhatsApp
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabbed Content */}
      <div className="container mx-auto px-4 md:px-6 py-6">
        <CarDetailTabs 
          car={car} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      
      {/* Related Cars */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-2">
            Bekijk ook onze andere modellen
          </h2>
          <div className="w-24 h-1 bg-gold mb-8"></div>
          <RelatedCars />
        </div>
      </div>
      
      {/* Enhanced Divider */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent shadow-sm"></div>
      </div>
    </main>
  );
}