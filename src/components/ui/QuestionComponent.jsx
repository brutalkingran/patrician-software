const QuestionComponent = ({ onAnswer, question, Qname, isDark }) => {
  const options = [-2, -1, 0, 1, 2]

  return (
    <section className="w-screen flex-shrink-0 flex justify-center items-center even:-skew-y-1 odd:skew-y-1 odd:bg-slate-700 even:bg-slate-300 even:text-ps-blue ">
      <div className="max-w-xl w-full px-2 rounded py-6">
        <h2 className="text-xl mb-6 italic opacity-70 text-center md:text-3xl">"{question}"</h2>

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
                    border-2
                    hover:scale-110
                    flex items-center justify-center
                    ${isDark ? 'border-ps-white/30 hover:border-ps-white/60 peer-checked:bg-[url("/textures/check.svg")]' : 'border-ps-blue/90 peer-checked:bg-[url("/textures/check_black.svg")]'}
                    transition-all duration-200
                    peer-checked:scale-104
                    peer-checked:border-ps-accent
                    peer-checked:ring-3
                    peer-checked:ring-ps-accent/40
                    peer-checked:bg-size-[auto_${size}px]
                    peer-checked:bg-no-repeat
                    group
                  `}
                />
              </label>
            )
          })}
        </div>

        <div className="flex justify-between text-sm opacity-70 md:text-2xl">
          <span className={`${isDark ? 'text-red-400' : 'text-red-800'}`}>En desacuerdo</span>
          <span className={`${isDark ? 'text-green-400' : 'text-green-800'}`}>De acuerdo</span>
        </div>
      </div>
    </section>
  )
}

export default QuestionComponent;
