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
      href={`/voertuigen/${id}`}
      className={cn(
        "block bg-white shadow-md hover:shadow-lg transition-standard overflow-hidden group",
        className
      )}
    >
      <div className="relative">
        {isPromo && (
          <div className="absolute top-0 left-0 bg-yellow-500 text-white py-1 px-3 z-10 font-medium">
            Nieuw binnen
          </div>
        )}
        <div className="relative h-60 overflow-hidden">
          <Image
            src={image}
            alt={`${brand} ${model} ${variant}`}
            fill
            className="object-cover group-hover:scale-105 transition-standard"
          />
        </div>
        <div className="p-4">
          <div className="mb-2">
            <h3 className="text-xl font-medium text-dark-dark">{brand}</h3>
            <h4 className="text-lg font-medium text-dark-dark">{model}</h4>
            <p className="text-dark-dark/80">{variant}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-gold text-xl font-bold">{formattedPrice}</div>
            <div className="text-dark-dark/60 text-sm">
              {includingVAT ? "incl. BTW" : "Marge"}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
            <div className="flex flex-col">
              <span className="text-dark-dark/60">KM Stand</span>
              <span className="font-medium">{formattedKm}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-dark-dark/60">Bouwjaar</span>
              <span className="font-medium">{year}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-dark-dark/60">Kleur</span>
              <span className="font-medium">{color}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
