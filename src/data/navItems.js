import {
  FaHome,
  FaCrown,
  FaGlobe,
  FaBullhorn,
  FaBriefcase,
  FaTags,
  FaEnvelope,
} from "react-icons/fa";

export const NAV_ITEMS = [
  { href: "#inicio", label: "Inicio", icon: FaHome },
  { href: "#excelencia", label: "Por Qué Elegirnos", icon: FaCrown },
  { href: "#sitio-web", label: "Sitio Web", icon: FaGlobe },
  { href: "#marketing", label: "Marketing", icon: FaBullhorn },
  { href: "#proyectos", label: "Proyectos", icon: FaBriefcase, highlight: true },
  { href: "#planes", label: "Planes", icon: FaTags },
  { href: "#contacto", label: "Contacto", icon: FaEnvelope },
];
