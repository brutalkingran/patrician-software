import { motion } from "framer-motion";
import PhoneMockup from "./ui/PhoneMockup";
import TextTicker from "./ui/TextTicker";
import CarruselComponent from "./CarruselComponent";
import { useMural } from "../context/MuralContext";

const MENSAJES_ELITE = [
  "Más presencia digital.",
  "Más impacto visual.",
  "Más clientes para tu marca.",
  "Una identidad que marque la diferencia.",
];

const EliteSection = () => {
  const { setMuralColor } = useMural();

  return (
    <motion.section
      className="relative z-10 w-full bg-white text-gray-900 py-16 md:py-20 px-4 md:px-8 overflow-hidden"
      onViewportEnter={() => setMuralColor("#000000")}
      onViewportLeave={() => setMuralColor("var(--color-ps-white)")}
      viewport={{ amount: 0.2 }}
    >
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Mockup Celular */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center w-full order-2 lg:order-1 px-2"
        >
          <PhoneMockup>
            <CarruselComponent />
          </PhoneMockup>
        </motion.div>

        {/* Textos & Ticker */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full order-1 lg:order-2 px-2">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight mb-8 text-gray-950 leading-tight"
          >
            Llegó el momento de superarlos.
            <br />
            <span className="text-blue-700">Sumate a la élite</span> de marcas que ya están un paso adelante.
          </motion.h3>

          <TextTicker messages={MENSAJES_ELITE} />
        </div>
      </div>
    </motion.section>
  );
};

export default EliteSection;