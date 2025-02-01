import Navbar from "../components/Navbar";
import { accessories } from "@/lib/acessories";
import { consoles } from "@/lib/consoles";
import { motion } from "framer-motion";

const Devices = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Dispositivos Xbox
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descubra a nova geração de consoles, controles premium e acessórios
            inteligentes.
          </p>
        </motion.div>

        {/* Consoles Section */}
        <section className="mb-28">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            Consoles
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {consoles.map((console, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 hover:bg-opacity-90 shadow-lg hover:shadow-xl"
              >
                <div className="overflow-hidden rounded-lg mb-6">
                  <img
                    src={console.img}
                    alt={console.name}
                    className="w-full h-64 object-contain transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  {console.name}
                </h3>
                <div className="mb-4">
                  {console.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center mb-2 text-gray-400"
                    >
                      <span className="text-xbox-green mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-xbox-green">
                    {console.price}
                  </span>
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-opacity-90 text-black px-6 py-3 rounded-full transition-all duration-300">
                    Comprar agora
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Accessories Section */}
        <section className="mb-28">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            Acessórios
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {accessories.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 hover:bg-opacity-90 shadow-lg hover:shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-contain mb-6 transform group-hover:scale-110 transition duration-300"
                />
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-xbox-green">{item.price}</span>

                  <div className="right-4 bg-xbox-green/20 text-xbox-green px-3 py-1 rounded-full text-sm">
                    {item.type}
                  </div>

                  <button className="text-white hover:text-xbox-green transition duration-300">
                    Saiba mais →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Special Editions Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="bg-gradient-to-r from-xbox-dark-gray to-xbox-black rounded-xl p-12 mb-16 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
              >
                Edições Especiais
              </motion.h2>
              <p className="text-gray-400 mb-6">
                Descubra consoles e controles com designs exclusivos de seus
                jogos favoritos.
              </p>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-opacity-90 text-black px-8 py-4 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-lg">
                Ver coleções
              </button>
            </div>
            <div className="flex-1">
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
                src="/special.jpg"
                alt="Special Editions"
                className="rounded-xl transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-12 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Não sabe por onde começar?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Nossos especialistas podem ajudar você a encontrar o dispositivo
            perfeito para suas necessidades.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:bg-opacity-90 text-black px-8 py-4 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-lg">
              Falar com especialista
            </button>
            <button className="border border-gray-600 hover:border-xbox-green text-white px-8 py-4 rounded-full font-semibold transition duration-300">
              Comparar dispositivos
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Devices;
