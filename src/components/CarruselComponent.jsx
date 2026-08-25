import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const imagenesTrabajos = [
  "/patrician-instagram.jpeg",
  "/electro hobby.jpeg",
  "/airtotal.jpeg",
  "/queen.jpeg",
]

const CarruselComponent = () => {
  const [index, setIndex] = useState(0)
  const [esCelular, setEsCelular] = useState(false)

  // Detecta el tamaño de la pantalla para activar o desactivar el arrastre táctil
  useEffect(() => {
    const verificarPantalla = () => {
      // 1024px coincide con el breakpoint 'lg' de tu grid en Tailwind
      setEsCelular(window.innerWidth < 1024)
    }
    
    verificarPantalla() // Verificación inicial
    window.addEventListener("resize", verificarPantalla)
    return () => window.removeEventListener("resize", verificarPantalla)
  }, [])

  // Temporizador para el cambio automático de imágenes
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagenesTrabajos.length)
    }, 4500) // Cambia cada 4.5 segundos
    return () => clearInterval(intervalo)
  }, [index])

  // Lógica de navegación al soltar el dedo en smartphones
  const manejarDragEnd = (event, info) => {
    const umbralArrastre = 40 // Píxeles mínimos para cambiar de slide
    
    if (info.offset.x < -umbralArrastre) {
      setIndex((prevIndex) => (prevIndex + 1) % imagenesTrabajos.length)
    } else if (info.offset.x > umbralArrastre) {
      setIndex((prevIndex) => (prevIndex - 1 + imagenesTrabajos.length) % imagenesTrabajos.length)
    }
  }

  return (
    <div className="w-full h-full bg-ps-blue relative overflow-hidden touch-pan-y">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          
          // CONDICIONAL TÁCTIL: Si es celular permite arrastrar en X, si es PC se desactiva (false)
          drag={esCelular ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={manejarDragEnd}
          
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 0.5,
            ease: [0.32, 0.72, 0, 1] // Suavizado premium de deslizamiento
          }}
          className="absolute inset-0 w-full h-full bg-ps-mblue select-none"
        >
          <img
            src={imagenesTrabajos[index]}
            alt={`Trabajo realizado ${index + 1}`}
            className="w-full h-full object-cover pointer-events-none"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          
          {/* Respaldo de marca en la paleta de Patrician Software */}
          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-ps-white/10 uppercase tracking-widest pointer-events-none">
            Patrician Case
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    
  )
}

export default CarruselComponent
