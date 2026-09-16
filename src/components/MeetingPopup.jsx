import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "ps_meeting_popup_last_shown";
const WHATSAPP_URL =
  "https://wa.me/5493834091942?text=Hola!%20Estoy%20interesado%20en%20solicitar%20una%20reuni%C3%B3n%20gratuita.";

const getTodayKey = () => new Date().toISOString().slice(0, 10);

const MeetingPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== getTodayKey()) {
        setOpen(true);
      }
    } catch {
      // localStorage no disponible (modo privado, etc.): no mostramos el popup.
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, getTodayKey());
    } catch {
      // Nada que hacer si localStorage no está disponible.
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Solicitá tu reunión gratuita"
          className="fixed inset-0 z-999 flex items-center justify-center px-4 bg-black/95"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-md bg-ps-black border-2 border-ps-gold shadow-2xl p-8 sm:p-10 text-center overflow-hidden"
          >
            {/* MARCA DE AGUA */}
            <img
              src="/logo_t.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 z-0 m-auto h-2/3 w-2/3 max-w-65 max-h-65 object-contain opacity-10 pointer-events-none select-none"
            />

            <div className="relative z-10">
              <h2 className="font-serif text-3xl sm:text-3xl font-black uppercase tracking-wide text-ps-white leading-tight mb-5">
                Solicitá tu reunión ya
              </h2>

              <p className="font-serif text-1xl sm:text-base text-ps-white/80 italic leading-relaxed mb-9">
                Es gratis y te asesoramos SIN COMPROMISOS
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="group relative w-full py-3.5 bg-ps-gold text-ps-black font-serif font-bold uppercase tracking-widest text-sm overflow-hidden transition-colors hover:bg-ps-white"
                >
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/70 to-transparent group-hover:animate-[shimmer_1.6s_infinite] pointer-events-none" />
                  <span className="relative z-10">Me interesa</span>
                </a>

                <button
                  type="button"
                  onClick={dismiss}
                  className="w-full py-3 text-ps-white/60 font-serif italic text-sm hover:text-ps-white transition-colors"
                >
                  Quizás en otro momento...
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MeetingPopup;
