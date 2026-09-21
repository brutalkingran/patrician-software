import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useLightbox } from "../context/LightboxContext";

const ImageLightbox = () => {
  const { image, closeLightbox } = useLightbox();

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={image.alt || "Imagen ampliada"}
          onClick={closeLightbox}
          className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-10 bg-black/90"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Cerrar imagen"
            className="fixed top-4 right-4 flex items-center justify-center w-11 h-11 text-ps-white border border-ps-white/30 bg-black/40 hover:bg-black/70 transition-colors"
          >
            <IoMdClose className="w-6 h-6" />
          </button>

          <motion.img
            key={image.src}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            src={image.src}
            alt={image.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain shadow-2xl select-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
