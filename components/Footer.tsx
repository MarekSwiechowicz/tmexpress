import Image from "next/image";
import React from "react";
import Logo from "../public/images/LogoWhite.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-screen-lg mx-auto">
        <div className="py-4 w-24">
          <Image src={Logo} alt="logo" />
        </div>
        {/* Email subscription section */}
        <div className="mb-10">
          <p className="text-sm mb-4">
            Aby otrzymać ofertę w formacie pdf podaj adres e-mail
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Wpisz e-mail"
              className="p-2 w-full max-w-xs bg-gray-800 text-white rounded-l-lg focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-lg">
              →
            </button>
          </div>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                O nas
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Oferta
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Partnerzy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kontakt
              </a>
            </li>
          </ul>

          {/* Contact information */}
          <div className="space-y-2 text-gray-400">
            <p>TM Express</p>
            <p>NIP 6423205008</p>
            <p>ul. Chalotta 6 lok. 3</p>
            <p>44-200 Rybnik</p>
          </div>

          {/* Contact numbers */}
          <div className="space-y-2 text-gray-400">
            <p>tel. 530 995 026 Tomasz Bąk</p>
            <p>tel. 693 409 630 Mikołaj Owczarek</p>
            <p>
              <a
                href="mailto:tmtransport@gmail.com"
                className="hover:underline"
              >
                tmtransport@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white mt-10 pt-4 text-sm text-center">
          <p>copyrights 2024 © tmexpress</p>
        </div>
      </div>
    </footer>
  );
}
