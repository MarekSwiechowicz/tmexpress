import Link from "next/link";
import React from "react";

const CustomLink = ({ href, title, className }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
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
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      {/* TODO add logo */}
      <div>Logo</div>
      <nav>
        {links.map((link, index) => (
          <CustomLink
            key={index}
            href={link.href}
            title={link.title}
            className=" mr-16 text-lg"
          />
        ))}
      </nav>
    </header>
  );
}
