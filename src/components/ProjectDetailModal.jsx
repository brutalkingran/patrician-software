import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose, IoMdArrowDown } from "react-icons/io";

const UMBRAL_SCROLL = 4;

const ProjectDetailModal = ({ project, onClose }) => {
  const scrollRef = useRef(null);
  const [canScrollMore, setCanScrollMore] = useState(false);

  const checkOverflow = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollMore(el.scrollHeight - el.scrollTop - el.clientHeight > UMBRAL_SCROLL);
  };

  useEffect(() => {
    if (!project) return;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    checkOverflow();

    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={onClose}
          className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-8 bg-black/80"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-ps-blue border border-ps-white/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 text-ps-white bg-black/30 hover:bg-black/50 transition-colors"
            >
              <IoMdClose className="w-5 h-5" />
            </button>

            <div ref={scrollRef} onScroll={checkOverflow} className="overflow-y-auto">
              {/* Imagen completa, sin recortar: se muestra entera aunque haya que scrollear */}
              <div className="w-full bg-ps-mblue">
                <img
                  src={project.image}
                  alt={project.title}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  onLoad={checkOverflow}
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>

              <div className="p-6 sm:p-7">
                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                    project.category === "software" ? "text-ps-lblue" : "text-ps-green"
                  }`}
                >
                  {project.category === "software" ? "Software" : "Paid Media"}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ps-white mt-1 mb-4 leading-tight">
                  {project.title}
                </h3>

                {project.details?.description && (
                  <p className="font-serif text-sm text-ps-white/85 leading-relaxed mb-5">
                    {project.details.description}
                  </p>
                )}

                {project.details?.features?.length > 0 && (
                  <ul className="flex flex-col gap-2 mb-6">
                    {project.details.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ps-white/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ps-gold shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 bg-ps-gold text-ps-black font-serif font-bold uppercase tracking-widest text-sm hover:bg-ps-white transition-colors"
                  >
                    Ver Aquí
                  </a>
                )}
              </div>
            </div>

            <AnimatePresence>
              {canScrollMore && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 inset-x-0 flex flex-col items-center pt-10 pb-2 bg-linear-to-t from-black/70 to-transparent pointer-events-none"
                >
                  <span className="font-serif text-[0.65rem] uppercase tracking-[0.2em] text-ps-white/90">
                    Ver más
                  </span>
                  <IoMdArrowDown className="w-4 h-4 text-ps-white/90 animate-bounce" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
