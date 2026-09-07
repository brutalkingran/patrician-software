const PhoneMockup = ({ children }) => {
  return (
    <div className="relative mx-auto border-gray-950 bg-gray-950 border-10 rounded-[2.7rem] h-125 w-61.25 sm:h-140 sm:w-68.75 shadow-2xl">
      {/* Botones físicos */}
      <div className="w-0.75 h-8 bg-gray-800 absolute -left-3.25 top-18 rounded-l-lg" />
      <div className="w-0.75 h-11.5 bg-gray-800 absolute -left-3.25 top-31 rounded-l-lg" />
      <div className="w-0.75 h-11.5 bg-gray-800 absolute -left-3.25 top-44.5 rounded-l-lg" />
      <div className="w-0.75 h-14 bg-gray-800 absolute -right-3.25 top-35.5 rounded-r-lg" />

      {/* Notch */}
      <div className="absolute top-0 inset-x-0 flex justify-center z-20">
        <div className="absolute top-3 w-24 h-4 bg-black rounded-full shadow-inner" />
      </div>

      {/* Pantalla interna */}
      <div className="rounded-4xl overflow-hidden w-full h-full bg-blue-950 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PhoneMockup;