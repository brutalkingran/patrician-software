import { Subtitle, Title } from "./ui/TextComponents";
import FigureSweepComponent from "./ui/FigureSweepComponent";
import ImageComponent from "./ui/ImageComponent";

const MarketingComponent = () => {
  return (
    <section className="mt-5 flex flex-col mx-auto justify-center md:w-1/2">
      <Title text={"El marketing es clave"} />

      <p className="my-5 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus doloremque quasi voluptatum atque. Aspernatur ut, beatae nam, nesciunt temporibus adipisci, iusto labore reiciendis doloremque at animi vero velit quas!</p>

      <p className="my-5 px-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nihil dolorem ipsa modi assumenda ipsum accusamus dignissimos accusantium. Iste voluptas vel veniam ducimus debitis repellendus sed earum rerum voluptatibus asperiores.</p>

      <FigureSweepComponent>
        <ImageComponent
          imgSrcMbl={"/img/electro_m.jpg"}
          imgSrcDsktp={"/img/electro_d.png"}
          title={"Tu nuevo e-Commerce"}
          alt={"e-commerce"}
          link={"https://google.com"}
          description={"Comprar en tu emprendimiento jamás había sido tan conveniente."}
        />
        <ImageComponent
          imgSrcMbl={"/img/electro_m.jpg"}
          imgSrcDsktp={"/img/electro_d.png"}
          title={"Aaaa"}
          alt={"A"}
          link={"https://google.com"}
          description={"ASD"}
        />
      </FigureSweepComponent>
    </section>
  )
}

export default MarketingComponent