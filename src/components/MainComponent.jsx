import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import MuralAnimado from "./ui/MuralAnimado";
import LogoAnimado from "./ui/LogoAnimado";

const MainComponent = () => {
  return (
    <main className="flex flex-col text-center justify-center md:items-center md:h-screen">
      {/* MURAL ANIMADO */}
      <div className="hidden xl:block">
        <MuralAnimado direction="left-20" />
        <MuralAnimado direction="right-20" />
      </div>

      {/* INICIO */}
      <div 
        className="m-1 flex flex-col items-center justify-center gap-3 min-h-screen md:min-h-[80vh] md:max-w-[120vh] border-40 md:border-60 md:gap-6 md:min-w-[100vh]" 
        id="borderimg3"
      >
        {/* LOGO */}
        <LogoAnimado />

        {/* TITULOS & SUBTITULO */}
        <h1 className="text-4xl font-serif font-light md:text-6xl">Patrician Software</h1>
        <h2 className="text-lg italic font-extralight mx-6 md:text-2xl md:max-w-[70%]">
          Expertos en Desarrollo de Software y Marketing Digital
        </h2>

        {/* CONTÁCTENOS */}
        <p className="text-xl font-medium tracking-wide uppercase text-gray-500 md:text-sm md:mt-4">
          Contáctenos
        </p>

        {/* CONTENEDOR CON DOBLE LÍNEA GRUESA E ICONOS EN BLANCO MARMÓREO */}
        <div className="relative flex items-center gap-6 p-6 bg-[#0d1e3d] border-4 border-white shadow-2xl mt-2 max-w-xs mx-auto before:content-[''] before:absolute before:inset-1.5 before:border-2 before:border-white/60 before:pointer-events-none">
          
          {/* WhatsApp */}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Contactar a Patrician Software por Whatsapp" 
            className="relative z-10 cursor-pointer flex items-center justify-center w-12 h-12 bg-transparent transition-all duration-300 hover:scale-115 hover:bg-white/10" 
            href="https://wa.me"
          >
            <AiOutlineWhatsApp className="w-8 h-8 md:w-9 md:h-9 text-white/90 transition-colors hover:text-white" />
          </a>

          {/* Instagram */}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Visitar a Patrician Software en Instagram" 
            className="relative z-10 cursor-pointer flex items-center justify-center w-12 h-12 bg-transparent transition-all duration-300 hover:scale-115 hover:bg-white/10" 
            href="https://instagram.com"
          >
            <FaInstagram className="w-8 h-8 md:w-9 md:h-9 text-white/90 transition-colors hover:text-white" />
          </a>

          {/* E-Mail */}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Contactar a Patrician Software por e-Mail" 
            className="relative z-10 cursor-pointer flex items-center justify-center w-12 h-12 bg-transparent transition-all duration-300 hover:scale-115 hover:bg-white/10" 
            href="mailto:services@patrician-software.com"
          >
            <AiOutlineMail className="w-8 h-8 md:w-9 md:h-9 text-white/90 transition-colors hover:text-white" />
          </a>
          
        </div>

      </div>
    </main>
  );
};

export default MainComponent;
