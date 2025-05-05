"use client";

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';

export const ServicesOverview = () => {
  const services = [
    {
      id: 'customizing',
      title: 'Customizing',
      description: 'Bij Van Bruggen Automotive maken wij uw auto uniek, precies zoals u dat wilt. Van opvallende exterieurstyling, zoals speciale velgen of een sportieve bodykit, tot het uitbreiden van opties – alles is mogelijk. Onze experts denken met u mee en zorgen voor technische upgrades en aanpassingen die uw rijervaring compleet maken. Uw droom, onze expertise.',
    },
    {
      id: 'detailing',
      title: 'Detailing',
      description: 'Bij Van Bruggen Automotive zorgen we ervoor dat uw auto altijd er stralend uitziet. Met onze professionele detailing- en poetsservices krijgt uw auto de aandacht die het verdient. Van een grondige reiniging van het interieur tot een perfecte lakverzegeling aan de buitenkant – wij herstellen de glans en uitstraling van uw auto alsof deze net uit de showroom komt. Onze experts gebruiken hoogwaardige producten en technieken om zelfs de kleinste details te perfectioneren.',
    },
    {
      id: 'leasen',
      title: 'Leasen',
      description: 'Bij Van Bruggen Automotive maken we het leasen van uw droomauto eenvoudig en zorgeloos. Of u nu kiest voor zakelijk of privélease, wij bieden flexibele oplossingen die perfect aansluiten bij uw wensen en budget. Onze leaseconstructies zijn transparant en bieden u de zekerheid van vaste maandlasten zonder onverwachte kosten. Wij regelen alles voor u, van onderhoud en verzekering tot wegenbelasting, zodat u alleen maar hoeft te genieten van uw rijervaring.',
    },
    {
      id: 'onderhoud',
      title: 'Onderhoud',
      description: 'Bij Van Bruggen Automotive zorgen we ervoor dat uw auto altijd in topconditie blijft. Met onze professionele onderhoudsservices kunt u rekenen op betrouwbaarheid, veiligheid en rijplezier. Onze monteurs gebruiken originele onderdelen om uw auto zorgvuldig te onderhouden. Van periodieke controles en olie verversen tot uitgebreide reparaties. Wij bieden maatwerk en advies afgestemd op de auto en jouw rijstijl.',
    },
    {
      id: 'alarm',
      title: 'Alarm',
      description: 'Van Bruggen Automotive biedt op maat gemaakte oplossingen die perfect aansluiten bij uw auto en uw veiligheidseisen. Van gecertificeerde alarmsystemen tot geavanceerde track & trace technologieën – onze experts installeren beveiligingssystemen die je auto beschermen tegen diefstal en inbraak. Je kunt vertrouwen op onze kennis en ervaring voor een snelle en professionele installatie.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  const handleClick = useCallback((index: number) => {
    if (activeIndex === index) {
      return; // If the same tab is clicked, don't do anything
    }
    
    setActiveIndex(index);
  }, [activeIndex]);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          subtitle="ONZE DIENSTEN"
          title="Meer dan alleen verkoop"
          alignment="center"
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto mb-10">
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
        
        <div className="flex justify-center mt-10">
          <Link
            href="/diensten"
            className="bg-[#BEAA8A] hover:bg-[#A99979] text-white font-medium py-3 px-6 rounded-sm transition-standard w-full sm:w-auto text-center"
          >
            Bekijk alle diensten
          </Link>
        </div>
      </div>
    </section>
  );
};
