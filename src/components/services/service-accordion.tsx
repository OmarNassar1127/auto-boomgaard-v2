"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceAccordionProps {
  services: ServiceData[];
}

export const ServiceAccordion = ({ services }: ServiceAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [bgImage, setBgImage] = useState<string>(services[0]?.image || '');
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  
  const handleClick = useCallback((index: number) => {
    if (activeIndex === index) {
      return; // If the same tab is clicked, don't do anything
    }
    
    setFadeOut(true);
    
    // After fade out animation, update image and fade back in
    setTimeout(() => {
      setBgImage(services[index]?.image || '');
      setActiveIndex(index);
      setFadeOut(false);
    }, 400);
  }, [activeIndex, services]);

  // On mount, preload all images
  useEffect(() => {
    services.forEach(service => {
      if (service.image) {
        const img = new Image();
        img.src = service.image;
      }
    });
  }, [services]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 relative">
      {/* Left side: Accordion */}
      <div className="w-full lg:w-1/2 z-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="border-b border-gray-200 last:border-b-0"
          >
            <button
              onClick={() => handleClick(index)}
              className={cn(
                "w-full text-left py-4 px-4 flex justify-between items-center transition-all",
                activeIndex === index ? "font-semibold" : ""
              )}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-content-${service.id}`}
            >
              <span className="text-lg">{service.title}</span>
              <span className="text-[#BEAA8A]">
                {activeIndex === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </span>
            </button>
            <div
              id={`accordion-content-${service.id}`}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}
              aria-hidden={activeIndex !== index}
            >
              <div className="p-4 pb-6">
                <p className="text-dark-dark/80">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Right side: Image */}
      <div 
        className={cn(
          "w-full lg:w-1/2 h-80 lg:h-auto rounded-md overflow-hidden relative transition-opacity duration-500",
          fadeOut ? "opacity-30" : "opacity-100"
        )}
        id="serviceImage"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      </div>
    </div>
  );
};