import { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Menu, X, ShoppingCart, MapPin, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1e293b] py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="text-secondary-foreground/70">USD</span>
            <div className="hidden sm:flex items-center gap-2 text-secondary-foreground/70">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-secondary-foreground/70">
            <MapPin className="w-4 h-4 text-[#f59e0b]" />
            <span className="hidden sm:inline">New York, NY 10001</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#ffffff]/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-[#3b82f6] p-2 rounded-lg">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-yellow-300">
                You<span className="text-primary">link</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-primary font-medium transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="relative bg-amber-300"
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>

              <Button className="hidden md:flex bg-[#3b82f6] hover:bg-[#3b82f6]/90">
                Get Started
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 pb-4 border-t border-border pt-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-[#ffffff]/80 hover:text-primary font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4 bg-[#3b82f6] hover:bg-[#3b82f6]/90">
                Get Started
              </Button>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
