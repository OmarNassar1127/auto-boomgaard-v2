"use client";

import type React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTools, FaCar, FaMoneyBillWave, FaSprayCan, FaShieldAlt } from 'react-icons/fa';
import { SectionHeader } from '@/components/ui/section-header';

interface ServiceBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ServiceBlock = ({ icon, title, description, href }: ServiceBlockProps) => (
  <Link
    href={href}
    className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-standard group"
  >
    <div className="text-gold group-hover:text-gold-dark mb-4 transition-standard">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-dark-dark">{title}</h3>
    <p className="text-dark-dark/80 mb-3">{description}</p>
    <span className="text-gold font-medium group-hover:text-gold-dark transition-standard mt-auto">
      Meer informatie
    </span>
  </Link>
);

export const ServicesOverview = () => {
  const services = [
    {
      icon: <FaCar size={42} />,
      title: 'Customizing',
      description: 'Maak uw auto uniek met onze customizing services, van sportieve velgen tot verfijnde upgrades.',
      href: '/diensten',
    },
    {
      icon: <FaSprayCan size={42} />,
      title: 'Detailing',
      description: 'Laat uw auto stralen als nieuw met onze professionele detailing en poetsservices.',
      href: '/diensten',
    },
    {
      icon: <FaMoneyBillWave size={42} />,
      title: 'Leasen',
      description: 'Zakelijk of privé leasen met flexibele oplossingen die aansluiten bij uw wensen en budget.',
      href: '/diensten',
    },
    {
      icon: <FaTools size={42} />,
      title: 'Onderhoud',
      description: 'Houd uw auto in topconditie met ons vakkundig onderhoud en uitgebreide reparaties.',
      href: '/diensten',
    },
    {
      icon: <FaShieldAlt size={42} />,
      title: 'Alarm',
      description: 'Bescherm uw auto tegen diefstal met onze geavanceerde beveiligingssystemen.',
      href: '/diensten',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          subtitle="Onze diensten"
          title="Meer dan alleen verkoop"
          alignment="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceBlock
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
