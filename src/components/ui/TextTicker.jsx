import { motion } from "framer-motion";

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI"];

const TextTicker = ({ messages = [] }) => {
  return (
    <div className="w-full flex flex-col gap-2.5 text-left select-none my-2">
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
  );
};

export default TextTicker;