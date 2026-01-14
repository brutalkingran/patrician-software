import PlanCard from "../components/ui/PlanCard"

const PlanPage = () => {
  return (
    <section className="flex flex-col justify-center bg-ps-blue px-4 py-10 h-min-screen md:h-screen md:bg-[url(logo_tr.svg)] bg-center bg-no-repeat">
      <h2 className="text-3xl/8 font-bold text-center mb-2 md:text-6xl">
        Planes pensados para tu negocio
      </h2>
      <p className="text-center text-sm opacity-80 mb-8 md:text-3xl">
        Elegí el plan que mejor se adapte a tu etapa
      </p>

      <div className="flex flex-col gap-6 md:flex-row justify-center md:mt-8">
        <PlanCard
          title="Inicial"
          price="$180.000"
          subtitle="Ideal para empezar"
          features={[
            "Tu sitio web profesional",
            "Campañas de marketing mensuales",
            "Soporte por WhatsApp",
          ]}
          cta="Empezar"
        />

        <PlanCard
          title="Profesional"
          price="$365.000"
          subtitle="El más elegido"
          highlighted
          features={[
            "Control de Stock",
            "Campañas de marketing con mayor alcance",
            "Clientes y seguimiento",
            "Tu nuevo e-Commerce",
            "Reportes y métricas",
          ]}
          cta="Quiero este plan"
        />

        <PlanCard
          title="Avanzado"
          price="$650.000"
          subtitle="Para negocios en crecimiento"
          features={[
            "Todo lo anterior",
            "Multiusuario",
            "Integración de SaaS",
            "Software a medida",
          ]}
          cta="Hablar con un asesor"
        />
      </div>
    </section>
  )

}

export default PlanPage