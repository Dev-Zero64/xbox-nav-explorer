import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Benefits } from "@/components/GamepassComponents/Benefits";
import { FeaturedGames } from "@/components/GamepassComponents/FeaturedGames";
import { CTASection } from "@/components/GamepassComponents/CTASection";

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
        <FeaturedGames />
        <Benefits />
        <CTASection />
      </motion.div>
    </div>
  );
};

export default Gamepass;
