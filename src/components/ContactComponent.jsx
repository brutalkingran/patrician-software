import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ui/ContactForm";

const ContactComponent = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ repeat: true, amount: 0.15 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-screen left-1/2 -translate-x-1/2 mt-10 pb-16 bg-transparent"
    >
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* COLUMNA IZQUIERDA - FORMULARIO */}
          <div className="w-full flex flex-col items-center lg:items-start">
            <h1 className="text-xl md:text-2xl uppercase tracking-wide text-ps-white mb-6 text-center lg:text-left w-full font-serif font-bold italic">
              Contactate con nosotros
            </h1>

            <ContactForm />
          </div>

          {/* COLUMNA DERECHA - REDES SOCIALES */}
          <div className="w-full flex flex-col items-center lg:items-start lg:pt-0 justify-start h-full">
            <h2 className="text-xl md:text-2xl uppercase tracking-wide text-ps-white mb-6 text-center lg:text-left w-full font-serif font-normal italic">
              SEGUINOS
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-5 w-full">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 bg-[url(wall-texture.jpg)] flex items-center justify-center text-ps-blue transition-all duration-300 hover:scale-110 shadow-md"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 bg-[url(wall-texture.jpg)] flex items-center justify-center text-ps-blue transition-all duration-300 hover:scale-110 shadow-md"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 bg-[url(wall-texture.jpg)] flex items-center justify-center text-ps-blue transition-all duration-300 hover:scale-110 shadow-md"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTÓN DE ENVÍO GENERAL */}
        <div className="w-full mt-14">
          <button
            type="submit"
            form="contact-form"
            className="relative group w-full py-5 px-4 bg-[url(wall-texture.jpg)] md:bg-none md:bg-ps-blue/80 md:hover:bg-[url(wall-texture.jpg)] border-4 border-ps-white text-ps-blue md:text-ps-white hover:text-ps-blue rounded-none shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.05] flex flex-col items-center justify-center gap-1"
          >
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-ps-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-0" />

            <span className="relative z-10 text-lg md:text-xl text-center leading-tight font-serif font-normal tracking-wide">
              ÚNETE A NUESTRO PROYECTO
            </span>

            <span className="relative z-10 text-xs text-center opacity-90 group-hover:opacity-100 font-serif font-normal tracking-wide">
              SUMATE HOY Y CONSTRUYAMOS EL FUTURO JUNTOS
            </span>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactComponent;