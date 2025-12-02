import logo_text from "/logo_text.png";
import logo_laurel from "/logo_laurel.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const MainComponent = () => {
  return (
    <main className="flex flex-col w-screen h-screen text-center justify-center">
      <div className="m-1 h-screen border-40 flex flex-col items-center justify-center gap-6" id="borderimg3">
        {/* LOGO GRANDE */}
        <div className="grid place-items-center">
          <img className="col-start-1 row-start-1" src={logo_text} alt="Texto de logo de Patrician Software" />
          <img className="col-start-1 row-start-1" src={logo_laurel} alt="Laurel de logo de Patrician Software" />
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* TÍTULO */}
          <h1 className="text-[2.7rem] text-center font-extralight font-serif">Patrician Software</h1>

          {/* SUBTÍTULO */}
          <h2 className="text-[1.1rem] mx-6 text-center italic font-extralight">Expertos en Desarrollo de Software y Marketing Digital</h2>
        </div>

        <div className="flex flex-row justify-center items-center gap-5 mt-5">
          <a href="https://wa.me/543834091942"><AiOutlineWhatsApp size={75} /></a>
          <a href="instagram://user?username=patrician-software/"><FaInstagram size={75} /></a>
          <a href="mailto:services@patrician-software.com/"><AiOutlineMail size={75} /></a>
        </div>

        <p className="text-center text-1xl italic">Contáctenos</p>
      </div>
    </main>
  )
}

export default MainComponent