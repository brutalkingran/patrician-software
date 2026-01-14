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
      className={`flex flex-col justify-between hover:scale-103 transition-all
        rounded-2xl p-5 border md:w-1/4 md:h-115
        ${highlighted
          ? "bg-white text-ps-blue border-ps-accent shadow-xl scale-[1.02]"
          : "bg-transparent border-white/20 text-white"}
      `}
    >
      {highlighted && (
        <span className="inline-block mb-2 text-xs font-semibold bg-ps-accent text-red-400 px-3 py-1 rounded-full absolute top-3 skew-y-5 left-20 opacity-75">
          Recomendado
        </span>
      )}
      
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm opacity-70 mb-4">{subtitle}</p>

        <div className="text-3xl font-bold mb-4">
          {price}
          <span className="text-sm font-normal opacity-70"> / mes</span>
        </div>
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
          block w-full text-center py-3 rounded-xl font-semibold transition-all
          ${highlighted
          ? "bg-ps-accent text-black bg-amber-300 hover:bg-ps-mblue hover:text-ps-white"
          : "bg-white/10 text-white hover:bg-ps-white hover:text-ps-mblue"}
        `}
      >
        {cta}
      </a>
    </div>
  )
}

export default PlanCard