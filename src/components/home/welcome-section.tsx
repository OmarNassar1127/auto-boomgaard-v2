"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export const WelcomeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <SectionHeader title="Welkom bij Auto Boomgaard" alignment="center" />

          <p className="text-dark-dark/80 mb-8 text-lg">
            Auto Boomgaard is al sinds 2014 dé Audi Specialist van Nederland en
            een echt familiebedrijf. Bij ons draait alles om passie voor auto's
            en persoonlijke service. Wat ons onderscheidt: de kwaliteit van onze
            unieke voorraad. We selecteren alleen uitzonderlijke exemplaren die
            echt iets bijzonders hebben. Denk aan auto's met hoge specificaties,
            lage kilometerstanden en een uitstraling die simpelweg
            onweerstaanbaar is.
          </p>

          <Button asChild className="bg-gold hover:bg-gold-dark text-white">
            <Link href="/over-ons">Meer over ons</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
