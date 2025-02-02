import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-xbox-black to-gray-900 font-segoe">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          404
        </h1>
        {/* Message */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">
          Oops! A página que você procura não foi encontrada.
        </p>
        {/* Return Home Button */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block bg-gradient-to-r from-green-500 to-blue-500 hover:bg-opacity-90 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:shadow-lg"
        >
          Voltar para a Página Inicial
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
