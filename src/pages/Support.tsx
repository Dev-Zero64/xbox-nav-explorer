import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Support = () => {
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
          Suporte Xbox
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl text-center mb-8 text-gray-300"
        >
          Encontre ajuda e recursos para todas as suas necessidades Xbox
        </motion.p>

        {/* Support Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {/* Card 1: Suporte ao Console */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl"
          >
            <img
              src="https://cms-assets.xboxservices.com/assets/34/4d/344d0e61-f7d2-475f-9e88-2f1bbedb3d5f.png?n=HeroAndImageCard-large-l-794x447-16x9-01.png"
              alt="Suporte ao Console"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Suporte ao Console
            </h3>
            <p className="text-gray-300">
              Solução de problemas e guias para seu console Xbox
            </p>
          </motion.div>

          {/* Card 2: Ajuda com Acessórios */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl"
          >
            <img
              src="https://assets.xboxservices.com/assets/1d/e9/1de988c2-f32f-4434-a541-f9a4b353ee78.jpg?n=Accessories-Hub_Content-Placement-0_2020-Controller-White_788x444.jpg"
              alt="Ajuda com Acessórios"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Ajuda com Acessórios
            </h3>
            <p className="text-gray-300">
              Suporte para controles e outros acessórios Xbox
            </p>
          </motion.div>

          {/* Card 3: Game Pass e Conta */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl"
          >
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XGP-CP-Game-Pass-Logo.png?wid=834&hei=470&fit=crop"
              alt="Game Pass e Conta"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Game Pass e Conta
            </h3>
            <p className="text-gray-300">
              Ajuda com sua conta Xbox e serviços Game Pass
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Support Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-opacity-90 text-white px-8 py-3 rounded-md transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contatar Suporte
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Support; 