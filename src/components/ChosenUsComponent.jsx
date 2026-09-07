import { motion } from "framer-motion"

import logo_1 from "/logos/grupo_aluminium_logo_hor_white.png"
import logo_2 from "/logos/electro_logo_hor.png"
import logo_3 from "/logos/manantial_logo.png"
import logo_4 from "/logos/Distri_fandy.png"
import logo_5 from "/logos/queen.png"
import logo_6 from "/logos/airtotal.svg"

const logosCarrusel = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6]

const ChosenUsComponent = () => {
  const duplicatedLogos = [...logosCarrusel, ...logosCarrusel, ...logosCarrusel]

  return (
    <section className="mt-10 pb-16 relative w-full flex flex-col mx-auto justify-center md:w-3/4 z-10">
      <div className="relative z-10">

        {/* TÍTULO Y SUBTÍTULO IMPERIAL */}
        <h2 className="w-full max-w-3xl mx-auto text-center mb-4 px-4 font-serif font-light text-2xl sm:text-3xl md:text-[2.2rem] leading-relaxed text-ps-white tracking-wide">
          ¿Te vas a sumar a la Élite?
          <br />
          Tu competencia{" "}
          <span className="italic font-normal text-ps-lblue underline decoration-ps-lblue/40 underline-offset-8">
            ya nos eligió.
          </span>
        </h2>

        <p className="text-center font-serif text-xs md:text-sm uppercase tracking-[0.25em] text-ps-white/60 mb-12">
          Nuestros clientes
        </p>

        {/* CARRUSEL INFINITO */}
        <div className="w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mb-16">
          <div className="w-full opacity-90">
            <motion.div
              className="flex w-max gap-16 items-center"
              animate={{ x: [0, "-33.33%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Cliente ${index}`}
                  className="h-14 md:h-18 w-auto object-contain shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ChosenUsComponent