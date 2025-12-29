import { motion } from "motion/react"

import logo_1 from "/logos/cocacola_logo.png"
import logo_2 from "/logos/netflix_logo.png"
import logo_3 from "/logos/pepsi_logo.png"

const logos = [logo_1, logo_2, logo_3]

const ChosenUsComponent = () => {
  return (
    <section className="mt-20 relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <h2 className="font-extralight text-center mb-3 italic text-[1.4rem]">
        ¿Te vas a sumar a la Élite? Tu competencia <span className="underline">ya nos eligió</span>
      </h2>

      <div className="flex
          w-max
          items-center
          gap-16
          grayscale
          opacity-80
      ">
        <motion.div
          className="flex items-center gap-16 grayscale opacity-80"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-20 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ChosenUsComponent
