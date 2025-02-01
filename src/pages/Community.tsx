import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-xbox-black to-gray-900 font-segoe">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 py-16 text-white mt-10"
      >
        {/* Header Section */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500"
        >
          Comunidade Xbox
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl text-center mb-8 text-gray-300"
        >
          Junte-se à comunidade Xbox e conecte-se com jogadores de todo o mundo.
        </motion.p>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid md:grid-cols-2 gap-12 mt-12"
        >
          {/* Feature 1: Eventos e Torneios */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center space-y-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl"
          >
            <img
              src="https://assets.xboxservices.com/assets/fa/ed/faed284a-7b32-434d-b0fa-a2f635376b5c.jpg?n=G4E-Hub_Content-Placement-0_Community-Standards_788x444.jpg"
              alt="Comunidade Xbox"
              className="mx-auto max-w-[400px] w-full h-[300px] object-contain rounded-lg"
            />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
              Eventos e Torneios
            </h2>
            <p className="text-xl text-gray-300">
              Participe de eventos e torneios exclusivos da comunidade Xbox.
            </p>
          </motion.div>

          {/* Feature 2: Fóruns e Grupos */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center space-y-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl"
          >
            <img
              src="https://cms-assets.xboxservices.com/assets/ba/70/ba70ff27-234a-40c3-824c-f63ab19fbf05.jpg?n=G4E-Hub_Feature-768_Inclusive_800x1000.jpg"
              alt="Comunidade Xbox"
              className="mx-auto max-w-[400px] w-full h-[300px] object-contain rounded-lg"
            />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
              Fóruns e Grupos
            </h2>
            <p className="text-xl text-gray-300">
              Conecte-se com outros jogadores em fóruns e grupos dedicados.
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Section: Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-10 shadow-lg"
        >
          <h2 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
            Depoimentos da Comunidade
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center space-y-4 p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg"
            >
              <p className="text-lg text-gray-300">
                "Adoro participar dos torneios da comunidade Xbox! É uma ótima
                maneira de se conectar com outros jogadores."
              </p>
              <p className="text-sm text-gray-400">— João Silva</p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center space-y-4 p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg"
            >
              <p className="text-lg text-gray-300">
                "Os fóruns são incríveis! Sempre encontro dicas e truques úteis
                para os meus jogos favoritos."
              </p>
              <p className="text-sm text-gray-400">— Maria Oliveira</p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center space-y-4 p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg"
            >
              <p className="text-lg text-gray-300">
                "A comunidade Xbox é como uma segunda casa para mim. Sempre me
                sinto bem-vindo!"
              </p>
              <p className="text-sm text-gray-400">— Pedro Almeida</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Community;
