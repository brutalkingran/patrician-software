import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";

const LoadingComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed inset-0 z-50
        flex flex-col items-center justify-center
        bg-black
      "
    >
      <ClipLoader size={80} color="#fff" />

      <p className="mt-6 text-white opacity-80 text-xl">
        Cargando resultado...
      </p>
    </motion.div>
  )

}

export default LoadingComponent;