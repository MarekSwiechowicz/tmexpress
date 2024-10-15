import React from "react";
import Image from "next/image";
import ParkingMobile from "../public/images/parkingMobile.png";
import ParkingDesktop from "../public/images/ParkingDesktop.png";

export default function ParkingImage() {
  return (
    <>
      <Image src={ParkingMobile} alt="parking" className="sm:hidden"></Image>
      <Image
        src={ParkingDesktop}
        alt="parking"
        className="hidden sm:flex"
      ></Image>
    </>
  );
}
