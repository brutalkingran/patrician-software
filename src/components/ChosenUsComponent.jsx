import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

import logo_1 from "/logos/grupo_aluminium_logo_hor_white.png"
import logo_2 from "/logos/electro_logo_hor.png"
import logo_3 from "/logos/manantial_logo.png"
import logo_4 from "/logos/Distri_fandy.png"
import logo_5 from "/logos/queen.png"
import logo_6 from "/logos/airtotal.svg"

const logosCarrusel = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6]

// Logos para las tarjetas estáticas de abajo
const logosClientesFijos = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_1,
  logo_4,
  logo_5
]

const ChosenUsComponent = () => {
  const canvasRef = useRef(null)
  const duplicatedLogos = [...logosCarrusel, ...logosCarrusel, ...logosCarrusel]

  // EFECTO DE FONDO INTERACTIVO ORIGINAL
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
    <section className="mt-10 pb-16 relative w-full flex flex-col mx-auto justify-center md:w-3/4 z-10">
      {/* Canvas de fondo */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* ======================================================= */}
      {/* PARTE 1: SECCIÓN ORIGINAL (TÍTULO Y LOGOS EN MOVIMIENTO) */}
      {/* ======================================================= */}
      <div className="relative z-10">

        <h2 className="w-full max-w-3xl mx-auto text-center mb-10 px-4 italic font-extralight text-xl sm:text-2xl md:text-[1.8rem] lg:text-[2rem] leading-relaxed text-white">
          ¿Te vas a sumar a la Élite?
          <br />
          Tu competencia{" "}
          <span className="underline text-red-400">
            ya nos eligió.
          </span>

          <br />
          <br />

            <h1>
              Nuestros clientes
            </h1>
        </h2>

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
                  alt={`Logo ${index}`}
                  /* Agrega grayscale aquí */
                  className="h-16 md:h-20 w-auto object-contain shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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