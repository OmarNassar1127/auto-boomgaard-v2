"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface BackgroundCarouselProps {
  images: string[];
  interval?: number; // Time in ms between transitions
  transition?: number; // Transition duration in seconds
}

export const BackgroundCarousel = ({
  images,
  interval = 5000, // Default interval: 5 seconds
  transition = 1.5, // Default transition: 1.5 seconds
}: BackgroundCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shouldTransition, setShouldTransition] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Convert transition seconds to ms for CSS
  const transitionMs = transition * 1000;
  
  useEffect(() => {
    // Function to advance to next image
    const advanceSlide = () => {
      // Start the transition
      setShouldTransition(true);
      
      // Schedule the actual index change for after the transition completes
      timeoutRef.current = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        // Reset the transition flag
        setShouldTransition(false);
        
        // Set up the next slide transition
        timeoutRef.current = setTimeout(advanceSlide, interval);
      }, transitionMs);
    };
    
    // Start the first transition after the initial interval
    timeoutRef.current = setTimeout(advanceSlide, interval);
    
    // Clean up on component unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [images.length, interval, transitionMs]);
  
  // Preload all images on mount
  useEffect(() => {
    const preloadImages = images.map(src => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    
    Promise.all(preloadImages)
      .catch(err => console.error('Error preloading images:', err));
  }, [images]);
  
  // Calculate next image index
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  
  return (
    <div className="absolute inset-0 overflow-hidden bg-dark z-0">
      {/* Image layers */}
      {images.map((src, index) => {
        // Only render current and next image
        if (index !== currentImageIndex && index !== nextImageIndex) {
          return null;
        }
        
        // Determine if this image should be visible
        const isVisible = index === currentImageIndex || (shouldTransition && index === nextImageIndex);
        
        return (
          <div 
            key={`bg-image-${index}`}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: index === currentImageIndex 
                ? (shouldTransition ? 0 : 1) 
                : (shouldTransition ? 1 : 0),
              transition: `opacity ${transition}s ease-in-out`,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={src}
                alt={`Background ${index + 1}`}
                fill
                priority={index === currentImageIndex}
                sizes="100vw"
                className="object-cover"
                style={{
                  objectPosition: "center center",
                  transform: "scale(1.05)", // Slight scale to ensure no edges show
                }}
              />
              <div className="absolute inset-0 bg-dark bg-opacity-50" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
