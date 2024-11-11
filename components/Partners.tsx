import React from "react";
import Trendy from "../public/images/Trendy.png";
import Fresh from "../public/images/fresh.png";
import Kacper from "../public/images/kacper.png";
import Styroporstuck from "../public/images/Styro.png";
import dwadwa from "../public/images/dwadwa.png";
import Image from "next/image";

export default function Partners() {
  return (
    <div
      id="section3"
      className="scroll-mt-24 lg:scroll-mt-32 md:px-12 lg:px-36"
    >
      <div className="bg-white py-14 flex flex-col md:flex-row justify-between items-center space-y-6 ">
        <Image className="w-16 lg:w-28 " src={Trendy} alt="parking"></Image>
        <Image
          className="w-32 lg:w-56 items-center justify-center"
          src={Fresh}
          alt="parking"
        ></Image>
        <Image
          className="w-28 lg:w-44"
          src={Styroporstuck}
          alt="parking"
        ></Image>
        <Image src={Kacper} alt="parking"></Image>
        <Image src={dwadwa} alt="parking"></Image>
      </div>
    </div>
  );
}
