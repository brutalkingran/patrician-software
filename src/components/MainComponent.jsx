import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import MuralAnimado from "./ui/MuralAnimado";
import LogoAnimado from "./ui/LogoAnimado";

const MainComponent = () => {
  return (
    <main className="relative flex flex-col text-center justify-center items-center min-h-screen w-full overflow-hidden">
      {/* MURAL ANIMADO LATERAL */}
      <div className="hidden xl:block">
        <MuralAnimado direction="left-20" />
        <MuralAnimado direction="right-20" />
      </div>

      {/* INICIO - HERO FRAME */}
      <div 
        className="m-2 flex flex-col items-center justify-center gap-4 min-h-[95vh] w-full max-w-4xl px-6 py-12 md:gap-6 border-40 md:border-60" 
        id="borderimg3"
      >
        {/* LOGO */}
        <LogoAnimado />

        {/* TÍTULO Y SUBTÍTULO IMPERIAL */}
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-ps-white uppercase">
            Patrician Software
          </h1>
          <h2 className="text-base md:text-xl font-serif italic max-w-2xl px-4 leading-relaxed">
            Expertos en Desarrollo de Software y Marketing Digital
          </h2>
        </div>

        {/* SEPARADOR Y ETIQUETA DE CONTACTO */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <p className="font-serif text-xs md:text-sm uppercase tracking-[0.3em] text-ps-white font-normal">
            Contáctenos
          </p>
        </div>

        {/* CAJA DE REDES SOCIALES */}
        <div className="relative flex items-center justify-center gap-6 px-8 py-3 bg-ps-blue/90 border-2 border-ps-white shadow-2xl transition-all duration-300 before:content-[''] before:absolute before:inset-1 before:border before:border-ps-white/40 before:pointer-events-none">
          
          {/* WhatsApp */}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Contactar a Patrician Software por WhatsApp" 
            href="https://wa.me"
            className="relative z-10 flex items-center justify-center w-11 h-11 text-ps-white transition-all duration-300 hover:scale-115 hover:text-ps-lblue" 
          >
            <AiOutlineWhatsApp className="w-7 h-7 md:w-8 md:h-8" />
          </a>

          {/* Instagram */}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visitar a Patrician Software en Instagram" 
            href="https://instagram.com"
            className="relative z-10 flex items-center justify-center w-11 h-11 text-ps-white transition-all duration-300 hover:scale-115 hover:text-ps-lblue" 
          >
            <FaInstagram className="w-7 h-7 md:w-8 md:h-8" />
          </a>

          {/* E-Mail */}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Contactar a Patrician Software por e-Mail" 
            href="mailto:services@patrician-software.com"
            className="relative z-10 flex items-center justify-center w-11 h-11 text-ps-white transition-all duration-300 hover:scale-115 hover:text-ps-lblue" 
          >
            <AiOutlineMail className="w-7 h-7 md:w-8 md:h-8" />
          </a>

        </div>

      </div>
    </main>
  );
};

export default MainComponent;