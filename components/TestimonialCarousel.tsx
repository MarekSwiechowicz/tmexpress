"use client";
import React, { useState, useEffect } from "react";

// Define the type for a testimonial
interface Testimonial {
  text: string;
  author: string;
}

export default function TestimonialCarousel() {
  // Array of testimonials with explicit typing
  const testimonials: Testimonial[] = [
    {
      text: "Bardzo jestem zadowolony z usług firmy transportowej TM Express. Zawsze dostarczają moje przesyłki na czas, a personel jest bardzo uprzejmy i pomocny. Ich flota pojazdów jest nowoczesna i utrzymana w doskonałym stanie, co gwarantuje bezpieczeństwo moich towarów podczas transportu.",
      author: "- Maciej Powrot, CEO Biedronka",
    },
    {
      text: "Dzięki TM Express moje przesyłki zawsze docierają na czas. Flota ich pojazdów to najlepsze, co spotkało moją firmę w zakresie transportu.",
      author: "- Anna Kowalska, Logistics Manager",
    },
    {
      text: "Firma TM Express to gwarancja jakości. Od lat korzystam z ich usług i nigdy się nie zawiodłem. Bardzo polecam.",
      author: "- Jan Nowak, Owner of Nowak Co.",
    },
  ];

  // State for the currently active testimonial and fade state with types
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true); // Control fade effect

  // Function to switch testimonials when a button is clicked with explicit typing
  const handleButtonClick = (index: number): void => {
    setFade(false); // Start fading out
    setTimeout(() => {
      setActiveIndex(index); // Update testimonial
      setFade(true); // Fade in
    }, 300); // Sync with the fade-out duration
  };

  return (
    <div className="flex justify-center items-center pt-16 pb-16 pl-11 md:pl-0">
      <div className="relative max-w-xl min-h-[320px] flex flex-col justify-between text-center">
        {/* Testimonial Block */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Quote Mark */}
            <div className="absolute text-5xl font-bold text-black top-[-20px] left-[-30px]">
              “
            </div>
            {/* Testimonial Text with Fade Animation */}
            <div
              className={`transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg leading-relaxed text-gray-800 text-left">
                {testimonials[activeIndex].text}
              </p>
              {/* Author */}
              <p className="text-right mt-4 text-gray-600">
                {testimonials[activeIndex].author}
              </p>
            </div>
          </div>
        </div>

        {/* Lines/Buttons for switching testimonials */}
        <div className="flex space-x-4 mt-6 justify-center">
          {testimonials.map((_, index: number) => (
            <div
              key={index}
              className={`w-20 h-0.5 rounded cursor-pointer ${
                index === activeIndex ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => handleButtonClick(index)} // Switch to corresponding testimonial on click
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
