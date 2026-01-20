import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactComponent = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  const captchaRef = useRef(null);

  const onHCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <div className='flex flex-col items-center justify-center mb-20 border-60 md:w-1/2' id="borderimg3">
      <h1 className='mb-8 text-3xl font-serif'>Contactate con Nosotros</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-9 md:w-3/6 w-full required:bg-ps-blue text-ps-white rounded md:bg-gray-800 md:p-5 p-1' >
        <input type="text" placeholder="Tu nombre" {...register("Name", { required: true, max: 50, min: 10, maxLength: 49 })} className='bg-ps-white rounded py-2 text-ps-blue px-2'/>
        <input type="number" placeholder="Tu número de teléfono" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} className='bg-ps-white rounded text-ps-blue py-2 px-2' />
        <input type="email" placeholder="Tu e-Mail" {...register("email", { required: true, max: 12, min: 12, pattern: /[A-Za-z]{3}/i })} className='bg-ps-white rounded text-ps-blue py-2 px-2' />
        <textarea placeholder='Tu mensaje' {...register} className='bg-ps-white rounded text-ps-blue py-2 px-2'/>

        <HCaptcha
          sitekey=""
          ref={captchaRef}
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
          languageOverride={'es'}
          onExpire={() => setCaptchaToken("")}
        />

        <input type="submit" className='bg-red-400 rounded p-4 cursor-pointer hover:bg-red-600'/>
      </form>
    </div>
  );
}

export default ContactComponent;