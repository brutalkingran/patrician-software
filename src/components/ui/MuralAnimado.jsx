import { motion } from "motion/react"
import textura_mural from "/textura-mural6.svg";

const MuralAnimado = ({ direction }) => {
  return (
    <motion.div
      className={`absolute top-0 ${ direction } w-32 h-full bg-repeat-y bg-center bg-contain`}
      style={{
        backgroundImage: `url(${textura_mural})`
      }}
      animate={{
        backgroundPositionY: ["0%", "100%"]
      }}
      transition={{
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
};

export default MuralAnimado;
