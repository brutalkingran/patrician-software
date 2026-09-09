import Section from "./Section";
import PhoneMockup from "./ui/PhoneMockup";
import CarruselComponent from "./CarruselComponent";

const IMAGENES_ELITE = [
  "/patrician-instagram.jpeg",
  "/electro hobby.jpeg",
  "/airtotal.jpeg",
  "/queen.jpeg",
];

const MENSAJES_EXPERTS = [
  <>
    <strong className="font-bold text-ps-blue">Alto posicionamiento</strong> en redes y motores de búsqueda.
  </>,
  <>
    <strong className="font-bold text-ps-blue">Experiencia de usuario</strong> de máxima calidad.
  </>,
  <>
    <strong className="font-bold text-ps-blue">Publicidad directa</strong> al{" "}
    <strong className="text-ps-green font-extrabold underline decoration-ps-green underline-offset-2">
      público que más lo necesita.
    </strong>
  </>,
  <>
    <strong className="font-bold text-ps-blue">Automatización</strong> e integración de procesos.
  </>,
  <>
    <strong className="font-bold text-ps-blue">Alcance global:</strong> Abarcamos público angloparlante.
  </>,
  <>
    <strong className="italic text-ps-blue font-bold">¿Algo más?</strong>{" "}
    <span className="underline decoration-ps-blue decoration-2 underline-offset-4 font-semibold text-ps-blue">
      Dejá que nuestros proyectos hablen por nosotros.
    </span>
  </>,
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
        <CarruselComponent images={IMAGENES_ELITE} />
      </PhoneMockup>
    </Section>
  );
};

export default EliteSection;