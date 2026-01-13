const QuestionComponent = ({ onAnswer, question, Qname }) => {
  const options = [-2, -1, 0, 1, 2]

  return (
    <section className="w-full flex-shrink-0 p-2 bg-slate-700 rounded skew-2 py-6">
      <div className="-skew-1">
        <h2 className="text-xl mb-6 italic opacity-70">"{question}"</h2>

        <div className="flex justify-between mb-5 items-center">
          {options.map((value) => {
            const size = 32 + Math.abs(value) * 14

            return (
              <label
                key={value}
                className="cursor-pointer"
              >
                {/* radio REAL (oculto) */}
                <input
                  type="radio"
                  name={Qname}
                  value={value}
                  onChange={() => onAnswer(Qname, value)}
                  className="peer hidden"
                />

                {/* radio VISUAL */}
                <div
                  style={{
                    width: size,
                    height: size,
                  }}
                  className={`
                    rounded-full
                    bg-cover bg-center
                    border-2 border-white/30
                    flex items-center justify-center

                    transition-all duration-200
                    peer-checked:scale-104
                    peer-checked:border-ps-accent
                    peer-checked:ring-3
                    peer-checked:ring-ps-accent/40
                    peer-checked:bg-[url('/textures/check.svg')]
                    peer-checked:bg-size-[auto_${size}px]
                    peer-checked:bg-no-repeat

                    group
                  `}
                />
              </label>
            )
          })}
        </div>

        <div className="flex justify-between text-sm opacity-70">
          <span>En desacuerdo</span>
          <span>De acuerdo</span>
        </div>
      </div>
    </section>
  )
}

export default QuestionComponent;
