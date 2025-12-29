import FigureSweepComponent from "./ui/FigureSweepComponent";
import ImageComponent from "./ui/ImageComponent";
import { Subtitle, Title } from "./ui/TextComponents";

const ExpertsComponents = () => {
  return (
    <section className="
      flex flex-col 
      justify-center
      md:w-1/2 
      mx-auto
      space-y-8
      pt-5
      mt-5
    ">
      <Title text="Expertos en la Excelencia"/>
      <Subtitle text="Olvídese de sitios web abandonados o Community Managers que no muestran progreso." />

      <div>
        <p className="
          max-w-prose
          px-2
        ">
          <strong className="font-semibold tracking-wide">
            Patrician Software
          </strong>{" "}
          aspira a aprovechar todas y cada una de las herramientas que la web nos deja a disposición:
        </p>

        <ul className="
          px-2
          list-disc 
          list-inside 
          space-y-1
          text-left 
          max-w-md
          pl-5
        ">
          <li>Alto posicionamiento en las redes y motores de búsqueda</li>
          <li>Experiencia de usuario de calidad</li>
          <li>Publicidad directa al público que más lo necesita</li>
          <li>Automatización</li>
          <li>Abarcamos público angloparlante</li>
          <li>¿Algo más? Dejá que nuestros proyectos hablen por nosotros</li>
        </ul>

        <FigureSweepComponent>
          <ImageComponent
            imgSrc={"/img/cartx.webp"}
            title={"Tu nuevo e-Commerce"}
            alt={"e-commerce"}
            link={"https://google.com"}
            description={"Comprar en tu emprendimiento jamás había sido tan conveniente."}
          />
          <ImageComponent
            imgSrc={"/img/cartx.webp"}
            title={"Aaaa"}
            alt={"A"}
            link={"https://google.com"}
            description={"ASD"}
          />
        </FigureSweepComponent>
      </div>
    </section>
  )
}

export default ExpertsComponents;
