import { useState } from "react";
import QuestionComponent from "../components/ui/QuestionComponent";

const ClientFormPage = () => {
  const [current, setCurrent] = useState(0)

  return (
    <main className="bg-ps-blue min-h-screen overflow-hidden">
      <h1 className="p-4">Completa el Test:</h1>

      <form id="quiz" className="overflow-hidden px-3">
        <div className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}vw)` }}>
          <QuestionComponent question="Tengo problemas para gestionar mi stock" Qname="stock" />
          <QuestionComponent question="No manejo un buen control de los datos" Qname="control" />
          <QuestionComponent question="Quiero que más gente conozca mi negocio" Qname="alcance" />
          <QuestionComponent question="Quiero mejorar mi negocio" Qname="mejora" />
        </div>
      </form>
    </main>
  )
}

export default ClientFormPage;
