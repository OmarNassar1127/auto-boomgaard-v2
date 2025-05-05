"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaBars, FaSearch } from "react-icons/fa";
import { MdEmail, MdPhone, MdClose } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Aanbod", href: "/aanbod" },
  { name: "Diensten", href: "/diensten" },
  { name: "Over ons", href: "/over-ons" },
  { name: "Vacatures", href: "/vacatures" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-dark bg-opacity-95 backdrop-blur-sm shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      {/* Top bar */}
      <div className="container-custom flex justify-between items-center text-white text-sm mb-2">
        <div className="flex items-center space-x-4">
          <Link
            href="mailto:info@vanbruggenautomotive.nl"
            className="flex items-center hover:text-gold transition-standard"
          >
            <MdEmail className="mr-1" />
            <span className="hidden md:block">
              info@vanbruggenautomotive.nl
            </span>
          </Link>
          <Link
            href="tel:+31619201375"
            className="flex items-center hover:text-gold transition-standard"
          >
            <MdPhone className="mr-1" />
            <span className="hidden md:block">+31 6 19 20 13 75</span>
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=31613024070"
            className="flex items-center hover:text-gold transition-standard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-1" />
            <span className="hidden md:block">Whatsapp</span>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="relative w-32 md:w-40">
          <Image
            src="https://ext.same-assets.com/3632404423/2187716925.png"
            alt="Van Bruggen Automotive"
            width={200}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-gold transition-standard font-medium"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gold text-white py-2 px-4 rounded hover:bg-gold-dark transition-standard flex items-center"
            >
              Contact opnemen
            </Link>
            <button className="text-white hover:text-gold transition-standard">
              <FaSearch className="w-5 h-5" />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="text-white hover:text-gold focus:outline-none"
              >
                <FaBars className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-dark-dark w-full sm:max-w-md">
              <div className="flex flex-col h-full text-white">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="relative w-32">
                    <Image
                      src="https://ext.same-assets.com/3632404423/2187716925.png"
                      alt="Van Bruggen Automotive"
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  </Link>
                </div>
                <nav className="flex flex-col space-y-6 text-lg">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="py-2 border-b border-gray-700 hover:text-gold transition-standard"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="mt-4 bg-gold text-white py-3 px-6 rounded text-center hover:bg-gold-dark transition-standard"
                  >
                    Contact opnemen
                  </Link>
                </nav>
                <div className="mt-auto">
                  <div className="flex items-center space-x-6 mb-4">
                    <Link
                      href="https://www.instagram.com/vanbruggenautomotive/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-standard"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=31613024070"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-standard"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-2 text-sm text-gray-300">
                    <Link
                      href="mailto:info@vanbruggenautomotive.nl"
                      className="hover:text-gold transition-standard"
                    >
                      info@vanbruggenautomotive.nl
                    </Link>
                    <Link
                      href="tel:+31619201375"
                      className="hover:text-gold transition-standard"
                    >
                      +31 6 19 20 13 75
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
