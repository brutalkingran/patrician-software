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
        
        <p className="text-1xl italic md:text-xl md:mt-0">Contáctenos</p>
      </div>
    </main>
  )
}

export default MainComponent
