import { useNavigate } from "react-router";
import { FiEdit3 } from "react-icons/fi";

const FooterComponent = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <button onClick={() => navigate('/test')} className="absolute right-5 bottom-5 rounded-4xl px-3 py-2 bg-ps-white text-center text-ps-blue text-sm">
        <p>¿Querés saber cómo podemos ayudarte?</p>
        <div className="flex flex-row items-center justify-center gap-2">
          <span><FiEdit3 size={18} /></span>
          <p className="font-bold">Resolvé este sencillo test</p>
        </div>
      </button>
    </footer>
  )
}

export default FooterComponent