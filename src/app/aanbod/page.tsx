"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { CarCard } from "@/components/cars/car-card";
import { CTABanner } from "@/components/home/cta-banner";

// Sample car data (same as featured cars)
const carData = [
  {
    id: "audi-q2-35-tfsi-s-line-4",
    brand: "Audi",
    model: "Q2",
    variant: "35 TFSI S-Line",
    price: 31990,
    kilometers: 55000,
    year: 2020,
    color: "Grijs",
    includingVAT: false,
    isPromo: true,
    image: "https://ext.same-assets.com/2181762223/2581911691.jpeg",
  },
  {
    id: "audi-a3-sportback-45-tfsi-e-s-line-6",
    brand: "Audi",
    model: "A3",
    variant: "Sportback 45 TFSI E S-Line",
    price: 39990,
    kilometers: 32000,
    year: 2022,
    color: "Grijs",
    includingVAT: true,
    isPromo: false,
    image: "https://ext.same-assets.com/2181762223/14744376.jpeg",
  },
  {
    id: "audi-q8-60-tfsi-e-quattro-s-line",
    brand: "Audi",
    model: "Q8",
    variant: "60 TFSI E Quattro S-Line",
    price: 89990,
    kilometers: 65000,
    year: 2021,
    color: "Zwart",
    includingVAT: true,
    isPromo: true,
    image: "https://ext.same-assets.com/2181762223/2644181784.jpeg",
  },
  {
    id: "audi-q3-sportback-45-tfsi-e-s-line-8",
    brand: "Audi",
    model: "Q3 Sportback",
    variant: "45 TFSI e S-Line",
    price: 48990,
    kilometers: 31000,
    year: 2022,
    color: "Blauw",
    includingVAT: true,
    isPromo: false,
    image: "https://ext.same-assets.com/2181762223/1411991356.jpeg",
  },
  {
    id: "audi-a3-sportback-30-tfsi-3x-s-line",
    brand: "Audi",
    model: "A3",
    variant: "Sportback 30 TFSI 3x S-Line",
    price: 23990,
    kilometers: 113000,
    year: 2019,
    color: "Grijs",
    includingVAT: true,
    isPromo: false,
    image: "https://ext.same-assets.com/2181762223/2369327271.jpeg",
  },
  {
    id: "audi-a6-avant-55-tfsi-e-quattro-s-line",
    brand: "Audi",
    model: "A6",
    variant: "Avant 55 TFSI E Quattro S-Line",
    price: 59990,
    kilometers: 39000,
    year: 2021,
    color: "Blauw",
    includingVAT: true,
    isPromo: true,
    image: "https://ext.same-assets.com/2181762223/611611391.jpeg",
  },
  {
    id: "audi-a3-sportback-45-tfsi-e-s-line-5",
    brand: "Audi",
    model: "A3",
    variant: "Sportback 45 TFSI e S-Line",
    price: 40990,
    kilometers: 26000,
    year: 2021,
    color: "Zwart",
    includingVAT: true,
    isPromo: false,
    image: "https://ext.same-assets.com/2181762223/2431008461.jpeg",
  },
  {
    id: "audi-q3-sportback-45-tfsi-e-s-line-7",
    brand: "Audi",
    model: "Q3 Sportback",
    variant: "45 TFSI e S-Line",
    price: 49990,
    kilometers: 45000,
    year: 2022,
    color: "Blauw",
    includingVAT: true,
    isPromo: true,
    image: "https://ext.same-assets.com/2181762223/1833951846.jpeg",
  },
  {
    id: "audi-q3-sportback-45-tfsi-e-s-line-5",
    brand: "Audi",
    model: "Q3 Sportback",
    variant: "45 TFSI e S-Line",
    price: 48990,
    kilometers: 48000,
    year: 2021,
    color: "Grijs",
    includingVAT: true,
    isPromo: false,
    image: "https://ext.same-assets.com/2181762223/2657358676.jpeg",
  },
];

export default function AanbodPage() {
  // In a real application, you would fetch this data from an API
  const [cars] = useState(carData);

  return (
    <div>
      <PageHero
        title="Aanbod"
        subtitle="Ontdek onze exclusieve modellen"
        backgroundImage="https://ext.same-assets.com/2181762223/3585094715.jpeg"
      />

      <section className="py-16 md:py-24">
        <div className="container-custom">
          {/* Filtering options - simplified for now */}
            <div className="mb-8 flex flex-wrap gap-4 text-sm justify-end">
            <div className="bg-white shadow-sm p-3 w-full max-w-xs">
              <label
              htmlFor="priceRange"
              className="block text-dark-dark/70 mb-1"
              >
              Soorter op
              </label>
              <select
              id="priceRange"
              className="w-full p-2 border border-gray-300 rounded"
              >
              <option>Prijs (laag - hoog)</option>
              <option>Prijs (hoog - laag)</option>
              <option>Kilometerstand - (laag - hoog)</option>
              <option>Kilometerstand - (hoog - laag)</option>
              <option>Recent toegevoegd</option>
              </select>
            </div>
            </div>

          {/* Car grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard
                key={car.id}
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
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
