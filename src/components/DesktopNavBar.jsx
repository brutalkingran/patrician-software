import { NAV_ITEMS } from "../data/navItems";

const DesktopNavBar = () => {
  return (
    <div className="hidden md:flex fixed top-0 inset-x-0 z-40 justify-center pointer-events-none">
      <nav className="pointer-events-auto mt-4 flex items-center gap-5 lg:gap-7 px-6 py-2.5 bg-ps-blue/40 backdrop-blur-md border border-ps-white/10 shadow-lg">
        {NAV_ITEMS.map(({ href, label, highlight }) => (
          <a
            key={href}
            href={href}
            className={`font-serif text-[0.68rem] lg:text-xs uppercase tracking-[0.15em] transition-colors whitespace-nowrap ${
              highlight
                ? "font-bold text-ps-gold hover:text-ps-white"
                : "text-ps-white/80 hover:text-ps-gold"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default DesktopNavBar;
