"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import Logo from "../public/images/LogoWhite.png";
import ArrowOrder from "../public/images/arrowOrder.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      email: email,
    };

    emailjs
      .send(
        "service_cxow07d",
        "template_eydy4r8",
        templateParams,
        "pCsE7952Dep3pNzqh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsModalOpen(true);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );

    setEmail("");
  };

  return (
    <>
      <footer className="bg-black text-white lg:pt-20 pt-14 pb-14">
        <div className="px-4 lg:px-36 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Section */}
            <div className="md:col-span-1">
              <div className="py-4 w-24">
                <Image src={Logo} alt="logo" />
              </div>
              <p>Aby otrzymać ofertę w formacie pdf podaj adres e-mail</p>
              <form className="mt-4 flex" onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  className="bg-white text-black pl-4 py-2 "
                  placeholder="Wpisz e-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="bg-white text-black px-6 ">
                  <Image src={ArrowOrder} alt="road" className="ml-12" />
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
              <p>NIP 6423209101</p>
              <p>ul. Chalotta 6 lok. 3</p>
              <p>44-200 Rybnik</p>
              <p className="mt-4">
                tel. 530 995 026 Tomasz Bój
                <br />
                tel. 693 409 630 Maciej Owczarek
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 shadow-lg relative w-96 text-center">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              ✖️
            </button>
            <h2 className="text-xl font-bold mb-4">
              Twoja wiadomość została wysłana
            </h2>
            <p className="mb-6">
              Nasz konsultant odpowie, jak najszybciej to możliwe.
            </p>
            <button
              className="bg-black text-white px-4 py-2"
              onClick={() => setIsModalOpen(false)}
            >
              Wróć
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
