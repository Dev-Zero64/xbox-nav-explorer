import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { navItems } from "@/lib/navItems";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const cartItemCount = 3; // Exemplo de quantidade de itens no carrinho

  return (
    <nav className="bg-xbox-black text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex items-center justify-between">
          {/* Logo and Main Nav */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Xbox_logo_2012_cropped.svg/777px-Xbox_logo_2012_cropped.svg.png"
                alt="Xbox"
                className="h-6"
              />
              <span className="font-bold text-2xl">XBOX</span>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-xbox-green transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Right Side Icons */}
          <div className="flex items-center space-x-6 relative">
            {/* Search Button */}
            <button
              className="hover:text-xbox-green transition-colors duration-200"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>
            {/* Search Bar Animation */}
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 mt-4 bg-gray-800 p-4 rounded-lg shadow-lg"
              >
                <input
                  type="text"
                  placeholder="Pesquisar jogos ou acessórios..."
                  className="w-64 bg-transparent border-b border-gray-400 focus:outline-none text-white placeholder-gray-400"
                />
              </motion.div>
            )}
            {/* Cart Button */}
            <Link to="/devices" className="relative hover:text-xbox-green transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {/* Profile Button */}
            <div className="relative">
              <button
                className="hover:text-xbox-green transition-colors duration-200"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <User className="h-5 w-5" />
              </button>
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full right-0 mt-2 bg-gray-800 p-4 rounded-lg shadow-lg w-48"
                >
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/"
                        className="block hover:text-xbox-green transition-colors duration-200"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Meu Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block hover:text-xbox-green transition-colors duration-200"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Meus Pedidos
                      </Link>
                    </li>
                    <li>
                      <button
                        className="block hover:text-red-500 transition-colors duration-200 w-full text-left"
                        onClick={() => {
                          console.log("Logout realizado");
                          setIsProfileOpen(false);
                        }}
                      >
                        Sair
                      </button>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block hover:text-xbox-green transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;