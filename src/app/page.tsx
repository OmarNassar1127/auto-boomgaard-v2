"use client";

import React from 'react';
import { HeroSection } from '@/components/home/hero-section';
import { WelcomeSection } from '@/components/home/welcome-section';
import { FeaturedCars } from '@/components/home/featured-cars';
import { ServicesOverview } from '@/components/home/services-overview';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CTABanner } from '@/components/home/cta-banner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <FeaturedCars />
      <ServicesOverview />
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}
