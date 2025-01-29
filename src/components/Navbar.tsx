import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Game Pass", href: "/game-pass" },
  { name: "Jogos", href: "/games" },
  { name: "Dispositivos", href: "/devices" },
  { name: "Jogar", href: "/play" },
  { name: "Comunidade", href: "/community" },
  { name: "Suporte", href: "/support" },
  { name: "Meu Xbox", href: "/my-xbox" },
  { name: "Mais", href: "/more" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-xbox-black text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Main Nav */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="/lovable-uploads/7e779d2f-3cb0-4210-ac32-a373a9c028f3.png"
                alt="Microsoft"
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
          <div className="flex items-center space-x-6">
            <button className="hover:text-xbox-green transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button className="hover:text-xbox-green transition-colors duration-200">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="hover:text-xbox-green transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
            
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