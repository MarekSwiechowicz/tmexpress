export default function Onas() {
  return (
    <div className="bg-white px-4 py-4">
      <div className="bg-[#FFED00] p-6 text-black text-left">
        <p className="text-4xl mb-2">TM Express.</p>
        <p className="text-4xl mb-2">Na czas.</p>
        <p className="text-4xl mb-2"> Wszędzie.</p>
        <div className="border-t border-black pt-4 mb-6">
          <p className="text-base mb-6">
            Pomagamy naszym klientom uzyskać i świadczyć niezawodne usługi
            transportowe.
          </p>
        </div>
        <a
          href="#"
          className="inline-block bg-white text-black py-2 px-4 font-semibold rounded-md shadow-md hover:bg-gray-100"
        >
          Zamów wysyłkę →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center py-4">
        <div>
          <p className="text-2xl font-bold">2 mln</p>
          <p className="text-sm">przejechanych kilometrów</p>
        </div>
        <div>
          <p className="text-2xl font-bold">10 lat</p>
          <p className="text-sm">doświadczenia zawodowego</p>
        </div>
        <div>
          <p className="text-2xl font-bold">260 tys</p>
          <p className="text-sm">wysłanych ładunków</p>
        </div>
        <div>
          <p className="text-2xl font-bold">150+</p>
          <p className="text-sm">zadowolonych klientów</p>
        </div>
      </div>
    </div>
  );
}
