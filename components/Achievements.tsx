import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {/* 2 mln przejechanych kilometrów */}
          <div className="border-r border-black pr-4 sm:pr-6">
            <h3 className="text-3xl font-bold text-black">2 mln</h3>
            <p className="text-gray-600">przejechanych kilometrów</p>
          </div>

          {/* 10 lat doświadczenia zawodowego */}
          <div className="pl-4 border-l border-black sm:border-r sm:pl-0 sm:pr-6">
            <h3 className="text-3xl font-bold text-black">10 lat</h3>
            <p className="text-gray-600">doświadczenia zawodowego</p>
          </div>

          {/* 260 tys wysłanych ładunków */}
          <div className="border-r border-black pr-4 sm:pr-6">
            <h3 className="text-3xl font-bold text-black">260 tys</h3>
            <p className="text-gray-600">wysłanych ładunków</p>
          </div>

          {/* 150+ zadowolonych klientów */}
          <div className="pl-4 border-l border-black sm:pl-0">
            <h3 className="text-3xl font-bold text-black">150+</h3>
            <p className="text-gray-600">zadowolonych klientów</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
