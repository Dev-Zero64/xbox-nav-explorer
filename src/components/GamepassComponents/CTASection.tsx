import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3 }}
      className="text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-12 mb-16 shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Comece a jogar hoje
      </h2>
      <p className="text-gray-300 mb-8 max-w-xl mx-auto">
        Assine agora por apenas R$ 29,99/mês. Cancele a qualquer momento.
      </p>
      <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-opacity-90 text-black px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
        Começar agora
      </button>
    </motion.div>
  );
};
