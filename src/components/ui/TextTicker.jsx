import { motion } from "framer-motion";

const TextTicker = ({ messages = [] }) => {
  const duplicatedMessages = [...messages, ...messages];

  return (
    <div className="w-full mb-10">
      {/* Vista Móvil - Marquee */}
      <div className="block lg:hidden overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-2">
        <motion.div
          className="flex w-max gap-12 items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {duplicatedMessages.map((texto, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0">
              <p className="text-gray-600 text-lg md:text-xl font-medium tracking-wide whitespace-nowrap">
                {texto}
              </p>
              <span className="w-2 h-2 rounded-full bg-blue-600 block shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Vista Escritorio */}
      <div className="hidden lg:flex flex-col gap-4 text-left w-full select-none cursor-default">
        {messages.map((texto, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-4 border-l-4 border-blue-600 pl-4 py-1 transition-all duration-300 hover:border-gray-950 hover:translate-x-2"
          >
            <p className="text-gray-700 text-lg font-medium tracking-wide">
              {texto}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TextTicker;