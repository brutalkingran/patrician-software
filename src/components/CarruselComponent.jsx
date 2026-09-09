import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"

const variants = {
  enter: (direccion) => ({
    x: direccion >= 0 ? "100%" : "-100%",
  }),
  center: {
    x: 0,
  },
  exit: (direccion) => ({
    x: direccion >= 0 ? "-100%" : "100%",
  }),
}

const CarruselComponent = ({ images = [] }) => {
  const [[index, direccion], setIndexDireccion] = useState([0, 1])

  const siguiente = useCallback(() => {
    if (!images.length) return
    setIndexDireccion(([prevIndex]) => [(prevIndex + 1) % images.length, 1])
  }, [images.length])

  const anterior = useCallback(() => {
    if (!images.length) return
    setIndexDireccion(([prevIndex]) => [
      (prevIndex - 1 + images.length) % images.length,
      -1,
    ])
  }, [images.length])

  // Temporizador para el cambio automático
  useEffect(() => {
    if (images.length <= 1) return
    const intervalo = setInterval(() => {
      siguiente()
    }, 4500)
    return () => clearInterval(intervalo)
  }, [index, images.length, siguiente])

  const manejarDragEnd = (event, info) => {
    const umbralArrastre = 40
    if (info.offset.x < -umbralArrastre) {
      siguiente()
    } else if (info.offset.x > umbralArrastre) {
      anterior()
    }
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full bg-ps-mblue flex items-center justify-center text-xs text-ps-white/20">
        Sin imágenes
      </div>
    )
  }

  return (
    <div className="w-full h-full bg-ps-blue relative overflow-hidden touch-pan-y">
      <AnimatePresence mode="popLayout" custom={direccion}>
        <motion.div
          key={index}
          custom={direccion}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x" // Activo en móviles y escritorio
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={manejarDragEnd}
          transition={{
            duration: 0.4,
            ease: [0.32, 0.72, 0, 1],
          }}
          className="absolute inset-0 w-full h-full bg-ps-mblue select-none cursor-grab active:cursor-grabbing"
        >
          <img
            src={images[index]}
            alt={`Trabajo realizado ${index + 1}`}
            className="w-full h-full object-cover pointer-events-none"
            onError={(e) => {
              e.target.style.display = "none"
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-ps-white/10 uppercase tracking-widest pointer-events-none">
            Patrician Case
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Puntos indicativos */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-4 bg-ps-lblue" : "w-1.5 bg-ps-white/30"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CarruselComponent