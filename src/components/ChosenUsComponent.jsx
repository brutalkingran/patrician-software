import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
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
  const canvasRef = useRef(null)
  const duplicatedLogos = [...logos, ...logos]
  const duplicatedMensajes = [...mensajesCarrusel, ...mensajesCarrusel]

  // EFECTO DE FONDO INTERACTIVO
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles = []
    const particleCount = 45
    const mouse = { x: null, y: null, radius: 140 }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.baseX = this.x
        this.baseY = this.y
        this.density = Math.random() * 30 + 1
      }

      draw() {
        ctx.fillStyle = "rgba(100, 116, 139, 0.15)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }

      update() {
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.hypot(dx, dy)

        let forceDirectionX = dx / distance
        let forceDirectionY = dy / distance

        let maxDistance = mouse.radius
        let force = (maxDistance - distance) / maxDistance

        let directionX = forceDirectionX * force * this.density
        let directionY = forceDirectionY * force * this.density

        if (distance < mouse.radius) {
          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            let dxBase = this.x - this.baseX
            this.x -= dxBase / 10
          }

          if (this.y !== this.baseY) {
            let dyBase = this.y - this.baseY
            this.y -= dyBase / 10
          }
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x
          let dy = particles[a].y - particles[b].y
          let dist = Math.hypot(dx, dy)

          if (dist < 90) {
            ctx.strokeStyle = `rgba(100, 116, 139, ${
              0.08 * (1 - dist / 90)
            })`

            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    const section = canvas.parentElement

    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
      section.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)

      if (section) {
        section.removeEventListener("mousemove", handleMouseMove)
        section.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <>
      {/* ========================================= */}
      {/* SECCIÓN 1: CARRUSEL DE LOGOS */}
      {/* ========================================= */}

      <section className="mt-10 pb-6 relative w-full flex flex-col mx-auto justify-center md:w-3/4">

        <h2 className="font-extralight text-center mb-10 italic text-base md:text-[1.4rem]">
          ¿Te vas a sumar a la Élite? <br />
          Tu competencia{" "}
          <span className="underline text-red-400">
            ya nos eligió.
          </span>
        </h2>

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

          <div className="w-full grayscale opacity-80">

            <motion.div
              className="flex w-max gap-16"
              animate={{ x: [0, "-50%"] }}
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
                  alt={`Logo ${index}`}
                  className="h-16 md:h-20 w-auto object-contain flex-shrink-0"
                />
              ))}

            </motion.div>

          </div>
        </div>
      </section>


      {/* ========================================= */}
      {/* SECCIÓN PRINCIPAL */}
      {/* ========================================= */}

      <section className="relative z-10 w-full bg-white text-gray-900 py-16 md:py-20 px-4 md:px-8 overflow-hidden">

        {/* FONDO DE PARTÍCULAS */}

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

          <div className="flex justify-center items-center w-full order-2 lg:order-1 px-2">

            <div className="relative mx-auto border-gray-950 bg-gray-950 border-[10px] rounded-[2.7rem] h-[500px] w-[245px] sm:h-[560px] sm:w-[275px] shadow-2xl">


              {/* BOTONES DEL CELULAR */}

              <div className="w-[3px] h-[32px] bg-gray-800 absolute -left-[13px] top-[72px] rounded-l-lg"></div>

              <div className="w-[3px] h-[46px] bg-gray-800 absolute -left-[13px] top-[124px] rounded-l-lg"></div>

              <div className="w-[3px] h-[46px] bg-gray-800 absolute -left-[13px] top-[178px] rounded-l-lg"></div>

              <div className="w-[3px] h-[56px] bg-gray-800 absolute -right-[13px] top-[142px] rounded-r-lg"></div>


              {/* NOTCH */}

              <div className="absolute top-0 inset-x-0 flex justify-center z-20">

                <div className="absolute top-3 w-24 h-4 bg-black rounded-full shadow-inner"></div>

              </div>


              {/* PANTALLA */}

              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-ps-blue relative z-10">

                <CarruselComponent />

              </div>

            </div>
          </div>


          {/* ========================================= */}
          {/* COLUMNA DERECHA - TEXTOS */}
          {/* ========================================= */}

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full order-1 lg:order-2 px-2">


            {/* ETIQUETA */}

            <span className="text-red-500 font-semibold tracking-wider text-xs uppercase mb-3">
              Beneficios Exclusivos
            </span>


            {/* ========================================= */}
            {/* TÍTULO */}
            {/* ========================================= */}

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="text-3xl md:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight mb-8 text-gray-950 leading-tight"
            >

              Llegó el momento de superarlos.
              <br />

              Sumate a la élite de marcas que ya están un paso adelante.

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
                  animate={{ x: [0, "-50%"] }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >

                  {duplicatedMensajes.map((texto, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4 flex-shrink-0"
                    >

                      <p className="text-gray-600 text-lg md:text-xl font-medium tracking-wide whitespace-nowrap">
                        {texto}
                      </p>

                      <span className="w-2 h-2 rounded-full bg-red-400 block flex-shrink-0" />

                    </div>

                  ))}

                </motion.div>

              </div>


              {/* ========================================= */}
              {/* VISTA ESCRITORIO */}
              {/* ========================================= */}

              <div className="hidden lg:flex flex-col gap-4 text-left w-full select-none cursor-default">

                {mensajesCarrusel.map((texto, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 border-l-4 border-red-400 pl-4 py-1 transition-all duration-300 hover:border-gray-950 hover:translate-x-1"
                  >

                    <p className="text-gray-700 text-lg font-medium tracking-wide">
                      {texto}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default ChosenUsComponent