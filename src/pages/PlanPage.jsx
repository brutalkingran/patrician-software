import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent";
import PlanCard from "../components/ui/PlanCard";
import { AnimatePresence, motion } from "framer-motion";

const PlanPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])


  return (
    <AnimatePresence mode="wait">
      { loading ? (
        <LoadingComponent key="loader" />
      ) : (
        <motion.main
          className="flex flex-col justify-center bg-ps-blue px-4 py-10 h-min-screen md:h-screen md:bg-[url(/logo_tr.svg)] bg-center bg-no-repeat"
          key="plans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl/8 font-bold text-center mb-2 md:text-6xl">
            Planes pensados para tu negocio
          </h2>
          <p className="text-center text-sm opacity-80 mb-8 md:text-3xl">
            Elegí el plan de sitio web + campaña de marketing que mejor se adapte a tu etapa
          </p>

          <div className="flex flex-col gap-6 md:flex-row justify-center md:mt-8">
            {/* BASICO */}
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
                "Ideal para validar una idea o negocio nuevo"
              ]}
              cta="Empezar"
            />

            {/* MEDIO */}
            <PlanCard
              title="Emprendedor"
              realPrice=" $ 844,331.90 "
              price=" $ 649,486.08"
              mensualidad=" $ 64,948.61"
              subtitle="Más ventas, más control, mejores decisiones"
              highlighted
              features={[
                "Reunión previa al proyecto",
                "Diseño enfocado a conversión",
                "Campañas multi-canal (Meta + Google)	",
                "Suscripción a Newsletter",
                "Anuncios animados",
                "Diseño a medida",
                "Automatización básica de leads"
              ]}
              cta="Quiero este plan"
            />

            {/* PRO */}
            <PlanCard
              title="Élite"
              realPrice="$ 1,317,531.90 "
              price="$ 1,013,486.08"
              mensualidad="$ 101,348.61"
              subtitle="Para negocios que ya juegan en serio"
              features={[
                "Todo lo anterior",
                "Reuniones más frecuentes",
                "Funnel completo de ventas",
                "Marketing agresivo y escalable",
                "Automatizaciones avanzadas (emails, WhatsApp, CRM)",
                "Soporte prioritario",
                "Dirección estratégica personalizada",
              ]}
              cta="Hablar con un asesor"
            />
          </div>

            <p className="text-center mt-9 text-2xl italic">¿No estás seguro de qué plan elegir? Te ayudamos con una <a href="https://wa.me/5493517961371?text=Hola!%20Me%20interesa%20agendar%20una%20auditoría%20gratuita%20" className="font-bold text-amber-200 underline cursor-pointer">auditoría gratuita</a>.</p>
        </motion.main>
      )}
    </AnimatePresence>
  )

}

export default PlanPage