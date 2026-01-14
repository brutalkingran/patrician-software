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
        {/* LOGO  */}
        <LogoAnimado />

        {/* TITULOS & SUBTITULO */}
        <h1 className="text-4xl font-serif font-light md:text-6xl">Patrician Software</h1>

        <h2 className="text-lg italic font-extralight mx-6 md:text-2xl md:max-w-[70%]">
          Expertos en Desarrollo de Software y Marketing Digital
        </h2>

        {/* CONTACTOS */}
        <div className="flex flex-row justify-center items-center gap-5 mt-5 md:gap-10 md:mt-10 border-3 border-double rounded-2xl p-3 cool-texture">
          <a target="_blank" rel="noopener noreferrer" aria-label="Contactar a Patrician Software por Whatsapp" className="cursor-pointer hover:scale-125 transition-all" href="https://wa.me/543834091942"><AiOutlineWhatsApp className="w-18 h-18 md:w-14 md:h-14" /></a>
          <a target="_blank" rel="noopener noreferrer" aria-label="Visitar a Patrician Software en Instagram" className="cursor-pointer hover:scale-125 transition-all" href="https://www.instagram.com/patrician.mkt?igsh=N3VtbGhydTRqdzNi"><FaInstagram className="w-18 h-18 md:w-14 md:h-14" /></a>
          <a target="_blank" rel="noopener noreferrer" aria-label="Contactar a Patrician Software por e-Mail" className="cursor-pointer hover:scale-125 transition-all" href="mailto:services@patrician-software.com/"><AiOutlineMail className="w-18 h-18 md:w-14 md:h-14" /></a>
        </div>
        
        <p className="text-1xl italic md:text-xl md:mt-0">Contáctenos</p>
      </div>
    </main>
  )
}

export default MainComponent
