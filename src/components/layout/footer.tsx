"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-gold bg-opacity-20 pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and address section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://ext.same-assets.com/611734785/2402225909.png"
                alt="Van Bruggen Automotive"
                width={180}
                height={72}
                className="object-contain h-auto"
                style={{ width: 'auto', maxWidth: '180px' }}
              />
            </Link>
            <div className="text-dark-dark space-y-1">
              <h3 className="font-semibold text-lg mb-2">Adres</h3>
              <Link
                href="https://www.google.com/maps/dir/Current+Location/Van+Bruggen+Automotive+Populierenlaan+41+1911BK+Uitgeest"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold-dark transition-standard"
              >
                Populierenlaan 41
              </Link>
              <Link
                href="https://www.google.com/maps/dir/Current+Location/Van+Bruggen+Automotive+Populierenlaan+41+1911BK+Uitgeest"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold-dark transition-standard"
              >
                1911BK Uitgeest
              </Link>
            </div>
            <div className="text-dark-dark space-y-1">
              <h3 className="font-semibold text-lg mb-2">Contactgegevens</h3>
              <Link
                href="tel:+31619201375"
                className="block hover:text-gold-dark transition-standard"
              >
                +31 6 19 20 13 75
              </Link>
              <Link
                href="mailto:info@vanbruggenautomotive.nl"
                className="block hover:text-gold-dark transition-standard"
              >
                info@vanbruggenautomotive.nl
              </Link>
            </div>
            <Link
              href="https://www.instagram.com/vanbruggenautomotive/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-dark-dark hover:text-gold-dark transition-standard"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>

          {/* Opening hours */}
          <div className="text-dark-dark">
            <h3 className="uppercase text-sm font-semibold mb-6">Openingstijden</h3>
            <p className="text-sm mb-4">
              <Link href="tel:+31619201375" className="font-medium">Let op:</Link> <Link href="tel:+31619201375" className="text-dark-dark">Wij zijn alleen open op afspraak.</Link>
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div>Maandag</div>
              <div>9:30 - 17:30</div>
              <div>Dinsdag</div>
              <div>9:30 - 17:30</div>
              <div>Woensdag</div>
              <div>9:30 - 17:30</div>
              <div>Donderdag</div>
              <div>9:30 - 17:30</div>
              <div>Vrijdag</div>
              <div>9:30 - 17:30</div>
              <div>Zaterdag</div>
              <div>9:30 - 16:00</div>
              <div>Zondag</div>
              <div>Gesloten</div>
            </div>
          </div>

          {/* Menu */}
          <div className="text-dark-dark">
            <h3 className="uppercase text-sm font-semibold mb-6">Menu</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <Link href="/" className="hover:text-gold-dark transition-standard">
                Home
              </Link>
              <Link href="/aanbod" className="hover:text-gold-dark transition-standard">
                Aanbod
              </Link>
              <Link href="/over-ons" className="hover:text-gold-dark transition-standard">
                Over ons
              </Link>
              <Link href="/contact" className="hover:text-gold-dark transition-standard">
                Contact
              </Link>
              <Link href="/vacatures" className="hover:text-gold-dark transition-standard">
                Vacatures
              </Link>
              <Link href="/diensten" className="hover:text-gold-dark transition-standard">
                Diensten
              </Link>
              <Link href="/diensten" className="hover:text-gold-dark transition-standard">
                Customizing
              </Link>
              <Link href="/diensten" className="hover:text-gold-dark transition-standard">
                Detailing
              </Link>
              <Link href="/diensten" className="hover:text-gold-dark transition-standard">
                Leasen
              </Link>
              <Link href="/diensten" className="hover:text-gold-dark transition-standard">
                Onderhoud
              </Link>
              <Link href="/diensten" className="hover:text-gold-dark transition-standard">
                Alarm
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="text-dark-dark" suppressHydrationWarning>
            <h3 className="uppercase text-sm font-semibold mb-6">Nieuwsbrief</h3>
            <p className="text-sm mb-4">
              Meld je aan voor onze nieuwsbrief en blijf op de hoogte van onze nieuwe voorraad.
            </p>
            {/* Instead of a regular form, use key to force remounting on the client */}
            {typeof window !== 'undefined' ? (
              <form className="space-y-3" key="newsletter-form" suppressHydrationWarning>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                  required
                  suppressHydrationWarning
                />
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-2 px-4 rounded transition-standard"
                >
                  Aanmelden
                </Button>
              </form>
            ) : (
              <form className="space-y-3" suppressHydrationWarning>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
                  required
                  suppressHydrationWarning
                />
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-2 px-4 rounded transition-standard"
                >
                  Aanmelden
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 mt-10 border-t border-gray-300 text-dark-dark/70 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© Copyright 2025 Van Bruggen Automotive | Designed and developed by <a href="https://fortuneagency.nl/vorige-website-interessant/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-dark transition-standard">Fortune Agency</a></p>
          <p className="mt-2 md:mt-0">Boost your business online.</p>
        </div>
      </div>
    </footer>
  );
};
