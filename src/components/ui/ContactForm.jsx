import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ ...data, captchaToken });
  };

  const onHCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col gap-5 w-full max-w-sm mx-auto lg:mx-0 bg-ps-cream p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-2 border-ps-blue/20 transition-all duration-300 before:content-[''] before:absolute before:inset-2 before:border before:border-ps-blue/20 before:pointer-events-none mt-5"
    >
      {/* NOMBRE */}
      <div className="flex flex-col gap-1 relative z-10">
        <input
          type="text"
          placeholder="Tu nombre"
          {...register("Name", { required: true, maxLength: 50 })}
          className="w-full bg-transparent py-2 px-1 text-sm text-ps-blue border-b-2 border-ps-blue/30 outline-none focus:border-ps-blue transition-colors font-serif placeholder:text-ps-blue/50 placeholder:italic"
        />
        {errors.Name && (
          <span className="text-red-700 text-xs px-1 font-serif italic">
            Campo requerido
          </span>
        )}
      </div>

      {/* TELÉFONO */}
      <div className="flex flex-col gap-1 relative z-10">
        <input
          type="tel"
          placeholder="Tu número de teléfono"
          {...register("MobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 15,
          })}
          className="w-full bg-transparent py-2 px-1 text-sm text-ps-blue border-b-2 border-ps-blue/30 outline-none focus:border-ps-blue transition-colors font-serif placeholder:text-ps-blue/50 placeholder:italic"
        />
        {errors.MobileNumber && (
          <span className="text-red-700 text-xs px-1 font-serif italic">
            Teléfono inválido
          </span>
        )}
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-1 relative z-10">
        <input
          type="email"
          placeholder="Tu e-Mail"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          className="w-full bg-transparent py-2 px-1 text-sm text-ps-blue border-b-2 border-ps-blue/30 outline-none focus:border-ps-blue transition-colors font-serif placeholder:text-ps-blue/50 placeholder:italic"
        />
        {errors.email && (
          <span className="text-red-700 text-xs px-1 font-serif italic">
            Email inválido
          </span>
        )}
      </div>

      {/* MENSAJE */}
      <div className="flex flex-col gap-1 relative z-10">
        <textarea
          placeholder="Tu mensaje"
          {...register("Message", { required: true })}
          className="w-full bg-transparent text-sm text-ps-blue py-2 px-1 border-b-2 border-ps-blue/30 outline-none resize-none focus:border-ps-blue transition-colors min-h-24 font-serif placeholder:text-ps-blue/50 placeholder:italic"
        />
        {errors.Message && (
          <span className="text-red-700 text-xs px-1 font-serif italic">
            Mensaje requerido
          </span>
        )}
      </div>

      {/* HCAPTCHA */}
      <div className="flex justify-center w-full mt-2 overflow-hidden scale-[0.85] relative z-10">
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
  );
};

export default ContactForm;