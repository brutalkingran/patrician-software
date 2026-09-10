import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "../data/projectsData";

const TABS = [
  { id: "all", label: "Todos" },
  { id: "software", label: "Software" },
  { id: "marketing", label: "Marketing" },
];

const ProjectsSection = ({ variant = "blue" }) => {
  const [filter, setFilter] = useState("all");
  const isDark = variant === "blue";

  const projectsFiltrados = PROJECTS_DATA.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  // Mapeo exclusivo de color de texto según la categoría
  const getTabTextColor = (tabId, isActive) => {
    if (isActive) {
      return isDark
        ? "bg-ps-gold text-ps-blue font-bold shadow-md shadow-ps-gold/20"
        : "bg-ps-blue text-ps-white shadow-md";
    }

    if (tabId === "software") {
      return isDark ? "text-ps-lblue hover:text-ps-white" : "text-ps-blue hover:text-ps-mblue";
    }
    if (tabId === "marketing") {
      return isDark ? "text-ps-green hover:text-ps-green/80" : "text-ps-dgreen hover:text-ps-dgreen/80";
    }
    return isDark ? "text-ps-white/70 hover:text-ps-white" : "text-ps-blue/70 hover:text-ps-blue";
  };

  return (
    <section className="w-full py-12 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Cabecera y Filtros */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
        <div>
          <span
            className={`text-xs font-serif font-bold uppercase tracking-widest ${isDark ? "text-ps-gold" : "text-ps-dgreen"
              }`}
          >
            Casos de Éxito
          </span>
          <h2
            className={`text-2xl md:text-3xl font-serif font-bold ${isDark ? "text-ps-white" : "text-ps-blue"
              }`}
          >
            Proyectos Destacados
          </h2>
        </div>

        {/* Tab de Filtros con colores de texto diferenciados */}
        <div
          className={`font-mono flex p-1 rounded-xl border backdrop-blur-md transition-colors ${isDark
              ? "bg-ps-white/10 border-ps-white/15"
              : "bg-ps-blue/5 border-ps-blue/10"
            }`}
        >
          {TABS.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`
                  relative px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer
                  ${getTabTextColor(tab.id, isActive)}
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grilla Compacta */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        <AnimatePresence mode="popLayout">
          {projectsFiltrados.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;