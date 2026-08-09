import HCaptcha from '@hcaptcha/react-hcaptcha' 
import { useRef, useState } from 'react' 
import { useForm } from 'react-hook-form' 
import { motion } from 'framer-motion' 
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa' 

const ContactComponent = () => { 
  const [captchaToken, setCaptchaToken] = useState("") 
  const { register, handleSubmit, formState: { errors } } = useForm() 
  const captchaRef = useRef(null) 

  const onSubmit = (data) => { 
    console.log(data) 
  } 

  const onHCaptchaChange = (token) => { 
    setCaptchaToken(token) 
  } 

  return ( 
    /* ANIMACIÓN EN SCROLL: Entrada suave desde abajo de 1 segundo que se repite dinámicamente con dynamic viewport control */
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ repeat: true, amount: 0.15 }} 
      transition={{ duration: 1, ease: "easeOut" }} 
      className="relative w-screen left-1/2 -translate-x-1/2 mt-10 pb-16 bg-transparent" 
    > 
      {/* CONTENEDOR PRINCIPAL INTERNO */} 
      <div className="relative z-20 max-w-4xl mx-auto px-6"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start"> 
          
          {/* ================================================= */} 
          {/* COLUMNA IZQUIERDA - CONTACTO RECUADRADO */} 
          {/* ================================================= */} 
          <div className="w-full flex flex-col items-center lg:items-start"> 
            <h2 className="text-2xl md:text-3xl font-sans font-black uppercase tracking-tighter text-white mb-6 text-center lg:text-left w-full"> 
              Contactate con Nosotros 
            </h2> 

            {/* FORMULARIO RECUADRADO CON EFECTOS */} 
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="flex flex-col gap-4 w-full max-w-sm mx-auto lg:mx-0 bg-[#0d1e3d]/70 border border-white/20 p-6 shadow-2xl rounded-2xl transition-all duration-300 hover:border-white/40" 
            > 
              {/* NOMBRE */} 
              <div className="flex flex-col gap-1"> 
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  {...register("Name", { required: true, max: 50, min: 10, maxLength: 49 })} 
                  className="w-full bg-white rounded-full py-2.5 px-4 text-sm text-[#0d1e3d] font-medium border-none outline-none focus:ring-2 focus:ring-white shadow-inner" 
                /> 
                {errors.Name && ( 
                  <span className="text-red-400 text-xs px-2 font-semibold"> Campo requerido </span> 
                )} 
              </div> 

              {/* TELÉFONO */} 
              <div className="flex flex-col gap-1"> 
                <input 
                  type="number" 
                  placeholder="Tu número de teléfono" 
                  {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} 
                  className="w-full bg-white rounded-full py-2.5 px-4 text-sm text-[#0d1e3d] font-medium border-none outline-none focus:ring-2 focus:ring-white shadow-inner" 
                /> 
                {errors["Mobile number"] && ( 
                  <span className="text-red-400 text-xs px-2"> Teléfono inválido </span> 
                )} 
              </div> 

              {/* EMAIL */} 
              <div className="flex flex-col gap-1"> 
                <input 
                  type="email" 
                  placeholder="Tu e-Mail" 
                  {...register("email", { required: true, max: 12, min: 12, pattern: /[A-Za-z]{3}/i })} 
                  className="w-full bg-white rounded-full py-2.5 px-4 text-sm text-[#0d1e3d] font-medium border-none outline-none focus:ring-2 focus:ring-white shadow-inner" 
                /> 
                {errors.email && ( 
                  <span className="text-red-400 text-xs px-2"> Email requerido </span> 
                )} 
              </div> 

              {/* MENSAJE */} 
              <div className="flex flex-col gap-1"> 
                <textarea 
                  placeholder="Tu mensaje" 
                  {...register("Message", { required: true })} 
                  className="w-full bg-white rounded-xl text-sm text-[#0d1e3d] font-medium py-3 px-4 border-none outline-none resize-none focus:ring-2 focus:ring-white shadow-inner min-h-[90px] max-h-[120px]" 
                /> 
                {errors.Message && ( 
                  <span className="text-red-400 text-xs px-2"> Mensaje requerido </span> 
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

              {/* BOTÓN ENVIAR CON DOBLE MARCO Y DESTELLO BRILLANTE (SHIMMER) */} 
              <button 
                type="submit" 
                className="relative group w-full h-11 bg-white hover:bg-[#0d1e3d] border-2 border-white text-[#0d1e3d] hover:text-white font-sans font-black text-xs uppercase tracking-wide rounded-full shadow-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Capa de destello metálico continuo en hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none z-0" />
                
                <span className="relative z-10 flex items-center justify-center w-full h-full">
                  ENVIAR MENSAJE
                </span>
              </button>
            </form> 
          </div> 

          {/* ================================================= */} 
          {/* COLUMNA DERECHA - SEGUINOS ALINEADO ARRIBA */} 
          {/* ================================================= */} 
          <div className="w-full flex flex-col items-center lg:items-start lg:pt-0 justify-start h-full"> 
            <h2 className="text-2xl md:text-3xl font-sans font-black uppercase tracking-tighter text-white mb-6 text-center lg:text-left w-full"> 
              SEGUINOS 
            </h2> 

            <div className="flex items-center justify-center lg:justify-start gap-5 w-full"> 
              {/* FACEBOOK */} 
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0d1e3d] border-2 border-white hover:bg-[#0d1e3d] hover:text-white hover:border-white transition-all duration-300 hover:scale-110 shadow-md" 
              > 
                <FaFacebookF size={22} /> 
              </a> 

              {/* INSTAGRAM */} 
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0d1e3d] border-2 border-white hover:bg-[#0d1e3d] hover:text-white hover:border-white transition-all duration-300 hover:scale-110 shadow-md" 
              > 
                <FaInstagram size={23} /> 
              </a> 

              {/* WHATSAPP */} 
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0d1e3d] border-2 border-white hover:bg-[#0d1e3d] hover:text-white hover:border-white transition-all duration-300 hover:scale-110 shadow-md" 
              > 
                <FaWhatsapp size={23} /> 
              </a> 
            </div> 
          </div> 

        </div> 
      </div> 

      {/* Inyección de la animación restante para el destello del botón */}
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

export default ContactComponent;
