import React from "react";
import Trendy from "../public/images/Trendy.png";
import Fresh from "../public/images/fresh.png";
import Kacper from "../public/images/kacper.png";
import Styroporstuck from "../public/images/Styro.png";
import dwadwa from "../public/images/dwadwa.png";
import Image from "next/image";

export default function Partners() {
  return (
    <div>
      <div className="bg-white py-14 flex flex-col lg:flex-row lg:justify-between  items-center space-y-6">
        <Image src={Trendy} alt="parking"></Image>
        <Image src={Fresh} alt="parking"></Image>
        <Image src={Kacper} alt="parking"></Image>
        <Image src={Styroporstuck} alt="parking"></Image>
        <Image src={dwadwa} alt="parking"></Image>
      </div>
    </div>
  );
}
