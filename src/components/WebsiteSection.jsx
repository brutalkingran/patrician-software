import Section from "./Section";
import LaptopMockup from "./ui/LaptopMockup";

const BENIFICIOS_WEBSITE = [
  <>
    <strong className="font-bold text-ps-blue">Aparezca en Google:</strong>{" "}
    Posiciónese en los primeros resultados de búsqueda cuando sus clientes lo necesiten.
  </>,
  <>
    <strong className="font-bold text-ps-blue">ChatBots automáticos:</strong>{" "}
    Responda dudas y atienda a sus clientes las{" "}
    <strong className="text-ps-dgreen font-extrabold">24 horas del día, los 7 días de la semana.</strong>
  </>,
  <>
    <strong className="font-bold text-ps-blue">Centralice su marca:</strong>{" "}
    Reúna todos sus contactos, productos y redes en un solo lugar.
  </>,
  <>
    <strong className="font-bold text-ps-blue">Libertad total:</strong>{" "}
    Tome el control absoluto de su presencia sin depender de algoritmos traicioneros.
  </>,
  <>
    <strong className="font-bold text-ps-blue">Escale sus ventas:</strong>{" "}
    Infraestructura lista para{" "}
    <strong className="text-ps-dgreen font-extrabold underline decoration-ps-dgreen underline-offset-2">
      generar ingresos pasivos y automatizar cobros.
    </strong>
  </>,
];

const WebsiteSection = ({ variant = "blue", mediaPosition = "right" }) => {
  return (
    <Section
      variant={variant}
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
      tag="Presencia Online:"
      description="Tome el control absoluto de su marca sin atarse a plataformas de terceros ni diseños genéricos"
      messages={BENIFICIOS_WEBSITE}
    >
      <div className="flex flex-col">
        <LaptopMockup>
          <img
            src="/img/electro_d.png"
            alt="Vista previa sitio web"
            className="w-full h-full object-cover object-top"
          />
        </LaptopMockup>
        <p className="mt-4 text-xs md:text-sm opacity-80 italic border-l-2 border-ps-lblue/50 pl-3 leading-relaxed">
          Piense en aplicaciones que automaticen tareas tediosas o tiendas donde comprar sea una experiencia fluida y conveniente para sus clientes.
        </p>
      </div>
    </Section>
  );
};

export default WebsiteSection;