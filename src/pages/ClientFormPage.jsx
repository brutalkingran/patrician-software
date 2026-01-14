import { useState } from "react"
import QuestionComponent from "../components/ui/QuestionComponent"
import { FaLongArrowAltRight } from "react-icons/fa"
import { useNavigate } from "react-router"

const ClientFormPage = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isDark, setIsDark] = useState(false)

  const allQuestions = [
    { key: 'stock', question: 'Tengo problemas para gestionar mi stock' },
    { key: 'control', question: 'No manejo un buen control de los datos' },
    { key: 'alcance', question: 'Quiero que más gente conozca mi negocio' },
    { key: 'mejora', question: 'Quiero mejorar mi negocio' },
    { key: 'orden', question: 'Siento que mi negocio podría estar mejor organizado' },
    { key: 'tiempo', question: 'Pierdo mucho tiempo en tareas que podrían automatizarse' },
    { key: 'errores', question: 'Los errores por desorden o falta de control me generan pérdidas' },
    { key: 'online', question: 'Mi negocio no aprovecha bien el mundo digital' },
    { key: 'clientes', question: 'Me cuesta atraer nuevos clientes de forma constante' },
    { key: 'ads', question: 'No sé si mi publicidad realmente está dando resultados' },
    { key: 'contenido', question: 'No tengo una estrategia clara para promocionar mi negocio' },
    { key: 'marca', question: 'Siento que mi marca no se ve tan profesional como debería' },
    { key: 'crecer', question: 'Quiero crecer, pero no sé por dónde empezar' },
    { key: 'decisiones', question: 'Tomo decisiones sin datos claros que las respalden' },
    { key: 'techo', question: 'Siento que mi negocio está estancado' },
    { key: 'desorden', question: 'Siento que manejo mi negocio más con intuición que con datos' },
    { key: 'potencial', question: 'Siento que mi negocio tiene más potencial del que hoy aprovecho' },
    { key: 'imagen', question: 'Mi negocio no proyecta la imagen que realmente quiero' },
  ]

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }
  
  const [questions] = useState(() =>
    shuffleArray(allQuestions).slice(0, 8)
  )

  const total = questions.length
  const currentQuestionKey = questions[current].key
  
  return (
    <main className="bg-ps-blue min-h-screen overflow-hidden flex flex-col justify-center bg-[url(/logo_tr.svg)] bg-center bg-no-repeat bg-contain">
      <h1 className="text-3xl md:text-5xl text-center p-4">Completá el Test</h1>

      <p className="text-center text-1xl opacity-80 mb-8 md:text-2xl">
        Responde las siguientes afirmaciones según tu criterio. Luego de seleccionar una opción, presiona el botón "continuar".
      </p>

      <div className="overflow-hiddenpy-1">
        <div
          className="flex transition-transform duration-500 "
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {questions.map((q, index) => (
            <QuestionComponent
              key={q.key}
              Qname={q.key}
              question={q.question}
              value={answers[q.key]}
              isDark={index % 2 === 0}
              currentIndex={index}
              total={total}
              onAnswer={(value) =>
                setAnswers(prev => ({ ...prev, [q.key]: value }))
              }
            />
          ))}
        </div>

        <button
          type="button"
          disabled={answers[currentQuestionKey] == null}
          onClick={() => {
            if (current === total - 1) {
              navigate('/planes')
            } else {
              setCurrent(c => c + 1)
            }
          }}
          className="mt-8 py-3 rounded bg-white w-1/3 mx-auto flex items-center justify-center disabled:opacity-20 text-ps-mblue disabled:hover:cursor-not-allowed hover:cursor-pointer transition-all hover:bg-blue-800 hover:text-ps-white"
        >
          {current === total - 1 ? 'Conocé tu plan para avanzar al siguiente nivel' : <>continuar <FaLongArrowAltRight className="ml-3" /></>}
        </button>
      </div>
    </main>
  )
}

export default ClientFormPage
