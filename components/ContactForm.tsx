/* eslint-disable */
"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

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
        "service_cxow07d", // Your EmailJS service ID
        "template_eydy4r8", // Your EmailJS template ID
        formData,
        "pCsE7952Dep3pNzqh" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true); // Show the modal on success
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
      className="flex justify-center items-center  pb-24 lg:pb-44"
    >
      <div className="w-full lg:p-12 px-4 py-16 lg:grid lg:grid-cols-2 lg:gap-8 bg-gray-200">
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

        <form onSubmit={handleSubmit} className="space-y-4 pt-8">
          <div>
            <label className="block text-sm font-medium mb-2">
              Zaznacz odpowiednio
            </label>
            <div className="border border-black p-1 flex">
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, companyType: "Firma" })
                }
                className={`w-1/2 p-2 text-center ${
                  formData.companyType === "Firma"
                    ? "bg-gray-300 text-black font-bold"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Firma
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, companyType: "Osoba prywatna" })
                }
                className={`w-1/2 p-2 text-center ${
                  formData.companyType === "Osoba prywatna"
                    ? "bg-gray-300 text-black font-bold"
                    : "bg-gray-200 text-gray-700"
                }`}
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
              placeholder="Nazwa firmy"
              className="w-full p-2 border border-black bg-gray-200"
              required={formData.companyType === "Firma"} // Make the field required only if "Firma" is selected
            />
          </div>

          <div>
            <span>Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Adres e-mail"
              className="w-full p-2 border border-black bg-gray-200"
              required
            />
          </div>

          <div>
            <span>Napisz Wiadomość:</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Napisz wiadomość..."
              className="w-full p-2 border border-black bg-gray-200"
              rows={4}
              required
            />
          </div>

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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Twoja wiadomość została wysłana
            </h2>
            <p>Nasz konsultant odpowie, jak najszybciej to możliwe.</p>
            <button
              className="mt-6 px-4 py-2 bg-black text-white rounded"
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
