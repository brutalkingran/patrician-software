import { motion } from "motion/react"
import logo_1 from "/logos/grupo_aluminium_logo_hor_white.png"
import logo_2 from "/logos/electro_logo_hor.png"
import logo_3 from "/logos/manantial_logo.png"
import CarruselComponent from "./CarruselComponent"

const logos = [logo_1, logo_2, logo_3]

const mensajesCarrusel = [
  "Estrategias a medida de nivel élite.",
  "Automatización digital y máxima velocidad.",
  "Diseño UX/UI enfocado en alta conversión.",
  "Software robusto, escalable y moderno.",
]

const ChosenUsComponent = () => {
  const duplicatedLogos = [...logos, ...logos]
  const duplicatedMensajes = [...mensajesCarrusel, ...mensajesCarrusel, ...mensajesCarrusel]

  return (
    <>
      {/* SECCIÓN 1: CARRUSEL DE LOGOS */}
      <section className="mt-10 pb-6 relative w-full flex flex-col mx-auto justify-center md:w-3/4">
        <h2 className="font-extralight text-center mb-10 italic text-base md:text-[1.4rem]">
          ¿Te vas a sumar a la Élite? <br />
          Tu competencia <span className="underline text-red-400">ya nos eligió.</span>
        </h2>

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="w-full grayscale opacity-80">
            <motion.div 
              className="flex w-max gap-16 pr-16" 
              animate={{ x: [0, "-50%"] }} 
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              {duplicatedLogos.map((logo, index) => (
                <img 
                  key={index} 
                  src={logo} 
                  alt={`Logo ${index}`} 
                  className="h-16 md:h-20 w-auto object-contain flex-shrink-0" 
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: NUEVA SECCIÓN BLANCA */}
      <section className="relative z-10 w-full bg-white text-gray-900 py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Mensajes */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full overflow-hidden">
            <span className="text-red-500 font-semibold tracking-wider text-xs uppercase mb-3">
              Beneficios Exclusivos
            </span>

            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} 
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-gray-950 leading-tight"
            >
              Llegó el momento de superarlos.<br />
              Sumate a la élite de marcas que ya están un paso adelante.
            </motion.h3>

            {/* Carrusel infinito de textos cortos */}
            <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] mb-10 py-2">
              <motion.div
                className="flex w-max gap-12 pr-12 items-center"
                animate={{ x: [0, "-33.33%"] }} 
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {duplicatedMensajes.map((texto, index) => (
                  <div key={index} className="flex items-center gap-4 flex-shrink-0">
                    <p className="text-gray-600 text-lg md:text-xl font-medium tracking-wide whitespace-nowrap">
                      {texto}
                    </p>
                    <span className="w-2 h-2 rounded-full bg-red-400 block flex-shrink-0" />
                  </div>
                ))}
              </motion.div>
            </div>

            <button className="bg-ps-blue text-ps-white font-bold px-8 py-3 rounded-full hover:bg-ps-mblue transition-colors shadow-md">
              !Sumante a nuestro proyecto¡
            </button>
          </div>

          {/* Columna Derecha: Chasis del Teléfono en CSS Puro */}
          <div className="flex justify-center items-center w-full">
            <div className="relative mx-auto border-gray-950 bg-gray-950 border-[12px] rounded-[3rem] h-[580px] w-[285px] shadow-2xl">
              
              {/* Botones físicos laterales */}
              <div className="w-[3px] h-[32px] bg-gray-800 absolute -left-[15px] top-[72px] rounded-l-lg"></div>
              <div className="w-[3px] h-[46px] bg-gray-800 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
              <div className="w-[3px] h-[46px] bg-gray-800 absolute -left-[15px] top-[178px] rounded-l-lg"></div>
              <div className="w-[3px] h-[56px] bg-gray-800 absolute -right-[15px] top-[142px] rounded-r-lg"></div>

              {/* Isla Dinámica */}
              <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                <div className="absolute top-3 w-24 h-4 bg-black rounded-full shadow-inner"></div>
              </div>

              {/* Pantalla Interna que contiene e independiza el carrusel */}
              <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-ps-blue relative z-10">
                <CarruselComponent /> 
              </div>
              
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ChosenUsComponent
