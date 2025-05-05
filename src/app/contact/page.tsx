"use client";

import type React from "react";
import { useState } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log("Form submitted:", formData);
    alert(
      "Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <PageHero
        title="Contact"
        subtitle="Neem contact met ons op"
        backgroundImage="https://ext.same-assets.com/3632404423/3433641455.jpeg"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="bg-light p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-dark-dark mb-6">
                Stuur ons een bericht
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-dark-dark/70 mb-1"
                    >
                      Naam*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-dark-dark/70 mb-1"
                    >
                      E-mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-dark-dark/70 mb-1"
                  >
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-dark-dark/70 mb-1"
                  >
                    Onderwerp*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="aankoop">Aankoop auto</option>
                    <option value="verkoop">Verkoop auto</option>
                    <option value="proefrit">Proefrit aanvragen</option>
                    <option value="customizing">Customizing</option>
                    <option value="detailing">Detailing</option>
                    <option value="leasen">Leasen</option>
                    <option value="onderhoud">Onderhoud</option>
                    <option value="alarm">Alarm</option>
                    <option value="overig">Overig</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-dark-dark/70 mb-1"
                  >
                    Bericht*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded w-full md:w-auto"
                  >
                    Versturen
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-dark-dark mb-6">
                  Contactgegevens
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-gold mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-dark-dark">Adres</h3>
                      <p className="text-dark-dark/80">
                        Ondernemingsweg 56c
                        <br />
                        1422 DZ Uithoorn
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaPhone className="text-gold mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-dark-dark">Telefoon</h3>
                      <p className="text-dark-dark/80">
                        <Link
                          href="tel:+31619201375"
                          className="hover:text-gold transition-standard"
                        >
                          +31 6 19 20 13 75
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaEnvelope className="text-gold mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-dark-dark">E-mail</h3>
                      <p className="text-dark-dark/80">
                        <Link
                          href="mailto:info@vanbruggenautomotive.nl"
                          className="hover:text-gold transition-standard"
                        >
                          info@vanbruggenautomotive.nl
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaWhatsapp className="text-gold mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-dark-dark">WhatsApp</h3>
                      <p className="text-dark-dark/80">
                        <Link
                          href="https://api.whatsapp.com/send/?phone=31613024070"
                          className="hover:text-gold transition-standard"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Direct chatten
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-dark-dark mb-6">
                  Openingstijden
                </h2>

                <div className="grid grid-cols-2 gap-y-2">
                  <div className="text-dark-dark/80">Maandag</div>
                  <div className="text-dark-dark">9:30 - 17:30</div>
                  <div className="text-dark-dark/80">Dinsdag</div>
                  <div className="text-dark-dark">9:30 - 17:30</div>
                  <div className="text-dark-dark/80">Woensdag</div>
                  <div className="text-dark-dark">9:30 - 17:30</div>
                  <div className="text-dark-dark/80">Donderdag</div>
                  <div className="text-dark-dark">9:30 - 17:30</div>
                  <div className="text-dark-dark/80">Vrijdag</div>
                  <div className="text-dark-dark">9:30 - 17:30</div>
                  <div className="text-dark-dark/80">Zaterdag</div>
                  <div className="text-dark-dark">9:30 - 16:00</div>
                  <div className="text-dark-dark/80">Zondag</div>
                  <div className="text-dark-dark">Gesloten</div>
                </div>

                <p className="mt-4 text-dark-dark/80">
                  <strong>Let op:</strong> Wij zijn alleen open op afspraak.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-dark-dark mb-6">
                  Locatie
                </h2>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.7825342424856!2d4.7060487!3d52.5291707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fd95dc3b8e4d%3A0xa16e3e6b16dc9b63!2sPopulierenlaan%2041%2C%201911%20BK%20Uitgeest!5e0!3m2!1sen!2snl!4v1714941041583!5m2!1sen!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Locatie Van Bruggen Automotive - Ondernemingsweg 56c, Uitgeest"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
