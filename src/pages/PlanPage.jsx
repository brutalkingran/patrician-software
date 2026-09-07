import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent";
import PlanCard from "../components/ui/PlanCard";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PlanPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);

    return () => clearTimeout(t);
  }, []);

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
          className="
            relative
            min-h-screen
            bg-[#06152B]
            text-white
            px-4
            sm:px-6
            pt-24
            sm:pt-28
            pb-16
            flex
            flex-col
            items-center
            overflow-hidden
          "
        >
          {/* =========================================
              FONDO
          ========================================== */}

          <div
            className="
              absolute
              inset-0
              bg-[url('/logo_tr.svg')]
              bg-center
              bg-no-repeat
              bg-contain
              opacity-[0.07]
              pointer-events-none
            "
          />

          {/* Brillo de fondo */}
          <div
            className="
              absolute
              top-[-150px]
              left-1/2
              -translate-x-1/2
              w-[600px]
              h-[350px]
              rounded-full
              bg-blue-500/10
              blur-[120px]
              pointer-events-none
            "
          />

          {/* =========================================
              CONTENIDO PRINCIPAL
          ========================================== */}

          <div className="relative z-10 w-full max-w-7xl mx-auto">

            {/* =========================================
                ENCABEZADO
            ========================================== */}

            <div
              className="
                w-full
                max-w-3xl
                mx-auto
                text-center
                mb-10
                md:mb-12
              "
            >
              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  tracking-tight
                  leading-tight
                  mb-3
                "
              >
                Planes pensados para tu negocio
              </h2>

              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-gray-300
                  max-w-2xl
                  mx-auto
                  leading-relaxed
                  opacity-90
                "
              >
                Elegí el plan de sitio web + campaña de marketing que mejor
                se adapte a tu etapa
              </p>
            </div>

            {/* =========================================
                GRILLA DE PLANES
            ========================================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="
                w-full
                grid
                grid-cols-1
                md:grid-cols-3
                gap-6
                lg:gap-8
                items-stretch
              "
            >

              {/* =====================================
                  BÁSICO
              ====================================== */}

              <motion.div
                variants={itemVariants}
                className="
                  flex
                  w-full
                  min-w-0
                  h-full

                  [&>div]:!w-full
                  [&>div]:max-w-none
                "
              >
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

              {/* =====================================
                  EMPRENDEDOR - DESTACADO
              ====================================== */}

              <motion.div
                variants={itemVariants}
                className="
                  flex
                  w-full
                  min-w-0
                  h-full
                  md:-translate-y-3

                  [&>div]:!w-full
                  [&>div]:max-w-none
                "
              >
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

              {/* =====================================
                  ÉLITE
              ====================================== */}

              <motion.div
                variants={itemVariants}
                className="
                  flex
                  w-full
                  min-w-0
                  h-full

                  [&>div]:!w-full
                  [&>div]:max-w-none
                "
              >
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

            {/* =========================================
                BANNER DE AUDITORÍA
            ========================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                w-full
                max-w-2xl
                mx-auto
                mt-12
                md:mt-14
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-sm
                  px-5
                  py-4
                  sm:px-7
                  sm:py-5
                  text-center
                  shadow-lg
                "
              >
                <p
                  className="
                    text-sm
                    sm:text-base
                    md:text-lg
                    italic
                    text-gray-200
                    leading-relaxed
                  "
                >
                  ¿No estás seguro de qué plan elegir? Te ayudamos con una{" "}
                  <a
                    href="https://wa.me/5493517961371?text=Hola!%20Me%20interesa%20agendar%20una%20auditoría%20gratuita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      font-bold
                      text-amber-300
                      underline
                      underline-offset-4
                      hover:text-amber-200
                      transition-colors
                    "
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