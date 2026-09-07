import Section from "./Section";
import TabletMockup from "./ui/TabletMockup";

const BENEFICIOS_MARKETING = [
  "Segmentación hiperprecisa por ubicación, intereses y comportamiento",
  "Medición exacta en tiempo real del retorno de inversión (ROI)",
  "Capte clientes calificados listos para comprar desde el primer día",
  "Escalabilidad flexible ajustada al presupuesto de su negocio",
  "Campañas optimizadas en Meta (Instagram/Facebook) y Google Search",
];

const MarketingSection = ({ index = 2 }) => {
  const mediaPosition = index % 2 === 0 ? "left" : "right";

  return (
    <Section
      index={index}
      mediaPosition={mediaPosition}
      title={
        <>
          Inversión Inteligente con{" "}
          <span className="italic font-normal underline decoration-ps-lblue decoration-2 underline-offset-8">
            Paid Media
          </span>
        </>
      }
      subtitle="Llegue exactamente a las personas interesadas en sus servicios sin desperdiciar presupuesto."
      tag="Marketing Digital"
      description="Transforme la presencia de su marca en un canal directo de conversión mediante anuncios estratégicos:"
      messages={BENEFICIOS_MARKETING}
      extraContent={
        <p className="mt-4 text-xs md:text-sm opacity-80 italic border-l-2 border-ps-lblue/50 pl-3 leading-relaxed">
          Olvídese de publicar contenido a ciegas sin ver resultados. Convertimos cada anuncio en una oportunidad real de venta y crecimiento constante.
        </p>
      }
    >
      {/* Pizarra Táctica con Gráfico STONKS */}
      <TabletMockup>
        <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between relative bg-[radial-gradient(#334155_1px,transparent_1px)] bg-size-[14px_14px]">

          {/* HEADER DE LA PIZARRA */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 z-10">
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-ps-lblue font-semibold">
                Estrategia de Anuncios
              </span>
              <h3 className="text-base sm:text-xl font-bold font-serif text-white flex items-center gap-2">
                STONKS
              </h3>
            </div>
            <span className="text-emerald-400 text-xs sm:text-sm font-mono font-bold bg-emerald-500/15 px-2.5 py-1 rounded border border-emerald-500/30 flex items-center gap-1">
              +340% 🚀
            </span>
          </div>

          {/* GRÁFICO SVG ASCENDENTE (STONKS) */}
          <div className="relative w-full h-28 sm:h-36 my-auto flex items-end">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" fill="none">
              {/* Guías punteadas */}
              <line x1="0" y1="30" x2="300" y2="30" stroke="#334155" strokeDasharray="3 3" opacity="0.6" />
              <line x1="0" y1="70" x2="300" y2="70" stroke="#334155" strokeDasharray="3 3" opacity="0.6" />

              {/* Degradado bajo la curva */}
              <defs>
                <linearGradient id="stonksGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M 0 100 Q 50 90 90 75 T 180 50 T 240 25 L 285 8 L 285 120 L 0 120 Z"
                fill="url(#stonksGrad)"
              />

              {/* Línea Verde Stonks */}
              <path
                d="M 0 100 Q 50 90 90 75 T 180 50 T 240 25 L 285 8"
                stroke="#10b981"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Cabeza de la Flecha */}
              <path
                d="M 268 8 L 286 7 L 282 24"
                stroke="#10b981"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Puntos destacados de interacción */}
              <circle cx="90" cy="75" r="3.5" fill="#34d399" />
              <circle cx="180" cy="50" r="3.5" fill="#34d399" />
              <circle cx="285" cy="8" r="5" fill="#10b981" className="animate-ping" />
              <circle cx="285" cy="8" r="5" fill="#34d399" />
            </svg>
          </div>

          {/* FOOTER CON MÉTRICAS DE IMPACTO */}
          <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-2 z-10 text-center">
            <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
              <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">Alcance</p>
              <p className="text-xs sm:text-sm font-bold text-white">125K</p>
            </div>
            <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
              <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">Costo / Lead</p>
              <p className="text-xs sm:text-sm font-bold text-ps-lblue">-40%</p>
            </div>
            <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
              <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">Retorno (ROAS)</p>
              <p className="text-xs sm:text-sm font-bold text-emerald-400">5.2x 📈</p>
            </div>
          </div>

        </div>
      </TabletMockup>
    </Section>
  );
};

export default MarketingSection;