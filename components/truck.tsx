import React from "react";
import Image from "next/image";
import Truck from "../public/images/Car.png";

export default function truck() {
  return (
    <div>
      <Image src={Truck} alt="truck"></Image>
      <div className="bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-4">
          Nadrzędnym celem działalności firmy jest
        </h2>
        <p className="text-base mb-4">
          zapewnienie naszym klientom najwyższej jakości usług w zakresie
          transportu krajowego i zagranicznego.
        </p>
        <p className="text-base mb-4">
          Obsługujemy od lat klientów indywidualnych, jak i małe i duże
          przedsiębiorstwa. Dostosowujemy się do potrzeb naszych klientów,
          jesteśmy elastyczni, nie boimy się wyzwań.
        </p>
        <p className="text-base">
          Wyróżnia nas rzetelność, terminowość i profesjonalizm świadczonych
          usług.
        </p>
      </div>
    </div>
  );
}
