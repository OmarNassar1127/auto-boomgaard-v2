"use client";

import React from 'react';
import { PageHero } from '@/components/ui/page-hero';
import { ServiceCard } from '@/components/services/service-card';
import { CTABanner } from '@/components/home/cta-banner';

// Services data
const services = [
  {
    id: 'customizing',
    title: 'Customizing',
    description: 'Bij Auto Boomgaard maken wij uw auto uniek, precies zoals u dat wilt. Van opvallende exterieurstyling, zoals speciale velgen of een sportieve bodykit, tot het uitbreiden van opties — alles is mogelijk. Onze experts denken met u mee en zorgen voor technische upgrades en aanpassingen die uw rijervaring compleet maken. Uw droom, onze expertise.',
    image: 'https://ext.same-assets.com/611734785/3325350712.jpeg',
    subtitle: 'AUTO GEHEEL NAAR WENS',
  },
  {
    id: 'detailing',
    title: 'Detailing',
    description: 'Bij Auto Boomgaard zorgen we ervoor dat uw auto altijd er stralend uitziet. Met onze professionele detailing- en poetsservices krijgt uw auto de aandacht die het verdient. Van een grondige reiniging van het interieur tot een perfecte lakverzegeling aan de buitenkant — wij herstellen de glans en uitstraling van uw auto alsof deze net uit de showroom komt. Onze experts gebruiken hoogwaardige producten en technieken om zelfs de kleinste details te perfectioneren.',
    image: 'https://ext.same-assets.com/611734785/3257006568.jpeg',
    subtitle: 'UW AUTO WEER ZO GOED ALS NIEUW',
  },
  {
    id: 'leasen',
    title: 'Leasen',
    description: 'Bij Auto Boomgaard maken we het leasen van uw droomauto eenvoudig en zorgeloos. Samen met onze leasepartners bieden wij flexibele oplossingen voor zowel zakelijk als privélease. Rijd uw droomauto zonder zorgen met de leasemogelijkheden van Auto Boomgaard. Ontdek de vrijheid en luxe van leasen op maat!',
    image: 'https://ext.same-assets.com/611734785/861350550.jpeg',
    subtitle: 'ZAKELIJK OF PRIVÉ FINANCIEREN',
  },
  {
    id: 'onderhoud',
    title: 'Onderhoud',
    description: 'Bij Auto Boomgaard zorgen we ervoor dat uw auto altijd in topconditie blijft. Met onze professionele onderhoudsservices kunt u rekenen op betrouwbaarheid, veiligheid en rijplezier. Onze monteurs gebruiken originele onderdelen om uw auto zorgvuldig te onderhouden. Van periodieke controles en olie verversen tot uitgebreide reparaties. Wij bieden maatwerk en advies afgestemd op de auto en jouw rijstijl.',
    image: 'https://ext.same-assets.com/611734785/3377480296.jpeg',
    subtitle: 'ONDERHOUD IS BEHOUD',
  },
  {
    id: 'alarm',
    title: 'Alarm',
    description: 'Auto Boomgaard biedt op maat gemaakte oplossingen die perfect aansluiten bij uw auto en uw veiligheidseisen. Van gecertificeerde alarmsystemen tot geavanceerde track & trace technologieën — onze experts installeren beveiligingssystemen die je auto beschermen tegen diefstal en inbraak. Je kunt vertrouwen op onze kennis en ervaring voor een snelle en professionele installatie.',
    image: 'https://ext.same-assets.com/611734785/2063485363.jpeg',
    subtitle: 'UW VOERTUIG EXTRA BEVEILIGD',
  },
];

export default function DienstenPage() {
  return (
    <div>
      <PageHero
        title="Diensten"
        subtitle="Wij gaan verder dan alleen verkopen van mooie auto's"
        backgroundImage="https://ext.same-assets.com/611734785/3433641455.jpeg"
      />

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 max-w-[1500px] mx-auto">
            {services.map((service, index) => (
              <div key={service.id} className="flex h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  href={`/contact?service=${service.id}`}
                  orientation="horizontal"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
