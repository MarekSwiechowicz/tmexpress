"use client";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Bardzo jestem zadowolony z usług firmy transportowej TM Express. Zawsze dostarczają moje przesyłki na czas, a personel jest bardzo uprzejmy i pomocny. Ich flota pojazdów jest nowoczesna i utrzymana w doskonałym stanie, co gwarantuje bezpieczeństwo moich towarów podczas transportu.",
    name: "Maciej Powrot",
    position: "CEO Biedronka",
  },
  {
    quote:
      "Firma TM Express zawsze wykonuje zlecenia na czas. Ich usługi transportowe są niezawodne i polecam je każdemu.",
    name: "Anna Kowalska",
    position: "Manager, ABC Company",
  },
  {
    quote:
      "Niezawodna obsługa i wyjątkowo uprzejma obsługa klienta. Z TM Express współpracuję od lat i jestem bardzo zadowolony.",
    name: "Jan Nowak",
    position: "Logistics Head, XYZ Corp",
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <div className="relative">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <blockquote className="text-lg italic text-gray-700">
            &quot;{testimonials[currentSlide].quote}&quot;
          </blockquote>
          <div className="mt-4 text-right">
            <p className="font-semibold">{testimonials[currentSlide].name}</p>
            <p className="text-sm text-gray-500">
              {testimonials[currentSlide].position}
            </p>
          </div>
        </div>

        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-700 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-700 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
