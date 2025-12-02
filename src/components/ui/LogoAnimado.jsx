import logo_text from "/logo_text.png";
import logo_laurel from "/logo_laurel.png";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

const LogoAnimado = () => {
  const textControls = useAnimation();
  const laurelControls = useAnimation();

  useEffect(() => {
    const runAnimations = async () => {
      // 1️⃣ Primero animamos el texto
      await textControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 }
      });

      // 2️⃣ Cuando termina, arranca el laurel
      laurelControls.start({
        opacity: 1,
        scale: [0.2, 1],
        transition: { duration: 1, ease: "easeIn" }
      });
    };

    runAnimations();
  }, []);

  return (
    <div className="grid place-items-center md:scale-125 md:mb-4">

      {/* LOGO TEXTO */}
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        animate={textControls}
        className="col-start-1 row-start-1 md:w-[350px]"
        src={logo_text}
        draggable="false"
        alt="Logo Texto"
      />

      {/* LOGO LAUREL */}
      <motion.img
        initial={{ opacity: 0, scale: 0.2 }}
        animate={laurelControls}
        className="col-start-1 row-start-1 md:w-[350px]"
        src={logo_laurel}
        draggable="false"
        alt="Logo Laurel"
      />

    </div>
  );
};

export default LogoAnimado;