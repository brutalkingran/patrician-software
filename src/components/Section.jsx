import { motion } from "framer-motion";
import TextTicker from "./ui/TextTicker";
import { useMural } from "../context/MuralContext";

const Section = ({
  title,
  subtitle,
  tag,
  description,
  messages,
  children,
  bgColor = "bg-ps-cream",
  textColor = "text-ps-blue",
  muralEnterColor = "var(--color-ps-black)",
  muralLeaveColor = "var(--color-ps-white)",
  mediaPosition = "left", // "left" | "right"
  extraContent,
}) => {
  const { setMuralColor } = useMural();

  const isMediaRight = mediaPosition === "right";

  return (
    <motion.section
      className={`relative z-10 w-full ${bgColor} ${textColor} py-16 md:py-24 px-4 md:px-8 overflow-hidden`}
      onViewportEnter={() => muralEnterColor && setMuralColor(muralEnterColor)}
      onViewportLeave={() => muralLeaveColor && setMuralColor(muralLeaveColor)}
      viewport={{ amount: 0.2 }}
    >
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Slot / Children para el Chiche (Celular, Imagen, Card, etc.) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, x: isMediaRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex justify-center items-center w-full order-2 ${isMediaRight ? "lg:order-2" : "lg:order-1"
              } px-2`}
          >
            {children}
          </motion.div>
        )}

        {/* Columna de Textos e Información */}
        <div
          className={`flex flex-col items-start text-left w-full order-1 ${isMediaRight ? "lg:order-1" : "lg:order-2"
            } px-2`}
        >
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl lg:text-[2.7rem] font-light tracking-wide mb-2 leading-tight"
            >
              {title}
            </motion.h2>
          )}

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-base md:text-lg italic opacity-80 mb-5 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {(tag || description) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-serif text-sm md:text-base opacity-90 mb-4 leading-relaxed"
            >
              {tag && (
                <span className="inline-block bg-ps-blue text-ps-cream px-2.5 py-0.5 text-xs tracking-widest font-bold uppercase mr-2 shadow-xs border border-ps-blue">
                  {tag}
                </span>
              )}{" "}
              {description}
            </motion.div>
          )}

          {/* Ticker / Lista de Mensajes opcional */}
          {messages && messages.length > 0 && (
            <TextTicker messages={messages} />
          )}

          {/* Slot opcional para contenido extra al final del bloque de texto */}
          {extraContent}
        </div>

      </div>
    </motion.section>
  );
};

export default Section;