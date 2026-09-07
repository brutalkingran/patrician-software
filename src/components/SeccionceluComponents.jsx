import { motion } from "framer-motion";
import PhoneMockup from "./ui/PhoneMockup";
import TextTicker from "./ui/TextTicker";
import CarruselComponent from "./CarruselComponent";
import { useMural } from "../context/MuralContext";

const MENSAJES_EXPERTS = [
  "Alto posicionamiento en redes y motores de búsqueda",
  "Experiencia de usuario de calidad",
  "Publicidad directa al público que más lo necesita",
  "Automatización",
  "Abarcamos público angloparlante",
  "¿Algo más? Dejá que nuestros proyectos hablen por nosotros",
];

const EliteSection = () => {
  const { setMuralColor } = useMural();

  return (
    <motion.section
      className="relative z-10 w-full bg-ps-cream text-ps-blue py-16 md:py-24 px-4 md:px-8 overflow-hidden"
      onViewportEnter={() => setMuralColor("var(--color-ps-black)")}
      onViewportLeave={() => setMuralColor("var(--color-ps-white)")}
      viewport={{ amount: 0.2 }}
    >
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Mockup Celular */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center w-full order-2 lg:order-1 px-2"
        >
          <PhoneMockup>
            <CarruselComponent />
          </PhoneMockup>
        </motion.div>

        {/* Textos Neoclásicos */}
        <div className="flex flex-col items-start text-left w-full order-1 lg:order-2 px-2">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl lg:text-[2.7rem] font-light tracking-wide mb-2 leading-tight text-ps-blue"
          >
            Expertos en la{" "}
            <span className="italic font-normal text-ps-mblue underline decoration-ps-lblue decoration-2 underline-offset-8">
              Excelencia
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-base md:text-lg italic text-ps-blue/80 mb-5 leading-relaxed"
          >
            Olvídese de sitios web abandonados o Community Managers que no muestran progreso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-serif text-sm md:text-base text-ps-blue/90 mb-4 leading-relaxed"
          >
            {/* Tag/Sello distintivo */}
            <span className="inline-block bg-ps-blue text-ps-cream px-2.5 py-0.5 text-xs tracking-widest font-bold uppercase mr-2 shadow-xs border border-ps-blue">
              Patrician Software
            </span>{" "}
            aspira a aprovechar todas y cada una de las herramientas que la web nos deja a disposición:
          </motion.div>

          {/* Lista enriquecida */}
          <TextTicker messages={MENSAJES_EXPERTS} />

        </div>
      </div>
    </motion.section>
  );
};

export default EliteSection;