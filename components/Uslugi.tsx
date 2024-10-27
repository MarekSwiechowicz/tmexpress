/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Box from "../public/images/Box.svg";
import Shield from "../public/images/shield.svg";
import temperature from "../public/images/temp.svg";

interface PlusButtonProps {
  isOpen: boolean;
  handleClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ isOpen, handleClick }) => {
  return (
    <button
      id="buttonId"
      className="flex flex-col justify-center items-center pt-64 lg:pt-36 pl-11"
      onClick={handleClick}
    >
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.25 w-10 rounded-sm absolute ${
          isOpen ? "opacity-0" : "rotate-90"
        }`}
        style={{ transformOrigin: "center" }}
      ></span>

      {/* Horizontal line */}
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.25 w-10 rounded-sm ${
          isOpen ? "opacity-100" : "opacity-100"
        }`}
      ></span>
    </button>
  );
};

export default function Uslugi() {
  const [openSections, setOpenSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const refs = {
    section1: useRef<HTMLDivElement>(null),
    section2: useRef<HTMLDivElement>(null),
    section3: useRef<HTMLDivElement>(null),
  };

  type SectionKeys = "section1" | "section2" | "section3";

  const handleClick = (section: SectionKeys) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Calculate content height dynamically to transition it smoothly
  const calculateHeight = (
    ref: React.RefObject<HTMLDivElement>,
    isOpen: boolean
  ) => {
    if (ref.current) {
      if (isOpen) {
        ref.current.style.maxHeight = `${ref.current.scrollHeight}px`;
      } else {
        ref.current.style.maxHeight = `0px`;
      }
    }
  };

  useEffect(() => {
    calculateHeight(refs.section1, openSections.section1);
    calculateHeight(refs.section2, openSections.section2);
    calculateHeight(refs.section3, openSections.section3);
  }, [openSections]);

  return (
    <div
      id="section2"
      className="flex flex-col xl:flex-row bg-customGray pl-4 pr-4 lg:pl-36 pt-14 lg:pt-16 lg:pr-36 scroll-mt-24 lg:scroll-mt-32"
    >
      <div className="lg:flex-[0.25] text-5xl pb-8 font-bold">Usługi</div>
      <div className="lg:flex-[0.75]">
        <div className="h-0.25 bg-black w-full"></div>

        {/* Section 1 */}
        <div className="flex">
          <div
            className="flex flex-col lg:flex-row lg:flex-[8] cursor-pointer"
            onClick={() => handleClick("section1")}
          >
            <div className="pt-9 lg:pt-14 pb-9 lg:pb-14 w-40">
              <Image src={Box} alt="Box" />
            </div>
            <div className="lg:pt-16 lg:pl-12 lg:pr-12 pb-8 text-4xl">
              Transport materiałów przemysłowych bez kontroli temperatury
            </div>
          </div>
          <div className="lg:flex-[1]">
            <PlusButton
              isOpen={openSections.section1}
              handleClick={() => handleClick("section1")}
            />
          </div>
        </div>
        <div
          ref={refs.section1}
          className="duration-500 overflow-hidden max-h-0"
        >
          <div className="pb-16 lg:pl-36 lg:pr-48 lg:text-xl">
            Oferujemy profesjonalny transport materiałów przemysłowych, które
            nie wymagają specjalistycznej kontroli temperatury. Nasze usługi
            obejmują przewóz surowców, komponentów oraz gotowych produktów,
            zapewniając ich bezpieczne i terminowe dostarczenie na miejsce
            przeznaczenia. Dzięki nowoczesnej flocie oraz doświadczonemu
            zespołowi, gwarantujemy najwyższy standard obsługi oraz pełne
            dostosowanie do specyficznych wymagań klientów.
          </div>
        </div>
        <div className="h-0.25 bg-black w-full"></div>

        {/* Section 2 */}
        <div className="flex">
          <div
            className="flex flex-col lg:flex-row lg:flex-[8] cursor-pointer"
            onClick={() => handleClick("section2")}
          >
            <div className="pt-9 lg:pt-14 pb-9 lg:pb-14 w-40">
              <Image src={temperature} alt="temperature" />
            </div>
            <div className="lg:pt-16 lg:pl-12 lg:pr-12 pb-8 text-4xl">
              Transport artykułów spożywczych w warunkach kontrolowanej
              temperatury
            </div>
          </div>
          <div className="lg:flex-[1]">
            <PlusButton
              isOpen={openSections.section2}
              handleClick={() => handleClick("section2")}
            />
          </div>
        </div>
        <div
          ref={refs.section2}
          className="duration-500 overflow-hidden max-h-0"
        >
          <div className="pb-16 lg:pl-36 lg:pr-48 lg:text-xl">
            Specjalizujemy się w transporcie artykułów spożywczych wymagających
            utrzymania stałej, kontrolowanej temperatury. Nasze chłodnie i
            izotermy są wyposażone w nowoczesne systemy monitorowania
            temperatury, co zapewnia zachowanie świeżości i jakości przewożonych
            produktów. Oferujemy pełną elastyczność w doborze warunków przewozu,
            dostosowując się do specyficznych wymagań każdego klienta i rodzaju
            transportowanych towarów.
          </div>
        </div>
        <div className="h-0.25 bg-black w-full"></div>

        {/* Section 3 */}
        <div className="flex">
          <div
            className="flex flex-col lg:flex-row lg:flex-[8] cursor-pointer"
            onClick={() => handleClick("section3")}
          >
            <div className="pt-9 lg:pt-14 pb-9 lg:pb-14 w-20">
              <Image src={Shield} alt="Shield" />
            </div>
            <div className="lg:pt-16 lg:pl-12 lg:pr-12 pb-8 text-4xl">
              Transport towarów wrażliwych
            </div>
          </div>
          <div className="lg:flex-[1]">
            <PlusButton
              isOpen={openSections.section3}
              handleClick={() => handleClick("section3")}
            />
          </div>
        </div>
        <div
          ref={refs.section3}
          className="duration-500 overflow-hidden max-h-0"
        >
          <div className="pb-16 lg:pl-36 lg:pr-48 lg:text-xl">
            Przewóz towarów wrażliwych, takich jak elektronika, farmaceutyki czy
            sprzęt medyczny, wymaga szczególnej ostrożności i precyzji. Nasza
            firma posiada doświadczenie oraz odpowiednie zasoby, aby zapewnić
            bezpieczny transport tego rodzaju produktów. Oferujemy indywidualne
            podejście do każdego zlecenia, gwarantując najwyższy poziom ochrony
            oraz monitorowanie przesyłek na każdym etapie transportu.
          </div>
        </div>
        <div className="h-0.25 bg-black w-full"></div>

        <div className="pb-14 lg:pb-20"></div>
      </div>
    </div>
  );
}
