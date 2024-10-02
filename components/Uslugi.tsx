import React from "react";

export default function Uslugi() {
  return (
    <div className="bg-white p-6">
      <h2 className="text-xl font-bold mb-6">Usługi</h2>

      {/* Service 1 */}
      <div className="border-b border-gray-300 flex items-center py-4">
        <div className="w-12 h-12 mr-4">
          {/* Icon 1 (replace with actual icon or image) */}
          <img
            src="/icons/industrial-materials.svg"
            alt="Industrial materials icon"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            Transport materiałów przemysłowych bez kontroli temperatury
          </h3>
        </div>
        <div className="text-gray-500 text-2xl">+</div>
      </div>

      {/* Service 2 */}
      <div className="border-b border-gray-300 flex items-center py-4">
        <div className="w-12 h-12 mr-4">
          {/* Icon 2 (replace with actual icon or image) */}
          <img
            src="/icons/food-temperature.svg"
            alt="Controlled temperature icon"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            Transport artykułów spożywczych w warunkach kontrolowanej
            temperatury
          </h3>
        </div>
        <div className="text-gray-500 text-2xl">+</div>
      </div>

      {/* Service 3 */}
      <div className="border-b border-gray-300 flex items-center py-4">
        <div className="w-12 h-12 mr-4">
          {/* Icon 3 (replace with actual icon or image) */}
          <img src="/icons/sensitive-goods.svg" alt="Sensitive goods icon" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            Transport towarów wrażliwych
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Przewóz towarów wrażliwych, takich jak elektronika, farmaceutyki i
            sztuka, wymagających szczególnej ostrożności i opieki.
          </p>
        </div>
      </div>
    </div>
  );
}
