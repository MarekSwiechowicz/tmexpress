import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-white py-24 px-4 md:px-9 lg:px-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {/* 2 mln przejechanych kilometrów */}
          <div className="pl-4 border-black lg:px-16">
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black ">
              2 mln
            </h3>
            <p className="text-lg">przejechanych kilometrów</p>
          </div>

          {/* 10 lat doświadczenia zawodowego */}
          <div className="pl-4 border-l border-black sm:border-r lg:px-16">
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
              10 lat
            </h3>
            <p className="text-lg">doświadczenia zawodowego</p>
          </div>

          {/* 260 tys wysłanych ładunków */}
          <div className=" pl-4 border-black pr-4 lg:px-12">
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
              260 tys
            </h3>
            <p className="text-lg">wysłanych ładunków</p>
          </div>

          {/* 150+ zadowolonych klientów */}
          <div className="pl-4 border-l border-black lg:px-16">
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-black">
              150+
            </h3>
            <p className="text-lg">zadowolonych klientów</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
