"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "loading" | "success">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Vul alstublieft uw naam in";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Vul alstublieft uw e-mailadres in";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Vul alstublieft een geldig e-mailadres in";
    }
    
    if (!formData.subject) {
      newErrors.subject = "Selecteer alstublieft een onderwerp";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Vul alstublieft uw bericht in";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
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
    <div className="bg-white rounded-xl p-8 shadow-lg h-full">
      <h2 className="text-2xl font-semibold mb-6 pb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[3px] after:bg-gold">
        Stuur ons een bericht
      </h2>

      {submitStatus === "success" && (
        <div className="mb-8 bg-green-100 p-5 rounded-lg flex items-start gap-5">
          <div className="text-green-700">
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
          <div>
            <h4 className="text-lg font-semibold text-green-700 mb-1">
              Bericht verzonden!
            </h4>
            <p className="text-green-700">
              Dank u voor uw bericht. We nemen zo snel mogelijk contact met u op.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Naam *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Uw naam"
              className={cn(
                "w-full p-3 bg-gray-50 border rounded-lg focus:ring-1 focus:ring-gold focus:border-gold transition-colors",
                errors.name ? "border-red-500" : "border-gray-200"
              )}
            />
            {errors.name && validated && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Uw e-mailadres"
              className={cn(
                "w-full p-3 bg-gray-50 border rounded-lg focus:ring-1 focus:ring-gold focus:border-gold transition-colors",
                errors.email ? "border-red-500" : "border-gray-200"
              )}
            />
            {errors.email && validated && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Telefoonnummer
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Uw telefoonnummer"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Onderwerp *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className={cn(
                "w-full p-3 bg-gray-50 border rounded-lg focus:ring-1 focus:ring-gold focus:border-gold transition-colors",
                errors.subject ? "border-red-500" : "border-gray-200"
              )}
            >
              <option value="">Selecteer een onderwerp</option>
              <option value="general">Algemene vraag</option>
              <option value="appointment">Afspraak maken</option>
              <option value="testdrive">Proefrit aanvragen</option>
              <option value="parts">Onderdelen en service</option>
              <option value="other">Overig</option>
            </select>
            {errors.subject && validated && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Bericht *
          </label>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Typ hier uw bericht..."
            className={cn(
              "w-full p-3 bg-gray-50 border rounded-lg focus:ring-1 focus:ring-gold focus:border-gold transition-colors",
              errors.message ? "border-red-500" : "border-gray-200"
            )}
          />
          {errors.message && validated && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitStatus === "loading"}
          className="bg-gold hover:bg-gold/90 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 hover:shadow-md mt-2 flex items-center justify-center"
        >
          {submitStatus === "loading" ? (
            <>
              <span className="inline-block h-4 w-4 mr-2 rounded-full border-2 border-white border-t-transparent animate-spin" />
              Versturen...
            </>
          ) : (
            "Versturen"
          )}
        </button>
      </form>
    </div>
  );
}
