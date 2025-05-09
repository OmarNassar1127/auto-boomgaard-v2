"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaInstagram, FaBars } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Aanbod", href: "/aanbod" },
  { name: "Diensten", href: "/diensten" },
  { name: "Over ons", href: "/over-ons" },
];

export const Header = () => {
  // Initialize scrolled state to false (will be updated in useEffect)
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if current page is a car detail page or contact page
  const isCarDetailPage =
    pathname.includes("/aanbod/") && pathname !== "/aanbod";
  const isContactPage = pathname === "/contact";
  const hideTopBar = isCarDetailPage || isContactPage;

  useEffect(() => {
    // Check initial scroll position when component mounts
    const initialScrollCheck = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      // Add a small debounce effect for smoother transitions
      if (isScrolled !== scrolled) {
        setTimeout(() => {
          setScrolled(isScrolled);
        }, 10);
      }
    };
    
    // Run initial check immediately
    initialScrollCheck();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const goldColor = "#BEAA8A";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-smooth">
      {/* Top bar - Only visible when not on car detail or contact page */}
      {!hideTopBar && (
        <div
          className={cn(
            "bg-[#BEAA8A] transition-smooth overflow-hidden",
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          )}
          style={{
            transitionProperty: "max-height, opacity, transform",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="container-custom flex justify-between items-center text-white text-sm py-2">
            <div className="flex items-center space-x-4">
              <Link
                href="mailto:info@autoboomgaard.nl"
                className="flex items-center hover:text-dark transition-smooth"
              >
                <MdEmail className="mr-1" />
                <span className="hidden md:block">info@autoboomgaard.nl</span>
              </Link>
              <Link
                href="tel:+31619201375"
                className="flex items-center hover:text-dark transition-smooth"
              >
                <MdPhone className="mr-1" />
                <span className="hidden md:block">+31 6 11 71 58 10</span>
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=31611715810"
                className="flex items-center hover:text-dark transition-smooth"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-1" />
                <span className="hidden md:block">Whatsapp</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation */}
      <div
        className={cn(
          "transition-smooth py-3 md:py-4",
          scrolled || hideTopBar ? "bg-[#BEAA8A] shadow-lg" : "bg-transparent"
        )}
        style={{
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="relative w-36 sm:w-40 md:w-48">
            <Image
              src="/images/logo-wit.png"
              alt="Auto Boomgaard"
              width={250}
              height={180}
              className="object-contain h-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center lg:ml-10">
            <ul className="flex md:space-x-4 lg:space-x-6 xl:space-x-8 mr-2 lg:mr-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-white transition-standard font-medium relative px-1 py-2 group text-sm lg:text-base"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                    {(pathname === item.href ||
                      (item.href === "/aanbod" &&
                        pathname.includes("/aanbod/"))) && (
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="elementor-button block md:w-auto border-2 border-white bg-transparent hover:bg-white hover:text-[#BEAA8A] text-white rounded-sm transition-standard py-2 md:px-4 lg:px-5 ml-2 whitespace-nowrap text-sm lg:text-base"
            >
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text font-medium">
                  Contact opnemen
                </span>
              </span>
            </Link>
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "focus:outline-none transition-smooth p-1 sm:p-2",
                    scrolled ? "text-white" : "text-white"
                  )}
                >
                  <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white w-[80%] sm:max-w-md">
                <SheetTitle className="sr-only">Navigatie Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigatiemenu van Auto Boomgaard
                </SheetDescription>
                <div className="flex flex-col h-full text-black">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="/" className="relative w-32">
                      <Image
                        src="/images/logo-wit.png"
                        alt="Auto Boomgaard"
                        width={150}
                        height={60}
                        className="object-contain h-auto"
                        style={{ width: "auto" }}
                      />
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-6 text-lg">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`py-2 border-b border-gray-200 hover:text-[#BEAA8A] transition-smooth relative group ${
                          pathname === item.href ||
                          (item.href === "/aanbod" &&
                            pathname.includes("/aanbod/"))
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        {item.name}
                        {(pathname === item.href ||
                          (item.href === "/aanbod" &&
                            pathname.includes("/aanbod/"))) && (
                          <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#BEAA8A]"></span>
                        )}
                      </Link>
                    ))}
                    <Link
                      href="/contact"
                      className="mt-4 border-2 border-[#BEAA8A] bg-transparent hover:bg-[#BEAA8A] hover:text-white text-[#BEAA8A] rounded-sm py-3 px-6 text-center transition-smooth"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text font-medium">
                          Contact opnemen
                        </span>
                      </span>
                    </Link>
                  </nav>
                  <div className="mt-auto">
                    <div className="w-full h-px bg-gray-200 my-6"></div>
                    <div className="flex items-center space-x-6 mb-4">
                      <Link
                        href="https://www.instagram.com/vanbruggenautomotive/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-[#BEAA8A] transition-smooth"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </Link>
                      <Link
                        href="https://api.whatsapp.com/send/?phone=31611715810"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-[#BEAA8A] transition-smooth"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                      </Link>
                    </div>
                    <div className="flex flex-col space-y-2 text-sm text-black">
                      <Link
                        href="mailto:info@autoboomgaard.nl"
                        className="hover:text-[#BEAA8A] transition-smooth"
                      >
                        info@autoboomgaard.nl
                      </Link>
                      <Link
                        href="tel:+31619201375"
                        className="hover:text-[#BEAA8A] transition-smooth"
                      >
                        +31 6 11 71 58 10
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
