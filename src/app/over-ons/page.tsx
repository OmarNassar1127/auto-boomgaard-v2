"use client";

import React from 'react';
import Image from 'next/image';
import { PageHero } from '@/components/ui/page-hero';
import { CTABanner } from '@/components/home/cta-banner';
import { SectionHeader } from '@/components/ui/section-header';

export default function OverOnsPage() {
  return (
    <div>
      <PageHero
        title="Over Ons"
        subtitle="Maak kennis met Van Bruggen Automotive"
        backgroundImage="https://ext.same-assets.com/611734785/3433641455.jpeg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                subtitle="ONS VERHAAL"
                title="Van passie naar professie"
              />

              <div className="space-y-6 text-dark-dark/80">
                <p>
                  Van Bruggen Automotive is al sinds 2014 dé Audi Specialist van Nederland en een echt familiebedrijf.
                  Bij ons draait alles om passie voor auto's en persoonlijke service. Wat begon als een hobby is uitgegroeid
                  tot een bloeiend bedrijf met een sterke reputatie in de automotive wereld.
                </p>
                <p>
                  Onze specialisatie in Audi maakt dat we een diepgaande kennis hebben van deze merken. We kennen
                  elk model, elke technische specificatie en weten precies wat er nodig is om deze premium auto's
                  in topconditie te houden of naar uw persoonlijke wensen aan te passen.
                </p>
                <p>
                  Wat ons onderscheidt is de kwaliteit van onze unieke voorraad. We selecteren alleen uitzonderlijke
                  exemplaren die echt iets bijzonders hebben. Denk aan auto's met hoge specificaties, lage kilometerstanden
                  en een uitstraling die simpelweg onweerstaanbaar is.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/3632404423/3433641455.jpeg"
                alt="Van Bruggen Automotive showroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light">
        <div className="container-custom">
          <SectionHeader
            subtitle="ONZE WAARDEN"
            title="Wat ons drijft"
            alignment="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-dark">Kwaliteit</h3>
              <p className="text-dark-dark/80">
                We streven naar de hoogste kwaliteit in alles wat we doen, van de auto's die we selecteren tot de service die we bieden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-dark">Persoonlijke aandacht</h3>
              <p className="text-dark-dark/80">
                Bij ons bent u geen nummer. We nemen de tijd om uw wensen te begrijpen en bieden oplossingen die perfect bij u passen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-dark">Expertise</h3>
              <p className="text-dark-dark/80">
                Onze diepgaande kennis van Audi en jarenlange ervaring stelt ons in staat om de beste service en advies te bieden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            subtitle="ONZE LOCATIE"
            title="Bezoek onze showroom"
            alignment="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="space-y-6 text-dark-dark/80">
                <p>
                  Onze showroom in Uitgeest is de perfecte plek om uw droomauto te ontdekken. In een
                  ontspannen en persoonlijke sfeer kunt u op uw gemak onze exclusieve collectie bekijken.
                </p>
                <p>
                  We hebben bewust gekozen voor een concept 'op afspraak', zodat we u onze volledige aandacht
                  kunnen geven. Geen verkoopdruk, maar een prettig gesprek over uw wensen en behoeften.
                </p>
                <p>
                  Naast onze showroom beschikken we over een volledig uitgeruste werkplaats waar we onderhoud,
                  customizing, detailing en alarminbouw verzorgen. Alles onder één dak, met de kwaliteit en
                  service die u van ons mag verwachten.
                </p>

                <div className="pt-4">
                  <h3 className="font-semibold text-dark-dark mb-2">Adres</h3>
                  <p>Populierenlaan 41<br />1911BK Uitgeest</p>
                </div>

                <div>
                  <h3 className="font-semibold text-dark-dark mb-2">Openingstijden</h3>
                  <p className="italic">Wij zijn alleen open op afspraak.</p>
                  <div className="grid grid-cols-2 mt-2 gap-y-1 max-w-xs">
                    <div>Maandag - Vrijdag</div>
                    <div>9:30 - 17:30</div>
                    <div>Zaterdag</div>
                    <div>9:30 - 16:00</div>
                    <div>Zondag</div>
                    <div>Gesloten</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.7825342424856!2d4.7060487!3d52.5291707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fd95dc3b8e4d%3A0xa16e3e6b16dc9b63!2sPopulierenlaan%2041%2C%201911%20BK%20Uitgeest!5e0!3m2!1sen!2snl!4v1714941041583!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Locatie Van Bruggen Automotive - Populierenlaan 41, Uitgeest"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
