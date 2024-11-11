import Image from "next/image";
import Road from "../public/images/Road.png";
import ArrowOrder from "../public/images/arrowOrder.svg";

export default function Onas() {
  return (
    <div className="px-4 md:px-9 lg:px-36">
      <div className="bg-[#FFED00] text-black text-left flex relative">
        {/* Text Content */}
        <div className="md:flex-[0.45] pt-16 xl:pt-40 pb-16 lg:pb-32 xl:pb-60 pl-4 lg:pl-12">
          <p className="text-5xl block">TM Express.</p>
          <p className="text-5xl mb-2 block xl:inline">Na czas.</p>
          <p className="text-5xl mb-2 block xl:inline">Wszędzie.</p>

          <hr className="border-black my-4 w-[80%]" />

          <p className="mb-6 text-xl xl:pr-36">
            Pomagamy naszym klientom uzyskać i świadczyć niezawodne usługi
            transportowe.
          </p>

          <a
            href="#section4"
            className="inline-flex items-center bg-white text-black py-2 px-4 font-medium hover:bg-gray-100 h-12 text-lg"
          >
            Zamów wysyłkę
            <Image src={ArrowOrder} alt="road" className="ml-12" />
          </a>
        </div>

        {/* Image Content */}
        <div className="relative hidden md:flex md:flex-[0.55]">
          <div className="absolute inset-0 pt-24" style={{ right: "-30px" }}>
            <Image src={Road} alt="road" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
