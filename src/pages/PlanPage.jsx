import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent";
import PlanCard from "../components/ui/PlanCard";
import { AnimatePresence, motion } from "framer-motion";
import { useMural } from "../context/MuralContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PlanPage = () => {
  const [loading, setLoading] = useState(true);
  const { setMuralColor } = useMural();

  useEffect(() => {
    setMuralColor("var(--color-ps-cream)");
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, [setMuralColor]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingComponent key="loader" />
      ) : (
        <motion.main
          key="plans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen bg-ps-blue text-ps-ice px-4 sm:px-6 pt-24 sm:pt-32 pb-20 flex flex-col items-center overflow-hidden"
        >

          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

            {/* Encabezado */}
            <div className="w-full max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-block bg-ps-blue text-ps-green px-3 py-1 text-xs tracking-[0.25em] font-serif font-bold uppercase mb-4 border border-ps-blue shadow-xs">
                - Inversión Estratégica -
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight mb-4 text-ps-white">
                Planes diseñados para impulsar tu{" "}
                <span className="italic font-normal text-ps-white underline decoration-ps-lblue decoration-2 underline-offset-8">
                  presencia
                </span>
              </h1>

              <p className="text-base md:text-lg font-serif italic text-ps-white max-w-2xl mx-auto leading-relaxed">
                Elegí la combinación de desarrollo web y marketing digital que mejor acompañe la etapa actual de tu negocio.
              </p>
            </div>

            {/* Grilla de Planes */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
            >
              {/* BÁSICO */}
              <motion.div variants={itemVariants} className="flex w-full h-full [&>div]:w-full! [&>div]:max-w-none">
                <PlanCard
                  title="Primeros pasos"
                  realPrice="$ 589,807.50"
                  price="$ 453,698.08"
                  mensualidad="$ 45,369.81"
                  subtitle="Un viaje de mil millas comienza con un primer paso"
                  features={[
                    "Página web profesional",
                    "Diseño limpio y responsivo para todo dispositivo",
                    "Una campaña de marketing al mes",
                    "Captura simple de leads",
                    "Tu negocio aparecerá en Google, Facebook e Instagram",
                    "Ideal para validar una idea o negocio nuevo",
                  ]}
                  cta="Empezar"
                />
              </motion.div>

              {/* EMPRENDEDOR - DESTACADO */}
              <motion.div variants={itemVariants} className="flex w-full h-full md:-translate-y-3 [&>div]:w-full! [&>div]:max-w-none">
                <PlanCard
                  title="Emprendedor"
                  realPrice="$ 844,331.90"
                  price="$ 649,486.08"
                  mensualidad="$ 64,948.61"
                  subtitle="Más ventas, más control, mejores decisiones"
                  highlighted
                  features={[
                    "Reunión previa al proyecto",
                    "Diseño enfocado a conversión",
                    "Campañas multi-canal (Meta + Google)",
                    "Suscripción a Newsletter",
                    "Anuncios animados",
                    "Diseño a medida",
                    "Automatización básica de leads",
                  ]}
                  cta="Quiero este plan"
                />
              </motion.div>

              {/* ÉLITE */}
              <motion.div variants={itemVariants} className="flex w-full h-full [&>div]:w-full! [&>div]:max-w-none">
                <PlanCard
                  title="Élite"
                  realPrice="$ 1,317,531.90"
                  price="$ 1,013,486.08"
                  mensualidad="$ 101,348.61"
                  subtitle="Para negocios que ya juegan en serio"
                  features={[
                    "Todo lo anterior",
                    "Reuniones más frecuentes",
                    "Funnel completo de ventas",
                    "Marketing agresivo y escalable",
                    "Automatizaciones avanzadas (emails, WhatsApp)",
                    "Soporte prioritario",
                    "Dirección estratégica personalizada",
                  ]}
                  cta="Hablar con un asesor"
                />
              </motion.div>
            </motion.div>

            {/* Banner de Auditoría en estilo Placa/Inscripción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-2xl mx-auto mt-14"
            >
              <div className="relative overflow-hidden bg-ps-white/60 border border-ps-blue/20 p-6 text-center shadow-xs backdrop-blur-xs before:content-[''] before:absolute before:inset-1 before:border before:border-ps-blue/10 before:pointer-events-none">
                <p className="font-serif text-base md:text-lg text-ps-blue leading-relaxed">
                  ¿No sabés cuál elegir? Evaluemos tu caso con una{" "}
                  <a
                    href="https://wa.me/5493517961371?text=Hola!%20Me%20interesa%20agendar%20una%20auditoría%20gratuita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-ps-mblue underline decoration-ps-lblue decoration-2 underline-offset-4 hover:text-ps-blue transition-colors"
                  >
                    auditoría gratuita
                  </a>
                  .
                </p>
              </div>
            </motion.div>

          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default PlanPage;