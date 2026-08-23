import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#05080D] text-white font-serif">

      {/* Brillos azules de fondo */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#0A4660]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#147EA3]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Línea superior */}
      <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-[#0A4660] to-transparent" />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative max-w-5xl mx-auto px-8 md:px-12 py-14">

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">

          {/* COLUMNA 1 */}
          <div>
            <h2 className="text-2xl font-bold tracking-widest uppercase">
              PATRICIAN{" "}
              <span className="text-[#147EA3]">
                SOFTWARE
              </span>
            </h2>

            <p className="mt-4 max-w-xs text-sm text-[#AAB7C4] leading-relaxed italic">
              Figura suprema de la élite, forjada en la cima del orden social, cuya sola presencia encarna poder, prestigio y autoridad.
            </p>
          </div>

          {/* COLUMNA 2 */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-widest text-white">
              Servicios
            </h3>

            <div className="w-9 h-[2px] bg-[#147EA3] mt-2.5 mb-5" />

            <ul className="space-y-3 text-sm text-[#AAB7C4]">
              <li>
                <a href="#" className="transition-colors hover:text-[#147EA3]">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#147EA3]">
                  Diseño Web
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#147EA3]">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#147EA3]">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#147EA3]">
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

            <div className="w-9 h-[2px] bg-[#147EA3] mt-2.5 mb-5" />

            <div className="space-y-4 text-sm text-[#AAB7C4]">
              <div className="flex items-start gap-3.5">
                <div className="mt-1 text-[#147EA3]">
                  <FaMapMarkerAlt size={15} />
                </div>
                <span>Catamarca, Argentina</span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 text-[#147EA3]">
                  <FaEnvelope size={15} />
                </div>
                <span className="break-all">contacto@patrician.com</span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 text-[#147EA3]">
                  <FaClock size={15} />
                </div>
                <span>Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEPARADOR */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#0A4660] to-transparent" />

        {/* PARTE INFERIOR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-xs text-[#71808F] text-center md:text-left">
            © 2026 Patrician-software. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-xs text-[#71808F]">
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