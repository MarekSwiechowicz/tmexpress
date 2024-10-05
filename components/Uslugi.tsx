"use client";
import Image from "next/image";
import React, { useState } from "react";
import Box from "../public/images/Box.png";
import Shield from "../public/images/Shield.png";
import temperature from "../public/images/temperature.png";
import PlusButton from "./PlusButton";

export default function Uslugi() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full lg:flex bg-customGray pl-4 pr-4 lg:pl-36 pt-14 lg:pt-16">
      <div className=" lg:flex-[0.2] text-5xl pb-8 font-bold"> Usługi</div>
      <div className=" lg:flex-[0.8] ">
        <div className="h-0.25 bg-black w-full"></div>
        <div className="flex pb-8">
          <div className="flex flex-col lg:flex-row">
            <Image
              src={Box}
              alt="Box"
              className="pt-9 lg:pt-44 pb-9 lg:pb-24"
            ></Image>
            <div className="lg:pt-16 pb-8 text-3xl">
              Transport materiałów przemysłowych bez kontroli temperatury
            </div>
          </div>
          <PlusButton isOpen={isOpen} handleClick={handleClick}></PlusButton>
        </div>
        <div className={` pb-16 lg:pb-8 ${isOpen ? "opacity-100" : "hidden"}`}>
          Oferujemy profesjonalny transport materiałów przemysłowych, które nie
          wymagają specjalistycznej kontroli temperatury. Nasze usługi obejmują
          przewóz surowców, komponentów oraz gotowych produktów, zapewniając ich
          bezpieczne i terminowe dostarczenie na miejsce przeznaczenia. Dzięki
          nowoczesnej flocie oraz doświadczonemu zespołowi, gwarantujemy
          najwyższy standard obsługi oraz pełne dostosowanie do specyficznych
          wymagań klientów.
        </div>
        <div className="h-0.25 bg-black w-full"></div>
        <div className="flex pb-8">
          <div className="flex flex-col lg:flex-row">
            <Image
              src={temperature}
              alt="Box"
              className="pt-9 lg:pt-44 pb-9 lg:pb-24"
            ></Image>
            <div className="lg:pt-16 pb-8 text-3xl">
              Transport artykułów spożywczych w warunkach kontrolowanej
              temperatury
            </div>
          </div>
          <PlusButton isOpen={isOpen} handleClick={handleClick}></PlusButton>
        </div>
        <div className={` pb-16 lg:pb-8 ${isOpen ? "opacity-100" : "hidden"}`}>
          Specjalizujemy się w transporcie artykułów spożywczych wymagających
          utrzymania stałej, kontrolowanej temperatury. Nasze chłodnie i
          izotermy są wyposażone w nowoczesne systemy monitorowania temperatury,
          co zapewnia zachowanie świeżości i jakości przewożonych produktów.
          Oferujemy pełną elastyczność w doborze warunków przewozu, dostosowując
          się do specyficznych wymagań każdego klienta i rodzaju
          transportowanych towarów.
        </div>
        <div className="h-0.25 bg-black w-full"></div>
        <div className="flex pb-8">
          <div className="flex flex-col lg:flex-row">
            <Image
              src={Shield}
              alt="Box"
              className="pt-9 lg:pt-44 pb-9 lg:pb-24"
            ></Image>
            <div className="lg:pt-16 pb-8 text-3xl">
              Transport towarów wrażliwych
            </div>
          </div>
          <PlusButton isOpen={isOpen} handleClick={handleClick}></PlusButton>
        </div>
        <div className={` pb-16 lg:pb-8 ${isOpen ? "opacity-100" : "hidden"}`}>
          Przewóz towarów wrażliwych, takich jak elektronika, farmaceutyki czy
          sprzęt medyczny, wymaga szczególnej ostrożności i precyzji. Nasza
          firma posiada doświadczenie oraz odpowiednie zasoby, aby zapewnić
          bezpieczny transport tego rodzaju produktów. Oferujemy indywidualne
          podejście do każdego zlecenia, gwarantując najwyższy poziom ochrony
          oraz monitorowanie przesyłek na każdym etapie transportu.
        </div>
        <div className="h-0.25 bg-black w-full"></div>
        <div className=" pb-14 lg:pb-20"></div>
      </div>
    </div>
  );
}
