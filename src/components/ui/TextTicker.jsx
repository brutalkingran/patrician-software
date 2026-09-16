import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI"];

const TextTicker = ({ messages = [], toggleLabel = "Ver más" }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full text-left select-none my-2">
      {/* GANCHO MOBILE: reemplaza la lista bulky por un toggle compacto (solo <md) */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="md:hidden w-full flex items-center justify-between gap-2 px-3.5 py-2.5 bg-ps-white/90 border border-ps-blue/25 hover:border-ps-lblue transition-colors font-serif text-sm font-semibold tracking-wide text-ps-blue"
      >
        <span>{expanded ? "Ver menos" : toggleLabel}</span>
        <IoIosArrowDown
          className={`shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`${expanded ? "flex" : "hidden"} md:flex flex-col gap-2.5 mt-2.5 md:mt-0`}
      >
          {messages.map((texto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="group relative overflow-hidden flex items-center gap-3.5 p-3 bg-ps-white/50 border border-ps-blue/15 hover:border-ps-lblue hover:bg-ps-white transition-all duration-300 shadow-xs"
            >
              {/* CAPA DE TEXTURA DISIMULADA Y DINÁMICA */}
              <div
                className="absolute inset-0 bg-[url('/wall-texture.jpg')] bg-cover opacity-65 mix-blend-multiply pointer-events-none transition-opacity group-hover:opacity-[0.12]"
                style={{
                  // Desplaza el origen de la imagen según el índice para que no se repita el patrón
                  backgroundPosition: `${(index * 37) % 100}% ${(index * 53) % 100}%`,
                }}
              />

              {/* CONTENIDO (Z-INDEX SUPERIOR PARA LEGIBILIDAD TOTAL) */}
              <span className="relative z-10 font-serif font-bold text-xs bg-ps-blue text-ps-cream px-2 py-1 shrink-0 tracking-widest group-hover:bg-ps-mblue transition-colors">
                {ROMAN_NUMERALS[index] || index + 1}
              </span>

              {/* Texto de la característica */}
              <p className="relative z-10 font-serif text-ps-blue text-sm md:text-base leading-snug font-medium group-hover:text-ps-mblue transition-colors">
                {texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
  );
};

export default TextTicker;