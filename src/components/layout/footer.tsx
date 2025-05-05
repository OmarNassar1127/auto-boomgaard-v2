"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and contact info section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://vanbruggenautomotive.nl/wp-content/uploads/2024/11/Logo-ZwartGoud-e1731420381483-1024x472.png"
                alt="Van Bruggen Automotive"
                width={300}
                height={138}
                className="object-contain h-auto max-w-full"
              />
            </Link>
            
            <div className="space-y-1 text-gray-700">
              <p className="font-semibold">Adres</p>
              <Link
                href="https://www.google.com/maps/dir/Current+Location/Van+Bruggen+Automotive+Populierenlaan+41+1911BK+Uitgeest"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#BEAA8A] transition-standard"
              >
                Populierenlaan 41
              </Link>
              <Link
                href="https://www.google.com/maps/dir/Current+Location/Van+Bruggen+Automotive+Populierenlaan+41+1911BK+Uitgeest"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#BEAA8A] transition-standard"
              >
                1911BK Uitgeest
              </Link>
            </div>
            
            <div className="space-y-1 text-gray-700">
              <p className="font-semibold">Contactgegevens</p>
              <Link
                href="tel:+31619201375"
                className="block hover:text-[#BEAA8A] transition-standard"
              >
                +31 6 19 20 13 75
              </Link>
              <Link
                href="mailto:info@vanbruggenautomotive.nl"
                className="block hover:text-[#BEAA8A] transition-standard"
              >
                info@vanbruggenautomotive.nl
              </Link>
            </div>
            
            <div className="mt-4">
              <Link
                href="https://www.instagram.com/vanbruggenautomotive/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#BEAA8A] text-white hover:bg-opacity-80 transition-standard"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Opening hours */}
          <div className="text-gray-700">
            <h3 className="uppercase text-sm font-bold mb-6">Openingstijden</h3>
            <p className="text-sm mb-4">
              <Link href="tel:+31619201375" className="font-medium">Let op:</Link> <br />
              <Link href="tel:+31619201375" className="text-gray-700">Wij zijn alleen open op afspraak.</Link>
            </p>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div>Maandag</div>
              <div>9:30 – 17:30</div>
              <div>Dinsdag</div>
              <div>9:30 – 17:30</div>
              <div>Woensdag</div>
              <div>9:30 – 17:30</div>
              <div>Donderdag</div>
              <div>9:30 – 17:30</div>
              <div>Vrijdag</div>
              <div>9:30 – 17:30</div>
              <div>Zaterdag</div>
              <div>9:30 – 16:00</div>
              <div>Zondag</div>
              <div>Gesloten</div>
            </div>
          </div>

          {/* Menu */}
          <div className="text-gray-700">
            <h3 className="uppercase text-sm font-bold mb-6">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#BEAA8A] transition-standard">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aanbod" className="hover:text-[#BEAA8A] transition-standard">
                  Aanbod
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-[#BEAA8A] transition-standard">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#BEAA8A] transition-standard">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/vacatures" className="hover:text-[#BEAA8A] transition-standard">
                  Vacatures
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-[#BEAA8A] transition-standard">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-[#BEAA8A] transition-standard">
                  Customizing
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-[#BEAA8A] transition-standard">
                  Detailing
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-[#BEAA8A] transition-standard">
                  Leasen
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-[#BEAA8A] transition-standard">
                  Onderhoud
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-[#BEAA8A] transition-standard">
                  Alarm
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-gray-700" suppressHydrationWarning>
            <h3 className="uppercase text-sm font-bold mb-6">Nieuwsbrief</h3>
            <p className="text-sm mb-4">
              Meld je aan voor onze nieuwsbrief en blijf op de hoogte van onze nieuwe voorraad.
            </p>
            <form className="space-y-3" suppressHydrationWarning>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full py-3 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BEAA8A] focus:border-transparent bg-white"
                required
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="elementor-button elementor-size-md w-full bg-[#BEAA8A] hover:bg-opacity-80 text-white font-medium py-3 px-4 transition-standard"
              >
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Aanmelden</span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6">
        <div className="container-custom text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© Copyright {currentYear} Van Bruggen Automotive | Designed and developed by <a href="https://dominiumlabs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BEAA8A] transition-standard">Dominium Labs</a></p>
          <p className="mt-2 md:mt-0">Boost your business online.</p>
        </div>
      </div>
    </footer>
  );
};
