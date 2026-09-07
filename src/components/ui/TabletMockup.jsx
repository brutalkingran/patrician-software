const TabletMockup = ({ children }) => {
  return (
    <div className="relative mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl flex flex-col items-center select-none">
      {/* CUERPO PRINCIPAL DE LA TABLET (HORIZONTAL) */}
      <div className="relative w-full aspect-[16/10] bg-gray-950 rounded-[2rem] p-3 sm:p-4 border-4 border-gray-800/90 shadow-2xl">

        {/* BOTÓN FÍSICO SUPERIOR (POWER) */}
        <div className="w-10 h-0.75 bg-gray-700 absolute -top-1 right-12 rounded-t-sm" />

        {/* CÁMARA FRONTAL (Ubicada en el borde horizontal superior) */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
          <div className="w-2 h-2 bg-gray-900 rounded-full border border-gray-700/60 flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-blue-500/80 rounded-full" />
          </div>
        </div>

        {/* PANTALLA INTERNA (CONTENEDOR DE CHILDREN) */}
        <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden bg-slate-900 z-10 border border-slate-800/50">
          {children}
        </div>
      </div>

      {/* SOMBRA INFERIOR */}
      <div className="w-[90%] h-3 bg-black/50 blur-md rounded-full -mt-1 pointer-events-none" />
    </div>
  );
};

export default TabletMockup;