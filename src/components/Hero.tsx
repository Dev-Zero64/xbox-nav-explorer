import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-xbox-black to-gray-900 text-white min-h-screen pt-20 font-segoe">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Title Section */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500"
        >
          CONSOLES XBOX
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mb-16"
        >
          <Link
            to="/consoles"
            className="inline-block bg-xbox-green hover:bg-opacity-90 text-white px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            COMPRE CONSOLES
          </Link>
        </motion.div>

        {/* Consoles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid md:grid-cols-2 gap-12 mt-12"
        >
          {/* Xbox Series X */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center space-y-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl"
          >
            <img
              src="/seriesx.png"
              alt="Xbox Series X"
              className="mx-auto max-w-[400px] w-full h-[300px] object-contain rounded-lg"
            />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
              XBOX SERIES X
            </h2>
            <p className="text-xl text-gray-300">
              O Xbox mais rápido e potente de todos os tempos.
            </p>
            <Link
              to="/consoles/series-x"
              className="inline-block text-xbox-green hover:underline"
            >
              SAIBA MAIS
            </Link>
          </motion.div>

          {/* Xbox Series S */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center space-y-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl"
          >
            <img
              src="/seriess.png"
              alt="Xbox Series S"
              className="mx-auto max-w-[400px] w-full h-[300px] object-contain rounded-lg"
            />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
              XBOX SERIES S
            </h2>
            <p className="text-xl text-gray-300">O melhor valor em jogos.</p>
            <Link
              to="/consoles/series-s"
              className="inline-block text-xbox-green hover:underline"
            >
              SAIBA MAIS
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;