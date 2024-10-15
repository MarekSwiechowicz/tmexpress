/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Box from "../public/images/Box.png";
import Shield from "../public/images/Shield.png";
import temperature from "../public/images/temperature.png";
import PlusButton from "./PlusButton";

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
    <div className="w-full lg:flex bg-customGray pl-4 pr-4 lg:pl-36 pt-14 lg:pt-16 lg:pr-36">
      <div className="lg:flex-[0.2] text-5xl pb-8 font-bold">Usługi</div>
      <div className="lg:flex-[0.8]">
        <div className="h-0.25 bg-black w-full"></div>

        {/* Section 1 */}
        <div className="flex pb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="pt-9 lg:pt-24 pb-9 lg:pb-24">
              <Image src={Box} alt="Box" />
            </div>
            <div className="lg:pt-16 lg:pl-12 lg:pr-12 pb-8 text-4xl">
              Transport materiałów przemysłowych bez kontroli temperatury
            </div>
          </div>
          <div className="">
            <PlusButton
              isOpen={openSections.section1}
              handleClick={() => handleClick("section1")}
            />
          </div>
        </div>
        <div
          ref={refs.section1}
          className="transition-max-height duration-500 ease-in-out overflow-hidden max-h-0"
        >
          <div className="pb-16 lg:pb-8">
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
        <div className="flex pb-8">
          <div className="flex flex-col lg:flex-row">
            <Image
              src={temperature}
              alt="Temperature Control"
              className="pt-9 lg:pt-44 pb-9 lg:pb-24"
            />
            <div className="lg:pt-16 pb-8 text-3xl">
              Transport artykułów spożywczych w warunkach kontrolowanej
              temperatury
            </div>
          </div>
          <PlusButton
            isOpen={openSections.section2}
            handleClick={() => handleClick("section2")}
          />
        </div>
        <div
          ref={refs.section2}
          className="transition-max-height duration-500 ease-in-out overflow-hidden max-h-0"
        >
          <div className="pb-16 lg:pb-8">
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
        <div className="flex pb-8">
          <div className="flex flex-col lg:flex-row">
            <Image
              src={Shield}
              alt="Sensitive Goods"
              className="pt-9 lg:pt-44 pb-9 lg:pb-24"
            />
            <div className="lg:pt-16 pb-8 text-3xl">
              Transport towarów wrażliwych
            </div>
          </div>
          <PlusButton
            isOpen={openSections.section3}
            handleClick={() => handleClick("section3")}
          />
        </div>
        <div
          ref={refs.section3}
          className="transition-max-height duration-500 ease-in-out overflow-hidden max-h-0"
        >
          <div className="pb-16 lg:pb-8">
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
