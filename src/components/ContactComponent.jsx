import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ui/ContactForm";

const socialLinks = [
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/people/Patrician-Software-MKT/61573901501366/" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/patrician.mkt/" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/5493834091942?text=hola,%20estoy%20interesado%20en%20una%20reuni%C3%B3n%20presencial" },
];

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
          <div className="w-full flex flex-col items-center lg:items-start justify-start h-full">
            <h1 className="font-serif text-xs md:text-sm uppercase tracking-[0.25em] text-ps-white font-medium">
              Contactate con nosotros
            </h1>

            <ContactForm />
          </div>

          {/* COLUMNA DERECHA - REDES SOCIALES */}
          <div className="w-full flex flex-col items-center lg:items-start justify-start h-full">
            {/* TÍTULO TIPO INSCRIPCIÓN */}
            <div className="flex items-center gap-3 mb-5">
              <h2 className="font-serif text-xs md:text-sm uppercase tracking-[0.25em] text-ps-white font-medium">
                Seguinos
              </h2>
            </div>

            {/* BOTONES CON MARCO DUAL Y TEXTURA CONTROLADA */}
            <div className="flex items-center justify-center lg:justify-start gap-4 w-full">
              {socialLinks.map(({ icon: Icon, label, href }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative w-12 h-12 flex items-center justify-center bg-ps-white text-ps-blue border border-ps-cream/80 shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-ps-white hover:border-ps-lblue hover:shadow-xl before:content-[''] before:absolute before:inset-1 before:border before:border-ps-blue/20 before:pointer-events-none"
                >
                  {/* CAPA DE TEXTURA CON OVERLAY Y POSICIÓN DINÁMICA */}
                  <div
                    className="absolute inset-0 bg-[url('/wall-texture.jpg')] bg-cover opacity-15 mix-blend-multiply pointer-events-none transition-opacity duration-300 group-hover:opacity-25"
                    style={{
                      backgroundPosition: `${(index * 35) % 100}% ${(index * 50) % 100}%`,
                    }}
                  />

                  {/* ÍCONO */}
                  <Icon className="relative z-10 w-5 h-5 text-ps-blue transition-transform duration-300 group-hover:scale-110 group-hover:text-ps-mblue" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTÓN DE ENVÍO GENERAL */}
        <div className="w-full mt-14">
          <button
            type="submit"
            form="contact-form"
            className="relative group w-full py-5 px-4 bg-[url(/wall-texture.jpg)] md:bg-none md:bg-ps-blue/80 md:hover:bg-[url(/wall-texture.jpg)] border-4 border-ps-white text-ps-blue md:text-ps-white hover:text-ps-blue rounded-none shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.05] flex flex-col items-center justify-center gap-1"
          >
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-ps-white/90 to-transparent -translate-x-full group-hover:animate-[shimmer_2.5s_infinite] pointer-events-none z-0" />

            <span className="relative z-10 text-lg md:text-3xl text-center leading-tight font-serif font-normal tracking-wide">
              SUMATE A NUESTRO PROYECTO
            </span>

            <span className="relative z-10 text-xs md:text-2xl text-center opacity-90 group-hover:opacity-100 font-serif font-normal tracking-wide">
              CONSTRUYAMOS EL FUTURO JUNTOS
            </span>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactComponent;