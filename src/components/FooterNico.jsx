import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#06152B] text-white font-serif border-t border-white/20">

      {/* Contenedor principal con padding para dejar espacio a los bordes laterales */}
      <div className="relative max-w-6xl mx-auto px-12 md:px-20 py-14">

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">

          {/* COLUMNA 1 */}
          <div>
            <h2 className="text-2xl font-bold tracking-widest uppercase text-white">
              PATRICIAN{" "}
              <span className="text-[#38bdf8]">
                SOFTWARE
              </span>
            </h2>

            <p className="mt-4 max-w-xs text-sm text-gray-300 leading-relaxed italic">
              Figura suprema de la élite, forjada en la cima del orden social, cuya sola presencia encarna poder, prestigio y autoridad.
            </p>
          </div>

          {/* COLUMNA 2 */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-widest text-white">
              Servicios
            </h3>

            <div className="w-9 h-[2px] bg-white mt-2.5 mb-5" />

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Diseño Web
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  E-commerce
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-widest text-white">
              Contacto
            </h3>

            <div className="w-9 h-[2px] bg-white mt-2.5 mb-5" />

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3.5">
                <div className="mt-1 text-[#38bdf8]">
                  <FaMapMarkerAlt size={15} />
                </div>
                <span>Catamarca, Argentina</span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 text-[#38bdf8]">
                  <FaEnvelope size={15} />
                </div>
                <span className="break-all">contacto@patrician.com</span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 text-[#38bdf8]">
                  <FaClock size={15} />
                </div>
                <span>Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEPARADOR */}
        <div className="mt-12 h-px bg-white/20" />

        {/* PARTE INFERIOR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-xs text-gray-400 text-center md:text-left">
            © 2026 Patrician-software. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Términos y Condiciones
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;