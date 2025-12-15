import FigureSweepComponent from "./ui/FigureSweepComponent";
import ImageComponent from "./ui/ImageComponent";

const ExpertsComponents = () => {
  return (
    <section className="p-3 flex flex-col justify-center items-start md:w-1/2">
      <h2 className="text-3xl font-serif">Expertos en la Excelencia</h2>

      <p className="mt-5">
        Olvídese de sitios web abandonados o community managers que no muestran crecimiento.
      </p>

      <p className="my-3">
        <strong>Patrician Software</strong> aspira a aprovechar todas y cada una de las herramientas que la web nos deja a disposición:
      </p>

      <ul className="ml-8 mt-1 list-disc">
        <li>
          Alto posicionamiento en las redes y motores de búsqueda
        </li>
        <li>
          Experiencia de usuario de calidad
        </li>
        <li>
          Publicidad directo al público que más lo necesita
        </li>
        <li>
          Automatización
        </li>
        <li>
          Abarcamos público angloparlante
        </li>
        <li>
          ¿Algo más? Dejá que nuestros proyectos hablen por nosotros
        </li>
      </ul>

      <FigureSweepComponent>
        <ImageComponent imgSrc={"/img/cartx.webp"} title={"A"} alt={"A"} description={"ASD"} />
      </FigureSweepComponent>

    </section>
  )
}

export default ExpertsComponents