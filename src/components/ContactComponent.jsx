import HCaptcha from '@hcaptcha/react-hcaptcha'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const ContactComponent = () => {

  const [captchaToken, setCaptchaToken] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const captchaRef = useRef(null)

  const onSubmit = (data) => {
    console.log(data)
  }

  const onHCaptchaChange = (token) => {
    setCaptchaToken(token)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ repeat: true, amount: 0.15 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-screen left-1/2 -translate-x-1/2 mt-10 pb-16 bg-transparent"
    >

      <div className="relative z-20 max-w-4xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* COLUMNA IZQUIERDA - FORMULARIO */}

          <div className="w-full flex flex-col items-center lg:items-start">

            <h1
              className="text-xl md:text-2xl uppercase tracking-wide text-white mb-6 text-center lg:text-left w-full"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                fontWeight: '700'
              }}
            >
              Contactate con nosotros
            </h1>

            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full max-w-sm mx-auto lg:mx-0 bg-[#0d1e3d]/80 border-4 border-white p-6 shadow-2xl rounded-none transition-all duration-300 hover:border-white"
            >

              {/* NOMBRE */}

              <div className="flex flex-col gap-1">

                <input
                  type="text"
                  placeholder="Tu nombre"
                  {...register("Name", {
                    required: true,
                    maxLength: 50
                  })}
                  className="w-full bg-white rounded-none py-2.5 px-4 text-xs text-[#0d1e3d] border-4 border-white outline-none focus:border-[#0d1e3d] transition-colors"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif'
                  }}
                />

                {errors.Name && (
                  <span
                    className="text-red-400 text-xs px-1"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif'
                    }}
                  >
                    Campo requerido
                  </span>
                )}

              </div>

              {/* TELÉFONO */}

              <div className="flex flex-col gap-1">

                <input
                  type="tel"
                  placeholder="Tu número de teléfono"
                  {...register("MobileNumber", {
                    required: true,
                    minLength: 6,
                    maxLength: 15
                  })}
                  className="w-full bg-white rounded-none py-2.5 px-4 text-xs text-[#0d1e3d] border-4 border-white outline-none focus:border-[#0d1e3d] transition-colors"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif'
                  }}
                />

                {errors.MobileNumber && (
                  <span
                    className="text-red-400 text-xs px-1"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif'
                    }}
                  >
                    Teléfono inválido
                  </span>
                )}

              </div>

              {/* EMAIL */}

              <div className="flex flex-col gap-1">

                <input
                  type="email"
                  placeholder="Tu e-Mail"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                  })}
                  className="w-full bg-white rounded-none py-2.5 px-4 text-xs text-[#0d1e3d] border-4 border-white outline-none focus:border-[#0d1e3d] transition-colors"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif'
                  }}
                />

                {errors.email && (
                  <span
                    className="text-red-400 text-xs px-1"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif'
                    }}
                  >
                    Email inválido
                  </span>
                )}

              </div>

              {/* MENSAJE */}

              <div className="flex flex-col gap-1">

                <textarea
                  placeholder="Tu mensaje"
                  {...register("Message", {
                    required: true
                  })}
                  className="w-full bg-white rounded-none text-xs text-[#0d1e3d] py-3 px-4 border-4 border-white outline-none resize-none focus:border-[#0d1e3d] transition-colors min-h-[100px]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif'
                  }}
                />

                {errors.Message && (
                  <span
                    className="text-red-400 text-xs px-1"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif'
                    }}
                  >
                    Mensaje requerido
                  </span>
                )}

              </div>

              {/* HCAPTCHA */}

              <div className="flex justify-center w-full my-1 overflow-hidden scale-[0.85]">

                <HCaptcha
                  sitekey="TU_SITE_KEY_REAL_AQUI"
                  ref={captchaRef}
                  reCaptchaCompat={false}
                  onVerify={onHCaptchaChange}
                  languageOverride="es"
                  onExpire={() => setCaptchaToken("")}
                />

              </div>

            </form>

          </div>


          {/* COLUMNA DERECHA - REDES SOCIALES */}

          <div className="w-full flex flex-col items-center lg:items-start lg:pt-0 justify-start h-full">

            <h2
              className="text-xl md:text-2xl uppercase tracking-wide text-white mb-6 text-center lg:text-left w-full"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                fontWeight: '400'
              }}
            >
              SEGUINOS
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-5 w-full">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-none bg-white flex items-center justify-center text-[#0d1e3d] border-4 border-white hover:bg-[#0d1e3d] hover:text-white hover:border-white transition-all duration-300 hover:scale-110 shadow-md"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-none bg-white flex items-center justify-center text-[#0d1e3d] border-4 border-white hover:bg-[#0d1e3d] hover:text-white hover:border-white transition-all duration-300 hover:scale-110 shadow-md"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-none bg-white flex items-center justify-center text-[#0d1e3d] border-4 border-white hover:bg-[#0d1e3d] hover:text-white hover:border-white transition-all duration-300 hover:scale-110 shadow-md"
              >
                <FaWhatsapp size={20} />
              </a>

            </div>

          </div>

        </div>


        {/* SECCIÓN COMPLETA - BOTÓN */}

        <div className="w-full mt-14">

          <button
            type="submit"
            form="contact-form"
            className="relative group w-full py-5 px-4 bg-[#0d1e3d]/80 hover:bg-white border-4 border-white text-white hover:text-[#0d1e3d] rounded-none shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01] flex flex-col items-center justify-center gap-1"
          >

            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-0" />

            <span
              className="relative z-10 text-lg md:text-xl text-center leading-tight"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                fontWeight: '400',
                letterSpacing: '1px'
              }}
            >
              ÚNETE A NUESTRO PROYECTO
            </span>

            <span
              className="relative z-10 text-xs text-center opacity-90 group-hover:opacity-100"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                fontWeight: '400',
                letterSpacing: '1px'
              }}
            >
              SUMATE HOY Y CONSTRUYAMOS EL FUTURO JUNTOS
            </span>

          </button>

        </div>

      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

    </motion.section>

  )

}

export default ContactComponent