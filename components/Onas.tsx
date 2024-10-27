import Image from "next/image";
import Road from "../public/images/Road.png";

export default function Onas() {
  return (
    <div className="lg:px-36 px-4 ">
      <div className="bg-[#FFED00] text-black text-left flex relative">
        {/* Text Content */}
        <div className="lg:flex-[0.45] pt-16 lg:pt-32 pb-16 lg:pb-32 pl-4 lg:pl-12">
          <p className="text-5xl block">TM Express.</p>
          <p className="text-5xl mb-2 block md:inline">Na czas.</p>
          <p className="text-5xl mb-2 block md:inline">Wszędzie.</p>

          <hr className="border-black my-4 w-[80%]" />

          <p className="mb-6 text-xl lg:pr-36">
            Pomagamy naszym klientom uzyskać i świadczyć niezawodne usługi
            transportowe.
          </p>

          <a
            href="#"
            className="inline-flex items-center bg-white text-black py-2 px-4 font-semibold  hover:bg-gray-100"
          >
            Zamów wysyłkę
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 12H3.75m13.5 0l-4.5-4.5m4.5 4.5l-4.5 4.5"
              />
            </svg>
          </a>
        </div>

        {/* Image Content */}
        <div className="relative hidden lg:flex lg:flex-[0.55]">
          <div className="absolute inset-0 pt-24 ">
            <Image src={Road} alt="road" className=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
