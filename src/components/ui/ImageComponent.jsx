const ImageComponent = ({ imgSrc, alt, title, description }) => {
  return (
    <figure
      role="group"
      className="
        relative flex-shrink-0 w-[100%] md:w-full
        aspect-[3/1]
        snap-start overflow-hidden rounded-3xl
      "
    >
      {/* TITULO PROYECTO */}
      { title }

      {/* IMAGEN DEL PRODUCTO */}
      <img
        src={imgSrc}
        alt={alt}
        className={`
          absolute top-1/2 -translate-y-1/2 
          object-contain select-none
          h-[clamp(40%, 60vw, 110%)]
          max-h-[95%]
        `}
        draggable="false"
      />

      {/* TEXTO DEL BANNER */}
      <figcaption>
        {description}
      </figcaption>
    </figure>
  );
};


export default ImageComponent;