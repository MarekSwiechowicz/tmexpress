/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    companyType: "Firma",
    companyName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(formData);
  };

  const [selected, setSelected] = useState("Firma");

  return (
    <div className="flex justify-center items-center pb-44">
      <div className="w-full lg:p-12 px-4 py-16 lg:grid lg:grid-cols-2 lg:gap-8 bg-gray-200">
        {/* Left side - Contact details */}
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold mb-4">Skontaktuj się z nami</h2>
          <div className="hidden lg:block">
            <div className="h-0.25 bg-black w-1/4"></div>

            <div className="mb-2 pt-4 text-lg">
              <p>TM Express</p>
              <p>NIP: 6423066058</p>
              <p>ul. Chłodnicza 6 lok. 3</p>
              <p>44-200 Rybnik</p>
            </div>
            <div className="mb-4 text-lg pt-14">
              <p>Tel: 604 956 029 Tomasz Bój</p>
              <p>Tel: 693 498 460 Maciej Owczarek</p>
              <p className="pt-4">Email: tmexpress.tomaszboj@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right side - Contact form */}

        <form onSubmit={handleSubmit} className="space-y-4 pt-8">
          {/* Company or Private */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Zaznacz odpowiednio
            </label>
            <div className="border border-black p-1 flex">
              <button
                onClick={() => setSelected("Firma")}
                className={`w-1/2 p-2 text-center ${
                  selected === "Firma"
                    ? "bg-gray-300 text-black font-bold"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Firma
              </button>
              <button
                onClick={() => setSelected("Osoba prywatna")}
                className={`w-1/2 p-2 text-center ${
                  selected === "Osoba prywatna"
                    ? "bg-gray-300 text-black font-bold"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Osoba prywatna
              </button>
            </div>
          </div>
          {/* Company Name */}
          <div>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Nazwa firmy"
              className="w-full p-2 border border-black bg-gray-200 "
            />
          </div>

          {/* Email */}

          <div>
            <span>Email:</span>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Adres e-mail"
              className="w-full p-2 border border-black bg-gray-200"
            />
          </div>

          {/* Message */}
          <div>
            <span>Napisz Wiadomość:</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Napisz wiadomość..."
              className="w-full p-2 border border-black bg-gray-200"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button className="bg-black text-white font-medium px-4 py-2 rounded-md flex items-center space-x-2">
              <span className="pr-36">Wyślij</span>
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 12H3.75m13.5 0l-4.5-4.5m4.5 4.5l-4.5 4.5"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
