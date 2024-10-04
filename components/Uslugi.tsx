"use client";
import Image from "next/image";
import React, { useState } from "react";
import Box from "../public/images/Box.png";
import PlusButton from "./PlusButton";

export default function Uslugi() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full lg:flex bg-customGray pl-4 pr-4 lg:pl-36 pt-14 lg:pt-16">
      <div className=" lg:flex-[0.2] text-5xl pb-8 font-bold"> Usługi</div>
      <div className=" lg:flex-[0.8]  ">
        <div className="h-0.25 bg-black w-full"></div>
        <div className="flex">
          <div className="flex flex-col">
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
        <div className="h-0.25 bg-black w-full"></div>
        <div className="h-0.25 bg-black w-full"></div>
        <div className="h-0.25 bg-black w-full"></div>
        <div className="h-0.25 bg-black w-full"></div>
      </div>
    </div>
  );
}
