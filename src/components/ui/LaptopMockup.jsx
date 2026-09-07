const LaptopMockup = ({ children }) => {
  return (
    <div className="relative mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl flex flex-col items-center select-none">
      {/* TAPA / MARCO DE LA PANTALLA */}
      <div className="relative w-full aspect-16/10 bg-gray-950 rounded-t-2xl p-2.5 sm:p-3.5 shadow-2xl border border-gray-800">
        {/* WEBCAM SUPERIOR */}
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full border border-gray-700/60 flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-blue-500/80 rounded-full" />
          </div>
        </div>

        {/* PANTALLA INTERNA (CONTENEDOR DE CHILDREN) */}
        <div className="relative w-full h-full rounded-lg overflow-hidden bg-blue-950 z-10 border border-gray-800/40">
          {children}
        </div>
      </div>

      {/* BISAGRA CENTRAL */}
      <div className="w-[18%] h-1 sm:h-1.5 bg-gray-800 rounded-b-xs z-10" />

      {/* BASE DE LA NOTEBOOK */}
      <div className="relative w-[110%] h-3.5 sm:h-4.5 bg-linear-to-b from-gray-700 via-gray-800 to-gray-900 rounded-b-xl shadow-2xl flex items-start justify-center border-t border-gray-600/30">
        {/* MUESCA PARA ABRIR LA TAPA */}
        <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-gray-950 rounded-b-md" />
      </div>

      {/* SOMBRA INFERIOR DE BASE */}
      <div className="w-[102%] h-3 bg-black/40 blur-md rounded-full -mt-1 pointer-events-none" />
    </div>
  );
};

export default LaptopMockup;