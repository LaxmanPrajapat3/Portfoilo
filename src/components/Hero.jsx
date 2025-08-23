import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 to-purple-800 relative overflow-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </motion.div>
      <div className="text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          John Doe
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typewriter texts={["Full-Stack Developer", "Creative Thinker", "Problem Solver"]} />
        </motion.p>
        <motion.button
          onClick={() => scrollToSection("projects")}
          className="bg-yellow-500 text-purple-950 px-8 py-3 rounded-full"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Explore My Work
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;
