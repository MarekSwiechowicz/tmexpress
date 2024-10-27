"use client";
import React, { useState } from "react";
import Logo from "../../public/images/Logo.png";
import Image from "next/image";
import HamburgerButton from "../HamburgerButton";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className }) => {
  return (
    <Link href={href} className={`${className} relative group hidden lg:flex`}>
      {title}

      <span
        className="h-[1px] inline-block w-0
      absolute bg-black left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300 "
      ></span>
    </Link>
  );
};

export default function Navbar() {
  const links = [
    { href: "#section1", title: "O nas" },
    { href: "#section2", title: "Usługi" },
    { href: "#section3", title: "Partnerzy" },
    { href: "#section4", title: "Kontakt" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full font-medium flex items-center justify-between pt-9 lg:pt-14 pb-5">
        <div className="flex-[0.3]">
          <div className="py-4 w-24">
            <Image src={Logo} alt="logo" />
          </div>
        </div>

        <div className="flex-[0.7] flex items-center justify-end lg:justify-between">
          {links.map((link, index) => (
            <CustomLink key={index} href={link.href} title={link.title} />
          ))}
          <a
            href="tel:+48530995026"
            className="text-lg font-normal pr-7 lg:pr-0"
          >
            +48 530 995 026
          </a>
          <HamburgerButton isOpen={isOpen} handleClick={handleClick} />
        </div>
      </header>

      {/* Conditionally rendering the mobile menu */}
      <section
        id="mobile-menu"
        className={`absolute top-24 right-1 lg-top-28 bg-white w-full text-5xl flex flex-col justify-center transition-all duration-300 z-50  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center py-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-full text-center py-6 hover:opacity-90"
              onClick={() => setIsOpen(false)} // Close the menu after clicking the link
            >
              {link.title}
            </a>
          ))}
        </nav>
      </section>
    </>
  );
}
