import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import {
  FaHome,
  FaUsers,
  FaCrown,
  FaGlobe,
  FaBullhorn,
  FaBriefcase,
  FaTags,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const NAV_ITEMS = [
  { href: "#inicio", label: "Inicio", icon: FaHome },
  { href: "#clientes", label: "Clientes", icon: FaUsers },
  { href: "#excelencia", label: "Por Qué Elegirnos", icon: FaCrown },
  { href: "#sitio-web", label: "Sitio Web", icon: FaGlobe },
  { href: "#marketing", label: "Marketing", icon: FaBullhorn },
  { href: "#proyectos", label: "Proyectos", icon: FaBriefcase },
  { href: "#planes", label: "Planes", icon: FaTags },
  { href: "#contacto", label: "Contacto", icon: FaEnvelope },
];

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/people/Patrician-Software-MKT/61573901501366/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/patrician.mkt/",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/5493834091942?text=hola,%20estoy%20interesado%20en%20una%20reuni%C3%B3n%20presencial",
  },
];

const MobileNavMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú de navegación"
        aria-expanded={open}
        className="md:hidden fixed top-4 right-4 z-100 flex items-center justify-center w-11 h-11 bg-ps-white/85 text-ps-blue border border-ps-blue/20 shadow-md backdrop-blur-xs transition-colors hover:bg-ps-white"
      >
        <IoMdMenu className="w-6 h-6" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="md:hidden fixed inset-0 z-110 bg-ps-blue flex flex-col"
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú de navegación"
              className="flex items-center justify-center w-11 h-11 text-ps-white border border-ps-white/30 hover:bg-ps-white/10 transition-colors"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-1 px-6 overflow-y-auto">
            {NAV_ITEMS.map(({ href, label, icon: Icon }, index) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="w-full max-w-xs flex items-center gap-3 font-serif uppercase tracking-[0.2em] text-base py-3.5 text-ps-white border-b border-ps-white/15 hover:text-ps-lblue transition-colors"
              >
                <span className="shrink-0 w-6 font-bold text-ms text-ps-gold tracking-normal">
                  {String(index + 1)+")"}
                </span>
                <Icon className="w-4 h-4 shrink-0" />
                <span>{label}</span>
              </a>
            ))}
          </nav>

          {/* REDES SOCIALES */}
          <div className="flex items-center justify-center gap-4 pb-8 pt-2">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 bg-ps-white text-ps-blue border border-ps-white/40 shadow-md transition-all hover:scale-105 hover:bg-ps-lblue"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavMenu;
