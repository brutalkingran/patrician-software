import Section from "./Section";
import FigureSweepComponent from "./ui/FigureSweepComponent";
import LaptopMockup from "./ui/LaptopMockup";

const BENIFICIOS_WEBSITE = [
  "Aparezca en los primeros resultados de búsqueda en Google",
  "ChatBots automáticos para responder dudas de sus clientes 24/7",
  "Centralice todos sus contactos y redes en un solo lugar",
  "Libertad total sin depender de algoritmos traicioneros",
  "Posibilidad de generar ingresos pasivos y escalar ventas",
];

const WebsiteSection = ({ index = 1 }) => {
  // Calcula la posición para ir alternando lado a lado en cada sección (par = left, impar = right)
  const mediaPosition = index % 2 === 0 ? "left" : "right";

  return (
    <Section
      index={index}
      mediaPosition={mediaPosition}
      title={
        <>
          Un negocio que se respete necesita un{" "}
          <span className="italic font-normal underline decoration-ps-lblue decoration-2 underline-offset-8">
            sitio web
          </span>
        </>
      }
      subtitle="Contar con su propio espacio es una decisión estratégica para evitar imprevistos a largo plazo."
      tag="Presencia Online"
      description="Tome el control absoluto de su marca sin atarse a plataformas de terceros ni diseños genéricos:"
      messages={BENIFICIOS_WEBSITE}
      extraContent={
        <p className="mt-4 text-xs md:text-sm opacity-80 italic border-l-2 border-ps-lblue/50 pl-3 leading-relaxed">
          Piense en aplicaciones que automaticen tareas tediosas o tiendas donde comprar sea una experiencia fluida y conveniente para sus clientes.
        </p>
      }
    >
      {/* Chiche inyectado: Galería / Sweep de Imágenes */}
      <LaptopMockup>
        <img
          src="/img/electro_d.png"
          alt="Vista previa sitio web"
          className="w-full h-full object-cover object-top"
        />
      </LaptopMockup>
    </Section>
  );
};

export default WebsiteSection;