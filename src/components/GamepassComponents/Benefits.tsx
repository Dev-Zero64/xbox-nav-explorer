import { motion } from "framer-motion";
import { benefits } from "@/lib/benefits";

export const Benefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="py-16"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
      >
        Por que assinar?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl hover:bg-opacity-90 shadow-lg hover:shadow-xl"
          >
            <div className="text-xbox-green text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              {benefit.title}
            </h3>
            <p className="text-gray-400">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
