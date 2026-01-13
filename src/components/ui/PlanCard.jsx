import { FaCheck } from "react-icons/fa";

const PlanCard = ({
  title,
  subtitle,
  price,
  features,
  cta,
  highlighted = false,
}) => {
  return (
    <div
      className={`
        rounded-2xl p-5 border
        ${highlighted
          ? "bg-white text-ps-blue border-ps-accent shadow-xl scale-[1.02]"
          : "bg-transparent border-white/20 text-white"}
      `}
    >
      {highlighted && (
        <span className="inline-block mb-2 text-xs font-semibold bg-ps-accent text-white px-3 py-1 rounded-full">
          Recomendado
        </span>
      )}

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm opacity-70 mb-4">{subtitle}</p>

      <div className="text-3xl font-bold mb-4">
        {price}
        <span className="text-sm font-normal opacity-70"> / mes</span>
      </div>

      <ul className="flex flex-col gap-2 mb-6 text-sm">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-400"><FaCheck/></span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/5493517961371?text=Hola!%20Quisiera%20saber%20más%20sobre%20el%20Plan%20${title}`}
        className={`
          block w-full text-center py-3 rounded-xl font-semibold
          ${highlighted
            ? "bg-ps-accent text-black bg-amber-300"
            : "bg-white/10 text-white"}
        `}
      >
        {cta}
      </a>
    </div>
  )
}

export default PlanCard