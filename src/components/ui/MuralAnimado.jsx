import { motion } from "motion/react";
import textura_mural from "/textura-mural.svg";
import { useMural } from "../../context/MuralContext";

const MuralAnimado = ({ direction }) => {
  const { isDark } = useMural();

  return (
    <motion.div
      className={`fixed top-0 ${direction} w-24 h-full bg-repeat-y bg-center bg-contain z-50 pointer-events-none`}
      style={{
        backgroundImage: `url(${textura_mural})`,
      }}
      animate={{
        backgroundPositionY: ["0%", "120%"],
        filter: isDark ? "invert(1) brightness(0.2)" : "invert(0) brightness(1)",
      }}
      transition={{
        backgroundPositionY: { duration: 20, ease: "linear", repeat: Infinity },
        filter: { duration: 0.4, ease: "easeInOut" } // Transición fluida al cambiar de sección
      }}
    />
  );
};

export default MuralAnimado;