import React from "react";
import Image from "next/image";
import Logo from "../public/images/LogoWhite.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white lg:pt-20 pt-14 pb-14">
      <div className="px-4 lg:px-36 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section */}
          <div className="md:col-span-1">
            <div className="py-4 w-24">
              <Image src={Logo} alt="logo" />
            </div>
            <p>Aby otrzymać ofertę w formacie pdf podaj adres e-mail</p>
            <form className="mt-4 flex">
              <input
                type="email"
                className="bg-white text-black px-4 py-2 rounded-l outline-none"
                placeholder="Wpisz e-mail..."
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-r"
              >
                →
              </button>
            </form>
          </div>
          <div className="col-span-1"></div>

          {/* Center Section */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#about">O nas</a>
              </li>
              <li>
                <a href="#offer">Oferta</a>
              </li>
              <li>
                <a href="#partners">Partnerzy</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-gray-400">
            <h3 className="font-bold">TM Express</h3>
            <p>NIP 6423205008</p>
            <p>ul. Chalotta 6 lok. 3</p>
            <p>44-200 Rybnik</p>
            <p className="mt-4">
              tel. 530 995 026 Tomasz Bąk
              <br />
              tel. 693 409 630 Mikołaj Owczarek
            </p>
            <p className="mt-4">tmtransport@gmail.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-white pt-4 text-sm">
          <p>copyrights 2024 © tmexpress</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
