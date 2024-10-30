"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface Testimonial {
  text: string;
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      text: "Od lat TM Express dowozi nasze produkty do klientów w całej Europie. Zawsze na czasi zawsze bezpiecznie. Gorąco polecam!",
    },
    {
      text: "TM Express to nowoczesna firma, prężna i profesjonalna. Korzystam z ich usług od kilku lat i jeszcze nigdy nie zawiedli!",
    },
    {
      text: "TM Express wyróżnia przede wszystkim szybkość, wspaniała jakość i kontakt przez 24h dobę! Zawsze wiesz, gdzie znajduje się twój ładunek. Polecam!",
    },
    { text: "Nowoczesna flota, uprzejmy personel i dostawa zawsze na czas!" },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  const handleButtonClick = (index: number): void => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    handleButtonClick((activeIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    handleButtonClick(
      (activeIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="flex justify-center items-center pt-16 pb-16 pl-11 md:pl-0 pr-4"
    >
      <div className="relative max-w-xl min-h-[360px] flex flex-col justify-between text-center">
        {/* Testimonial Block */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Testimonial Text with Fade Animation */}
            <div
              className={`transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg leading-relaxed text-gray-800 text-left">
                {testimonials[activeIndex].text}
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
              onClick={() => handleButtonClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
