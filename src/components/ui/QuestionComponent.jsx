const QuestionComponent = ({ question, Qname }) => {
  return (
    <section className="w-full flex-shrink-0 p-4 bg-ps-blue rounded-2xl">
      <h2 className="text-xl mb-6">{question}</h2>

      <div
        className="flex justify-between mb-2"
      >
        <input type="radio" name={Qname} value={-2} />
        <input type="radio" name={Qname} value={-1} />
        <input type="radio" name={Qname} value={0} />
        <input type="radio" name={Qname} value={1} />
        <input type="radio" name={Qname} value={2} />
      </div>

      <div className="flex justify-between text-sm opacity-70">
        <span>En desacuerdo</span>
        <span>De acuerdo</span>
      </div>
    </section>
  )
}

export default QuestionComponent;
