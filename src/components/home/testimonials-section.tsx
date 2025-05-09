"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Testimonial } from '@/components/ui/testimonial';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

// Sample testimonials data
const testimonials = [
  {
    id: '1',
    content: 'Heel fijn bedrijf met een mooie voorraad. Wij hebben hier onze Audi gekocht. Duidelijke manier van communiceren en nu we rondrijden nog steeds heel blij met de Audi. De aflevering was voor ons een feest met de grote strik. We kunnen het bedrijf van harte aanbevelen.',
    author: 'Joris van Leeuwen',
    rating: 5,
  },
  {
    id: '2',
    content: 'We hebben er er een stukje voor moeten rijden, van Brabant naar Uitgeest, maar dan heb je ook wat. Voor de 2e keer een Audi gekocht bij Peter van Van Bruggen Automotive. Wij zijn zeer tevreden over het aanbod, de professionaliteit en de goede service. Open en eerlijke communicatie.',
    author: 'Marc Jansen',
    rating: 5,
  },
  {
    id: '3',
    content: 'Na heel lang rondgekeken te hebben stond bij Van Bruggen Automotive de mooie Q8 zoals ik hem zocht. Gelijk gebeld en diezelfde dag nog langs geweest voor een bezichtiging. Hier werd ik heel openlijk ontvangen door mijn naamgenoot Tim. Vooraf had ik nog wat vragen en die wist hij te beantwoorden en gaf ook nog wat informatie over de auto en opties.',
    author: 'Tim de Groot',
    rating: 5,
  },
  {
    id: '4',
    content: 'Ik heb onlangs een auto gekocht bij Van Bruggen Automotive en ik ben er super blij mee. Deze mensen weten echt alles van Audi\'s. De service was vanaf het begin geweldig. Iedereen was vriendelijk en behulpzaam, en ze gaven me duidelijke uitleg over de auto en het hele koopproces.',
    author: 'Sophie van Dijk',
    rating: 5,
  },
  {
    id: '5',
    content: 'Ik heb onlangs een Audi A5 45 TFSI quattro gekocht bij Van Bruggen Automotive en ik ben er ontzettend blij mee. De auto rijdt fantastisch dankzij de krachtige motor en quattro vierwielaandrijving. Het team bij Van Bruggen Automotive was vriendelijk en deskundig, wat mijn aankoopervaring heel positief maakte. Ik kan ze zeker aanraden!',
    author: 'Frank Bakker',
    rating: 4,
  },
];

export const TestimonialsSection = () => {
  // Create a reference for the carousel
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
        <SectionHeader
          subtitle="Ervaringen van anderen"
          title="Wat onze klanten zeggen"
          alignment="center"
          className="mb-12"
        />

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
            <CarouselContent className="-ml-4 h-auto items-stretch pb-4">

              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Testimonial
                      content={testimonial.content}
                      author={testimonial.author}
                      rating={testimonial.rating}
                      className="flex flex-col justify-between h-full min-h-[340px] bg-white p-6 pb-8 rounded-xl shadow-md"
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