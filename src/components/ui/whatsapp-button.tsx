"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=31611715810"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons een bericht op WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold shadow-lg hover:bg-gold/90 transition-all duration-300 cursor-pointer"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="text-white text-2xl md:text-4xl" />
    </motion.a>
  );
};
