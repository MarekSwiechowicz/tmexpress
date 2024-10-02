import React from "react";

export default function Contact() {
  return (
    <div className="bg-[#EFEFEF] p-6 max-w-md mx-auto border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Skontaktuj się z nami</h2>

      {/* Form */}
      <form className="space-y-4">
        {/* Radio Buttons for Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zaznacz odpowiednio
          </label>
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <label className="flex-1 p-2 text-center border-r border-gray-300 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="firma"
                className="hidden"
              />
              <span className="text-sm">Firma</span>
            </label>
            <label className="flex-1 p-2 text-center cursor-pointer">
              <input
                type="radio"
                name="type"
                value="osoba-prywatna"
                className="hidden"
              />
              <span className="text-sm">Osoba prywatna</span>
            </label>
          </div>
        </div>

        {/* Company Name Field */}
        <div>
          <input
            type="text"
            name="company"
            placeholder="Nazwa firmy"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-MAIL
          </label>
          <input
            type="email"
            name="email"
            placeholder="Adres e-mail"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            WIADOMOŚĆ
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Napisz wiadomość..."
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors"
          >
            <span>Wyślij</span>
            <span className="ml-2">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
