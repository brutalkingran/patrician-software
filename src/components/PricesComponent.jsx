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
        className="text-xl md:text-3xl text-center font-serif font-black tracking-tighter uppercase leading-none text-white/90 mb-6 md:mb-0 italic"
      >
        ¿Qué estás esperando?
      </motion.h2>
      
      {/* BOTÓN OVALADO CON ANIMACIÓN DE ENTRADA LATERAL MÁS LENTA */}

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