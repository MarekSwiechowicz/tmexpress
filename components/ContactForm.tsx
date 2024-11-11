/* eslint-disable */
"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import ArrowOrderWhite from "../public/images/ArrowOrderWhite.svg";
import X from "../public/images/X.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    companyType: "Firma",
    companyName: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cxow07d",
        "template_eydy4r8",
        formData,
        "pCsE7952Dep3pNzqh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      id="section4"
      className="flex justify-center items-center pb-24 lg:pb-44 scroll-mt-24 lg:scroll-mt-32 px-4 xl:px-36"
    >
      <div className="w-full lg:p-12 px-4 py-16 lg:grid lg:grid-cols-2 lg:gap-8 bg-gray-200">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold mb-4 xl:pr-40">
            Skontaktuj się z nami
          </h2>
          <div className="hidden lg:block">
            <div className="h-0.25 bg-black w-1/4"></div>
            <div className="mb-2 pt-4 text-lg">
              <p>TM Express</p>
              <p>NIP: 6423066058</p>
              <p>ul. Chłodnicza 6 lok. 3</p>
              <p>44-200 Rybnik</p>
            </div>
            <div className="mb-4 text-lg pt-14">
              <p>Tel: 530 995 026 Tomasz Bąk</p>
              <p>Tel: 693 409 630 Mikołaj Owczarek</p>
              <p className="pt-4">Email: tmexpress.tomaszbak@gmail.com</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-8">
          <div>
            <div className=" text-lg font-medium mb-3">ZAZNACZ ODPOWIEDNIO</div>
            <div className="border border-black p-1 flex">
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, companyType: "Firma" })
                }
                className="p-2 text-center"
                style={{
                  width: "45%",
                  fontSize: "18px",
                  backgroundColor:
                    formData.companyType === "Firma" ? "#D1CFCF" : "#F1F1F1",
                  color:
                    formData.companyType === "Firma" ? "#1A1A1A" : "#1A1A1A",
                }}
              >
                Firma
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, companyType: "Osoba prywatna" })
                }
                className="p-2 text-center"
                style={{
                  width: "55%",
                  fontSize: "18px",
                  backgroundColor:
                    formData.companyType === "Osoba prywatna"
                      ? "#D1CFCF"
                      : "#F1F1F1",
                  color:
                    formData.companyType === "Osoba prywatna"
                      ? "#1A1A1A"
                      : "#1A1A1A",
                }}
              >
                Osoba prywatna
              </button>
            </div>
          </div>

          <div>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder={
                formData.companyType === "Firma"
                  ? "Nazwa firmy"
                  : "Imię i nazwisko"
              }
              className="w-full p-2 border border-black bg-gray-200 rounded-none focus:outline-none mb-3"
              required={formData.companyType === "Firma"}
            />
          </div>

          <div className="text-lg">E-MAIL</div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Adres e-mail"
              className="w-full p-2 border border-black bg-gray-200 rounded-none focus:outline-none mb-2"
              required
            />
          </div>
          <div className="text-lg">WIADOMOŚĆ</div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Napisz wiadomość..."
              className="w-full p-2 border border-black bg-gray-200 rounded-none focus:outline-none"
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end">
            <button className="bg-black text-white font-medium px-4 py-2 flex items-center space-x-2 h-12">
              <span className="pr-36 text-lg">Wyślij</span>
              <Image src={ArrowOrderWhite} alt="arrow"></Image>
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 text-center w-96 h-96 relative">
            <Image
              src={X}
              alt="X"
              className="absolute top-4 right-4 cursor-pointer"
              onClick={closeModal}
            />
            <h2 className="text-4xl font-bold mb-4 pt-10">
              Twoja wiadomość została wysłana
            </h2>
            <p className="text-lg text-customGray">
              Nasz konsultant odpowie, jak najszybciej to możliwe.
            </p>
            <button
              className="mt-6 px-4 py-2 bg-white text-black w-28 h-16 border border-black"
              onClick={closeModal}
            >
              Wróć
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
