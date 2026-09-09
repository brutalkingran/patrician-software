import { FaCheck } from "react-icons/fa";

const PlanCard = ({
  title,
  subtitle,
  realPrice,
  price,
  mensualidad,
  features = [],
  cta,
  highlighted = false,
}) => {
  return (
    <div
      className={`relative overflow-hidden flex flex-col justify-between w-full h-full p-6 sm:p-8 transition-all duration-300 group
        ${highlighted
          ? "bg-ps-blue border-2 border-ps-lblue shadow-2xl md:-translate-y-2 ring-1 ring-ps-lblue/40 text-ps-cream"
          : "bg-ps-blue/80 border border-ps-white/20 text-ps-cream hover:border-ps-lblue/60 hover:shadow-xl"
        }
      `}
    >
      {/* CAPA DE TEXTURA DE MÁRMOL SOLICITADA */}
      <div
        className="absolute inset-0 bg-[url('/wall-texture.jpg')] bg-cover opacity-80 mix-blend-overlay pointer-events-none"
      />

      {/* MARCO DE DOBLE BORDURA INTERNA */}
      <div className="absolute inset-1.5 border border-ps-white/10 pointer-events-none" />

      {/* INSIGNIA IMPERIAL RECOMENDADO */}
      {highlighted && (
        <div className="absolute top-4 right-4 z-20">
          <span className="
    relative overflow-hidden inline-flex items-center justify-center
    bg-yellow-400 text-ps-blue font-serif text-[10px] uppercase font-bold tracking-[0.2em]
    px-2.5 py-0.5
    /* Bordes estilo bisel de lingote */
    border-t border-l border-yellow-100 
    border-b-2 border-r-2
    shadow-sm
  ">
            {/* Brillo blanco oblicuo que atraviesa el lingote */}
            <span className="
      absolute inset-0 
      bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.9)_50%,transparent_70%)] 
      -translate-x-full animate-[shimmer_2s_infinite]
    " />

            <span className="relative z-10">Recomendado</span>
          </span>
        </div>
      )}

      {/* ENCABEZADO Y TARIFAS */}
      <div className="relative z-10 mb-6">
        <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide mb-1 text-ps-cream">
          {title}
        </h3>
        <p className="font-serif italic text-xs sm:text-sm text-ps-cream/70 mb-5 min-h-10 leading-relaxed">
          {subtitle}
        </p>

        {/* CAJA DE PRECIOS */}
        <div className="flex flex-col gap-1 border-t border-b border-ps-white/15 py-4 my-2 bg-ps-white/5 px-4 backdrop-blur-xs">
          {realPrice && (
            <span className="font-serif text-sm text-ps-cream/50 line-through italic decoration-ps-lblue/40 decoration-2">
              {realPrice}
            </span>
          )}
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl sm:text-3xl font-light tracking-tight text-ps-cream">
              {price}
            </span>
            <span className="font-serif text-xs italic text-ps-cream/70">
              / primer pago
            </span>
          </div>
        </div>
      </div>

      {/* LISTA DE CARACTERÍSTICAS */}
      <ul className="relative z-10 flex flex-col gap-3 mb-8 grow justify-start">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-serif text-ps-cream/90 leading-snug">
            <span className="mt-0.5 p-1 bg-ps-lblue/20 border border-ps-lblue/40 shrink-0">
              <FaCheck className="w-2.5 h-2.5 text-ps-lblue" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* BOTÓN Y AVISO DE MANTENIMIENTO */}
      <div className="relative z-10 flex flex-col gap-2 mt-auto">
        <a
          href={`https://wa.me/5493517961371?text=Hola!%20Quisiera%20saber%20más%20sobre%20el%20Plan%20${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            relative overflow-hidden block w-full text-center py-3 px-4 font-serif text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-sm
            ${highlighted
              ? "bg-ps-cream text-ps-blue hover:bg-ps-gold hover:text-ps-blue border border-ps-cream"
              : "bg-ps-white/10 text-ps-cream border border-ps-white/30 hover:bg-ps-cream hover:text-ps-blue"
            }
          `}
        >
          {cta}
        </a>

        <p className="font-serif italic text-[11px] text-center text-ps-cream/60 tracking-wide mt-1">
          Requiere un mantenimiento de <strong className="font-semibold text-ps-cream/80">{mensualidad}</strong> al mes
        </p>
      </div>
    </div>
  );
};

export default PlanCard;