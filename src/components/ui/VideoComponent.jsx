const VideoComponent = ({ videoSrc, title, description, link }) => {
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
      {/* TÍTULO PROYECTO */}
      <h3 className="
        text-2xl
        font-serif
        tracking-wide
        text-center
      ">
        {title}
      </h3>

      {/* VIDEO DEL PRODUCTO */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          justify-center
          items-center
          flex-1
          cursor-pointer
        "
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="
            object-contain
            max-w-full
            select-none
            w-175
            rounded
          "
        />
      </a>

      <div className="mt-10">
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
            Clickeá en el video para ver el proyecto a detalle.
          </span>
        </figcaption>
      </div>
    </figure>
  );
};

export default VideoComponent;