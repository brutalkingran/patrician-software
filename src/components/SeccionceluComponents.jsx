import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CarruselComponent from "./CarruselComponent";

const EliteSection = () => {
  const canvasRef = useRef(null);

  const mensajesCarrusel = [
    "Más presencia digital.",
    "Más impacto visual.",
    "Más clientes para tu marca.",
    "Una identidad que marque la diferencia.",
  ];

  // Duplicamos los mensajes para lograr el efecto infinito
  const duplicatedMensajes = [
    ...mensajesCarrusel,
    ...mensajesCarrusel,
  ];

  /* ========================================= */
  /* PARTÍCULAS DEL FONDO */
  /* ========================================= */

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 1;

        this.speedX =
          Math.random() * 0.4 - 0.2;

        this.speedY =
          Math.random() * 0.4 - 0.2;

        this.opacity =
          Math.random() * 0.35 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;

        if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;

        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;

        ctx.fill();
      }
    }

    const createParticles = () => {
      particles = [];

      const numberOfParticles =
        window.innerWidth < 768 ? 45 : 80;

      for (
        let i = 0;
        i < numberOfParticles;
        i++
      ) {
        particles.push(
          new Particle()
        );
      }
    };

    createParticles();

    const connectParticles = () => {
      for (
        let a = 0;
        a < particles.length;
        a++
      ) {
        for (
          let b = a;
          b < particles.length;
          b++
        ) {
          const dx =
            particles[a].x -
            particles[b].x;

          const dy =
            particles[a].y -
            particles[b].y;

          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            );

          if (distance < 120) {
            ctx.beginPath();

            ctx.strokeStyle =
              "rgba(59, 130, 246, 0.08)";

            ctx.lineWidth = 1;

            ctx.moveTo(
              particles[a].x,
              particles[a].y
            );

            ctx.lineTo(
              particles[b].x,
              particles[b].y
            );

            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();

      animationFrameId =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, []);

  return (
    <section className="relative z-10 w-full bg-white text-gray-900 py-16 md:py-20 px-4 md:px-8 overflow-hidden">

      {/* ========================================= */}
      {/* FONDO DE PARTÍCULAS */}
      {/* ========================================= */}

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      />


      {/* ========================================= */}
      {/* CONTENEDOR PRINCIPAL */}
      {/* ========================================= */}

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">


        {/* ========================================= */}
        {/* COLUMNA IZQUIERDA - CELULAR */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex justify-center items-center w-full order-2 lg:order-1 px-2"
        >

          {/* CELULAR */}

          <div className="relative mx-auto border-gray-950 bg-gray-950 border-[10px] rounded-[2.7rem] h-[500px] w-[245px] sm:h-[560px] sm:w-[275px] shadow-2xl">


            {/* ========================================= */}
            {/* BOTONES DEL CELULAR */}
            {/* ========================================= */}

            <div className="w-[3px] h-[32px] bg-gray-800 absolute -left-[13px] top-[72px] rounded-l-lg" />

            <div className="w-[3px] h-[46px] bg-gray-800 absolute -left-[13px] top-[124px] rounded-l-lg" />

            <div className="w-[3px] h-[46px] bg-gray-800 absolute -left-[13px] top-[178px] rounded-l-lg" />

            <div className="w-[3px] h-[56px] bg-gray-800 absolute -right-[13px] top-[142px] rounded-r-lg" />


            {/* ========================================= */}
            {/* NOTCH */}
            {/* ========================================= */}

            <div className="absolute top-0 inset-x-0 flex justify-center z-20">

              <div className="absolute top-3 w-24 h-4 bg-black rounded-full shadow-inner" />

            </div>


            {/* ========================================= */}
            {/* PANTALLA */}
            {/* ========================================= */}

            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-blue-950 relative z-10">

              <CarruselComponent />

            </div>

          </div>

        </motion.div>


        {/* ========================================= */}
        {/* COLUMNA DERECHA - TEXTOS */}
        {/* ========================================= */}

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full order-1 lg:order-2 px-2">


          {/* ========================================= */}
          {/* TÍTULO */}
          {/* ========================================= */}

          <motion.h3
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-3xl md:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight mb-8 text-gray-950 leading-tight"
          >

            Llegó el momento de superarlos.

            <br />

            <span className="text-blue-700">
              Sumate a la élite
            </span>{" "}

            de marcas que ya están un paso adelante.

          </motion.h3>


          {/* ========================================= */}
          {/* CONTENEDOR DE TEXTOS */}
          {/* ========================================= */}

          <div className="w-full mb-10">


            {/* ========================================= */}
            {/* VISTA MÓVIL */}
            {/* ========================================= */}

            <div className="block lg:hidden overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-2">

              <motion.div
                className="flex w-max gap-12 items-center"
                animate={{
                  x: [0, "-50%"],
                }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >

                {duplicatedMensajes.map(
                  (texto, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4 flex-shrink-0"
                    >

                      <p className="text-gray-600 text-lg md:text-xl font-medium tracking-wide whitespace-nowrap">

                        {texto}

                      </p>

                      <span className="w-2 h-2 rounded-full bg-blue-600 block flex-shrink-0" />

                    </div>

                  )
                )}

              </motion.div>

            </div>


            {/* ========================================= */}
            {/* VISTA ESCRITORIO */}
            {/* ========================================= */}

            <div className="hidden lg:flex flex-col gap-4 text-left w-full select-none cursor-default">

              {mensajesCarrusel.map(
                (texto, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="flex items-center gap-4 border-l-4 border-blue-600 pl-4 py-1 transition-all duration-300 hover:border-gray-950 hover:translate-x-2"
                  >

                    <p className="text-gray-700 text-lg font-medium tracking-wide">

                      {texto}

                    </p>

                  </motion.div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default EliteSection;