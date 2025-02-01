import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Games = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-xbox-black to-gray-900 font-segoe text-white">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 py-16 mt-10"
      >
        {/* Header Section */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Jogos Xbox
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl text-center mb-8 text-gray-300"
        >
          Descubra os melhores jogos disponíveis para Xbox
        </motion.p>

        {/* Featured Games Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {/* Game Card 1: Forza Horizon 5 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl"
          >
            <img
              src="https://store-images.s-microsoft.com/image/apps.33953.13806078025361171.9723cf5e-1e29-4d9d-ad0a-cc37a95bb75d.afabb748-2c30-4a7e-8072-2809a222192d?q=90&w=336&h=200"
              alt="Forza Horizon 5"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Forza Horizon 5
            </h3>
            <p className="text-gray-300">Explore um mundo aberto vibrante no México</p>
          </motion.div>

          {/* Game Card 2: Halo Infinite */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl"
          >
            <img
              src="https://store-images.s-microsoft.com/image/apps.50670.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.d205e025-5444-4eb1-ae46-571ae6895928?q=90&w=336&h=200"
              alt="Halo Infinite"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Halo Infinite
            </h3>
            <p className="text-gray-300">A nova aventura épica do Master Chief</p>
          </motion.div>

          {/* Game Card 3: Starfield */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl"
          >
            <img
              src="https://store-images.s-microsoft.com/image/apps.6948.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.89a9232c-6540-405d-8d75-db5f91e3d63b?q=90&w=320&h=180"
              alt="Starfield"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Starfield
            </h3>
            <p className="text-gray-300">Explore o espaço nesta nova aventura épica</p>
          </motion.div>
        </motion.div>

        {/* View All Button */}
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
      </motion.div>
    </div>
  );
};

export default Games;