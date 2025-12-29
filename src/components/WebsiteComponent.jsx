import { Title } from "./ui/TextComponents";
import FigureSweepComponent from "./ui/FigureSweepComponent";
import ImageComponent from "./ui/ImageComponent";

const WebsiteComponent = () => {
  return (
    <section className="mt-5">
      <Title text={"Un negocio que se respete necesita un sitio web"} />

      <p className="my-5 px-2">Contar con <strong className='underline dark:decoration-rose-400'>tu propio sitio web</strong> para tu emprendimiento es una decisión que podría ahorrarte problemas a largo plazo. Después de todo, <strong className='font-black dark:text-rose-300'>es tu propio espacio</strong>, sin tener que lidiar con algoritmos traicioneros o diseños que no se ajusten a tus gustos.</p>

      <p className="my-5 px-2">Con tu propio sitio web, las posibilidades son <strong className='underline dark:decoration-rose-400'>infinitas</strong>: los resultados de búsqueda en <strong className='font-black dark:text-rose-300'>Google</strong> mostrarán a tu emprendimiento antes que otros, podrás generar ingresos pasivos con anuncios, e incluso podrías ahorrarte <strong className='underline dark:decoration-rose-400'>mil y un dolores de cabeza</strong>.</p>

      <p className="my-5 px-2">Pensá en ese <strong className='font-black dark:text-rose-300'>ChatBot</strong> que responde automáticamente las dudas de tus clientes, en una aplicación que facilita o automatiza tareas tediosas, o en un espacio donde <strong className='underline dark:decoration-rose-400'>centralizás todos tus contactos</strong> para que no tengan que preguntarte si contás con X red social.</p>

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
    </section>
  )
}

export default WebsiteComponent