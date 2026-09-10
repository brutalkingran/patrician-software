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

          <div className="relative z-51 w-full max-w-7xl mx-auto flex flex-col items-center">

            {/* Encabezado */}
            <div className="w-full max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <span className="inline-block bg-ps-blue text-ps-green px-3 py-1 text-xs tracking-[0.25em] font-serif font-bold uppercase mb-4 border border-ps-blue shadow-xs">
                - Inversión Estratégica -
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight mb-4 text-ps-white">
                Planes diseñados para impulsar la{" "}
                <span className="italic font-normal text-ps-white underline decoration-ps-lblue decoration-2 underline-offset-8">
                  presencia digital
                </span>
                {" "}de tu empresa
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
                {/* PRIMEROS PASOS */}
                <motion.div variants={itemVariants} className="flex w-full h-full [&>div]:w-full! [&>div]:max-w-none">
                  <PlanCard
                    title="Primeros pasos"
                    realPrice="$ 489,807"
                    initialPayment="$ 176,849"
                    finalPayment="$ 176,849"
                    mensualidad={null}
                    subtitle="Un viaje de mil millas comienza con un primer paso"
                    features={[
                      <span key="1">
                        <strong className="font-bold text-ps-gold">Tu primera campaña publicitaria activa</strong>
                      </span>,
                      <span key="2">
                        Anuncios estratégicos en <strong className="text-ps-cream underline decoration-ps-lblue/60 underline-offset-4 decoration-2">Google, Meta o TikTok</strong>
                      </span>,
                      <span key="3">
                        <strong className="text-ps-cream">Landing Page</strong> optimizada para conversión
                      </span>,
                      <span key="4">
                        Captura y gestión directa de <span className="font-bold uppercase">Leads</span>
                      </span>,
                      <span key="5">
                        Ideal para <strong className="text-ps-cream">validar ofertas o lanzamientos</strong>
                      </span>,
                    ]}
                    cta="Empezar ahora"
                  />
                </motion.div>

                {/* EMPRENDEDOR - DESTACADO */}
                <motion.div variants={itemVariants} className="flex w-full h-full md:-translate-y-3 [&>div]:w-full! [&>div]:max-w-none">
                  <PlanCard
                    title="Emprendedor"
                    realPrice="$ 744,331"
                    initialPayment="$ 324,743"
                    finalPayment="$ 324,743"
                    mensualidad="$ 32,200"
                    subtitle="Más ventas, más control, mejores decisiones"
                    highlighted
                    features={[
                      <span key="1">
                        <strong className="font-bold text-ps-gold text-sm">Sitio Web Profesional</strong> de alto impacto y a medida
                      </span>,
                      <span key="2">
                        Diseño <strong className="text-ps-cream underline decoration-ps-gold/80 underline-offset-4 decoration-2">100% a medida</strong> de tu marca
                      </span>,
                      <span key="3">
                        Estructura pensada para <strong className="text-ps-gold">cerrar ventas</strong>
                      </span>,
                      <span key="4">
                        Servicio de mail y newsletter a cortesía nuestra
                      </span>,
                      <span key="5">
                        Nos encargamos de adquisición de Dominio, Servidor y configuración de <span className="font-bold uppercase">SSL</span>
                      </span>,
                      <span key="6">
                        Diseñado para negocios listos para <strong className="text-ps-cream">escalar</strong>
                      </span>,
                    ]}
                    cta="Quiero este plan"
                  />
                </motion.div>

                {/* ÉLITE */}
                <motion.div variants={itemVariants} className="flex w-full h-full [&>div]:w-full! [&>div]:max-w-none">
                  <PlanCard
                    title="Élite"
                    realPrice="$ 1,617,531"
                    initialPayment="$ 656,743"
                    finalPayment="$ 656,743"
                    mensualidad="$ 80,348"
                    subtitle="Para negocios que juegan en serio"
                    features={[
                      <span key="1">
                        <strong className="font-bold text-ps-gold tracking-wider">Todo lo mencionado anteriormente</strong>
                      </span>,
                      <span key="2">
                        Estrategia de <strong className="text-ps-cream underline decoration-ps-lblue/80 underline-offset-4 decoration-2">Paid Media Agresivo</strong>
                      </span>,
                      <span key="3">
                        Consultoría y asesoría estratégica <span className="font-bold">profesional</span> mensual
                      </span>,
                      <span key="4">
                        Soporte prioritario <strong className="text-ps-gold">24/7</strong>
                      </span>,
                      <span key="5">
                        Optimización constante de tu <strong className="text-ps-cream">funnel de ventas</strong>
                      </span>,
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
                <div className="relative overflow-hidden bg-ps-white/60 border border-ps-blue/20 p-6 text-center shadow-xs backdrop-blur-xs before:content-[''] before:absolute before:inset-1 before:border before:border-ps-blue/10 before:pointer-events-none max-w-3xl mx-auto mt-10">
                  {/* AUDITORÍA GRATUITA */}
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

                  {/* DETALLE E-COMMERCE (SUTIL / PREVIEW CHICO) */}
                  <div className="flex items-center justify-center gap-3 text-xs md:text-sm text-ps-blue/80 font-serif italic pt-3">
                    <span>
                      Si lo que buscás es un e-commerce, te invitamos a probar sus funcionalidades{" "}
                      <a
                        href="https://sandbox.patrician-software.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="not-italic font-bold font-mono text-ps-mblue underline decoration-ps-lblue underline-offset-2 hover:text-ps-gold transition-colors"
                      >
                        aquí
                      </a>
                      .
                    </span>
                  </div>
                </div>
            </motion.div>

          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default PlanPage;