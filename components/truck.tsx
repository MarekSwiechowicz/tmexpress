import React from "react";
import Image from "next/image";
import Truck from "../public/images/Car.png";
import TruckSmall from "../public/images/CarSmall.png";

export default function truck() {
  return (
    <div
      id="section1"
      className="flex flex-col lg:flex-row-reverse scroll-mt-24 lg:scroll-mt-32"
    >
      <div className="w-full lg:w-1/2">
        <Image
          src={Truck}
          alt="Company truck delivering goods"
          className="w-full h-auto lg:hidden xl:block"
        />

        {/* Image for screens between lg and xl */}
        <Image
          src={TruckSmall}
          alt="Different company truck delivering goods"
          className="w-full h-auto hidden lg:block xl:hidden"
        />
      </div>
      <div className="bg-black text-white  w-full lg:w-1/2 flex flex-col justify-center py-14 pl-4 pr-7 lg:pl-48 lg:pr-24">
        <h1 className="text-3xl font-bold mb-4">
          Nadrzędnym celem działalności firmy jest
        </h1>
        <p className="text-lg mb-4">
          zapewnienie naszym klientom najwyższej jakości usług w zakresie
          transportu krajowego i zagranicznego.
        </p>
        <p className="text-lg mb-4">
          Obsługujemy od lat klientów indywidualnych, jak i małe i duże
          przedsiębiorstwa. Dostosowujemy się do potrzeb naszych klientów,
          jesteśmy elastyczni, nie boimy się wyzwań.
        </p>
        <p className="text-lg">
          Wyróżnia nas rzetelność, terminowość i profesjonalizm świadczonych
          usług.
        </p>
      </div>
    </div>
  );
}
