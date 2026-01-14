import { useState } from "react"
import QuestionComponent from "../components/ui/QuestionComponent"
import { FaLongArrowAltRight } from "react-icons/fa"
import { useNavigate } from "react-router"

const ClientFormPage = () => {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isDark, setIsDark] = useState(false)

  const questions = [
    { key: 'stock', question: 'Tengo problemas para gestionar mi stock' },
    { key: 'control', question: 'No manejo un buen control de los datos' },
    { key: 'alcance', question: 'Quiero que más gente conozca mi negocio' },
    { key: 'mejora', question: 'Quiero mejorar mi negocio' },
  ]

  const total = questions.length
  const currentQuestionKey = questions[current].key

  return (
    <main className="bg-ps-blue min-h-screen overflow-hidden flex flex-col justify-center md:bg-[url(logo_tr.svg)] bg-center bg-no-repeat">
      <h1 className="text-3xl md:text-5xl text-center p-4">Completá el Test</h1>

      <p className="text-center text-1xl opacity-80 mb-8 md:text-2xl">
        Responde las siguientes afirmaciones según tu criterio. Luego de seleccionar una opción, presiona el botón "continuar".
      </p>

      <div className="overflow-hiddenpy-1">
        <div
          className="flex transition-transform duration-500 "
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {questions.map(q => (
            <QuestionComponent
              isDark={current % 2 === 0}
              key={q.key}
              Qname={q.key}
              question={q.question}
              value={answers[q.key]}
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
          className="mt-8 py-3 rounded bg-white w-1/3 mx-auto flex items-center justify-center disabled:opacity-20 text-ps-mblue disabled:hover:cursor-not-allowed hover:cursor-pointer transition-all hover:bg-ps-mblue hover:text-ps-white"
        >
          {current === total - 1 ? 'Finalizar' : 'Continuar'}
          <FaLongArrowAltRight className="ml-3" />
        </button>
      </div>
    </main>
  )
}

export default ClientFormPage
