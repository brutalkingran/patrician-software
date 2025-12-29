const ImageComponent = ({ imgSrc, alt, title, description, link }) => {
  return (
    <figure
      role="group"
      className="
        shrink-0 w-full
        snap-start
        rounded-3xl
        flex flex-col
        justify-between
        p-6
        text-ps-white
      "
    >
      {/* TITULO PROYECTO */}
      <h3 className="
        text-2xl
        font-serif
        tracking-wide
        text-center
      ">
        {title}
      </h3>

      {/* IMAGEN DEL PRODUCTO */}
      <a
        href={link}
        className="
          flex
          justify-center
          items-center
          flex-1
          cursor-pointer
        "
      >
        <img
          src={imgSrc}
          alt={alt}
          className="
            object-contain
            max-w-full
            select-none
          "
          draggable="false"
        />
      </a>

      {/* TEXTO DEL BANNER */}
      <figcaption className="
        text-sm
        italic
        text-center
        mt-2
      ">
        {description}
        <br />
        <span className="text-xs opacity-80">
          Clickeá en la imagen para ver el proyecto a detalle.
        </span>
      </figcaption>
    </figure>
  );
};

export default ImageComponent;
