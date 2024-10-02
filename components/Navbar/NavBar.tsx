"use client";
import React, { useState } from "react";
import Logo from "../../public/images/Logo.png";
import Image from "next/image";

// interface CustomLinkProps {
//   href: string;
//   title: string;
//   className?: string;
// }

// const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
//   return (
//     <Link href={href} className={`${className} relative group`}>
//       {title}

//       <span
//         className="h-[1px] inline-block w-0
//       absolute bg-black left-0 -bottom-0.5
//        group-hover:w-full transition-[width] ease duration-300 "
//       ></span>
//     </Link>
//   );
// };

export default function Navbar() {
  // const links = [
  //   { href: "#section1", title: "O nas" },
  //   { href: "#section2", title: "Usługi" },
  //   { href: "#section3", title: "Partnerzy" },
  //   { href: "#section4", title: "Kontakt" },
  //   { href: "#section5", title: "+48 530 995 026" },
  // ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full px-4 lg:px-[146px] font-medium flex items-center justify-between">
        <div className="py-4 w-24">
          <Image src={Logo} alt="logo" />
        </div>
        <span className="text-lg font-normal">+48 530 995 026</span>
        <button
          id="buttonId"
          className="flex lg:hidden flex-col justify-center items-center"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-10 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-10
            rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-10 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </header>

      {/* Conditionally rendering the mobile menu */}
      <section
        id="mobile-menu"
        className={`absolute top-12 bg-white w-full text-5xl flex flex-col justify-center transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col min-h-screen items-center py-8">
          <a href="#about" className="w-full text-center py-6 hover:opacity-90">
            O nas
          </a>
          <a
            href="#Usługi"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Usługi
          </a>
          <a
            href="#Partners"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Partnerzy
          </a>
          <a
            href="#contackt"
            className="w-full text-center py-6 hover:opacity-90"
          >
            Kontakt
          </a>
        </nav>
      </section>
    </>
  );
}
