import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ps-mblue text-ps-white font-serif border-t border-ps-cream/25">

      {/* Contenedor principal con padding para dejar espacio a los bordes laterales */}
      <div className="relative max-w-6xl mx-auto px-12 md:px-20 md:py-14 py-18">

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">

          {/* COLUMNA 1 */}
          <div>
            <h2 className="pl-1 text-2xl font-bold tracking-widest bg-ps-white text-ps-blue">
              <span className="text-ps-white [-webkit-text-stroke:1.5px_var(--color-ps-blue)]">P</span>atrician
              <span className="text-ps-white [-webkit-text-stroke:1.5px_var(--color-ps-blue)]"> S</span>oftware
            </h2>

            <dl className="md:max-w-full border-l-3 border-white-800 pl-2">
              <dt className="text-1xl font-serif font-semibold tracking-wide">
                Patrician <span className="italic text-sm">(sust.)</span>
              </dt>
              <dd className="mt-1 leading-relaxed font-light font-serif pl-3 text-sm">
                Figura suprema de la élite, forjada en la cima del orden social, cuya sola presencia encarna poder, prestigio y autoridad.
              </dd>
            </dl>
          </div>

          {/* COLUMNA 2 */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-widest text-ps-white">
              Servicios
            </h3>

            <div className="w-9 h-0.5 bg-ps-white mt-2 mb-2" />

            <ul className="space-y-2.5 text-sm text-ps-white">
              <li>
                <span className="transition-colors hover:text-ps-white">
                  Desarrollo Web
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-ps-white">
                  Marketing
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-ps-white">
                  SEO
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-ps-white">
                  Automatización
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-ps-white">
                  Asesoría Tecnológica
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-ps-white">
                  Community Manager
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-widest text-ps-white">
              Contacto
            </h3>

            <div className="w-9 h-0.5 bg-ps-white mt-2 mb-2" />

            <div className="space-y-4 text-sm text-ps-white">
              <div className="flex items-start gap-3.5">
                <div className="mt-1 text-ps-lblue">
                  <FaMapMarkerAlt size={15} />
                </div>
                <span>Catamarca, Argentina</span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 text-ps-lblue">
                  <FaEnvelope size={15} />
                </div>
                <span className="break-all">contacto@patrician-software.com</span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 text-ps-lblue">
                  <FaClock size={15} />
                </div>
                <span>Lun - Vie: 8:00 - 21:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEPARADOR */}
        <div className="mt-8 h-px bg-ps-white/20" />

        {/* PARTE INFERIOR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-xs text-ps-white/80 text-center md:text-left">
            © 2026 Patrician Software. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;