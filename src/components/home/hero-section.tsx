"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BackgroundCarousel } from "@/components/ui/background-carousel";

interface HeroSectionProps {
  className?: string;
  backgroundImage?: string;
}

export const HeroSection = ({
  className,
  backgroundImage = "https://vanbruggenautomotive.nl/wp-content/uploads/2024/12/Showroom-3-scaled.jpg",
}: HeroSectionProps) => {
  // Define carousel images
  const carouselImages = [
    "/images/a-q3.JPG",
    "/images/a-q5.JPG",
    "/images/a-q7.JPG",
    "/images/a-rs3.JPG",
    "/images/rr-velar.JPG",
  ];

  return (
    <section
      className={cn(
        "relative h-screen min-h-[600px] flex items-center justify-center",
        className
      )}
    >
      {/* Background Carousel */}
      <BackgroundCarousel
        images={carouselImages}
        interval={4000} // 7 seconds between transitions
        transition={1.6} // 1.6 second fade transition
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            De Audi specialist van Nederland
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 w-full px-4 md:px-0">
            {/* Custom button styling to match design images */}
            <div className="w-full md:w-[220px]">
              <Link
                href="/aanbod"
                className="elementor-button block w-full md:w-full bg-gold hover:bg-transparent hover:text-white text-white rounded-sm border-2 border-gold transition-standard py-2 px-6 text-center"
              >
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text font-medium">
                    Bekijk collectie
                  </span>
                </span>
              </Link>
            </div>
            <div className="w-full md:w-[220px]">
              <Link
                href="/contact"
                className="elementor-button block w-full md:w-full border-2 border-white bg-transparent hover:bg-white hover:text-gold text-white rounded-sm transition-standard py-2 px-6 text-center"
              >
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text font-medium">
                    Afspraak maken
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trustpilot rating */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-sm py-2 mb-4 px-4 rounded-full flex flex-col sm:flex-row items-center text-white shadow-lg">
          <div className="flex items-center mb-1 sm:mb-0 sm:mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={`hero-star-${star}`}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gold"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-sm font-medium">4.5/5</span>
          </div>
          <span className="text-sm text-center sm:text-left">
            op basis van 248 reviews
          </span>
        </div>
      </motion.div>
    </section>
  );
};
