'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

type CarImageGalleryProps = {
  images: string[];
};

export default function CarImageGallery({ images }: CarImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <div className="space-y-2">
      {/* Main large image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
        <Image
          src={images[activeImage]}
          alt={`Auto afbeelding ${activeImage + 1}`}
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* Thumbnails carousel */}
      <div className="overflow-hidden">
        <Carousel
          opts={{
            align: 'start',
            containScroll: 'trimSnaps',
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem 
                key={`thumb-${index}`} 
                className="pl-2 basis-1/5 sm:basis-1/6 md:basis-1/7 lg:basis-1/8"
              >
                <div 
                  className={cn(
                    "relative aspect-square cursor-pointer overflow-hidden",
                    activeImage === index ? "opacity-100" : "opacity-60"
                  )}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="absolute -left-2 top-1/2 h-8 w-8 border-gray-300 bg-white/80 hover:bg-white"
          />
          <CarouselNext 
            className="absolute -right-2 top-1/2 h-8 w-8 border-gray-300 bg-white/80 hover:bg-white"
          />
        </Carousel>
      </div>
      
      {/* Image counter */}
      <div className="flex justify-end text-sm text-gray-500">
        <span>{activeImage + 1} / {images.length}</span>
      </div>
    </div>
  );
}