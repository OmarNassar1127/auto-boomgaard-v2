"use client";

import React from "react";
import { CTASection } from "@/components/ui/cta-section";

export const CTABanner = () => {
  return (
    <CTASection
      subtitle="DE AUDI SPECIALIST VAN NEDERLAND"
      title="Ontdek de collectie"
      description="Auto Boomgaard is al sinds 2014 dé Audi Specialist van Nederland. Wat ons onderscheidt, is de kwaliteit van onze voorraad. We zoeken alleen naar uitzonderlijke exemplaren die iets speciaals hebben. Auto's met een sterke voorkeur voor hoge specificaties, lage kilometerstanden die gewoonweg sexy te noemen zijn. Wij besteden veel tijd en moeite om de markt bij te houden en ervoor te zorgen dat de prijs van onze auto's reëel is op basis van de specificatie, kilometerstand en staat."
      backgroundImage="/images/cta/cta.jpeg"
      buttons={[
        {
          label: "Bekijk collectie",
          href: "/aanbod",
          variant: "primary",
        },
        {
          label: "Afspraak maken",
          href: "/contact",
          variant: "outline",
        },
      ]}
    />
  );
};
