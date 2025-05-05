import React from "react";
import { FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  content: string;
  author?: string;
  rating?: number;
  className?: string;
}

export const Testimonial = ({
  content,
  author,
  rating = 5,
  className,
}: TestimonialProps) => {
  return (
    <div
      className={cn(
        "bg-white shadow-md p-6 rounded-md flex flex-col",
        className
      )}
    >
      {/* Stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={`star-${author || "anonymous"}-${index}`}
            className={cn(
              "w-4 h-4 mr-1",
              index < rating ? "text-gold" : "text-gray-300"
            )}
          />
        ))}
      </div>

      {/* Testimonial content */}
      <div className="flex-grow">
        <p className="text-dark-dark/90 italic mb-4">"{content}"</p>
      </div>

      {/* Author */}
      {author && (
        <div className="mt-auto">
          <p className="text-dark-dark font-medium">{author}</p>
        </div>
      )}
    </div>
  );
};
