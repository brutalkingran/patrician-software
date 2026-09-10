import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const { title, category, image, url, virtues } = project;
  const Component = url ? "a" : "div";

  const isSoftware = category === "software";

  // Colores dinámicos sutiles según la categoría
  const categoryTextColor = isSoftware ? "text-ps-lblue" : "text-ps-green";
  const hoverBorderColor = isSoftware
    ? "group-hover:border-ps-lblue/50"
    : "group-hover:border-ps-green/50";
  const badgeBorderColor = isSoftware
    ? "border-ps-lblue/30 bg-ps-lblue/10"
    : "border-ps-green/30 bg-ps-green/10";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Component
        href={url || undefined}
        target={url ? "_blank" : undefined}
        rel={url ? "noopener noreferrer" : undefined}
        className={`
          group relative block w-full h-48 md:h-52 
          rounded-2xl overflow-hidden 
          border border-ps-white/10 
          bg-ps-blue 
          shadow-lg hover:shadow-2xl hover:shadow-ps-blue/40
          transition-all duration-300
          ${url ? "cursor-pointer" : "cursor-default"}
        `}
      >
        {/* Imagen de fondo rotada con zoom en Hover */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              w-[125%] h-[125%] -top-[12%] -left-[12%] 
              object-cover 
              -rotate-6 group-hover:rotate-0 group-hover:scale-105 
              transition-transform duration-500 ease-out 
              opacity-65 group-hover:opacity-85
            "
          />
        </div>

        {/* Degradado para legibilidad */}
        <div className="absolute inset-0 bg-linear-to-t from-ps-blue via-ps-blue/60 to-ps-blue/10 group-hover:via-ps-blue/40 transition-colors duration-300" />

        {/* Borde sutil dinámico que reacciona al hover según la categoría */}
        <div
          className={`absolute inset-0 rounded-2xl border border-transparent transition-colors duration-300 pointer-events-none ${hoverBorderColor}`}
        />

        {/* Contenido Superior: Categoría y Título */}
        <div className="relative z-10 p-4 flex flex-col justify-between h-full">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span
                className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border backdrop-blur-xs ${categoryTextColor} ${badgeBorderColor}`}
              >
                {isSoftware ? "Software" : "Paid Media"}
              </span>
              <h3 className="text-lg md:text-xl font-serif font-bold text-ps-white mt-1.5 leading-tight drop-shadow-md">
                {title}
              </h3>
            </div>

            {url && (
              <div className="p-1 bg-ps-white/10 text-ps-gold font-mono group-hover:text-ps-gold group-hover:bg-ps-white/20 transition-all text-xs">
                Ver
              </div>
            )}
          </div>

          {/* Contenido Inferior: Virtues / Métricas */}
          {virtues && virtues.length > 0 && (
            <div className="grid grid-cols-2 gap-2 border-t border-ps-white/10 pt-2.5 mt-auto">
              {virtues.map((v, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-base md:text-lg font-serif font-extrabold text-ps-gold leading-none">
                    {v.value}
                  </span>
                  <span className="text-[10px] text-ps-white/70 font-medium uppercase tracking-wider mt-0.5 truncate">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Component>
    </motion.div>
  );
};

export default ProjectCard;