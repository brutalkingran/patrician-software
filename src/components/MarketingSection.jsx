import CarruselComponent from "./CarruselComponent";
import Section from "./Section";
import TabletMockup from "./ui/TabletMockup";

const IMAGENES_MARKETING = [
  "/img/pres1.png",
  "/img/pres2.png",
];

const BENEFICIOS_MARKETING = [
  <>
    <strong className="font-bold text-ps-blue">No es Community Management:</strong>{" "}
    El CM gestiona tus redes y cuida tu comunidad,{" "}
    <strong className="text-ps-blue font-extrabold underline decoration-ps-green decoration-2">
      el Paid Media trae clientes nuevos todos los días.
    </strong>
  </>,
  <>
    <strong className="font-bold text-ps-blue">Le llegás al público que querés:</strong>{" "}
    Segmentación directa para que tu anuncio aparezca en la pantalla de la gente que realmente busca o necesita tu producto.
  </>,
  <>
    <strong className="font-bold text-ps-blue">Mismo contenido, 13 veces más alcance:</strong>{" "}
    Garantizás pasar de 1.700 vistas orgánicas a{" "}
    <strong className="text-ps-green font-extrabold">más de 24.000 personas alcanzadas.</strong>
  </>,
  <>
    <strong className="font-bold text-ps-blue">Cero adivinanzas con el algoritmo:</strong>{" "}
    No dependés de la "suerte" de un Reel. Invertís en pauta y obtenés visibilidad garantizada.
  </>,
  <>
    <strong className="font-bold text-ps-blue">Presupuesto controlado:</strong>{" "}
    Sabés exactamente cuánto cuesta impactar a cada bloque de 1.000 personas ($109 promedio) y qué retorno genera.
  </>,
];

const MarketingSection = ({ variant = "cream", mediaPosition = "left" }) => {
  return (
    <Section
      variant={variant}
      mediaPosition={mediaPosition}
      title={
        <>
          Inversión Inteligente con{" "}
          <span className="italic font-normal underline decoration-ps-blue decoration-2 underline-offset-8 text-ps-blue">
            Paid Media
          </span>
        </>
      }
      subtitle="No es publicar por publicar. Es poner tu negocio directamente frente a los ojos del cliente que te quiere comprar."
      tag="Anuncios Pago"
      description="para que lo entiendas de forma simple y sin rodeos:"
      messages={BENEFICIOS_MARKETING}
    >
      <div className="flex flex-col">
        <TabletMockup>
          <CarruselComponent images={IMAGENES_MARKETING} />
        </TabletMockup>
        <p className="mt-4 text-xs md:text-sm text-ps-blue/90 italic border-l-2 border-ps-blue/40 pl-3 leading-relaxed">
          Un Community Manager mantiene tu casa ordenada; el Paid Media sale a buscar a los miles de clientes que todavía no te conocen pero están listos para comprarte.
        </p>
      </div>
    </Section>
  );
};

export default MarketingSection;