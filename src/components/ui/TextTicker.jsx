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
          className="group flex items-center gap-3.5 p-3 bg-ps-white/50 border border-ps-blue/15 hover:border-ps-lblue hover:bg-ps-white transition-all duration-300 shadow-xs"
        >
          {/* Badge Numeral Romano en color ps-blue */}
          <span className="font-serif font-bold text-xs bg-ps-blue text-ps-cream px-2 py-1 shrink-0 tracking-widest group-hover:bg-ps-mblue transition-colors">
            {ROMAN_NUMERALS[index] || index + 1}
          </span>

          {/* Texto de la característica */}
          <p className="font-serif text-ps-blue text-sm md:text-base leading-snug font-medium group-hover:text-ps-mblue transition-colors">
            {texto}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default TextTicker;