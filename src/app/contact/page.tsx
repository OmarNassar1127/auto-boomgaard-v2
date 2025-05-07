"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [validated, setValidated] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Simulating form submission
    setSubmitStatus("loading");

    // Simulate API call delay
    setTimeout(() => {
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setValidated(false);
    }, 1500);
  };

  return (
    <div className="contact-page bg-[#F7F7F7] pb-20">
      {/* Page Header - Changed to transparent background with gold text */}
      <div className="page-header pt-32 text-center mb-12">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title text-4xl font-bold text-black mb-2">
                Contact
              </h1>
              <div className="page-subtitle text-lg text-black/80">
                Neem contact op voor een showroom afspraak of voor andere vragen
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Contact Form */}
          <div>
            <div className="content-block bg-white rounded-xl p-6 md:p-10 shadow-md h-full">
              <h2 className="section-title text-2xl font-semibold mb-8 pb-4 relative text-dark">
                Stuur ons een bericht
                <span className="absolute bottom-0 left-0 w-14 h-0.5 bg-gold"></span>
              </h2>

              {submitStatus === "success" && (
                <div className="success-alert bg-green-50 text-green-800 p-5 rounded-lg mb-8 flex items-start gap-5">
                  <div className="alert-icon flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="alert-content">
                    <h4 className="text-lg font-semibold mb-1">
                      Bericht verzonden!
                    </h4>
                    <p>
                      Dank u voor uw bericht. We nemen zo snel mogelijk contact
                      met u op.
                    </p>
                  </div>
                </div>
              )}

              <form
                noValidate
                className={validated ? "was-validated" : ""}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Uw naam"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition"
                    />
                    {validated && !formData.name && (
                      <div className="mt-1 text-red-500 text-sm">
                        Vul alstublieft uw naam in
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Uw e-mailadres"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition"
                    />
                    {validated && !formData.email && (
                      <div className="mt-1 text-red-500 text-sm">
                        Vul alstublieft een geldig e-mailadres in
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Uw telefoonnummer"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      Onderwerp *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition"
                    >
                      <option value="">Selecteer een onderwerp</option>
                      <option value="general">Algemene vraag</option>
                      <option value="appointment">Afspraak maken</option>
                      <option value="testdrive">Proefrit aanvragen</option>
                      <option value="parts">Onderdelen en service</option>
                      <option value="other">Overig</option>
                    </select>
                    {validated && !formData.subject && (
                      <div className="mt-1 text-red-500 text-sm">
                        Selecteer alstublieft een onderwerp
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Typ hier uw bericht..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold transition"
                  />
                  {validated && !formData.message && (
                    <div className="mt-1 text-red-500 text-sm">
                      Vul alstublieft uw bericht in
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="submit-button bg-gold hover:bg-gold/90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg mt-2 flex items-center justify-center"
                  disabled={submitStatus === "loading"}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <span className="mr-2 inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                      Versturen...
                    </>
                  ) : (
                    "Versturen"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="content-block bg-white rounded-xl p-6 md:p-10 shadow-md h-full">
              <h2 className="section-title text-2xl font-semibold mb-8 pb-4 relative text-dark">
                Contactgegevens
                <span className="absolute bottom-0 left-0 w-14 h-0.5 bg-gold"></span>
              </h2>

              <div className="space-y-8">
                <div className="contact-method flex items-start">
                  <div className="icon bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-gold"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="info">
                    <h3 className="text-lg font-semibold mb-1 text-dark">
                      Telefoon
                    </h3>
                    <p>
                      <a
                        href="tel:+31611715810"
                        className="text-gray-600 hover:text-gold transition-colors"
                      >
                        +31 6 11 71 58 10
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-method flex items-start">
                  <div className="icon bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-gold"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="info">
                    <h3 className="text-lg font-semibold mb-1 text-dark">
                      E-mail
                    </h3>
                    <p>
                      <a
                        href="mailto:info@autoboomgaard.nl"
                        className="text-gray-600 hover:text-gold transition-colors"
                      >
                        info@autoboomgaard.nl
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-method flex items-start">
                  <div className="icon bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-gold"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="info">
                    <h3 className="text-lg font-semibold mb-1 text-dark">
                      Adres
                    </h3>
                    <p className="text-gray-600">
                      Ondernemingsweg 56C
                      <br />
                      1422 DZ UITHOORN
                    </p>
                  </div>
                </div>

                <div className="contact-method flex items-start">
                  <div className="icon bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-gold"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="info">
                    <h3 className="text-lg font-semibold mb-1 text-dark">
                      Openingstijden
                    </h3>
                    <div className="opening-hours space-y-2">
                      <div className="day-time flex justify-between">
                        <span className="day text-gray-600">
                          Maandag - Vrijdag:
                        </span>
                        <span className="time font-medium text-gray-700">
                          9:00 - 18:00
                        </span>
                      </div>
                      <div className="day-time flex justify-between">
                        <span className="day text-gray-600">Zaterdag:</span>
                        <span className="time font-medium text-gray-700">
                          10:00 - 17:00
                        </span>
                      </div>
                      <div className="day-time flex justify-between">
                        <span className="day text-gray-600">Zondag:</span>
                        <span className="time font-medium text-gray-700">
                          Gesloten
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full width Google Maps */}
        <div className="mt-12">
          <div className="content-block bg-white rounded-xl p-6 md:p-10 shadow-md">
            <h2 className="section-title text-2xl font-semibold mb-8 pb-4 relative text-dark">
              Onze Locatie
              <span className="absolute bottom-0 left-0 w-14 h-0.5 bg-gold"></span>
            </h2>
            <div className="map-container overflow-hidden rounded-lg">
              <div className="responsive-map relative pb-[45%] h-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.1482211664147!2d4.841272700000001!3d52.2414381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5dff530b89c41%3A0x88d6aceb2e9867dc!2sOndernemingsweg%2056c%2C%201422%20DZ%20Uithoorn!5e0!3m2!1sen!2snl!4v1711037980123!5m2!1sen!2snl"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie Auto Boomgaard"
                  aria-label="Google Maps locatie van Auto Boomgaard"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
