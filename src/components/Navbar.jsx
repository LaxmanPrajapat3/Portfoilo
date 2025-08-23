import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className="sticky top-0 bg-purple-900 bg-opacity-95 z-50 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div className="text-2xl font-bold tracking-tight" whileHover={{ scale: 1.1 }}>
          Portfolio
        </motion.div>
        <div className="hidden md:flex space-x-6">
          {["home", "about", "projects", "skills", "contact"].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:text-yellow-400"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </motion.button>
        </div>
        <motion.button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-purple-900 p-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {["home", "about", "projects", "skills", "contact"].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block py-2 hover:text-yellow-400"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="block py-2 hover:text-yellow-400"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
