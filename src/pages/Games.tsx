import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { ViewAllButton } from "@/components/GamesComponents/ViewAllButton";
import { FeaturedGames } from "@/components/GamesComponents/FeaturedGames";

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
        <FeaturedGames />
        <ViewAllButton />
      </motion.div>
    </div>
  );
};

export default Games;
