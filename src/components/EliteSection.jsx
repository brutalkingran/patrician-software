import Section from "./Section";
import PhoneMockup from "./ui/PhoneMockup";
import CarruselComponent from "./CarruselComponent";

const MENSAJES_EXPERTS = [
  "Alto posicionamiento en redes y motores de búsqueda",
  "Experiencia de usuario de calidad",
  "Publicidad directa al público que más lo necesita",
  "Automatización",
  "Abarcamos público angloparlante",
  "¿Algo más? Dejá que nuestros proyectos hablen por nosotros",
];

const EliteSection = ({ index = 0 }) => {
  return (
    <Section
      index={index}
      mediaPosition="left"
      title={
        <>
          Expertos en la{" "}
          <span className="italic font-normal text-ps-mblue underline decoration-ps-lblue decoration-2 underline-offset-8">
            Excelencia
          </span>
        </>
      }
      subtitle="Olvídese de sitios web abandonados o Community Managers que no muestran progreso."
      tag="Patrician Software"
      description="aspira a aprovechar todas y cada una de las herramientas que la web nos deja a disposición:"
      messages={MENSAJES_EXPERTS}
    >
      <PhoneMockup>
        <CarruselComponent />
      </PhoneMockup>
    </Section>
  );
};

export default EliteSection;