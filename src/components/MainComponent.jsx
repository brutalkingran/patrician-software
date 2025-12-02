import logo_text from "/logo_text.png";
import logo_laurel from "/logo_laurel.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const MainComponent = () => {
  return (
    <main className="flex flex-col min-h-screen text-center justify-center md:items-center">
      <div
        className="m-1 border-[40px] flex flex-col items-center justify-center gap-3 min-h-screen md:min-h-[80vh] md:max-w-[900px] md:border-[60px] md:gap-6 md:min-w-[125vh]"
        id="borderimg3"
      >
        {/* LOGO GRANDE */}
        <div className="grid place-items-center md:scale-125 md:mb-4">
          <img className="col-start-1 row-start-1 md:w-[350px]" src={logo_text} alt="Logo Texto" />
          <img className="col-start-1 row-start-1 md:w-[350px]" src={logo_laurel} alt="Logo Laurel" />
        </div>

        {/* TITULOS & SUBTITULO */}
        <h1 className="text-4xl font-serif font-light md:text-6xl">Patrician Software</h1>

        <h2 className="text-lg italic font-extralight mx-6 md:text-2xl md:max-w-[70%]">
          Expertos en Desarrollo de Software y Marketing Digital
        </h2>

        {/* CONTACTOS */}
        <div className="flex flex-row justify-center items-center gap-5 mt-5 md:gap-10 md:mt-10">
          <a aria-label="Contactar a Patrician Software por Whatsapp" className="cursor-pointer hover:scale-125 transition-all" href="https://wa.me/543834091942"><AiOutlineWhatsApp className="w-18 h-18 md:w-14 md:h-14" /></a>
          <a aria-label="Visitar a Patrician Software en Instagram" className="cursor-pointer hover:scale-125 transition-all" href="instagram://user?username=patrician-software/"><FaInstagram className="w-18 h-18 md:w-14 md:h-14" /></a>
          <a aria-label="Contactar a Patrician Software por e-Mail" className="cursor-pointer hover:scale-125 transition-all" href="mailto:services@patrician-software.com/"><AiOutlineMail className="w-18 h-18 md:w-14 md:h-14" /></a>
        </div>

        <p className="text-1xl italic md:text-2xl md:mt-4">Contáctenos</p>
      </div>
    </main>
  )
}

export default MainComponent
