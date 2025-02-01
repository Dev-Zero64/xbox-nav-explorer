import Navbar from "../components/Navbar";
import { featuredGames } from "@/lib/featuredGames";
import { benefits } from "@/lib/benefits";
import { motion } from "framer-motion";

const Gamepass = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-xbox-black to-gray-900 font-segoe text-white">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Hero Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Xbox Game Pass
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Acesso ilimitado a mais de 100 jogos de alta qualidade para console
            e PC. Jogue novos jogos no dia do lançamento.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-opacity-90 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Assine Agora
          </button>
        </motion.div>

        {/* Featured Games Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-20"
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            Jogos em Destaque
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredGames.map((game, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={game.img}
                  alt={game.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    {game.title}
                  </h3>
                  <span className="bg-xbox-green/20 text-xbox-green px-3 py-1 rounded-full text-sm">
                    {game.genre}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
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

        {/* CTA Section */}
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
      </motion.div>
    </div>
  );
};

export default Gamepass;
