"use client";

import React from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABanner } from "@/components/home/cta-banner";
import { Button } from "@/components/ui/button";

interface JobListingProps {
  title: string;
  location: string;
  type: string;
  description: string;
  jobId: string;
}

const JobListing = ({
  title,
  location,
  type,
  description,
  jobId,
}: JobListingProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-dark-dark mb-2">{title}</h3>
    <div className="flex flex-wrap gap-4 mb-4">
      <span className="bg-light text-dark-dark/70 px-3 py-1 rounded-full text-sm">
        {location}
      </span>
      <span className="bg-light text-dark-dark/70 px-3 py-1 rounded-full text-sm">
        {type}
      </span>
    </div>
    <p className="text-dark-dark/80 mb-6">{description}</p>
    <Button asChild className="bg-gold hover:bg-gold-dark text-white">
      <Link href={`/contact?vacancy=${jobId}`}>Solliciteer nu</Link>
    </Button>
  </div>
);

export default function VacaturesPage() {
  const jobs = [
    {
      id: "automotive-technician",
      title: "Automotive Technicus",
      location: "Uitgeest",
      type: "Fulltime",
      description:
        "Ben jij een ervaren automotive technicus met passie voor Audi? Heb je een gedegen technische achtergrond in de autobranche? Kom dan ons team versterken! Als automotive technicus ben je verantwoordelijk voor het onderhoud, reparatie en afstelling van diverse Audi modellen. Je werkt met geavanceerde diagnoseapparatuur en houdt je kennis up-to-date over de nieuwste technologieën.",
    },
    {
      id: "sales-advisor",
      title: "Verkoopadviseur",
      location: "Uitgeest",
      type: "Fulltime",
      description:
        "Wij zijn op zoek naar een enthousiaste verkoopadviseur die onze klanten kan adviseren bij de aankoop van hun droomauto. Je hebt een passie voor premium auto's en weet als geen ander hoe je de behoeften van de klant kunt vertalen naar het perfecte voertuig. In deze functie ben je het aanspreekpunt voor onze klanten, zowel in de showroom als via telefoon en e-mail.",
    },
    {
      id: "detailing-specialist",
      title: "Detailing Specialist",
      location: "Uitgeest",
      type: "Parttime / Fulltime",
      description:
        "Voor onze detailing afdeling zijn wij op zoek naar een gedreven detailing specialist. Je bent verantwoordelijk voor het perfect afleveren van onze auto's, zowel voor de verkoop als op verzoek van klanten. Van grondige reiniging tot polijsten en waxen - jij zorgt ervoor dat elke auto er stralend uitziet. Je hebt oog voor detail en streeft naar perfectie.",
    },
  ];

  return (
    <div>
      <PageHero
        title="Vacatures"
        subtitle="Kom werken bij Auto Boomgaard"
        backgroundImage="https://ext.same-assets.com/3632404423/2581911691.jpeg"
      />

      <section className="py-16 md:py-24 bg-light">
        <div className="container-custom">
          <SectionHeader
            subtitle="WERK MET ONS"
            title="Openstaande vacatures"
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-8">
            {jobs.map((job) => (
              <JobListing
                key={job.id}
                title={job.title}
                location={job.location}
                type={job.type}
                description={job.description}
                jobId={job.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              subtitle="OPEN SOLLICITATIE"
              title="Geen passende vacature gevonden?"
              alignment="center"
              className="mb-8"
            />

            <p className="text-dark-dark/80 mb-8">
              Zie je geen vacature die bij jou past, maar wil je toch graag bij
              ons komen werken? Stuur ons dan een open sollicitatie! We zijn
              altijd op zoek naar getalenteerde en gemotiveerde mensen die ons
              team kunnen versterken.
            </p>

            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <Link href="/contact?vacancy=open">Stuur open sollicitatie</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                subtitle="WERKEN BIJ VAN BRUGGEN"
                title="Wat kun je van ons verwachten"
              />

              <div className="space-y-6 text-dark-dark/80">
                <p>
                  Bij Auto Boomgaard bieden we je een dynamische werkomgeving
                  met ruimte voor persoonlijke groei en ontwikkeling. We zijn
                  een hecht team van autoenthousiasten die samen werken aan het
                  leveren van de beste service aan onze klanten.
                </p>

                <ul className="space-y-2 list-disc pl-5">
                  <li>Een informele werksfeer in een modern bedrijf</li>
                  <li>Marktconforme salariëring</li>
                  <li>Doorgroeimogelijkheden en opleidingen</li>
                  <li>Werken met premium automobielen</li>
                  <li>Een enthousiast team van collega's</li>
                  <li>Persoonlijke ontwikkeling en verantwoordelijkheid</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dark-dark mb-4">
                Sollicitatieprocedure
              </h3>

              <ol className="space-y-4 list-decimal pl-5 text-dark-dark/80">
                <li>
                  <strong>Sollicitatie indienen</strong>
                  <br />
                  Stuur ons je CV en motivatiebrief via het contactformulier.
                </li>
                <li>
                  <strong>Eerste selectie</strong>
                  <br />
                  We beoordelen je sollicitatie en nemen contact met je op als
                  we je willen uitnodigen voor een gesprek.
                </li>
                <li>
                  <strong>Persoonlijk gesprek</strong>
                  <br />
                  Een gesprek met de directie waarin we je beter leren kennen en
                  je meer vertellen over het bedrijf en de functie.
                </li>
                <li>
                  <strong>Eventueel tweede gesprek</strong>
                  <br />
                  Afhankelijk van de functie kan een tweede gesprek of
                  meeloopdag volgen.
                </li>
                <li>
                  <strong>Arbeidsvoorwaardengesprek</strong>
                  <br />
                  Als we besluiten je een aanbod te doen, bespreken we de
                  arbeidsvoorwaarden.
                </li>
                <li>
                  <strong>Indiensttreding</strong>
                  <br />
                  Na akkoord regelen we alles voor je indiensttreding.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
