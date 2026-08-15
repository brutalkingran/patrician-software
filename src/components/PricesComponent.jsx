import { motion } from "framer-motion";

const PricesComponent = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full mt-12 px-4 mx-auto">
      {/* Texto de llamado a la acción con entrada pausada y elegante */}
      {/* transition.duration: 0.9s hace la bajada más sutil */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ repeat: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-xl md:text-2xl text-center font-sans font-black tracking-tighter uppercase leading-none text-white/90 mb-6"
      >
        ¿Qué estás esperando?
      </motion.h2>
      
      {/* BOTÓN OVALADO CON ANIMACIÓN DE ENTRADA LATERAL MÁS LENTA */}
      <a 
        href="TU_LINK_DE_PAGO_O_DESTINO_AQUI" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group w-full max-w-sm h-14 bg-white hover:bg-[#0d1e3d] border-2 border-transparent hover:border-white/20 text-[#0d1e3d] rounded-full shadow-xl hover:shadow-blue-500/20 overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 hover:scale-105"
      >
        {/* EFECTO 1: Destello metálico de fondo en hover */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-0" />

        {/* TU LETRA DE CAPTURA COMPACTA CON DESLIZAMIENTO EXTENDIDO A 1.2 SEGUNDOS */}
        {/* transition.duration: 1.2s ralentiza el trayecto desde el costado */}
        <motion.span 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ repeat: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 font-sans font-black text-center text-sm md:text-base uppercase tracking-tighter leading-none transition-colors duration-500 group-hover:text-[#F6FFBF] flex items-center justify-center w-full h-full px-6"
        >
          ¡Sumate a nuestro proyecto!
        </motion.span>
      </a>

      {/* Inyección de la animación restante del destello de fondo */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default PricesComponent;