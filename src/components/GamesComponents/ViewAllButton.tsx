import { motion } from "framer-motion";

export const ViewAllButton = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="text-center mt-12"
    >
      <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-opacity-90 text-white px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
        Ver todos os jogos
      </button>
    </motion.div>
  );
};
