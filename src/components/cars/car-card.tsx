import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CarCardProps {
  id: string;
  brand: string;
  model: string;
  variant: string;
  price: number;
  image: string;
  kilometers: number;
  year: number;
  color: string;
  includingVAT?: boolean;
  isPromo?: boolean;
  className?: string;
}

export const CarCard = ({
  id,
  brand,
  model,
  variant,
  price,
  image,
  kilometers,
  year,
  color,
  includingVAT = true,
  isPromo = false,
  className,
}: CarCardProps) => {
  const formattedPrice = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

  const formattedKm = new Intl.NumberFormat("nl-NL").format(kilometers);

  return (
    <Link
      href={`/aanbod/${id}`}
      className={cn(
        "block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white",
        className
      )}
    >
      <div className="relative">
        {isPromo && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow">
            Nieuw binnen
          </div>
        )}

        <div className="relative h-60">
          <Image
            src={image}
            alt={`${brand} ${model} ${variant}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-900">{brand}</h3>
            <h4 className="text-md text-gray-700">{model}</h4>
            <p className="text-sm text-gray-500">{variant}</p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-gold">{formattedPrice}</span>
            <span className="text-sm text-gray-500">
              {includingVAT ? "incl. BTW" : "Marge"}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-gray-700 relative">
            {/* Vertical divider lines */}
            <div className="flex flex-col items-start">
              <div className="text-gray-500 text-xs">KM Stand</div>
              <div className="font-medium">{formattedKm}</div>
            </div>
            <div className="flex flex-col items-start border-l" style={{ borderColor: '#BEAA8A', paddingLeft: '1rem' }}>
              <div className="text-gray-500 text-xs">Bouwjaar</div>
              <div className="font-medium">{year}</div>
            </div>
            <div className="flex flex-col items-start border-l" style={{ borderColor: '#BEAA8A', paddingLeft: '1rem' }}>
              <div className="text-gray-500 text-xs">Kleur</div>
              <div className="font-medium">{color}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
