import { motion } from "framer-motion";
import { featuredGames } from "@/lib/featuredGames";

export const FeaturedGames = () => {
  return (
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
  );
};
