import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/5493834091942?text=Hola!%20Quisiera%20hacer%20una%20consulta.";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-90 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloatingButton;
