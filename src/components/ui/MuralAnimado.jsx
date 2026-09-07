import { motion } from "motion/react";
import textura_mural from "/textura-mural.svg";
import { useMural } from "../../context/MuralContext";

const MuralAnimado = ({ direction }) => {
  // Ahora el contexto puede retornar el color exacto (ej: "var(--color-ps-cream)")
  const { muralColor } = useMural(); 

  return (
    <motion.div
      className={`fixed top-0 ${direction} w-24 h-full z-50 pointer-events-none`}
      style={{
        WebkitMaskImage: `url(${textura_mural})`,
        maskImage: `url(${textura_mural})`,
        WebkitMaskRepeat: "repeat-y",
        maskRepeat: "repeat-y",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
      animate={{
        WebkitMaskPositionY: ["0px", "600px"],
        maskPositionY: ["0px", "600px"],
        backgroundColor: muralColor, // Color dinámico exacto de tu paleta
      }}
      transition={{
        WebkitMaskPositionY: { duration: 20, ease: "linear", repeat: Infinity },
        maskPositionY: { duration: 20, ease: "linear", repeat: Infinity },
        backgroundColor: { duration: 0.5, ease: "easeInOut" }, // Transición de color suave
      }}
    />
  );
};

export default MuralAnimado;