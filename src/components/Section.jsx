import { motion } from "framer-motion";
import TextTicker from "./ui/TextTicker";
import { useMural } from "../context/MuralContext";

const THEMES = {
  cream: {
    bg: "bg-ps-cream",
    text: "text-ps-blue",
    subtitle: "text-ps-blue/80",
    description: "text-ps-blue/90",
    tag: "bg-ps-blue text-ps-white border-ps-blue",
    defaultMuralEnter: "var(--color-ps-black)",
    defaultMuralLeave: "var(--color-ps-white)",
  },
  blue: {
    bg: "bg-ps-mblue md:bg-ps-blue",
    text: "text-ps-white",
    subtitle: "text-ps-white/90",
    description: "text-ps-white/90",
    tag: "bg-ps-cream text-ps-blue border-ps-cream",
    defaultMuralEnter: "var(--color-ps-blue)",
    defaultMuralLeave: "var(--color-ps-black)",
  },
  // 👑 TEMA 1: Dorado Imperial (Ideal para secciones destacadas/premium)
  gold: {
    bg: "bg-ps-gold",
    text: "text-ps-blue",
    subtitle: "text-ps-blue/85",
    description: "text-ps-blue/90",
    tag: "bg-ps-blue text-ps-gold border-ps-blue",
    defaultMuralEnter: "var(--color-ps-gold)",
    defaultMuralLeave: "var(--color-ps-black)",
  },
  // 📈 TEMA 2: Verde Métricas (Ideal para retornos, resultados y crecimiento)
  green: {
    bg: "bg-ps-green",
    text: "text-ps-blue",
    subtitle: "text-ps-blue/85",
    description: "text-ps-blue/90",
    tag: "bg-ps-blue text-ps-green border-ps-blue",
    defaultMuralEnter: "var(--color-ps-green)",
    defaultMuralLeave: "var(--color-ps-black)",
  },
  // 🚀 NUEVO TEMA: Celeste Imperial (lblue)
  lblue: {
    bg: "bg-ps-lblue",
    text: "text-ps-blue",
    subtitle: "text-ps-blue/85",
    description: "text-ps-blue/90",
    tag: "bg-ps-blue text-ps-white border-ps-blue",
    defaultMuralEnter: "var(--color-ps-lblue)",
    defaultMuralLeave: "var(--color-ps-black)",
  },
  // 🚀 NUEVO TEMA: Azul Hielo (ice)
  ice: {
    bg: "bg-ps-ice",
    text: "text-ps-blue",
    subtitle: "text-ps-blue/80",
    description: "text-ps-blue/90",
    tag: "bg-ps-blue text-ps-white border-ps-blue",
    defaultMuralEnter: "var(--color-ps-ice)",
    defaultMuralLeave: "var(--color-ps-white)",
  },
};

const Section = ({
  title,
  subtitle,
  tag,
  description,
  messages,
  children,
  variant = "cream", // "cream" | "blue"
  mediaPosition = "left", // "left" | "right"
  muralEnterColor,
  muralLeaveColor,
  extraContent,
}) => {
  const { setMuralColor } = useMural();

  const theme = THEMES[variant] || THEMES.cream;
  const muralEnter = muralEnterColor || theme.defaultMuralEnter;
  const muralLeave = muralLeaveColor || theme.defaultMuralLeave;
  const isMediaRight = mediaPosition === "right";

  return (
    <motion.section
      className={`relative z-10 w-full ${theme.bg} ${theme.text} py-16 md:py-24 px-4 md:px-8 overflow-hidden`}
      onViewportEnter={() => setMuralColor(muralEnter)}
      onViewportLeave={() => setMuralColor(muralLeave)}
      viewport={{ amount: 0.2 }}
    >
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Slot / Children para el Chiche (Celular, Imagen, Tablet, etc.) */}
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
              className={`font-serif text-base md:text-lg italic ${theme.subtitle} mb-5 leading-relaxed`}
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
              className={`font-serif text-sm md:text-base ${theme.description} mb-4 leading-relaxed`}
            >
              {tag && (
                <span
                  className={`inline-block px-1.5 py-0.5 text-[0.80rem] tracking-widest font-bold uppercase mr-1 shadow-xs border ${theme.tag}`}
                >
                  {tag}
                </span>
              )}{" "}
              {description}
            </motion.div>
          )}

          {/* Ticker / Lista de Mensajes */}
          {messages && messages.length > 0 && (
            <TextTicker messages={messages} />
          )}

          {/* Slot para contenido extra */}
          {extraContent}
        </div>
      </div>
    </motion.section>
  );
};

export default Section;