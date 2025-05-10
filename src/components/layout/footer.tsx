"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white">
      {/* Main footer content */}
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {/* Column 1: Logo and contact info section */}
          <div className="space-y-6">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-zwart.png"
                alt="Auto Boomgaard"
                width={300}
                height={138}
                className="object-contain h-auto max-w-[30%] md:max-w-[70%]"
              />
            </Link>

            <div className="space-y-1 text-gray-700">
              <h3 className="text-[#BEAA8A] font-semibold text-base">Adres</h3>
              <Link
                href="https://www.google.com/maps/dir/Current+Location/Van+Bruggen+Automotive+Populierenlaan+41+1911BK+Uitgeest"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#BEAA8A] transition-standard flex items-start"
              >
                <FaMapMarkerAlt className="mr-2 mt-1 text-[#BEAA8A] flex-shrink-0" />
                <span>
                  Ondernemingsweg 56c
                  <br />
                  1422 DZ Uithoorn
                </span>
              </Link>
            </div>

            <div className="space-y-3 text-gray-700">
              <h3 className="text-[#BEAA8A] font-semibold text-base">
                Contactgegevens
              </h3>
              <Link
                href="tel:+31619201375"
                className="block hover:text-[#BEAA8A] transition-standard flex items-center"
              >
                <FaPhoneAlt className="mr-2 text-[#BEAA8A] flex-shrink-0" />
                +31 6 11 71 58 10
              </Link>
              <Link
                href="mailto:info@autoboomgaard.nl"
                className="block hover:text-[#BEAA8A] transition-standard flex items-center"
              >
                <FaEnvelope className="mr-2 text-[#BEAA8A] flex-shrink-0" />
                info@autoboomgaard.nl
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

          {/* Column 2: Opening hours */}
          <div className="text-gray-700">
            <h3 className="uppercase text-sm font-bold mb-6 text-[#BEAA8A]">
              Openingstijden
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div className="font-medium">Maandag</div>
              <div>Op afspraak</div>
              <div className="font-medium">Dinsdag</div>
              <div>Op afspraak</div>
              <div className="font-medium">Woensdag</div>
              <div>Op afspraak</div>
              <div className="font-medium">Donderdag</div>
              <div>Op afspraak</div>
              <div className="font-medium">Vrijdag</div>
              <div>Op afspraak</div>
              <div className="font-medium">Zaterdag</div>
              <div>Op afspraak</div>
              <div className="font-medium">Zondag</div>
              <div>Op afspraak</div>
            </div>
          </div>

          {/* Column 3: Menu */}
          <div className="text-gray-700">
            <h3 className="uppercase text-sm font-bold mb-6 text-[#BEAA8A]">
              Menu
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aanbod"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Aanbod
                </Link>
              </li>
              <li>
                <Link
                  href="/over-ons"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Over ons
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Diensten
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Customizing
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Detailing
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Leasen
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Onderhoud
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten"
                  className="hover:text-[#BEAA8A] transition-standard"
                >
                  Alarm
                </Link>
              </li>
            </ul>

            {/* Back to top button for desktop */}
            <button
              onClick={scrollToTop}
              className="mt-8 hidden md:flex items-center text-[#BEAA8A] hover:text-gray-700 transition-standard"
            >
              <FaArrowUp className="mr-2" />
              Terug naar boven
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Back to Top Button */}
      <div className="container-custom py-4 md:hidden">
        <button
          onClick={scrollToTop}
          className="flex items-center mx-auto text-[#BEAA8A] hover:text-gray-700 transition-standard"
        >
          <FaArrowUp className="mr-2" />
          Terug naar boven
        </button>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6">
        <div className="container-custom text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>
            © Copyright {currentYear} Auto Boomgaard | Developed by{" "}
            <a
              href="https://dominiumlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#BEAA8A] transition-standard"
            >
              Dominum labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
