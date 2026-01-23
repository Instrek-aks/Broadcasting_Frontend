import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Menu, X, Home, Users, Zap, Mail, Phone } from "lucide-react";
import { Button } from "../components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "Who We Are", href: "#about", icon: Users },
    { name: "Solutions", href: "#solutions", icon: Zap },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0f172a]/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-[#63c1b3]/20 p-2 rounded-lg backdrop-blur-sm border border-[#63c1b3]/30 group-hover:bg-[#63c1b3]/30 transition-colors">
              <Activity className="w-6 h-6 text-[#63c1b3]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase leading-none">
                Broadcast
              </span>
              <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-[#63c1b3] uppercase leading-none mt-1">
                Digitally
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary font-medium transition-colors relative group text-sm uppercase tracking-wide"
                whileHover={{ y: -2 }}
              >

                <div className="flex items-center gap-2">
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </div>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex items-center gap-2 bg-[#63c1b3] hover:bg-[#52a699] text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all">
              <Phone className="w-4 h-4" />
              Get Consultation
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-[#0f172a] border-t border-white/10 mt-4 shadow-lg rounded-b-xl"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-wide text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    {link.name}
                  </a>
                ))}
                <div className="px-4">
                  <Button className="w-full flex items-center justify-center gap-2 bg-[#63c1b3] hover:bg-[#52a699] text-white">
                    <Phone className="w-4 h-4" />
                    Get Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
